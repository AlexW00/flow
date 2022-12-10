import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
} from "@chakra-ui/react";
import React from "react";

export type BasicSliderProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

export function BasicSliderComponent({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}: BasicSliderProps): JSX.Element {
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <Slider
      className="nodrag"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={value.toString()}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}
