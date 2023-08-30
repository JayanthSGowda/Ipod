import Ipod from './Ipod.js';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div style={{
        position: 'absolute',
      }}>
        <Ipod/>
      </div>
    );
  }
} 

export default App;
