import EditorModel from "../../models/EditorModel";
import { Edge } from "reactflow";

export const selectEdge = (
  id: string,
  editorModel: EditorModel
): Edge | undefined => {
  return editorModel.edges.find((e) => e.id === id);
};
