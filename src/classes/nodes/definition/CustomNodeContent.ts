import { FunctionComponent } from "react";
import { CustomNodeData } from "../CustomNodeData";

export type CustomNodeComponent = FunctionComponent<{ data: CustomNodeData }>;
