import React, {Component} from 'react';

class RangeInput extends Component {
	constructor(props) {
		super(props)
		this.state = {text: '', valid: false}

		this.onChange = event => {
			this.setState({text: event.target.value, valid: validate(event.target.value)})
		}

		let validate = str => str.length >= props.min && str.length <= props.max
	}
	render() {
		return (
			<input value={this.state.text}
				style={{backgroundColor: this.state.valid ? 'green' : 'red'}}
					onChange={this.onChange}
			/>
		)
	}
}

class PasswordConfirm extends Component {
	constructor(props) {
		super(props)
		this.state = {pass1: '', pass2: '', valid1: false, valid2: false, considense: false}

		this.onChange = event => {
			let inp1 = document.getElementById('1')
			let inp2 = document.getElementById('2')
			this.setState({
				pass1: inp1.value, pass2: inp2.value, 
				valid1: validate(inp1.value), valid2: validate(inp2.value),
				considense: passConsident(inp1.value, inp2.value)
			})
		}
		let validate = str => str.length >= props.min
		let passConsident = (str1, str2) => str1 === str2
	}
	render() {
		return (
			<>
				<input id={1} type={'password'} 
					value={this.state.pass1}
						style={{backgroundColor: this.state.valid1 && this.state.considense ? 'green' : 'red'}}
							onChange={this.onChange}
				/>
				<input id={2} type={'password'} 
					value={this.state.pass2}
						style={{backgroundColor: this.state.valid2 && this.state.considense ? 'green' : 'red'}}
							onChange={this.onChange}
				/>
			</>
		)
	}
}

function App() {
	return (
		<>
			<RangeInput min={2} max={10} />
			<PasswordConfirm min={2} />
		</>
	)
}

export default App
