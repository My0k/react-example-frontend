import React from 'react'

const StatCard = ({ title, value, change, icon: Icon, iconColor }) => {
  const isPositive = change.startsWith('+')
  
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div>
          <div className="stat-value">{value}</div>
          <div className="stat-label">{title}</div>
        </div>
        <div className={`stat-icon ${iconColor}`}>
          <Icon size={24} />
        </div>
      </div>
      <span className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
        {change}
      </span>
    </div>
  )
}

export default StatCard
