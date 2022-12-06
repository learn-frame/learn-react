import {
  FC,
  useState,
  useDeferredValue,
  ChangeEvent,
  Suspense,
  useMemo
} from 'react'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import DATA from './data.json'

const ConcurrentFeature: FC = () => {
  const [data, setData] = useState(DATA)
  const deferred = useDeferredValue(data)

  const handleFilter = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const filteredData = DATA.filter((val) => val[0].includes(e.target.value))
    setData(filteredData)
  }

  const filters = useMemo(
    () => (
      <List>
        {deferred.map(([a, b, c, d]) => (
          <ListItem key={a}>
            <ListItemText
              primary={
                <span>
                  {a}; {b}; {c}; {d}
                </span>
              }
            />
          </ListItem>
        ))}
      </List>
    ),
    [deferred]
  )

  return (
    <Box>
      <Input
        sx={{ marginBottom: 2, width: 400 }}
        onChange={(e) => handleFilter(e)}
      />
      <Paper>
        <Suspense fallback="Loading results...">{filters}</Suspense>
      </Paper>
    </Box>
  )
}

export default ConcurrentFeature
