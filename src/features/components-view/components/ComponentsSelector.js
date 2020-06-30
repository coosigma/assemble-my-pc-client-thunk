import React, { Fragment } from "react";
// import styled from "styled-components";
// import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap";

class ComponentsSelector extends React.Component {
	render() {
		return (
			<Fragment>
				<select name='category' onChange={this.props.onCategoryChange}>
					{/* {console.log(this.props.optionGroups.get("currentCategory"))} */}
					{this.props.optionGroups
						.get("currentCategory")
						.map((option, index) => {
							return (
								<option key={index} value={option[0]}>
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
};

export default ComponentsSelector;
