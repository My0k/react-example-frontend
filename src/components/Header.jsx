import React from 'react'
import { Sun, Moon, BarChart3 } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="logo">
        <BarChart3 size={24} />
        Dashboard
      </div>
      <div className="user-info">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="avatar">JD</div>
        <span className="user-name">John Doe</span>
      </div>
    </header>
  )
}

export default Header
