import { Box } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { Handle, Position, useUpdateNodeInternals } from "react-flow-renderer";
import { NodeHandles } from "src/classes/nodes/definition/io/handles/NodeHandles";
import { useNodeId } from "src/react/hooks/context/useNodeId";

export const HandlesComponent = React.memo(
  ({
    isInput,
    handles,
  }: {
    isInput: boolean;
    handles: NodeHandles;
  }): JSX.Element => {
    const calculateHandleTopOffset = (
      index: number,
      numHandles: number
    ): string => {
      const offset = 100 / (numHandles + 1);
      return `${offset * (index + 1)}%`;
    };
    const updateInternals = useUpdateNodeInternals();
    const nodeId = useNodeId();
    updateInternals(nodeId);

    const mapHandles = (io: NodeHandles, isInput: boolean): JSX.Element[] => {
      const keys = Object.keys(io);

      return keys.map((key, index) => {
        const handleTopOffset = calculateHandleTopOffset(index, keys.length),
          handle = io[key],
          type = handle.type;
        return (
          <Tooltip
            hasArrow
            placement="top"
            label={type.name}
            key={`${index}-${isInput}-${nodeId}`}
          >
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
          </Tooltip>
        );
      });
    };

    return <Box>{handles && mapHandles(handles, isInput)}</Box>;
  }
);
