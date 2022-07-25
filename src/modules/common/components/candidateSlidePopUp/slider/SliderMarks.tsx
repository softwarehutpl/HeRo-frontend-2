import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  CustomSliderTrack,
  CustomSliderThumb,
  CustomSliderMark,
} from "./SliderMarksStyle";

const marks = [
  {
    value: 0,
    label: "|",
  },
  {
    value: 1,
    label: "|",
  },
  {
    value: 2,
    label: "|",
  },
  {
    value: 3,
    label: "|",
  },
  {
    value: 4,
    label: "|",
  },
  {
    value: 5,
    label: "|",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function SliderMarks() {
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        disabled
        aria-label="Custom marks"
        defaultValue={4}
        min={0}
        max={5}
        getAriaValueText={valuetext}
        step={8}
        valueLabelDisplay="auto"
        marks={marks}
        components={{
          Track: CustomSliderTrack,
          Thumb: CustomSliderThumb,
          Mark: CustomSliderMark,
        }}
      />
    </Box>
  );
}
