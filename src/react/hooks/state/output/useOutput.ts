import { OutputData } from "../../../../classes/nodes/outputs/Outputs";
import { selectOutputs } from "../../../../data/selectors/editor/selectOutputs";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { useNode } from "../useNode";
import { useSetOutput } from "./useSetOutput";

export const useOutput = (
  outputId: string,
  nodeId: string
): MutableHookResult<OutputData> => {
  const node = useNode(nodeId),
    output = selectOutputs(node)[outputId],
    setter = useSetOutput(outputId, nodeId);
  return [output, setter];
};
