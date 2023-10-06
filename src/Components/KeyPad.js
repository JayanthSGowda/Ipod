import { Component } from 'react';
import styles from '../Styles/KeyPad.module.css';
import WheelComponent from './WheelComponent';

export default class KeyPad extends Component {
  render() {
    return (
      <div class={styles.iKeyPad}>
        <WheelComponent active={this.props.active} setActive={this.props.setActive} wheel={this.props.wheel}  wheelStyle={styles.wheel}/>
      </div>
    );
  }
}
//►❙◄