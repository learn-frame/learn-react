import { FC, useState, ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import DATA from './data.json'

const ConcurrentFeature: FC = () => {
  const [data, setData] = useState(DATA)

  const handleFilter = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const filteredData = DATA.filter((val) => val[0].includes(e.target.value))
    setData(filteredData)
  }

  return (
    <Box>
      <Input
        sx={{ marginBottom: 2, width: 400 }}
        onChange={(e) => handleFilter(e)}
      />

      <Paper>
        <List>
          {data.map(([a, b, c, d]) => (
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
      </Paper>
    </Box>
  )
}

export default ConcurrentFeature
