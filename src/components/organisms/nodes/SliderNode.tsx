import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CustomNodeComponentProps } from "src/classes/nodes/definition/CustomNodeComponent";
import { NumberHandle } from "src/classes/nodes/definition/io/handles/types/base/NumberHandle";
import { CustomNodeDefinition } from "src/classes/nodes/definition/NodeDefinition";
import { SliderPropertyComponent } from "src/components/molecules/props/SliderProperty";
import { PropertyContainerComponent } from "src/components/molecules/props/PropertyContainer";
import { useSetData } from "src/react/hooks/state/setters/useSetData";
import { useSetDefinition } from "src/react/hooks/state/setters/useSetDefinition";
import { useSetOutput } from "src/react/hooks/state/setters/useSetOutput";
import { BasicSliderComponent } from "src/components/atoms/inputs/BasicSlider";

export const SliderNodeComponent = ({
  outputs,
  data,
}: CustomNodeComponentProps): JSX.Element => {
  const setNodeDefinition = useSetDefinition();
  const setOutput = useSetOutput("output");
  const setData = useSetData();

  useEffect(() => {
    setNodeDefinition(SliderNodeDefinition);
  }, []);

  const handleValueChange = (newValue: number) => {
    console.log(newValue);
    setOutput(newValue);
  };

  const handleMinMaxChange = (newValue: number, isMin: boolean) => {
    const newData = { ...data };
    if (isMin) {
      newData.min = newValue;
    } else {
      newData.max = newValue;
    }
    setData(newData);
  };

  const handleStepChange = (newValue: number) => {
    setData({
      ...data,
      step: newValue,
    });
  };

  return (
    <Box>
      <Box marginTop="1rem" marginBottom=".75rem">
        <BasicSliderComponent
          value={outputs.output ?? 0}
          onChange={handleValueChange}
          min={data.min ?? DEFAULT.min}
          max={data.max ?? DEFAULT.max}
          step={data.step ?? DEFAULT.step}
        />
      </Box>

      <PropertyContainerComponent>
        <SliderPropertyComponent
          name="min"
          value={data.min ?? DEFAULT.min}
          step={1}
          onChange={(value) => handleMinMaxChange(value, true)}
        />

        <SliderPropertyComponent
          name="step"
          value={data.step ?? DEFAULT.step}
          step={1}
          onChange={handleStepChange}
        />

        <SliderPropertyComponent
          name="max"
          value={data.max ?? DEFAULT.max}
          step={1}
          onChange={(value) => handleMinMaxChange(value, false)}
        />
      </PropertyContainerComponent>
    </Box>
  );
};

export const SliderNodeDefinition: CustomNodeDefinition = {
  name: "Slider Node",
  io: {
    inputs: {},
    outputs: {
      output: {
        description: "Number Output",
        type: NumberHandle,
      },
    },
  },
};

const DEFAULT = {
  min: 0,
  max: 100,
  step: 1,
};
