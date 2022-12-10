import React from "react";
import { DynamicInputComponent } from "src/components/atoms/DynamicInput";
import { LabeledContainerComponent } from "../inputs/basic/LabeledContainer";

export type NodePropertyProps = {
  value: number;
  name: string;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (newValue: number) => void;
};

export const NumberPropertyComponent = ({
  value,
  name,
  min,
  max,
  step,
  onValueChange,
}: NodePropertyProps): JSX.Element => {
  const handleChange = (newValue: number) => {
    if (newValue < min || newValue > max) return;
    onValueChange?.(newValue);
  };
  // TODO: Add slider underneath
  return (
    <LabeledContainerComponent
      name={name}
      style={{ justifyContent: "space-between" }}
    >
      <DynamicInputComponent
        type="number"
        value={value ?? min ?? 0}
        onChange={(e) => handleChange(e as number)}
      />
    </LabeledContainerComponent>
  );
};
