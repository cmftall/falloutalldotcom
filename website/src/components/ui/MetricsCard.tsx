import * as React from 'react'
import { cn } from '@/lib/utils'
import { BusinessImpact } from '@/types/branding'

export interface MetricsCardProps {
  metric: BusinessImpact
  className?: string
  variant?: 'default' | 'highlighted' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

const MetricsCard = React.forwardRef<HTMLDivElement, MetricsCardProps>(
  ({ metric, className, variant = 'default', size = 'md', showIcon = true, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'highlighted':
          return 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800'
        case 'minimal':
          return 'bg-transparent border-gray-200 dark:border-gray-700'
        default:
          return 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
      }
    }

    const getSizeStyles = () => {
      switch (size) {
        case 'sm':
          return 'p-4'
        case 'lg':
          return 'p-8'
        default:
          return 'p-6'
      }
    }

    const getPercentageColor = (percentage: number) => {
      if (percentage >= 50) return 'text-green-600 dark:text-green-400'
      if (percentage >= 25) return 'text-blue-600 dark:text-blue-400'
      return 'text-orange-600 dark:text-orange-400'
    }

    const getIcon = () => {
      if (!showIcon) return null
      
      // Choose icon based on metric type
      const iconMap: Record<string, string> = {
        'Error Reduction': '📉',
        'Efficiency Improvement': '⚡',
        'Customer Satisfaction': '😊',
        'Productivity Improvement': '🚀',
        'Platform Performance': '📊',
        'Client Satisfaction': '⭐',
        'Testing Speed': '🏃',
        'Migration Success': '✅',
        'Processing Efficiency': '⚙️',
        'Platform Scalability': '📈',
        'Data Monetization': '💰',
        'Response Time': '⏱️',
        'Availability': '🔄',
        'Energy Savings': '🌱',
        'Resource Efficiency': '🎯'
      }

      const icon = iconMap[metric.metric_name] || '📊'
      return (
        <div className="text-2xl mb-2">
          {icon}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border shadow-sm transition-all duration-300 hover:shadow-md',
          getVariantStyles(),
          getSizeStyles(),
          className
        )}
        {...props}
      >
        {getIcon()}
        
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
            {metric.metric_name}
          </h3>
          
          <div className="flex items-baseline space-x-2">
            <span className={cn(
              'text-2xl font-bold',
              getPercentageColor(metric.percentage)
            )}>
              {metric.percentage}%
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              improvement
            </span>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {metric.description}
          </p>
        </div>
      </div>
    )
  }
)

MetricsCard.displayName = 'MetricsCard'

export { MetricsCard }

// Additional components for different metric displays
export interface MetricsGridProps {
  metrics: Array<{
    metric_name: string
    percentage: number
    description: string
  }>
  className?: string
  columns?: 1 | 2 | 3 | 4
}

export const MetricsGrid = React.forwardRef<HTMLDivElement, MetricsGridProps>(
  ({ metrics, className, columns = 3, ...props }, ref) => {
    const getGridCols = () => {
      switch (columns) {
        case 1: return 'grid-cols-1'
        case 2: return 'grid-cols-1 md:grid-cols-2'
        case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          'grid gap-6',
          getGridCols(),
          className
        )}
        {...props}
      >
        {metrics.map((metric, index) => (
          <div
            key={`${metric.metric_name}-${index}`}
            className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                {metric.metric_name}
              </h3>
              
              <div className="flex items-baseline space-x-2">
                <span className={cn(
                  'text-2xl font-bold',
                  metric.percentage >= 50 ? 'text-green-600 dark:text-green-400' :
                  metric.percentage >= 25 ? 'text-blue-600 dark:text-blue-400' :
                  'text-orange-600 dark:text-orange-400'
                )}>
                  {metric.percentage}%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  improvement
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {metric.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }
)

MetricsGrid.displayName = 'MetricsGrid'

// Compact metrics display for hero sections
export interface CompactMetricsProps {
  metrics: Array<{
    metric_name: string
    percentage: number
    description: string
  }>
  className?: string
}

export const CompactMetrics = React.forwardRef<HTMLDivElement, CompactMetricsProps>(
  ({ metrics, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-wrap gap-4 text-sm',
          className
        )}
        {...props}
      >
        {metrics.map((metric, index) => (
          <div
            key={`${metric.metric_name}-${index}`}
            className="flex items-center space-x-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700"
          >
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {metric.percentage}%
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {metric.metric_name.toLowerCase()}
            </span>
          </div>
        ))}
      </div>
    )
  }
)

CompactMetrics.displayName = 'CompactMetrics'
