import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { NodeProps, useUpdateNodeInternals } from "reactflow";
import { useNode } from "../../react/hooks/state/useNode";
import { CustomNodeData } from "../../classes/nodes/CustomNodeData";
import { NodeIdContext } from "../../react/contexts/NodeIdContext";
import { CustomNodeHandles } from "./CustomNodeHandles";
import { useNodeHandles } from "src/react/hooks/state/useNodeHandles";

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
  const contentComponent = <ContentComponent />; // render it first to get the handles

  const [inputHandles] = useNodeHandles(true, props.id);
  const [outputHandles] = useNodeHandles(false, props.id);

  console.log(
    "CustomNodeComponent io",
    props.id,
    node.data,
    inputHandles,
    outputHandles
  );

  return (
    <NodeIdContext.Provider value={props.id}>
      <div className="custom-node react-flow__node-default">
        <CustomNodeHandles isInput={true} nodeHandles={inputHandles} />
        {contentComponent}
        <CustomNodeHandles isInput={false} nodeHandles={outputHandles} />
      </div>
    </NodeIdContext.Provider>
  );
};
