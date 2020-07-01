import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CenteredDiv = styled.div`
	text-align: center;
`;
const StyledButton = styled(Button)`
	margin-top: 3%;
	padding: 3%, %5, 3%, 5%;
`;

class PCComponent extends React.Component {
	constructor(props) {
		super(props);
		if (!this.props.PCComponent) {
			this.props.history.push("/components-view");
		}
	}
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row-fluid'>
						<div className='span12'>
							<CenteredDiv>
								<table
									className='components-list table table-striped table-bordered'
									style={{ margin: "auto" }}>
									<thead className='thead-dark'>
										<tr>
											<th colSpan='2'>All Information</th>
										</tr>
									</thead>
									<tbody>
										{this.props.fields &&
											this.props.PCComponent &&
											this.props.fields.map((row, index) => {
												return (
													<tr key={index}>
														<td>{row[1]}</td>
														<td>{this.props.PCComponent.get(row[0])}</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</CenteredDiv>
						</div>
					</div>
				</div>
				<CenteredDiv>
					<LinkContainer to='/components-view'>
						<StyledButton>Return to View Components</StyledButton>
					</LinkContainer>
				</CenteredDiv>
			</React.Fragment>
		);
	}
}

PCComponent.protoTypes = {
	ComponentRow: Object.isRequired,
	fields: Array.isRequired,
};

export default PCComponent;
