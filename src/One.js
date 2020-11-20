
import React, {useState} from 'react'
import {Container, Header, Form, Input, Button} from 'semantic-ui-react'

function One(){

	const [count, setCount] = useState(0);

	function add(value) { setCount(Math.min(100,Math.max(0,count+value))) }

	return (
		<Container>
		<Header as="h2">GUI #1: Counter</Header>
		<Form>
		<Form.Group inline>
			<Form.Field>
				<Input value={count} readonly/>
			</Form.Field>
			<Form.Field>
				<Button onClick={()=>add(1)}>Plus One</Button>
			</Form.Field>
			<Form.Field>
				<Button onClick={()=>add(-1)}>Minus One</Button>
			</Form.Field>
			<Form.Field>
				<Button onClick={()=>add(10)}>Plus Ten</Button>
			</Form.Field>
			<Form.Field>
				<Button onClick={()=>add(-10)}>Minus Ten</Button>
			</Form.Field>
		</Form.Group>
		</Form>
		</Container>
	);
}

export default One;
