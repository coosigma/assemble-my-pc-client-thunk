import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import ComponentsSelector from "./ComponentsSelector";
import ComponentsList from "./ComponentsList";

class ComponentsView extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ComponentsSelector
					optionGroups={this.props.selectorOptions}
					valueGroups={this.props.selectorValues}
					onCategoryChange={this.props.onCategoryChange}
				/>
				<ComponentsList list={this.props.list} />
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
	selectorOptions: Object.isRequired,
	selectorValues: Object.isRequired,
	onCategoryChange: Function,
	list: Array,
};

export default ComponentsView;
