import { render } from "@testing-library/react";
import "jest-styled-components";

import Quote from "../../../../src/editor/toolbar/icons/quote";

describe("Quote Icon component", () => {
  test("Renders Quote icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Quote color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-6 -6 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5,0 C5.55228475,0 6,0.44771525 6,1 C6,1.55228475 5.55228475,2 5,2 C4.10675603,2 3.3046917,2.39038643 2.7551155,3.0098508 C2.8358823,3.00332588 2.91755275,3 3,3 C4.65685425,3 6,4.34314575 6,6 C6,7.65685425 4.65685425,9 3,9 C1.34314575,9 0,7.65685425 0,6 L0,5 C0,2.23857625 2.23857625,0 5,0 Z M13,0 C13.5522847,0 14,0.44771525 14,1 C14,1.55228475 13.5522847,2 13,2 C12.106756,2 11.3046917,2.39038643 10.7551155,3.0098508 C10.8358823,3.00332588 10.9175527,3 11,3 C12.6568542,3 14,4.34314575 14,6 C14,7.65685425 12.6568542,9 11,9 C9.34314575,9 8,7.65685425 8,6 L8,5 C8,2.23857625 10.2385763,0 13,0 Z M3,5 C2.44771525,5 2,5.44771525 2,6 C2,6.55228475 2.44771525,7 3,7 C3.55228475,7 4,6.55228475 4,6 C4,5.44771525 3.55228475,5 3,5 Z M11,5 C10.4477153,5 10,5.44771525 10,6 C10,6.55228475 10.4477153,7 11,7 C11.5522847,7 12,6.55228475 12,6 C12,5.44771525 11.5522847,5 11,5 Z"
        />
      </svg>
    `);
  });
});
