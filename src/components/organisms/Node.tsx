import { Box, Collapse, Flex } from "@chakra-ui/react";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { NodeProps } from "react-flow-renderer";
import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { NodeIdContext } from "src/react/contexts/NodeIdContext";
import { DragbarComponent } from "./Dragbar";
import { HandlesComponent } from "./Handles";

export const NodeComponent: FunctionComponent<NodeProps<CustomNodeData>> = (
  props: PropsWithChildren<NodeProps<CustomNodeData>>,
  _context?: any
) => {
  const CustomNodeComponent = props.data.component;

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <NodeIdContext.Provider value={props.id}>
      <Flex
        className="custom-node react-flow__node-default"
        style={{ padding: 0, height: "auto", width: "auto" }}
      >
        <HandlesComponent
          isInput={true}
          handles={props.data.definition.io.inputs}
        />
        <Flex direction="column">
          <DragbarComponent
            name={props.data.definition.name}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />

          <Collapse in={!isCollapsed} animateOpacity>
            <Box margin={"0.5em"}>
              <CustomNodeComponent
                outputs={props.data.outputs}
                inputs={props.data.inputs}
                definition={props.data.definition}
                data={props.data.data}
              />
            </Box>
          </Collapse>
        </Flex>
      </Flex>

      <HandlesComponent
        isInput={false}
        handles={props.data.definition.io.outputs}
      />
    </NodeIdContext.Provider>
  );
};
