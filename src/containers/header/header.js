import React, {Component} from 'react';

import styled from 'styled-components';

const Container = styled.header`
  background-color: #FAFAF9;
  height: 150px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5em;
  color: #3e3e3b;
  line-height: 150px;
  margin: 0;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <Title>Nora</Title>
      </Container>
    );
  }
}

export default Header;
