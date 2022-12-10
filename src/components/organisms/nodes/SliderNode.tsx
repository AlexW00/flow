import React, { useEffect } from "react";
import { CustomNodeComponentProps } from "src/classes/nodes/definition/CustomNodeComponent";
import { NumberHandle } from "src/classes/nodes/definition/io/handles/types/base/NumberHandle";
import { CustomNodeDefinition } from "src/classes/nodes/definition/NodeDefinition";
import { NumberPropertyComponent } from "src/components/molecules/props/NumberProperty";
import { PropertyContainerComponent } from "src/components/molecules/props/PropertyContainer";
import { useSetData } from "src/react/hooks/state/setters/useSetData";
import { useSetDefinition } from "src/react/hooks/state/setters/useSetDefinition";
import { useSetOutput } from "src/react/hooks/state/setters/useSetOutput";

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
    <>
      <input
        type="range"
        className="nodrag"
        value={outputs.output ?? 0}
        min={data.min ?? DEFAULT.min}
        max={data.max ?? DEFAULT.max}
        step={data.step ?? DEFAULT.step}
        onChange={(e) => handleValueChange(Number.parseInt(e.target.value))}
        style={{ marginBottom: "20px" }}
        data-tip="test"
      />
      <PropertyContainerComponent>
        <NumberPropertyComponent
          name="Min"
          value={data.min ?? DEFAULT.min}
          onValueChange={(newValue) => handleMinMaxChange(newValue, true)}
        />
        <NumberPropertyComponent
          name="Step"
          value={data.step ?? DEFAULT.step}
          onValueChange={(newValue) => handleStepChange(newValue)}
        />
        <NumberPropertyComponent
          name="Max"
          value={data.max ?? DEFAULT.max}
          onValueChange={(newValue) => handleMinMaxChange(newValue, false)}
        />
      </PropertyContainerComponent>
    </>
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
