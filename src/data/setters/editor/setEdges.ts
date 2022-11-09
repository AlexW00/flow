import { Edge } from "reactflow";
import AppModel from "../../models/AppModel";
import { selectFlow } from "../../selectors/app/selectFlow";
import { addEdge } from "./addEdge";
import { deleteEdge } from "./deleteEdge";

export const setEdges = (
  edges: Edge[],
  flowName: string,
  appModel: AppModel
): void => {
  const editorModel = selectFlow(flowName, appModel)?.editorModel;

  // delete edges that are not in the new list
  editorModel.edges
    // find them
    ?.filter((oldEdge) => edges.indexOf(oldEdge) === -1)
    // create delete actions
    .map((edgeToDelete) => () => deleteEdge(edgeToDelete, editorModel))
    // execute delete actions
    .forEach((deleteEdge) => deleteEdge());

  // add all new edges
  edges.forEach((edge) => addEdge(edge, editorModel));
};