import { Component } from 'react';
import KeyPad from './Components/KeyPad';
import Screen from './Components/Screen';
export default class Ipod extends Component {
  render() {
    return (
      <div>
        <Screen/>
        <KeyPad/>
      </div>
    );
  }
}