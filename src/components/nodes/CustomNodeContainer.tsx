import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { NodeProps, useUpdateNodeInternals } from "react-flow-renderer";
import { CustomNodeData } from "../../classes/nodes/CustomNodeData";
import { NodeIdContext } from "../../react/contexts/NodeIdContext";
import { CustomNodeHandles } from "./CustomNodeHandles";

export const CustomNodeContainer: FunctionComponent<
  NodeProps<CustomNodeData>
> = (props: PropsWithChildren<NodeProps<CustomNodeData>>, _context?: any) => {
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    updateNodeInternals(props.id);
  }, []);

  const CustomNodeComponent = props.data.component;

  return (
    <NodeIdContext.Provider value={props.id}>
      <div className="custom-node react-flow__node-default">
        <CustomNodeHandles
          isInput={true}
          handles={props.data.definition.io.inputs}
        />
        <CustomNodeComponent
          outputs={props.data.outputs}
          inputs={props.data.inputs}
          definition={props.data.definition}
        />
        <CustomNodeHandles
          isInput={false}
          handles={props.data.definition.io.outputs}
        />
      </div>
    </NodeIdContext.Provider>
  );
};