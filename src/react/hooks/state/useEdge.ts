import { Edge } from "reactflow";
import { selectFlow } from "../../../data/selectors/app/selectFlow";
import { selectEdge } from "../../../data/selectors/editor/selectEdge";
import useAppModel from "../../../data/store";

export const useEdge = (id: string, flowName: string): Edge => {
  const edge = useAppModel((store) =>
    selectEdge(id, selectFlow(flowName, store)?.editorModel)
  );
  return edge;
};
