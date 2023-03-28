import React from "react";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";

function calculateTimePercentage(start, end, currentTime) {
  const totalSeconds = end.diff(start, "second");
  const secondsElapsed = currentTime.diff(start, "second");
  const percentage = (secondsElapsed / totalSeconds) * 100;
  return percentage.toFixed(2);
}

function TimeTracker({ currentTimeAsPercentage }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${currentTimeAsPercentage}%`,
        left: 0,
        backgroundColor: "red",
        width: "100%",
        height: "2px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-5px",
          left: "-4px",
          borderTop: "6px solid transparent",
          borderLeft: "10px solid red",
          borderBottom: "6px solid transparent",
        }}
      ></div>
    </div>
  );
}

export default function Schedule({ startTime, endTime }) {
  const current = dayjs();
  const timeFormatted = current.format("MM/DD/YYYY");
  const start = dayjs(`${timeFormatted} ${startTime}`, "MM/DD/YYYY HH:mm");
  const end = dayjs(`${timeFormatted} ${endTime}`, "MM/DD/YYYY HH:mm");

  const currentTimeAsPercentage = calculateTimePercentage(start, end, current);

  const timeSlots = Array.from(
    { length: end.diff(start, "minute") / 60 + 1 },
    (_, index) => start.add(index * 60, "minute")
  );

  return (
    <Grid sx={{ position: "relative" }}>
      {/* The time tracker element is going to move relative to start and end time */}
      <TimeTracker currentTimeAsPercentage={currentTimeAsPercentage} />
      {timeSlots.map((time, i) => (
        <Grid container item key={`time-div-${i}`} sx={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              minHeight: "50px",
            }}
          >
            <span>{`${time.format("h:mm A")}`}</span>
            <span
              style={{
                marginLeft: "8px",
                width: "80%",
                height: "1px",
                backgroundColor: "lightgrey",
              }}
            ></span>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
