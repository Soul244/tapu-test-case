import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './globalStyle'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { List, Account, ROUTES } from './routes'
import { AppContextProvider } from './contexts/AppContext'

import './assets/fonts/fonts.css'
import './translations/config'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={ROUTES.ACCOUNT} element={<Account />} />
            <Route index element={<List />} />
            <Route path={ROUTES.LIST} element={<List />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
