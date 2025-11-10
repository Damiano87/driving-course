"use client";

import { Dispatch, SetStateAction, useEffect } from "react";

type TimeoutBarProps = {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
};
const TimeoutBar = ({ width, setWidth }: TimeoutBarProps) => {
  useEffect(() => {
    if (width === 0) return;

    const interval = setInterval(() => setWidth(width - 10), 1000);

    return () => clearInterval(interval);
  }, [width, setWidth]);

  if (width === 0) return null;

  return (
    <div className="w-full ">
      <div
        style={{ width: width + "%" }}
        className="bg-primary h-12 rounded-l-sm"
      ></div>
    </div>
  );
};
export default TimeoutBar;
