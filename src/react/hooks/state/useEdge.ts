import { Edge } from "reactflow";
import { selectFlow } from "../../selectors/app/selectFlow";
import { selectEdge } from "../../selectors/editor/selectEdge";
import useAppModel from "../../store";

export const useEdge = (id: string, flowName: string): Edge => {
  return useAppModel((store) =>
    selectEdge(id, selectFlow(flowName, store)?.editorModel)
  );
};
