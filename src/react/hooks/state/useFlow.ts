import produce from "immer";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import AppModel from "../../models/AppModel";
import FlowModel from "../../models/FlowModel";
import { selectFlow } from "../../selectors/app/selectFlow";
import { setFlow } from "../../setters/app/setFlow";
import useAppModel from "../../store";

export const useFlow = (flowName: string): MutableHookResult<FlowModel> => {
  const flow = useAppModel((store) => selectFlow(flowName, store)),
    setter = (flow: FlowModel) =>
      useAppModel.setState(produce((draft: AppModel) => setFlow(flow, draft)));
  return [flow, setter];
};
