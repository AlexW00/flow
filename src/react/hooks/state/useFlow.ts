import produce from "immer";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import AppModel from "../../../data/models/AppModel";
import FlowModel from "../../../data/models/FlowModel";
import { selectFlow } from "../../../data/selectors/app/selectFlow";
import { setFlow } from "../../../data/setters/app/setFlow";
import useAppModel from "../../../data/store";

export const useFlow = (flowName: string): MutableHookResult<FlowModel> => {
  const flow = useAppModel((store) => selectFlow(flowName, store)),
    setter = (flow: FlowModel) =>
      useAppModel.setState(produce((draft: AppModel) => setFlow(flow, draft)));
  return [flow, setter];
};
