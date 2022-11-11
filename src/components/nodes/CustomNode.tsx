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
  console.log("rendering CustomNodeComponent with ID", props.id);

  const updateNodeInternals = useUpdateNodeInternals();
  const flowName = useContext(FlowNameContext);
  const node = useNode(props.id, flowName); // get the node from Zustand state
  
  console.log("CustomNodeComponent node:", node);

  useEffect(() => {
    updateNodeInternals(props.id);
  }, []);

  // get the component from the node data
  const ContentComponent = node?.data?.component; 

  return (
    <NodeIdContext.Provider value={props.id}>
      {ContentComponent ? ( // <- conditionally render the content
        <div className="custom-node react-flow__node-default">
          <CustomNodeHandles isInput={true} />
          <ContentComponent />
          <CustomNodeHandles isInput={false} />
        </div>
      ) : null}
    </NodeIdContext.Provider>
  );
};
