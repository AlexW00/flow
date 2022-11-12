import React from "react";
import { Handle, Position } from "reactflow";
import { NodeHandles } from "../../classes/nodes/definition/io/handles/NodeHandles";

export const CustomNodeHandles = ({
  isInput,
  nodeHandles,
}: {
  isInput: boolean;
  nodeHandles: NodeHandles;
}) => {
  const calculateHandleTopOffset = (
    index: number,
    numHandles: number
  ): string => {
    const offset = 100 / (numHandles + 1);
    return `${offset * (index + 1)}%`;
  };

  console.log("CustomNodeHandles", isInput, nodeHandles);

  const mapHandles = (io: NodeHandles, isInput: boolean): JSX.Element[] => {
    const keys = Object.keys(io);

    return keys.map((key, index) => {
      const handleTopOffset = calculateHandleTopOffset(index, keys.length);
      const type = io[key].type;
      console.log("creating handle", key, type);
      return (
        <Handle
          key={key}
          id={key}
          type={isInput ? "target" : "source"}
          position={isInput ? Position.Left : Position.Right}
          style={{
            top: handleTopOffset,
            background: type.color,
          }}
        />
      );
    });
  };

  return <>{nodeHandles && mapHandles(nodeHandles, isInput)}</>;
};
