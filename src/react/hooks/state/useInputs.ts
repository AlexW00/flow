import { Inputs } from "../../../classes/nodes/outputs/Inputs";
import { selectInputs } from "../../../data/selectors/editor/selectInputs";
import { useNode } from "./useNode";

export const useInputs = (nodeId: string): Inputs | undefined => {
  const node = useNode(nodeId),
    inputs = selectInputs(node);
  return inputs;
};
