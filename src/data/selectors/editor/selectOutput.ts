import { OutputData } from "../../../classes/nodes/outputs/Outputs";
import EditorModel from "../../models/EditorModel";
import { selectOutputs } from "./selectOutputs";

export const selectOutput = (
  outputId: string,
  nodeId: string,
  editor: EditorModel
): OutputData | undefined => {
  return selectOutputs(nodeId, editor)[outputId];
};