import { Flex } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { CustomNodeComponentProps } from "src/classes/nodes/definition/CustomNodeComponent";
import { NodeHandles } from "src/classes/nodes/definition/io/handles/NodeHandles";
import { AnyHandle } from "src/classes/nodes/definition/io/handles/types/base/AnyHandle";
import { CustomNodeDefinition } from "src/classes/nodes/definition/NodeDefinition";
import { CodeGeneratorComponent } from "src/components/molecules/inputs/code/CodeGenerator";
import { useNodeId } from "src/react/hooks/context/useNodeId";
import { useSetData } from "src/react/hooks/state/setters/useSetData";
import { useSetDefinition } from "src/react/hooks/state/setters/useSetDefinition";
import { useSetNodeHandles } from "src/react/hooks/state/setters/useSetNodeHandles";
import { useSetOutput } from "src/react/hooks/state/setters/useSetOutput";
import {
  FunctionEditorComponent,
  FunctionExecutionMode,
} from "../../molecules/inputs/code/FunctionEditor";
import { FunctionExecutorComponent } from "../../molecules/inputs/code/FunctionExecutor";

export const FunctionNodeComponent = ({
  inputs,
  definition,
  data,
}: CustomNodeComponentProps): JSX.Element => {
  const id = useNodeId();
  console.log("Rendering Function Node with id" + id);

  const setNodeDefinition = useSetDefinition();
  const setInputHandles = useSetNodeHandles(true);
  const setOutput = useSetOutput("output");
  const setData = useSetData();

  const paramsDefinition = useMemo(() => {
    return Object.keys(definition.io.inputs);
  }, [definition.io.inputs]);
  const [executionMode, setExecutionMode] =
    React.useState<FunctionExecutionMode>(FunctionExecutionMode.Idle);

  // Initial render, set node definition
  useEffect(() => {
    setNodeDefinition(CodeNodeDefinition);
  }, []);

  const handleCodeChange = (newCode: string) => {
    setData({ code: newCode });
  };

  const handleParamsChange = (newParams: string[]) => {
    const newInputHandles = newParams.reduce(
      (acc: NodeHandles, param: string) => {
        acc[param] = {
          type: AnyHandle,
        };
        return acc;
      },
      {}
    );

    setInputHandles(newInputHandles);
  };

  const handleExecuteBegin = () => {
    setExecutionMode(FunctionExecutionMode.Executing);
  };

  const handleExecuteSuccess = (result: any) => {
    setExecutionMode(FunctionExecutionMode.Success);
    setOutput(result);
  };

  const handleExecuteError = (error: Error) => {
    setExecutionMode(FunctionExecutionMode.Error);
    setOutput(undefined);
    console.error(error);
  };

  return (
    <Flex direction="column" gap={"0.5em"}>
      <FunctionEditorComponent
        params={paramsDefinition}
        code={data.code}
        mode={executionMode}
        onCodeChange={handleCodeChange}
        onParamsChange={handleParamsChange}
      />
      <FunctionExecutorComponent
        paramsDefinition={paramsDefinition}
        paramsData={Object.keys(definition.io.inputs).map((key) => inputs[key])}
        code={data.code}
        onExecuteBegin={handleExecuteBegin}
        onExecuteSuccess={handleExecuteSuccess}
        onExecuteError={handleExecuteError}
      />
      <CodeGeneratorComponent
        paramsDefinition={paramsDefinition}
        onCodeGenerate={(code) => {
          console.log("Generated code: " + code);
          handleCodeChange(code);
        }}
      />
    </Flex>
  );
};

export const CodeNodeDefinition: CustomNodeDefinition = {
  name: "Function Node",
  io: {
    inputs: {
      input: {
        description: "Code Input",
        type: AnyHandle,
      },
    },
    outputs: {
      output: {
        description: "Code Output",
        type: AnyHandle,
      },
    },
  },
};
