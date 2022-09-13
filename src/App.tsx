import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContexProvider } from './context/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContexProvider>
          <Router />
        </CartContexProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
