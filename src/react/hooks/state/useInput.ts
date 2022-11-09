import { OutputData } from "../../../classes/nodes/outputs/Outputs";
import { selectInput } from "../../../data/selectors/editor/selectInput";
import useAppModel from "../../../data/store";
import { selectFlow } from "../../../data/selectors/app/selectFlow";

export const useInput = (
  inputId: string,
  nodeId: string,
  flowName: string
): OutputData => {
  const input = useAppModel((store) =>
    selectInput(inputId, nodeId, selectFlow(flowName, store)?.editorModel)
  );
  return input;
};
