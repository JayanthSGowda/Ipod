import { Component } from 'react';
import styles from '../Styles/KeyPad.module.css';
import WheelComponent from './WheelComponent';

export default class KeyPad extends Component {
  render() {
    return (
      <div class={styles.iKeyPad}>
        <WheelComponent wheelStyle={styles.wheel}/>
      </div>
    );
  }
}
//►❙◄