import EditorModel from "../../models/EditorModel";

export const findEdgeIndex = (id: string, editorModel: EditorModel): number => {
  return editorModel.edges.findIndex((e) => e.id === id);
};
