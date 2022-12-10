import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

type DragbarProps = {
  name: string;
  color?: string;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
};

export const DragbarComponent = ({
  name,
  color,
  isCollapsed,
  setIsCollapsed,
}: DragbarProps): JSX.Element => {
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "1.2rem",
        backgroundColor: color ?? "rgba(0,0,0,0.1)",
        padding: "0.15rem",
      }}
    >
      {isCollapsed ? (
        <ChevronUp
          size={15}
          onClick={toggleCollapse}
          style={{ marginRight: "0.15rem" }}
        />
      ) : (
        <ChevronDown
          size={15}
          onClick={toggleCollapse}
          style={{ marginRight: "0.15rem" }}
        />
      )}
      <span>{name}</span>
    </div>
  );
};
