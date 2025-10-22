import React from 'react'
import { DollarSign, Users, Package, Star, TrendingUp, TrendingDown, CheckCircle, Clock, XCircle, ArrowRight, FileText, CreditCard, UserPlus, AlertTriangle, BarChart } from 'lucide-react'
import StatCard from '../components/StatCard'

const Overview = () => {
  const stats = [
    { title: 'Total Revenue', value: '$24,500', change: '+12.5%', icon: DollarSign, iconColor: 'purple' },
    { title: 'New Customers', value: '1,845', change: '+8.2%', icon: Users, iconColor: 'green' },
    { title: 'Active Orders', value: '456', change: '-3.1%', icon: Package, iconColor: 'blue' },
    { title: 'Satisfaction Rate', value: '98.5%', change: '+2.3%', icon: Star, iconColor: 'orange' }
  ]

  const orders = [
    { id: '#ORD-001', customer: 'Alice Johnson', amount: '$245.00', status: 'success', statusText: 'Completed' },
    { id: '#ORD-002', customer: 'Bob Smith', amount: '$189.50', status: 'pending', statusText: 'Pending' },
    { id: '#ORD-003', customer: 'Carol Williams', amount: '$420.00', status: 'success', statusText: 'Completed' },
    { id: '#ORD-004', customer: 'David Brown', amount: '$156.75', status: 'failed', statusText: 'Failed' },
    { id: '#ORD-005', customer: 'Emma Davis', amount: '$298.00', status: 'pending', statusText: 'Pending' }
  ]

  const activities = [
    { icon: FileText, title: 'New order created', time: '2 minutes ago', color: '#4f46e5' },
    { icon: CreditCard, title: 'Payment received', time: '15 minutes ago', color: '#10b981' },
    { icon: UserPlus, title: 'New customer registered', time: '1 hour ago', color: '#3b82f6' },
    { icon: AlertTriangle, title: 'Low stock alert', time: '3 hours ago', color: '#f59e0b' },
    { icon: BarChart, title: 'Report generated', time: '5 hours ago', color: '#4f46e5' }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return CheckCircle
      case 'pending': return Clock
      case 'failed': return XCircle
      default: return Clock
    }
  }

  return (
    <>
      <div className="page-header">
        <h1>Overview</h1>
        <p>Welcome back! Here's what's happening with your business today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="content-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Orders</h2>
            <a href="#" className="card-action">
              View all
              <ArrowRight size={16} />
            </a>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const StatusIcon = getStatusIcon(order.status)
                return (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status-badge ${order.status}`}>
                        <StatusIcon size={14} />
                        {order.statusText}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Activity</h2>
          </div>
          <ul className="activity-list">
            {activities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <li key={index} className="activity-item">
                  <div 
                    className="activity-icon" 
                    style={{ 
                      background: `linear-gradient(135deg, ${activity.color}15 0%, ${activity.color}25 100%)`,
                      color: activity.color 
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">{activity.title}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Overview
