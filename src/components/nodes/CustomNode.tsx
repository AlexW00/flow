import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { NodeProps, useUpdateNodeInternals } from "react-flow-renderer";
import { CustomNodeData } from "../../classes/nodes/CustomNodeData";
import { NodeIdContext } from "../../react/contexts/NodeIdContext";
import { CustomNodeHandles } from "./CustomNodeHandles";

export const CustomNodeComponent: FunctionComponent<
  NodeProps<CustomNodeData>
> = (props: PropsWithChildren<NodeProps<CustomNodeData>>, _context?: any) => {
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    updateNodeInternals(props.id);
  }, []);

  const ContentComponent = props.data.component;

  return (
    <NodeIdContext.Provider value={props.id}>
      <div className="custom-node react-flow__node-default">
        <CustomNodeHandles isInput={true} nodeId={props.id} />
        <ContentComponent data={props.data} />
        <CustomNodeHandles isInput={false} nodeId={props.id} />
      </div>
    </NodeIdContext.Provider>
  );
};
