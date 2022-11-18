import { OutputData } from "../../../../classes/nodes/outputs/Outputs";
import useAppModel from "../../../../data/store";
import produce from "immer";
import AppModel from "../../../../data/models/AppModel";
import { setOutput } from "../../../../data/setters/editor/setOutput";
import { Setter } from "src/classes/react/StateHookResult";
import { useFlowName } from "../../context/useFlowName";

export const useSetOutput = (
  outputId: string,
  nodeId: string
): Setter<OutputData> => {
  const flowName = useFlowName(),
    setter = (output: OutputData) =>
      useAppModel.setState(
        produce((draft: AppModel) => {
          setOutput(output, outputId, nodeId, flowName, draft);
        })
      );
  return setter;
};
