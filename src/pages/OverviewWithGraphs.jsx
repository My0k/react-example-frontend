import React, { useEffect, useRef } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js'
import { Line, Doughnut, Bar } from 'react-chartjs-2'
import { DollarSign, Users, Package, Star, ChevronDown, ArrowRight } from 'lucide-react'
import StatCard from '../components/StatCard'
import { useTheme } from '../contexts/ThemeContext'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement)

const OverviewWithGraphs = () => {
  const { isDark } = useTheme()

  const stats = [
    { title: 'Total Revenue', value: '$24,500', change: '+12.5%', icon: DollarSign, iconColor: 'purple' },
    { title: 'New Customers', value: '1,845', change: '+8.2%', icon: Users, iconColor: 'green' },
    { title: 'Active Orders', value: '456', change: '-3.1%', icon: Package, iconColor: 'blue' },
    { title: 'Satisfaction Rate', value: '98.5%', change: '+2.3%', icon: Star, iconColor: 'orange' }
  ]

  const revenueData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Revenue',
      data: [3200, 4100, 3800, 5200, 4800, 5600, 6100],
      borderColor: '#a5b4fc',
      backgroundColor: 'rgba(165, 180, 252, 0.08)',
      tension: 0.4,
      fill: true,
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: '#a5b4fc',
      pointBorderColor: isDark ? '#1e293b' : '#ffffff',
      pointBorderWidth: 2
    }]
  }

  const ordersData = {
    labels: ['Completed', 'Pending', 'Failed'],
    datasets: [{
      data: [65, 25, 10],
      backgroundColor: ['#34d399', '#fbbf24', '#f87171'],
      borderWidth: 0,
      borderRadius: 4
    }]
  }

  const customerData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'New Customers',
      data: [245, 312, 298, 387, 456, 512],
      backgroundColor: '#a5b4fc',
      borderRadius: 8,
      borderSkipped: false
    }]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: isDark ? '#1e293b' : '#ffffff',
        titleColor: isDark ? '#f1f5f9' : '#0f172a',
        bodyColor: isDark ? '#94a3b8' : '#64748b',
        borderColor: isDark ? '#334155' : '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return '$' + context.parsed.y.toLocaleString()
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? '#334155' : '#f1f5f9',
          drawBorder: false
        },
        ticks: {
          color: isDark ? '#94a3b8' : '#64748b',
          font: { size: 12 },
          callback: function(value) {
            return '$' + value.toLocaleString()
          }
        }
      },
      x: {
        grid: { display: false },
        ticks: {
          color: isDark ? '#94a3b8' : '#64748b',
          font: { size: 12 }
        }
      }
    }
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: isDark ? '#94a3b8' : '#64748b',
          font: { size: 13 },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: isDark ? '#1e293b' : '#ffffff',
        titleColor: isDark ? '#f1f5f9' : '#0f172a',
        bodyColor: isDark ? '#94a3b8' : '#64748b',
        borderColor: isDark ? '#334155' : '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%'
          }
        }
      }
    }
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: isDark ? '#1e293b' : '#ffffff',
        titleColor: isDark ? '#f1f5f9' : '#0f172a',
        bodyColor: isDark ? '#94a3b8' : '#64748b',
        borderColor: isDark ? '#334155' : '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        displayColors: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? '#334155' : '#f1f5f9',
          drawBorder: false
        },
        ticks: {
          color: isDark ? '#94a3b8' : '#64748b',
          font: { size: 12 }
        }
      },
      x: {
        grid: { display: false },
        ticks: {
          color: isDark ? '#94a3b8' : '#64748b',
          font: { size: 12 }
        }
      }
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
            <h2 className="card-title">Revenue Overview</h2>
            <a href="#" className="card-action">
              Last 7 days
              <ChevronDown size={16} />
            </a>
          </div>
          <div className="chart-container">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Order Status</h2>
          </div>
          <div className="chart-container">
            <Doughnut data={ordersData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <div className="card-header">
          <h2 className="card-title">Customer Growth</h2>
          <a href="#" className="card-action">
            View report
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="chart-container">
          <Bar data={customerData} options={barOptions} />
        </div>
      </div>
    </>
  )
}

export default OverviewWithGraphs
