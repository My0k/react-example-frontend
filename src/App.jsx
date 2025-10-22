import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import OverviewWithGraphs from './pages/OverviewWithGraphs'
import MyAccount from './pages/MyAccount'
import Settings from './pages/Settings'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/graphs" element={<OverviewWithGraphs />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
