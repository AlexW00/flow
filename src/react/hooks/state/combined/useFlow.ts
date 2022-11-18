import { MutableHookResult } from "src/classes/react/StateHookResult";
import FlowModel from "../../../../data/models/FlowModel";
import { useGetFlow } from "../getters/useGetFlow";
import { useSetFlow } from "../setters/useSetFlow";

export const useFlow = (): MutableHookResult<FlowModel> => {
  const flow = useGetFlow(),
    setter = useSetFlow();
  return [flow, setter];
};
