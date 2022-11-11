import produce from "immer";
import { OutputData, Outputs } from "src/classes/nodes/outputs/Outputs";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import AppModel from "../../../data/models/AppModel";
import { selectOutputs } from "../../../data/selectors/editor/selectOutputs";
import { setOutputs } from "../../../data/setters/editor/setOutputs";
import useAppModel from "../../../data/store";
import { useFlowName } from "../context/useFlowName";
import { useNode } from "./useNode";

export const useOutputs = (nodeId: string): MutableHookResult<OutputData> => {
  const flowName = useFlowName(),
    node = useNode(nodeId),
    outputs = selectOutputs(node),
    setter = (outputs: Outputs) =>
      useAppModel.setState(
        produce((draft: AppModel) => {
          setOutputs(outputs, nodeId, flowName, draft);
        })
      );
  return [outputs, setter];
};
