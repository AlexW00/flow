import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CustomNodeComponentProps } from "src/classes/nodes/definition/CustomNodeComponent";
import { AnyHandle } from "src/classes/nodes/definition/io/handles/types/base/AnyHandle";
import { CustomNodeDefinition } from "src/classes/nodes/definition/NodeDefinition";
import { useNodeId } from "src/react/hooks/context/useNodeId";
import { useSetDefinition } from "src/react/hooks/state/setters/useSetDefinition";
import { useSetOutput } from "src/react/hooks/state/setters/useSetOutput";

export const ExampleNodeComponent = ({
  inputs,
  outputs,
}: CustomNodeComponentProps) => {
  const id = useNodeId();
  console.log("Rendering Example Node with id" + id);

  const setNodeDefinition = useSetDefinition();
  const setOutput = useSetOutput("output");

  useEffect(() => {
    // Here we set the definition of the node
    // = inputs/outputs and their types
    setNodeDefinition(ExampleNodeDefinition);
  }, []);

  const onClickButton = () => {
    // Update the output of this node
    const newOutput = (outputs.output ?? "") + "!";
    setOutput(newOutput);
  };

  return (
    <Flex direction="column">
      <Text>Input: {inputs?.input?.toString()}</Text>
      <Text>Output: {outputs?.output}</Text>
      <Button size="xs" onClick={onClickButton}>
        Add "!"
      </Button>
    </Flex>
  );
};

export const ExampleNodeDefinition: CustomNodeDefinition = {
  name: "Example Node",
  io: {
    inputs: {
      input: {
        description: "Input",
        type: AnyHandle,
      },
    },
    outputs: {
      output: {
        description: "Output",
        type: AnyHandle,
      },
    },
  },
};
