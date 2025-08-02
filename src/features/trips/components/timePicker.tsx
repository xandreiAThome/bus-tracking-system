import React from "react";
import { Label } from "@/components/ui/label";

export type TimePickerProps = {
  time: Date;
  setTime: React.Dispatch<React.SetStateAction<Date>>;
  label?: string;
};

function get12HourParts(date: Date) {
  let hour = date.getHours();
  const minute = date.getMinutes();
  const meridiem = hour >= 12 ? "p.m." : "a.m.";
  hour = hour % 12;
  if (hour === 0) hour = 12;
  return {
    hour,
    minute,
    meridiem,
  };
}

function setHour(date: Date, hour12: number, meridiem: "a.m." | "p.m.") {
  let hour = hour12 % 12;
  if (meridiem === "p.m.") hour += 12;
  if (meridiem === "a.m." && hour === 12) hour = 0;
  const newDate = new Date(date);
  newDate.setHours(hour);
  return newDate;
}

function setMinute(date: Date, minute: number) {
  const newDate = new Date(date);
  newDate.setMinutes(minute);
  return newDate;
}

function setMeridiem(date: Date, meridiem: "a.m." | "p.m.") {
  const { hour } = get12HourParts(date);
  return setHour(date, hour, meridiem);
}

export default function TimePicker({ time, setTime, label }: TimePickerProps) {
  const { hour, minute, meridiem } = get12HourParts(time);
  const meridiemTyped = meridiem as "a.m." | "p.m.";

  // Track input values separately to allow empty fields during typing
  const [hourInput, setHourInput] = React.useState(hour.toString());
  const [minuteInput, setMinuteInput] = React.useState(
    minute.toString().padStart(2, "0")
  );

  // Update input values when time prop changes (from external sources like +/- buttons)
  React.useEffect(() => {
    setHourInput(hour.toString());
    setMinuteInput(minute.toString().padStart(2, "0"));
  }, [hour, minute]);

  const handleHourChange = (op: "increment" | "decrement") => {
    let newHour = hour;
    if (op === "increment") {
      newHour = hour === 12 ? 1 : hour + 1;
    } else {
      newHour = hour === 1 ? 12 : hour - 1;
    }
    setTime(setHour(time, newHour, meridiemTyped));
  };

  const handleMinuteChange = (op: "increment" | "decrement") => {
    let newMinute = minute;
    if (op === "increment") {
      newMinute = (minute + 1) % 60;
    } else {
      newMinute = (minute - 1 + 60) % 60;
    }
    setTime(setMinute(time, newMinute));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Allow empty string or numeric input only
    if (value !== "" && !/^\d+$/.test(value)) return;

    if (name === "hour") {
      setHourInput(value);
      if (value === "") {
        // Allow empty field, don't update time yet
        return;
      }
      const num = parseInt(value);
      if (isNaN(num)) return;

      // Clamp hour to valid range (1-12)
      const clampedHour = Math.max(1, Math.min(12, num));
      setTime(setHour(time, clampedHour, meridiemTyped));
    } else if (name === "minute") {
      setMinuteInput(value);
      if (value === "") {
        // Allow empty field, don't update time yet
        return;
      }
      const num = parseInt(value);
      if (isNaN(num)) return;

      // Clamp minute to valid range (0-59)
      const clampedMinute = Math.max(0, Math.min(59, num));
      setTime(setMinute(time, clampedMinute));
    }
  };

  const handleMeridiemChange = (value: "a.m." | "p.m.") => {
    setTime(setMeridiem(time, value));
  };

  return (
    <div>
      {label && <Label>{label}</Label>}
      <div className="flex items-center gap-2">
        {/* Hour */}
        <div className="flex items-center border rounded">
          <button
            type="button"
            onClick={() => handleHourChange("decrement")}
            className="px-2 py-1"
          >
            -
          </button>
          <input
            name="hour"
            value={hourInput}
            onChange={handleInputChange}
            className="w-10 text-center outline-none"
            aria-label="Hour"
          />
          <button
            type="button"
            onClick={() => handleHourChange("increment")}
            className="px-2 py-1"
          >
            +
          </button>
        </div>

        <span>:</span>

        {/* Minute */}
        <div className="flex items-center border rounded">
          <button
            type="button"
            onClick={() => handleMinuteChange("decrement")}
            className="px-2 py-1"
          >
            -
          </button>
          <input
            name="minute"
            value={minuteInput}
            onChange={handleInputChange}
            className="w-10 text-center outline-none"
            aria-label="Minute"
          />
          <button
            type="button"
            onClick={() => handleMinuteChange("increment")}
            className="px-2 py-1"
          >
            +
          </button>
        </div>

        {/* AM/PM */}
        <select
          value={meridiem}
          onChange={e =>
            handleMeridiemChange(e.target.value as "a.m." | "p.m.")
          }
          className="border rounded px-2 py-1"
        >
          <option value="a.m.">a.m.</option>
          <option value="p.m.">p.m.</option>
        </select>
      </div>
    </div>
  );
}
