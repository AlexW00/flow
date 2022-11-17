import React, { useContext, useEffect } from "react";
import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { ObjectHandle } from "../../classes/nodes/definition/io/handles/types/base/ObjectHandle";
import { StringHandle } from "../../classes/nodes/definition/io/handles/types/base/StringHandle";
import { CustomNodeDefinition } from "../../classes/nodes/definition/NodeDefinition";
import { FlowNameContext } from "../../react/contexts/FlowNameContext";
import { NodeIdContext } from "../../react/contexts/NodeIdContext";
import { useNodeDefinition } from "../../react/hooks/state/useNodeDefinition";

export const ExampleNodeComponent = ({ data }: { data: CustomNodeData }) => {
  const flowName = useContext(FlowNameContext);
  const id = useContext(NodeIdContext);
  console.log("Rendering " + id + " in flow named", flowName);

  const setNodeDefinition = useNodeDefinition(id)[1];
  useEffect(() => {
    setNodeDefinition(ExampleNode);
  }, []);

  const inputs = data.inputs;
  const outputs = data.outputs;

  console.log("CustomNodeComponent", id, inputs, outputs);

  const onClickButton = () => {
    console.log("onClickButton", outputs);
  };

  const changeOutputType = () => {
    console.log("changeOutputType");
  };

  return (
    <div>
      <h3>MyCustomNode</h3>
      <div>Input: {inputs?.input1 ?? "empty"}</div>
      <div>Output: {outputs?.output1 ?? "empty"}</div>
      <button onClick={onClickButton}>Increment</button>
      <button onClick={changeOutputType}>Change output type</button>
    </div>
  );
};

export const ExampleNode: CustomNodeDefinition = {
  io: {
    inputs: {
      input1: {
        name: "Input 1",
        type: StringHandle,
      },
      input2: {
        name: "Input 2",
        type: ObjectHandle,
      },
    },
    outputs: {
      output1: {
        name: "Output 1",
        type: StringHandle,
      },
      output2: {
        name: "Output 2",
        type: ObjectHandle,
      },
    },
  },
};
