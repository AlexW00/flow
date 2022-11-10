import { Inputs } from "../../../classes/nodes/outputs/Inputs";
import EditorModel from "../../models/EditorModel";
import { selectNode } from "./selectNode";

export const selectInputs = (
  nodeId: string,
  editorModel: EditorModel
): Inputs | undefined => {
  const node = selectNode(nodeId, editorModel.nodes);
  return node?.data?.inputs;
};
