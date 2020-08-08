import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./components/Episodes";
import {mockShows} from "./fixtures/shows";

test('renders component', () => {
    render(<Episodes episodes={[]} error="" />)
});
test('component renders with new show data', () => {

    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} error="" />);

    expect(queryAllByTestId('shows')).toHaveLength(0);
    expect(queryAllByTestId('shows')).toStrictEqual([]);

    rerender(<Episodes episodes={mockShows} error="" />);
    expect(queryAllByTestId('shows')).toHaveLength(3);

});