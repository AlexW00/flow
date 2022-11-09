import { Inputs } from "../../../classes/nodes/outputs/Inputs";
import { selectFlow } from "../../../data/selectors/app/selectFlow";
import { selectInputs } from "../../../data/selectors/editor/selectInputs";
import useAppModel from "../../../data/store";

export const useInputs = (
  nodeId: string,
  flowName: string
): Inputs | undefined => {
  return useAppModel((store) =>
    selectInputs(nodeId, selectFlow(flowName, store)?.editorModel)
  );
};
