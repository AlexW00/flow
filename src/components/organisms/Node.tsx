import { Box, Collapse } from "@chakra-ui/react";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { NodeProps } from "react-flow-renderer";
import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { NodeIdContext } from "src/react/contexts/NodeIdContext";
import { wrapContent } from "src/styles/layout";
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
      <div
        className="custom-node react-flow__node-default"
        style={{ ...wrapContent, padding: "0" }}
      >
        <HandlesComponent
          isInput={true}
          handles={props.data.definition.io.inputs}
        />
        <div style={wrapContent}>
          <DragbarComponent
            name={props.data.definition.name}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />

          <Collapse in={!isCollapsed} animateOpacity>
            <Box padding={"0.5em"}>
              <CustomNodeComponent
                outputs={props.data.outputs}
                inputs={props.data.inputs}
                definition={props.data.definition}
                data={props.data.data}
              />
            </Box>
          </Collapse>
        </div>
      </div>

      <HandlesComponent
        isInput={false}
        handles={props.data.definition.io.outputs}
      />
    </NodeIdContext.Provider>
  );
};
