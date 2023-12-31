import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

export default function Paragraph(props: IconProps) {
  const { color, size = "large" } = props;
  return (
    <ToolbarIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-6 -6 24 24"
      fill={color}
    >
      <path d="M12,2 L12,13 C12,13.5522847 11.5522847,14 11,14 C10.4477153,14 10,13.5522847 10,13 L10,2 L8,2 L8,13 C8,13.5522847 7.55228475,14 7,14 C6.44771525,14 6,13.5522847 6,13 L6,8 L4,8 C1.790861,8 0,6.209139 0,4 C0,1.790861 1.790861,0 4,0 L13,0 C13.5522847,0 14,0.44771525 14,1 C14,1.55228475 13.5522847,2 13,2 L12,2 Z M6,6 L6,2 L4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 L6,6 Z" />
    </ToolbarIcon>
  );
}
