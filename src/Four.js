
import React, {useState,useEffect,useRef} from 'react'
import {Container, Header, Grid, Button, Input, Progress} from 'semantic-ui-react'

function Four(){


	const [start,setStart] = useState(Date.now())
	const [running,setRunning] = useState(false)
	const [duration,setDuration] = useState(10)
	const [elapsed,setElapsed] = useState(0)


	function restart(){
		if(!running && elapsed>0){
			//Offset the start to now-elapsed
			setStart(Date.now()-elapsed)
		}else{
		setElapsed(0);
		setStart(Date.now());
		}
		setRunning(true);
	}

	function adjust(e){
		setDuration(e.target.value);
	}

	function stop(){
		if(!running)setElapsed(0);
		setRunning(false);
	}

	function tick(){
		if(running){
			let now = Date.now();
			let ms = Math.max(0,now - start);
			ms = elapsed===ms ? ms+1 : ms
			setElapsed(ms)
		}
	}

	useInterval(tick,33);

	return (
		<Container>
		<Header as="h2">GUI #4: Timer</Header>
		<Grid>
		<Grid.Row>
			<Grid.Column>
				<Progress indicating={running} autoSuccess={running} label={(elapsed/1000).toFixed(1)+'s'} percent={Math.min(100,100*((elapsed/1000)/duration))} />
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				<Input label='Duration' type='range' value={duration} min='10' max='60' step='1' onChange={adjust} />
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				<Button onClick={restart}>{running? 'Restart' : 'Start' }</Button>
				<Button onClick={stop} >{running? 'Stop' : 'Reset'}</Button>
			</Grid.Column>
		</Grid.Row>
		</Grid>
		</Container>
	);
}


//https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197
function useInterval(callback, delay){
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	},[callback]);

	useEffect(() => {
		function tick(){
			savedCallback.current();
		}
		if(delay !== null){
			const id = setInterval(tick,delay);
			return ()=>{clearInterval(id);};
		}
	}, [callback,delay]);
}

export default Four;
