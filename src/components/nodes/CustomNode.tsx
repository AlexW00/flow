import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { NodeProps, useUpdateNodeInternals } from "reactflow";
import { useNode } from "../../react/hooks/state/useNode";
import { CustomNodeData } from "../../classes/nodes/CustomNodeData";
import { NodeIdContext } from "../../react/contexts/NodeIdContext";
import { CustomNodeHandles } from "./CustomNodeHandles";

export const CustomNodeComponent: FunctionComponent<
  NodeProps<CustomNodeData>
> = (props: PropsWithChildren<NodeProps<CustomNodeData>>, _context?: any) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const node = useNode(props.id);

  console.log("rendering CustomNodeComponent", props.id);

  useEffect(() => {
    updateNodeInternals(props.id);
  }, []);

  const ContentComponent = node?.data?.component;

  return (
    <NodeIdContext.Provider value={props.id}>
      <div className="custom-node react-flow__node-default">
        <CustomNodeHandles isInput={true} />
        <ContentComponent />
        <CustomNodeHandles isInput={false} />
      </div>
    </NodeIdContext.Provider>
  );
};
