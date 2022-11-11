import { OutputData } from "../../../classes/nodes/outputs/Outputs";
import { selectInput } from "../../../data/selectors/editor/selectInput";
import { useNode } from "./useNode";

export const useInput = (inputId: string, nodeId: string): OutputData => {
  const node = useNode(nodeId);
  const input = selectInput(inputId, node);
  return input;
};
