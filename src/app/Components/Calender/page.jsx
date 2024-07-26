"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarDemo({ color, bg, inputc, inputbg }) {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className={`rounded-md border w-fit text-${color} bg-${bg} `} 
        style={{ color: inputc, backgroundColor: inputbg }}

        // style={{color:inputc}} 
      />
    </>
  );
}
