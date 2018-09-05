import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const Story = styled.div`
  font-family: Playfair Display;
  font-style: italic;
  font-size: 2.5em;
  margin: 50px 0 0 0;
`;

const About = styled.div`
  font-family: Lato;
  font-weight: 300;
  font-size: 3.1em;
  letter-spacing: 2px;
  margin: 20px 0;
`;

class Body extends React.Component {
  render() {
    return (
      <Container>
        <Story>Our Story</Story>
        <About>ABOUT</About>
      </Container>
    );
  }
}

export default Body;