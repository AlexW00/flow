import { Inputs } from "../../../classes/nodes/outputs/Inputs";
import EditorModel from "../../models/EditorModel";
import { selectNode } from "./selectNode";

export const selectInputs = (
  nodeId: string,
  editorModel: EditorModel
): Inputs => {
  const node = selectNode(nodeId, editorModel.nodes);
  if (node) return node.data.inputs;
  else return {};
};
