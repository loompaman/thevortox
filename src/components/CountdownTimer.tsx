'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);
    
    const targetDate = new Date('2025-06-08T23:59:59.000Z');

    const calculateTimeLeft = (): TimeLeft => {
      const currentTime = new Date().getTime();
      const targetTime = targetDate.getTime();
      const difference = targetTime - currentTime;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    // Calculate initial time
    setTimeLeft(calculateTimeLeft());
    
    // Set up interval for real-time updates
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show loading state during SSR and initial hydration
  if (!isClient || !timeLeft) {
    return (
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
          ⏰ Preorder Ends In:
        </h3>
        <div className="flex justify-center space-x-2 sm:space-x-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 min-w-[60px] sm:min-w-[80px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white animate-pulse">--</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
                {index === 1 ? 'Days' : index === 2 ? 'Hours' : index === 3 ? 'Mins' : 'Secs'}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
        ⏰ Preorder Ends In:
      </h3>
      <div className="flex justify-center space-x-2 sm:space-x-4">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 min-w-[60px] sm:min-w-[80px]">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Days</div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 min-w-[60px] sm:min-w-[80px]">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Hours</div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 min-w-[60px] sm:min-w-[80px]">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Mins</div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 min-w-[60px] sm:min-w-[80px]">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Secs</div>
        </div>
      </div>
    </div>
  );
} 