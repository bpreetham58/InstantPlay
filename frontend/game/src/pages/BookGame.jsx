import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import { useBooking } from "../context/BookingContext";

// Sample arena data - in a real app, this would come from an API
const arenaOptions = [
  { 
    id: "arena-1", 
    name: "Quantum Field", 
    type: "Football", 
    image: "/api/placeholder/120/80",
    popularity: 87,
    features: ["Night lighting", "Synthetic turf", "Locker rooms"]
  },
  { 
    id: "arena-2", 
    name: "Nexus Court", 
    type: "Basketball", 
    image: "/api/placeholder/120/80",
    popularity: 92,
    features: ["Indoor", "Professional flooring", "Spectator seating"]
  },
  { 
    id: "arena-3", 
    name: "Cyber Stadium", 
    type: "Tennis", 
    image: "/api/placeholder/120/80",
    popularity: 76,
    features: ["Clay courts", "Tournament grade", "Covered options"]
  },
  { 
    id: "arena-4", 
    name: "Pulse Arena", 
    type: "Volleyball", 
    image: "/api/placeholder/120/80",
    popularity: 81,
    features: ["Beach sand", "Night tournaments", "Pro nets"]
  },
  { 
    id: "arena-5", 
    name: "Vector Track", 
    type: "Athletics", 
    image: "/api/placeholder/120/80",
    popularity: 65,
    features: ["Olympic standard", "Timing systems", "Multiple lanes"]
  }
];

// Sample time slot data - hours only
const generateHourSlots = () => {
  const slots = [];
  
  for (let hour = 8; hour < 22; hour++) {
    const availability = Math.random();
    slots.push({
      id: `hour-${hour}`,
      hour: hour,
      display: `${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`,
      endDisplay: `${(hour + 1) % 12 || 12}:00 ${(hour + 1) < 12 ? 'AM' : 'PM'}`,
      availability: availability, // 0-0.3: low, 0.3-0.7: medium, 0.7-1: high
      status: availability < 0.2 ? 'booked' : availability > 0.8 ? 'open' : 'limited'
    });
  }
  return slots;
};

function BookGame() {
  const { addBooking } = useBooking();
  const [selectedArena, setSelectedArena] = useState(null);
  const [hourSlots, setHourSlots] = useState(generateHourSlots());
  const [selectedHour, setSelectedHour] = useState(null);
  const [showArenaSelector, setShowArenaSelector] = useState(true);
  const [showHourSelector, setShowHourSelector] = useState(false);

  const handleArenaSelect = (arena) => {
    setSelectedArena(arena);
    setShowArenaSelector(false);
    setShowHourSelector(true);
    // Regenerate hours when arena changes to simulate different availability
    setHourSlots(generateHourSlots());
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
    // Directly proceed to booking with the selected hour
    addBooking({
      arena: selectedArena,
      hour: hour,
      bookedAt: new Date().toISOString()
    });
  };

  const resetSelection = () => {
    setSelectedArena(null);
    setSelectedHour(null);
    setShowArenaSelector(true);
    setShowHourSelector(false);
  };

  return (
    <div className="relative min-h-screen bg-black p-0 flex items-center justify-center overflow-hidden">
      {/* Animated cyberpunk background */}
      <div className="absolute inset-0 z-0">
        {/* Main background with moving gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-80 animate-pulse"></div>
        
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSI+PHBhdGggZD0iTTIwIDFWMzlNMSAyMEgzOU0xMCAxMEgzMFYzMEgxMFoiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 w-full h-full border-r border-cyan-500/20 animate-translateX"></div>
          <div className="absolute left-0 top-0 w-full h-full border-b border-cyan-500/20 animate-translateY"></div>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-cyan-600/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-fuchsia-600/20 blur-3xl animate-float-delayed"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto p-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl shadow-2xl animate-fade-in">
        {/* Inner content with glassmorphism */}
        <div className="bg-black/80 backdrop-filter backdrop-blur-sm rounded-2xl p-8 overflow-hidden">
          {/* Animated header with tech accents */}
          <div className="relative mb-10">
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500 opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-purple-500 opacity-60"></div>
            
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 text-center mb-3 relative">
              <span className="animate-pulse-slow">NEXUS</span> GAME BOOKING
              <div className="absolute -right-3 top-0 w-3 h-3 bg-cyan-400 rounded-full animate-blink"></div>
            </h2>
            
            <div className="flex justify-center items-center gap-1 mb-4">
              <div className="h-1 w-12 bg-cyan-600 rounded-full"></div>
              <div className="h-1 w-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="h-1 w-16 bg-purple-600 rounded-full"></div>
              <div className="h-1 w-1 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="h-1 w-12 bg-cyan-600 rounded-full"></div>
            </div>
            
            <p className="text-cyan-300 text-center mb-4 font-light tracking-wider">
              SELECT YOUR ARENA • CHOOSE YOUR HOUR • DOMINATE THE GAME
            </p>
          </div>

          {/* Status bar with animations */}
          <div className="flex justify-between text-xs text-cyan-500 mb-8 border-y border-cyan-900/60 py-2 px-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span>SERVERS ONLINE</span>
            </div>
            <div className="font-mono animate-typewriter overflow-hidden whitespace-nowrap">
              {selectedArena 
                ? `LOADING HOURS FOR ${selectedArena.name}...` 
                : "INITIALIZING BOOKING ENGINE..."}
            </div>
            <div className="flex items-center gap-2">
              <span>REAL-TIME</span>
              <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Form container with tech design */}
          <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-md p-6 rounded-xl border border-cyan-800/50 shadow-inner shadow-cyan-900/20">
            {/* Tech corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500"></div>
            
            {/* Animated scan line */}
            <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-scan"></div>
            
            {/* Step indicator */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${showArenaSelector ? 'bg-cyan-500 text-black' : 'bg-cyan-900 text-cyan-300'}`}>1</div>
                <div className="w-12 h-1 bg-cyan-800">
                  <div className={`h-full bg-cyan-500 ${showHourSelector ? 'w-full' : 'w-0'} transition-all duration-500`}></div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${showHourSelector ? 'bg-cyan-500 text-black' : 'bg-cyan-900 text-cyan-300'}`}>2</div>
              </div>
            </div>

            {showArenaSelector && (
              <div className="arena-selector">
                <h3 className="text-cyan-300 text-lg font-bold mb-4">SELECT ARENA</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {arenaOptions.map((arena) => (
                    <div 
                      key={arena.id}
                      className="bg-black/60 border border-cyan-800/50 rounded-lg p-4 cursor-pointer hover:border-cyan-500 transition-all duration-300 group"
                      onClick={() => handleArenaSelect(arena)}
                    >
                      <div className="flex gap-4">
                        <div className="relative w-24 h-16 overflow-hidden rounded-md">
                          <img src={arena.image} alt={arena.name} className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-cyan-300 text-lg font-bold group-hover:text-cyan-400 transition-colors">{arena.name}</h4>
                          <p className="text-gray-400 text-sm">{arena.type}</p>
                          
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" 
                                style={{ width: `${arena.popularity}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-cyan-500 ml-2">{arena.popularity}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2 flex-wrap">
                        {arena.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-blue-900/40 px-2 py-1 rounded text-blue-300">{feature}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showHourSelector && selectedArena && (
              <div className="hour-selector">
                <div className="flex justify-between items-center mb-4">
                  <button 
                    onClick={resetSelection}
                    className="flex items-center gap-1 text-cyan-500 hover:text-cyan-400 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to arenas
                  </button>
                  <h3 className="text-cyan-300 text-lg font-bold">{selectedArena.name} - SELECT HOUR</h3>
                </div>

                <div className="hour-slots">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-xs text-green-400">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="text-xs text-yellow-400">Limited</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="text-xs text-red-400">Booked</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {hourSlots.map((slot) => (
                      <div 
                        key={slot.id}
                        className={`border rounded-lg p-3 w-24 text-center transition-all duration-300 cursor-pointer
                          ${slot.status === 'booked' 
                            ? 'border-red-900/50 bg-red-900/20 cursor-not-allowed opacity-60' 
                            : slot.status === 'limited'
                              ? 'border-yellow-700/50 bg-yellow-900/10 hover:border-yellow-500' 
                              : 'border-green-700/50 bg-green-900/10 hover:border-green-500'}`}
                        onClick={() => slot.status !== 'booked' && handleHourSelect(slot)}
                      >
                        <div className="text-center">
                          <div className={`w-3 h-3 rounded-full mx-auto mb-2
                            ${slot.status === 'booked' ? 'bg-red-500' : slot.status === 'limited' ? 'bg-yellow-500' : 'bg-green-500'} 
                            ${slot.status !== 'booked' && 'animate-pulse'}`}>
                          </div>
                          <div className="text-lg font-mono text-cyan-300">{slot.display}</div>
                          <div className="mt-1 text-xs text-gray-400">to {slot.endDisplay}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tech footer */}
          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs text-cyan-600">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-xs">N</span>
              </div>
              <span>NEXUS SYSTEMS v3.4.2</span>
            </div>
            
            <div className="flex gap-2">
              <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookGame;