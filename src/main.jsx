import React from 'react'
import ReactDOM from 'react-dom/client'
// Styles
import './index.css'
// Components
import Layout from './components/layout/Layout'
import Home from './components/screens/Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
)
