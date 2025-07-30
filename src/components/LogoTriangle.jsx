import React, { useState, useEffect } from 'react';
import Logo2 from "@/assert/Logo2.png";

const LogoTriangle = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [circuitLines, setCircuitLines] = useState([]);

  // Generate circuit-like lines
  useEffect(() => {
    const generateCircuitLines = () => {
      const lines = [];
      for (let i = 0; i < 6; i++) {
        lines.push({
          id: i,
          x1: Math.random() * 100,
          y1: Math.random() * 100,
          x2: Math.random() * 100,
          y2: Math.random() * 100,
          delay: Math.random() * 2,
        });
      }
      setCircuitLines(lines);
    };

    generateCircuitLines();
  }, []);

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Technical grid background */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <svg width="120" height="120" className="absolute inset-0">
          <defs>
            <pattern id="techGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#0EA5E9" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Circuit board lines */}
      <div className="absolute inset-0">
        <svg width="140" height="140" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {circuitLines.map((line) => (
            <g key={line.id}>
              <line
                x1={`${line.x1}%`}
                y1={`${line.y1}%`}
                x2={`${line.x2}%`}
                y2={`${line.y2}%`}
                stroke="url(#circuitGradient)"
                strokeWidth="1"
                className="animate-circuit-pulse"
                style={{ animationDelay: `${line.delay}s` }}
              />
              <circle cx={`${line.x1}%`} cy={`${line.y1}%`} r="2" fill="#0EA5E9" className="animate-pulse" />
              <circle cx={`${line.x2}%`} cy={`${line.y2}%`} r="1.5" fill="#10B981" className="animate-pulse" style={{ animationDelay: `${line.delay + 0.5}s` }} />
            </g>
          ))}
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0EA5E9" stopOpacity="1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main engineering frame */}
      <div className="relative p-6 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-md shadow-2xl border-2 border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-500 group-hover:scale-105"
           style={{ 
             clipPath: 'polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)',
             width: '140px',
             height: '140px'
           }}>
        
        {/* Technical overlay with blueprint feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Engineering measurement lines */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
          {/* Horizontal measurement lines */}
          <div className="absolute top-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          {/* Vertical measurement lines */}
          <div className="absolute top-2 bottom-2 left-2 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
          <div className="absolute top-2 bottom-2 right-2 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
          
          {/* Corner measurement markers */}
          <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-blue-400" />
          <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-blue-400" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-blue-400" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-blue-400" />
        </div>

        {/* Data points - engineering style */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col text-right text-xs text-blue-400 font-mono">
            <span className="animate-pulse"></span>
            <span className="animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            <span className="animate-pulse" style={{ animationDelay: '1s' }}></span>
          </div>
        </div>

        {/* Logo - Made Larger */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <img
            src={Logo2}
            alt="Terrene Engineering Logo"
            className={`w-auto object-contain transition-all duration-500 ${
              isHovered ? 'brightness-110 contrast-110' : 'brightness-100'
            }`}
            style={{ 
              height: '80px', // Increased from 56px to 80px
              filter: isHovered 
                ? 'drop-shadow(0 0 15px rgba(14, 165, 233, 0.4)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                : 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
              maxHeight: '80px'
            }}
          />
        </div>

        {/* Status indicators */}
        <div className="absolute bottom-3 left-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Scanning effect */}
        <div className={`absolute inset-0 overflow-hidden ${isHovered ? 'block' : 'hidden'}`}>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-vertical opacity-60" />
        </div>
      </div>

      {/* Technical readout */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-xs text-blue-400 font-mono text-center">
          <div className="animate-pulse">Terrene</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-vertical {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        
        @keyframes circuit-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .animate-scan-vertical {
          animation: scan-vertical 3s ease-in-out infinite;
        }
        
        .animate-circuit-pulse {
          animation: circuit-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoTriangle;