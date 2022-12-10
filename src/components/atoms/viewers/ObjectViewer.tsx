import { Box } from "@chakra-ui/react";
import React from "react";

export const ObjectViewerComponent = ({
  object,
}: {
  object: Record<string, unknown>;
}) => {
  return (
    <Box
      style={{
        maxWidth: "25em",
        maxHeight: "50em",
      }}
    >
      {/* <ReactJson src={object} enableClipboard={false} /> */}
      {/* // @todo proper json viewer */}
      {JSON.stringify(object)}
    </Box>
  );
};
