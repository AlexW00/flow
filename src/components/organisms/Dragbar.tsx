import { Flex, Text } from "@chakra-ui/react";
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
    <Flex
      style={{
        alignItems: "center",
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
      <Text>{name}</Text>
    </Flex>
  );
};
