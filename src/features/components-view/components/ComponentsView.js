import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import ComponentsSelector from "./ComponentsSelector";
import ComponentsList from "./ComponentsList";

class ComponentsView extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ComponentsSelector
					currentCategory={this.props.currentCategory}
					optionGroups={this.props.selectorOptions}
					valueGroups={this.props.selectorValues}
					onCategoryChange={this.props.onCategoryChange}
				/>
				<ComponentsList
					isFetching={this.props.allComponents.get("isFetching")}
					list={this.props.list}
				/>
			</React.Fragment>
		);
	}
}

ComponentsView.protoTypes = {
	allComponents: ImmutablePropTypes.contains({
		isFetching: Boolean.isRequired,
		didInvalidate: Boolean.isRequired,
		data: ImmutablePropTypes.map.isRequired,
	}),
	currentCategory: String,
	selectorOptions: Object.isRequired,
	selectorValues: Object.isRequired,
	onCategoryChange: Function,
	list: Array,
};

export default ComponentsView;
