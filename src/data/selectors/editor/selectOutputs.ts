import { Outputs } from "../../../classes/nodes/outputs/Outputs";
import EditorModel from "../../models/EditorModel";
import { selectNode } from "./selectNode";

export const selectOutputs = (
  nodeId: string,
  editor: EditorModel
): Outputs | undefined => {
  const node = selectNode(nodeId, editor.nodes);
  return node?.data?.outputs;
};
