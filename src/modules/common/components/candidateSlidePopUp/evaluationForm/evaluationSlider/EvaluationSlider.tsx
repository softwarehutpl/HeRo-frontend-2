import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Help!",
  },
  {
    value: 1,
    label: "Not good",
  },
  {
    value: 2,
    label: "Ok ",
  },
  {
    value: 3,
    label: "Ok Ok ",
  },
  {
    value: 4,
    label: "Very good",
  },
  {
    value: 5,
    label: "Bingo!",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

interface IMyProps {
  isDisabled: boolean;
}

interface MProps {
  value: number;
  label: string;
}

export default function EvaluationSlider({ isDisabled }: IMyProps) {
  const [options, setOptions] = React.useState<MProps[]>([]);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        // valueLabelDisplay="on"
        onChange={(e, v) => setOptions(marks.filter((m) => m.value === v))}
        getAriaValueText={valuetext}
        marks={options}
        min={0}
        max={5}
        step={1}
        disabled={isDisabled}
      />
    </Box>
  );
}
