import React, { Fragment } from "react";

class ComponentsSelector extends React.Component {
	render() {
		return (
			<Fragment>
				<select name='category' onChange={this.props.onCategoryChange}>
					{this.props.optionGroups
						.get("currentCategory")
						.map((option, index) => {
							return (
								<option
									key={index}
									value={option[0]}
									selected={this.props.currentCategory === option[0]}>
									{option[1]}
								</option>
							);
						})}
				</select>
			</Fragment>
		);
	}
}

ComponentsSelector.protoTypes = {
	optionGroups: Object.isRequired,
	valueGroups: Object.isRequired,
	onCategoryChang: Function,
	currentCategory: String,
};

export default ComponentsSelector;
