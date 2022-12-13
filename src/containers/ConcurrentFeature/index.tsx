import { FC, useState, useEffect, useDeferredValue, useMemo, Suspense } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from 'prism-react-renderer/themes/vsDark'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import DATA from './data.json'
import CODE from './code'

const ConcurrentFeature: FC = () => {
  const scope = {
    Paper,
    Box,
    Input,
    List,
    ListItem,
    ListItemText,
    useEffect,
    useDeferredValue,
    useMemo,
    useState,
    Suspense,
    DATA
  }
  
  return (
    <LiveProvider code={CODE} scope={scope} language="jsx" theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ width: '80%' }}>
          <LiveEditor />
          <LiveError />
        </Box>
        <Box>
          <LivePreview />
        </Box>
      </Box>
    </LiveProvider>
  )
}

export default ConcurrentFeature
