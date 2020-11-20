
import React, {useState} from 'react'
import {Container, Header, Form, Dropdown, Input} from 'semantic-ui-react'

function Three(){

	let now = new Date()
	const today = now.toISOString().substring(0,10)
	now.setDate(now.getDate()+1)
	const tomorrow = now.toISOString().substring(0,10)
	const [away,setAway] = useState(tomorrow)
	const [home,setHome] = useState('')
	const [returningRequired,setReturningRequired] = useState(true)
	const types = [
		{
			text: 'One Way Flight',
			value: 'one'
	},{
			text: 'Return Flight',
			value: 'two'
	}]

	const [type,setType] = useState('two')

	function typeChanged(e){
		if((e.target.innerText === types[1].text)){
			setReturningRequired(true);
			setType('two');
		}else{
			setReturningRequired(false);
			setType('one');
		}

	}

	function dateChanged(e) {
		if(e.target.value < today){
			//no time travelling
			e.target.value = ''
		}

		switch (e.target.name){
			case 'home':
				if(e.target.value >= away){
					setHome(e.target.value)
				}else{
					setHome('')
				}
				break
			case "away":
				setAway(e.target.value)
				if ((! home) || (e.target.value < home)){
					setAway(e.target.value)
				}else{
					//return flight before away... swap the dates
					setHome('')
					setAway(e.target.value)
				}
				break
			default:
				break;
		}
	}

	return (
		<Container>
		<Header as="h2">GUI #3: Constraints </Header>
		<Form>
		<Form.Group >
		<Form.Field>
		<label>Ticket Type</label>
		<Dropdown 
			options={types} 
			name='type' 
			defaultValue={type}
			onChange={typeChanged} selection/>
		</Form.Field>
		<Form.Field>
		<label>Leaving</label>
		<Input type="date" value={away} name='away' onChange={dateChanged}/>
		</Form.Field>
		<Form.Field>
		<label>Returning</label>
		<Input type="date" value={home} name='home' onChange={dateChanged} required={returningRequired} disabled={!returningRequired}/>
		</Form.Field>
		</Form.Group>
		</Form>
		</Container>
	);
}

export default Three;
