import React from "react";
import { FlowNameContext } from "../react/contexts/FlowNameContext";
import { max } from "../styles/layout";

import { Editor } from "./Editor";

export const Flow = () => {
  return (
    <div style={max}>
      <h1>Flow XY</h1>
      <FlowNameContext.Provider value="example-flow">
        <Editor />
      </FlowNameContext.Provider>
    </div>
  );
};
