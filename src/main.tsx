import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import styled from '@emotion/styled'

const StyledTheme = styled(Theme)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: center;
  width: 100%;
  border: solid blue 2px;
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledTheme appearance="dark">
      <App />
    </StyledTheme>
  </StrictMode>,
)
