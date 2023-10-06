import { Component } from 'react';
import MenuList from './MenuList';
import Styled from 'styled-components';

const ListItem = Styled.h1`

`;
export default class Screen extends Component {
  render() {
    console.log(this.props.active);
    return (
      <div style={{
        width:'250px',
        height:'250px',
        border: '1px solid black',
      }}>
        <MenuList active={this.props.active}/>
           
      </div>
    );
  }
}