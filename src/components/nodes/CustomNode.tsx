import React, {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { NodeProps, useUpdateNodeInternals } from "reactflow";
import { FlowNameContext } from "../../react/contexts/FlowNameContext";
import { useNode } from "../../react/hooks/state/useNode";
import { CustomNodeData } from "../../classes/nodes/CustomNodeData";
import { NodeIdContext } from "../../react/contexts/NodeIdContext";
import { CustomNodeHandles } from "./CustomNodeHandles";

export const CustomNodeComponent: FunctionComponent<
  NodeProps<CustomNodeData>
> = (props: PropsWithChildren<NodeProps<CustomNodeData>>, _context?: any) => {
  console.log("rendering CustomNodeComponent", props.id);
  console.log(props);

  const updateNodeInternals = useUpdateNodeInternals();
  const flowName = useContext(FlowNameContext);
  const node = useNode(props.id, flowName);

  useEffect(() => {
    updateNodeInternals(props.id);
  }, []);

  const ContentComponent = node.data.component;
  // rendering content first because
  // at first render, the definition of the handles gets initialized
  // const content = props.data.component(props.id);
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
