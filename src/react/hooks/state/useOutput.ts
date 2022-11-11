import { OutputData } from "../../../classes/nodes/outputs/Outputs";
import useAppModel from "../../../data/store";
import produce from "immer";
import AppModel from "../../../data/models/AppModel";
import { selectOutputs } from "../../../data/selectors/editor/selectOutputs";
import { setOutput } from "../../../data/setters/editor/setOutput";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { useFlowName } from "../context/useFlowName";
import { useNode } from "./useNode";

export const useOutput = (
  outputId: string,
  nodeId: string
): MutableHookResult<OutputData> => {
  const flowName = useFlowName(),
    node = useNode(nodeId),
    output = selectOutputs(node)[outputId],
    setter = (output: OutputData) =>
      useAppModel.setState(
        produce((draft: AppModel) => {
          setOutput(output, outputId, nodeId, flowName, draft);
        })
      );
  return [output, setter];
};
