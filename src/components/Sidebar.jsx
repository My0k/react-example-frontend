import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Bell, Settings, User } from 'lucide-react'

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Bell, label: 'Integrations', path: '/integrations' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: User, label: 'Account', path: '/account' }
  ]

  return (
    <aside className="sidebar">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.path
        
        return (
          <div
            key={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </div>
        )
      })}
    </aside>
  )
}

export default Sidebar
