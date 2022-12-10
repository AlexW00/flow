import React from "react";

export const ObjectViewerComponent = ({
  object,
}: {
  object: Record<string, unknown>;
}) => {
  return (
    <div
      style={{
        maxWidth: "25em",
        maxHeight: "50em",
      }}
    >
      {/* <ReactJson src={object} enableClipboard={false} /> */}
      {JSON.stringify(object)} // @todo proper json viewer
    </div>
  );
};
