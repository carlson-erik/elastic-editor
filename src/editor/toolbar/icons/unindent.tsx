import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

export default function Unindent(props: IconProps) {
  const { color, size = "large" } = props;
  return (
    <ToolbarIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -7 24 24"
      fill={color}
    >
      <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm6-4h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zm-6.44.143l2.057-1.234a1 1 0 0 1 1.515.857v2.468a1 1 0 0 1-1.515.857L.561 5.857a1 1 0 0 1 0-1.714z" />
    </ToolbarIcon>
  );
}
