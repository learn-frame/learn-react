import { useState, useEffect } from 'react'
import useSWR from 'swr'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import Loading from 'src/components/Loading'

interface MonotorProps {
  currency: Currency
}

interface Currency {
  firstCurrency: string
  secondCurrency: string
  ratio: number
}

interface SelectorProps extends MonotorProps {
  currencies: { [index: string]: number }
  setCurrency: ({
    firstCurrency,
    secondCurrency,
    ratio
  }: {
    firstCurrency: string
    secondCurrency: string
    ratio: number
  }) => void
}

interface InputerProps extends MonotorProps {
  value: number
  setValue: (val: number) => void
}

const Monitor = (props: MonotorProps) => {
  const currency = props.currency
  return (
    <Typography variant="h2" gutterBottom>
      1 {currency.firstCurrency} = {currency.ratio} {currency.secondCurrency}
    </Typography>
  )
}

const Selector = (props: SelectorProps) => {
  const currencies = props.currencies
  const currency = props.currency
  const setCurrency = props.setCurrency

  return (
    <>
      <Select
        value={currency.firstCurrency}
        onChange={(e) =>
          setCurrency({
            firstCurrency: e.target.value,
            secondCurrency: currency.secondCurrency,
            ratio:
              currencies[currency.secondCurrency] / currencies[e.target.value]
          })
        }
      >
        {Object.keys(currencies).map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>

      <Select
        value={currency.secondCurrency}
        onChange={(e) =>
          setCurrency({
            firstCurrency: currency.firstCurrency,
            secondCurrency: e.target.value,
            ratio:
              currencies[e.target.value] / currencies[currency.firstCurrency]
          })
        }
      >
        {Object.keys(currencies).map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

const Inputer = (props: InputerProps) => {
  const value = props.value
  const setValue = props.setValue
  const currency = props.currency

  return (
    <>
      <TextField
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <TextField
        value={value * currency.ratio}
        onChange={(e) =>
          setValue(parseInt(e.target.value, 10) / currency.ratio)
        }
      />
    </>
  )
}

const Exchange = () => {
  const [currency, setCurrency] = useState({
    firstCurrency: 'USD',
    secondCurrency: 'EUR',
    ratio: 0
  })
  const [value, setValue] = useState(1)

  const { data, error } = useSWR(
    'https://openexchangerates.org/api/latest.json?app_id=10d8e82adc6d4407a4e6f80d7f6e672c'
  )

  useEffect(() => {
    if (data?.rates) {
      setCurrency({
        firstCurrency: currency.firstCurrency,
        secondCurrency: currency.secondCurrency,
        ratio: data.rates['EUR']
      })
    }
  }, [data, currency.firstCurrency, currency.secondCurrency])

  if (!data || error) {
    return <Loading />
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <Monitor currency={currency} />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: '12px',
          gridRowGap: '12px',
          width: '500px'
        }}
      >
        <Selector
          currencies={data.rates}
          currency={currency}
          setCurrency={setCurrency}
        />

        <Inputer currency={currency} value={value} setValue={setValue} />
      </Box>
    </Box>
  )
}

export default Exchange
