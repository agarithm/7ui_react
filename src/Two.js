
import React, {useState} from 'react'
import {Container, Header, Form, Input} from 'semantic-ui-react'

function Two(){

	const [c,setC] = useState(0)
	const [f,setF] = useState(32)

	function cChange(e) {
		setC(parseInt(e.target.value))
		setF(parseInt(e.target.value*9/5+32))
	}

	function fChange(e) {
		setF(parseInt(e.target.value))
		setC(parseInt((e.target.value-32)*5/9))
	}

	return (
		<Container>
		<Header as="h2">GUI #2: Temperature Converter</Header>
		<Form>
		<Form.Group inline>
			<Form.Field>
				<label>Celsius</label>
				<Input type="number" value={c} onChange={cChange}/>
			</Form.Field>
			<Form.Field>
				<label>Fahrenheit</label>
				<Input type="number" value={f} onChange={fChange}/>
			</Form.Field>
		</Form.Group>
		</Form>
		</Container>
	);
}

export default Two;
