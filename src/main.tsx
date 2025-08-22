import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@radix-ui/themes/styles.css'
import './index.css'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { theme } from './utils'
import styled from '@emotion/styled'

const RadixTheme = styled(Theme)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: center;
  width: 100%;
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RadixTheme>
      <EmotionThemeProvider theme={theme}>
        <App />
      </EmotionThemeProvider>
    </RadixTheme>
  </StrictMode>,
)
