import { FC, useState } from 'react'
import { v4 } from 'uuid'
import { useRecoilState, useRecoilValue } from 'recoil'
import { produce } from 'immer'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Input from '@mui/material/Input'
import Switch from '@mui/material/Switch'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import {
  todoListState,
  editTodoState,
  todoListFilterState,
  todoListStatsState,
  filteredTodoListState,
  TodoListStatus,
  TodoList,
  TodoListFilter
} from 'src/stores/todoList'

const Todo: FC = () => {
  const theme = useTheme()
  const [editTodo, setEditTodoState] = useRecoilState(editTodoState)
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const filteredTodoList = useRecoilValue(filteredTodoListState)
  const todoListStats = useRecoilValue(todoListStatsState)
  const [todoListFilter, setTodoListFilter] =
    useRecoilState(todoListFilterState)
  const [createText, setCreateText] = useState('')

  const addItem = () => {
    const newTodoList = produce(todoList, (draftState) => {
      draftState.push({
        id: v4(),
        text: createText,
        status: TodoListStatus.Uncompleted
      })
    })

    setTodoList(newTodoList)
    setCreateText('')
  }

  const editItem = (id: string) => {
    const newTodoList = produce(todoList, (draftState) => {
      const idx = draftState.findIndex((draft) => draft.id === id)
      if (idx !== -1) {
        draftState[idx] = editTodo as TodoList
      }
    })

    setTodoList(newTodoList)
    setEditTodoState(null)
  }

  const handleStatus = (id: string, status: TodoListStatus) => {
    const newTodoList = produce(todoList, (draftState) => {
      const idx = draftState.findIndex((draft) => draft.id === id)
      if (idx !== -1) {
        draftState[idx].status = status
      }
    })

    setTodoList(newTodoList)
  }

  const deleteItem = (id: string) => {
    const newTodoList = todoList.filter((draft) => draft.id !== id)

    setTodoList(newTodoList)
  }

  const rows = [
    {
      totalNum: todoListStats.totalNum,
      totalCompletedNum: todoListStats.totalCompletedNum,
      totalUncompletedNum: todoListStats.totalUncompletedNum,
      percentCompleted: todoListStats.percentCompleted
    }
  ]

  return (
    <Box>
      <FormControl
        sx={{
          width: theme.spacing(55.5),
          marginBottom: theme.spacing(4)
        }}
      >
        <InputLabel id="todo-filter-select-label">Status</InputLabel>
        <Select
          labelId="todo-filter-select-label"
          id="todo-filter-select"
          value={todoListFilter}
          label="Status"
          onChange={(e) => setTodoListFilter(e.target.value as TodoListFilter)}
        >
          <MenuItem value={TodoListFilter.ShowAll}>All</MenuItem>
          <MenuItem value={TodoListFilter.ShowAllCompleted}>
            All Completed
          </MenuItem>
          <MenuItem value={TodoListFilter.ShowAllUncompleted}>
            All Uncompleted
          </MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Input
          sx={{
            width: theme.spacing(40),
            marginRight: theme.spacing(4)
          }}
          autoFocus
          placeholder="Input..."
          value={createText}
          onChange={(e) => setCreateText(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={addItem}
          disabled={createText === ''}
        >
          Add One
        </Button>
      </Box>
      {filteredTodoList.length > 0 && (
        <Paper
          sx={{
            width: theme.spacing(55.5),
            marginTop: theme.spacing(4)
          }}
        >
          <List>
            {filteredTodoList.map((todo) => (
              <ListItem
                key={todo.id}
                secondaryAction={
                  <>
                    <IconButton
                      sx={{
                        marginRight: theme.spacing(1)
                      }}
                      edge="end"
                      aria-label="delete"
                      onClick={
                        editTodo?.id === todo.id
                          ? () => editItem(todo.id)
                          : () => deleteItem(todo.id)
                      }
                    >
                      {editTodo?.id === todo.id ? <CheckIcon /> : <DeleteIcon />}
                    </IconButton>
                    <Switch
                      checked={todo.status === TodoListStatus.Completed}
                      onChange={(e) =>
                        handleStatus(
                          todo.id,
                          e.target.checked
                            ? TodoListStatus.Completed
                            : TodoListStatus.Uncompleted
                        )
                      }
                    />
                  </>
                }
              >
                {editTodo?.id === todo.id ? (
                  <Input
                    sx={{
                      display: editTodo?.id === todo.id ? 'block' : 'none'
                    }}
                    autoFocus
                    value={editTodo?.text}
                    onChange={(e) =>
                      setEditTodoState({ ...todo, text: e.target.value })
                    }
                  />
                ) : (
                  <ListItemText
                    sx={{
                      display: editTodo?.id !== todo.id ? 'block' : 'none',
                      cursor: 'pointer'
                    }}
                    primary={
                      todo.status === TodoListStatus.Completed ? (
                        <del>{todo.text}</del>
                      ) : (
                        todo.text
                      )
                    }
                    onClick={() => setEditTodoState(todo)}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      <TableContainer component={Paper} sx={{ marginTop: theme.spacing(4) }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Total Num</TableCell>
              <TableCell align="center">Total Completed Num</TableCell>
              <TableCell align="center">Total Uncompleted Num</TableCell>
              <TableCell align="center">Percent Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{row.totalNum}</TableCell>
                <TableCell align="center">{row.totalCompletedNum}</TableCell>
                <TableCell align="center">{row.totalUncompletedNum}</TableCell>
                <TableCell align="center">{row.percentCompleted}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Todo
