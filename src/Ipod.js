import { Component } from 'react';
import KeyPad from './Components/KeyPad';
import Screen from './Components/Screen';
export default class Ipod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }
  setActive = (active) => {
    this.setState({ active });
  }
  render() {

    return (
      <div>
        <Screen active={this.state.active}/>
        <KeyPad active={this.state.active} setActive={(newActive)=>(this.setActive(newActive))}/>
      </div>
    );
  }
}