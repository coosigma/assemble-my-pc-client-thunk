import { connect } from "react-redux";
import ComponentsView from "../components/ComponentsView";
import { ACTIONS } from "../actions/mainAction";

function allComponentsToComponentsList(state) {
	const rawData = state.getIn(["allComponents", "data"]);
	if (rawData.size === 0) {
		return [];
	}
	const headers = ["producer", "type", "price"];
	const category = state.get("currentCategory");
	const sourceList = rawData.get(category);
	if (!sourceList) {
		return [];
	}
	const items = [];
	for (const item of sourceList) {
		const source = item.get("_source");
		const listItem = new Map();
		for (const field of headers) {
			const value = source.get(field);
			if (value) {
				listItem.set(field, value);
			}
		}
		items.push(listItem);
	}
	return items;
}

const selectorOptions = new Map([
	[
		"currentCategory",
		[
			["", "(Select...)"],
			["CPU", "CPU"],
			["RAM", "RAM"],
		],
	],
]);

const selectorValues = (state) => ({
	currentCategory: state.get("currentCategory"),
});

const mapStateToProps = (state) => ({
	allComponents: state.get("allComponents"),
	selectorOptions,
	selectorValues: selectorValues(state),
	list: allComponentsToComponentsList(state),
});

const mapDispatchToProps = (dispatch) => ({
	onCategoryChange: (event) => {
		const category = event.target.value;
		if (category !== "") {
			dispatch(ACTIONS.REQUEST_CATEGORY(category));
		}
		dispatch(ACTIONS.SET_CURRENT_CATEGORY(category));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsView);
