import React, { useState, useEffect } from 'react'

const CURRENCIES_API =
  'https://openexchangerates.org/api/latest.json?app_id=644c28c2a5ce4a28986c075724069501'

const styles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '12px',
  gridRowGap: '12px',
  width: '500px',
}

const Monitor = (props: any) => {
  const currency = props.currency
  return (
    <p>
      1 {currency.firstCurrency} = {currency.ratio} {currency.secondCurrency}
    </p>
  )
}

const Selector = (props: any) => {
  const currencies = props.currencies
  const currency = props.currency
  const setCurrency = props.setCurrency

  return (
    <>
      <select
        value={currency.firstCurrency}
        onChange={e =>
          setCurrency({
            firstCurrency: e.target.value,
            secondCurrency: currency.secondCurrency,
            ratio:
              currencies[currency.secondCurrency] / currencies[e.target.value],
          })
        }
      >
        {Object.keys(currencies).map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <select
        value={currency.secondCurrency}
        onChange={e =>
          setCurrency({
            firstCurrency: currency.firstCurrency,
            secondCurrency: e.target.value,
            ratio:
              currencies[e.target.value] / currencies[currency.firstCurrency],
          })
        }
      >
        {Object.keys(currencies).map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </>
  )
}

const Inputer = (props: any) => {
  const value = props.value
  const setValue = props.setValue
  const currency = props.currency

  return (
    <>
      <input
        type='text'
        placeholder='left'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input
        type='text'
        placeholder='right'
        value={value * currency.ratio}
        onChange={e => setValue(parseInt(e.target.value, 10) / currency.ratio)}
      />
    </>
  )
}

const Exchange = () => {
  const [currency, setCurrency] = useState({
    firstCurrency: 'USD',
    secondCurrency: 'EUR',
    ratio: null,
  })

  const [value, setValue] = useState(0)

  const [currencies, setCurrencies] = useState({})

  useEffect(() => {
    fetch(CURRENCIES_API).then(res => {
      res.json().then(data => {
        const result = data.rates
        setCurrencies(result)
        setCurrency({
          firstCurrency: currency.firstCurrency,
          secondCurrency: currency.secondCurrency,
          ratio: data.rates['EUR'],
        })
      })
    })
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Monitor currency={currency} />

      <div style={styles}>
        <Selector
          currencies={currencies}
          currency={currency}
          setCurrency={setCurrency}
        />

        <Inputer currency={currency} value={value} setValue={setValue} />
      </div>
    </>
  )
}

export default Exchange
