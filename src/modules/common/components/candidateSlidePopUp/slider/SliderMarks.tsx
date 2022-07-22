import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function SliderMarks() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        disabled
        aria-label="Custom marks"
        defaultValue={4}
        min={0}
        max={5}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
