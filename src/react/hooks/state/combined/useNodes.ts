import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { Node } from "react-flow-renderer";

import { MutableHookResult } from "src/classes/react/StateHookResult";
import { useGetNodes } from "../getters/useGetNodes";
import { useSetNodes } from "../setters/useSetNodes";

export const useNodes = (): MutableHookResult<Node<CustomNodeData>[]> => {
  const nodes = useGetNodes(),
    setter = useSetNodes();
  return [nodes, setter];
};
