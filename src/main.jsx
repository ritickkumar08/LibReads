// this is the entry point of our online library - LibReads
//we have react - redux store and routers etc.

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import appStore from './redux/appStore.js'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <giving access of the redux store to every components of the app */}
    <Provider store={appStore}>
      {/* the browserRouter is to help with the dynamic navigation of diffenrent pages */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
