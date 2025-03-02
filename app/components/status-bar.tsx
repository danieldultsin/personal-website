"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StatusBar() {
  const [location, setLocation] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    let timeInterval: NodeJS.Timeout;

    const getLocation = async () => {
      try {
        //const response = await fetch("/api/route");
        //const data = await response.json();
        const data = { location: "Austin, TX", timezone: "America/Chicago" };
        setLocation(data.location);
        updateTime(data.timezone);
      } catch (error) {
        console.error("Failed to fetch location and timezone:", error);
        setLocation("Incognito");
        updateTime("America/Chicago");
      }
    };

    const updateTime = (tz: string) => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: tz,
      });
      setTime(formattedTime);
      timeInterval = setInterval(() => updateTime(tz), 60000);
    };

    getLocation();

    return () => {
      if (timeInterval) clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="status-bar">
      <div className="flex items-center gap-1">
        <span>{location}</span>
        <span>|</span>
        <span>{time}</span>
      </div>
      <Link
        href="https://calendly.com/danieldultsin/15m"
        target="_blank"
        className="border border-[#FFD014] px-2 rounded-lg text-[#FFD014]"
      >
        Book a 1:1 Call
      </Link>
    </div>
  );
}
