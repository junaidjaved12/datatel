"use client";
import {motion } from 'framer-motion'


const FinancialDashboard = () => {
  // Donut Chart Component
  const DonutChart = () => (
    <div className="flex items-center space-x-4">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" stroke="#f1f5f9" strokeWidth="10" fill="none" />
          <circle cx="50" cy="50" r="35" stroke="#fb923c" strokeWidth="10" fill="none" 
            strokeDasharray="110 220" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="text-xl font-bold text-gray-900">$1,235</div>
        <div className="text-sm text-gray-500">Sales</div>
      </div>
    </div>
  );

  // Line Chart Component
  const LineChart = () => (
    <div className="w-full h-20 mt-6">
      <svg className="w-full h-full" viewBox="0 0 200 80">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        <path d="M20,60 Q60,45 100,35 Q140,25 180,20 L180,80 L20,80 Z" fill="url(#gradient)" />
        <path d="M20,60 Q60,45 100,35 Q140,25 180,20" stroke="#3b82f6" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );

  // Pie Chart Component
  const PieChart = () => (
    <div className="relative w-20 h-20 mx-auto">
      <svg className="w-20 h-20" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="3" 
          strokeDasharray="100 0" />
        <circle cx="21" cy="21" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="3" 
          strokeDasharray="35 65" strokeDashoffset="25" transform="rotate(-90 21 21)" />
        <circle cx="21" cy="21" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="3" 
          strokeDasharray="25 75" strokeDashoffset="-10" transform="rotate(-90 21 21)" />
        <circle cx="21" cy="21" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="3" 
          strokeDasharray="40 60" strokeDashoffset="-35" transform="rotate(-90 21 21)" />
      </svg>
      <div className="absolute -top-2 -right-2 text-xs text-gray-500 bg-white px-1 rounded">11%</div>
    </div>
  );

  // Gauge Chart Component
  const GaugeChart = () => {
    const ticks = 9;
    const progress = 0.6;
    
    return (
      <div className="flex justify-center mt-4">
        <div className="relative w-48 h-24">
          <svg className="w-48 h-48" viewBox="0 0 200 100">
            {/* Background arc */}
            <path 
              d="M 20 80 A 80 80 0 0 1 180 80" 
              stroke="#e5e7eb" 
              strokeWidth="3" 
              fill="none" 
            />
            
            {/* Tick marks */}
            {Array.from({ length: ticks }, (_, i) => {
              const angle = (i * 180) / (ticks - 1); // 0° to 180°
              const isActive = i <= progress * (ticks - 1);
              
              const outerRadius = 80;
              const innerRadius = 65;
              const rad = (angle * Math.PI) / 180;
              
              const x1 = 100 + innerRadius * Math.cos(Math.PI - rad);
              const y1 = 80 - innerRadius * Math.sin(Math.PI - rad);
              const x2 = 100 + outerRadius * Math.cos(Math.PI - rad);
              const y2 = 80 - outerRadius * Math.sin(Math.PI - rad);
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isActive ? "#3b82f6" : "#e5e7eb"}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>
      </div>
    );
  };








  // Arc Chart Component
  const ArcChart = ({ percentage = 58, size = 120, strokeWidth = 10 }) => {
  const radius = 45; 
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
      <div className="flex justify-center items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className="rotate-[-90deg]" // rotate so arc starts at top
        >
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Arc */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#3b82f6"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-semibold text-gray-900">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};



  return (
    <>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 relative z-50">
      {/* Header Text */}
      <h2 className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16 px-2 sm:px-4">
        Streamline Finances With Smart Features
      </h2>
      
      {/* Dashboard Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4">
        {/* Real-Time Analytics */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Real-Time Analytics</h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Monitor your finances live with clear, intuitive dashboards.
          </p>
          <DonutChart />
        </div>

        {/* Automated Reports */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Automated Reports</h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Generate comprehensive reports automatically on schedule.
          </p>
          <LineChart />
        </div>

        {/* Budget Tracking */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Budget Tracking</h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Keep your spending on track with smart budget alerts.
          </p>
          <PieChart />
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Performance Metrics</h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Track key performance indicators with precision.
          </p>
          <GaugeChart />
        </div>

        {/* Goal Progress */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Goal Progress</h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Visualize your progress towards financial goals.
          </p>
          <ArcChart percentage={58} />
        </div>

        {/* Investment Overview */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Investment Overview</h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Monitor your investment portfolio performance.
          </p>
          <DonutChart />
        </div>
      </div>
    </div>
    </>
  );
};

export default FinancialDashboard;