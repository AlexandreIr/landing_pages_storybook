import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './templates/App'
import './index.css'
import { GlobalStyles } from './styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <App />
    </ThemeProvider>
  </StrictMode>,
)
