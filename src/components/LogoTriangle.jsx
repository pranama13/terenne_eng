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
      <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-500">
        <svg width="140" height="140" className="absolute inset-0">
          <defs>
            <pattern id="techGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.8"/>
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#0EA5E9" opacity="0.8"/>
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
                strokeWidth="1.5"
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

      {/* Hexagonal border outline */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="140" height="140" className="absolute">
          <polygon 
            points="35,0 105,0 140,70 105,140 35,140 0,70" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Main hexagonal engineering frame */}
      <div className="relative p-6 bg-white backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:scale-105"
           style={{ 
             clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
             width: '140px',
             height: '140px'
           }}>
        
        {/* Technical overlay with blueprint feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Hexagonal measurement lines */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500">
          {/* Hexagon outline measurements */}
          <svg width="100%" height="100%" className="absolute inset-0">
            <polygon 
              points="35,17 105,17 126,70 105,123 35,123 14,70" 
              fill="none" 
              stroke="#0EA5E9" 
              strokeWidth="1" 
              strokeDasharray="2,2"
              opacity="0.6"
            />
          </svg>
          
          {/* Corner measurement markers */}
          <div className="absolute top-4 left-8 w-2 h-2 border-l border-t border-blue-400" />
          <div className="absolute top-4 right-8 w-2 h-2 border-r border-t border-blue-400" />
          <div className="absolute top-16 right-3 w-2 h-2 border-r border-blue-400" />
          <div className="absolute bottom-16 right-3 w-2 h-2 border-r border-blue-400" />
          <div className="absolute bottom-4 right-8 w-2 h-2 border-r border-b border-blue-400" />
          <div className="absolute bottom-4 left-8 w-2 h-2 border-l border-b border-blue-400" />
          <div className="absolute bottom-16 left-3 w-2 h-2 border-l border-blue-400" />
          <div className="absolute top-16 left-3 w-2 h-2 border-l border-blue-400" />
        </div>

        {/* Data points - engineering style */}
        <div className="absolute top-8 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col text-right text-xs text-blue-400 font-mono">
            <span className="animate-pulse">H:140</span>
            <span className="animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            <span className="animate-pulse" style={{ animationDelay: '1s' }}></span>
          </div>
        </div>

        {/* Logo - Made Larger and centered for hexagon */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <img
            src={Logo2}
            alt="Terrene Engineering Logo"
            className={`w-auto object-contain transition-all duration-500 ${
              isHovered ? 'brightness-110 contrast-110' : 'brightness-100'
            }`}
            style={{ 
              height: '80px',
              filter: isHovered 
                ? 'drop-shadow(0 0 15px rgba(14, 165, 233, 0.4)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                : 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
              maxHeight: '80px'
            }}
          />
        </div>

        {/* Status indicators */}
        <div className="absolute bottom-8 left-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
          <div className="animate-pulse"></div>
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