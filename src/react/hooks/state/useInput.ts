import { OutputData } from "../../../classes/nodes/outputs/Outputs";
import { selectInput } from "../../selectors/editor/selectInput";
import useAppModel from "../../store";
import { selectFlow } from "../../selectors/app/selectFlow";

export const useInput = (
  inputId: string,
  nodeId: string,
  flowName: string
): OutputData => {
  return useAppModel((store) =>
    selectInput(inputId, nodeId, selectFlow(flowName, store)?.editorModel)
  );
};
