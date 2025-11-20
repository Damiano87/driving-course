import { useState, useEffect, useCallback, useRef } from "react";

interface CountdownTimerProps {
  initialMinutes?: number;
  onComplete?: () => void;
  autoStart?: boolean;
}

const CountdownTimer = ({
  initialMinutes = 45,
  onComplete,
  autoStart = true,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            if (onComplete) onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, onComplete]);

  return (
    <div className="text-xl font-bold text-foreground font-mono tracking-wider">
      {formatTime(timeLeft)}
    </div>
  );
};

export default CountdownTimer;
