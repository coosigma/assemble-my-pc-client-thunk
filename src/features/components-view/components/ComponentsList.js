import React from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const TableDiv = styled.div`
	// background-color: red;
	// color: blue;
	text-align: center;
`;

class ComponentsList extends React.Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className='row-fluid'>
					<div className='span12'>
						<TableDiv>
							<table
								className='components-list table table-striped'
								style={{ margin: "auto" }}>
								<thead className='thead-dark'>
									<tr>
										<th>Select</th>
										<th>Producer</th>
										<th>Type</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									{this.props.list &&
										this.props.list.map((row, index) => {
											return (
												<tr key={index}>
													<td>
														<Form.Check
															type='radio'
															aria-label='list-selector'
															onChange={(e) => {
																console.log(e.target.value);
															}}
														/>
													</td>
													{Array.from(row.keys()).map((key) => {
														return <td key={key}>{row.get(key)}</td>;
													})}
												</tr>
											);
										})}
								</tbody>
							</table>
						</TableDiv>
					</div>
				</div>
			</div>
		);
	}
}

ComponentsList.protoTypes = {
	list: Array.isRequired,
};

export default ComponentsList;
