import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Container, Grid, Header} from 'semantic-ui-react'
import One from './One.js';
import Two from './Two.js';
import Three from './Three.js';
import Four from './Four.js';

function App() {
	return (
		<Container fluid>
		<Grid stackable stretched padded centered columns='equal'>
			<Grid.Row >
				<Grid.Column>
					<Header as='h1'>Header</Header>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row >
				<Grid.Column>
					<One />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row >
				<Grid.Column>
					<Two />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row >
				<Grid.Column>
					<Three />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row >
				<Grid.Column>
					<Four />
				</Grid.Column>
			</Grid.Row>
		</Grid>
		</Container>
	);
}

export default App;
