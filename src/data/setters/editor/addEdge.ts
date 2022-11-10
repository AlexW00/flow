import { Edge } from "reactflow";
import EditorModel from "../../models/EditorModel";
import { selectNode } from "../../selectors/editor/selectNode";

export const addEdge = (edge: Edge, editorModel: EditorModel): void => {
  editorModel.edges = editorModel.edges.filter((e) => e.id !== edge.id);
  editorModel.edges.push(edge);

  if (edge.targetHandle && edge.sourceHandle) {
    // update the input of the target node
    const targetNode = selectNode(edge.target, editorModel.nodes),
      sourceNode = selectNode(edge.source, editorModel.nodes);
    if (sourceNode && targetNode) {
      console.log("updating input");
      targetNode.data.inputs[edge.targetHandle] =
        sourceNode.data.outputs[edge.sourceHandle];
    }
  }
};
