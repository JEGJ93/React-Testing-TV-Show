import React from "react";

import { render, fireEvent, wait } from "@testing-library/react";

import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

import { mockShows, mockShowData } from "./fixtures/shows";

jest.mock("./api/fetchShow");

test('updates show data' , async () => {

    mockFetchShow.mockResolvedValueOnce({data: mockShowData})
   
    const { queryAllByTestId } = render(<App />);

    expect(queryAllByTestId('shows')).toHaveLength(0);


    await wait();
    
    expect(queryAllByTestId('shows')).toBeTruthy();

   

    

})