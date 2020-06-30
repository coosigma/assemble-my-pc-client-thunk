import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import generateStore from "../containers/store";
import App from "./App";

test("renders learn react link", () => {
	const { getByText } = render(
		<Provider store={generateStore()}>
			<App />
		</Provider>
	);

	expect(getByText(/learn/i)).toBeInTheDocument();
});
