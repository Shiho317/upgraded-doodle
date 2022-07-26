import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from "../../styles/Theme";
import { TopP } from './Top.style'

const Top = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopP>
      Hello
    </TopP>
    </ThemeProvider>
  )
}

export default Top