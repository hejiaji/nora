import React from 'react';

import styled from 'styled-components';
import profilePic from '../../assets/profile.JPG';
import { media } from '../../helpers/media/media';

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  
  ${media.phone`
    padding: 0 8px;
  `}
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

const Content = styled.div`
  display: flex;
  > img {
    max-width: 400px;
    max-height: 400px;
  }
  
  ${media.phone`
    flex-direction: column;
    > img {
      width: 100%;
    }
  `}
`;

const Description = styled.div`
  word-wrap: break-word;
  line-height: 22px;
  
  ${media.phone`
    margin-bottom: 10px;
  `}
`;

class Body extends React.Component {
  render() {
    return (
      <Container>
        <Story>Our Story</Story>
        <About>ABOUT</About>
        <Content>
          <Description>Nora was born in March of 2015, since that day she had been a important member in our family. She is the most lovely and obedient baby, she is afraid of strangers, normally will take at least 3 days to get acquainted with you.</Description>
          <img src={profilePic} alt="profile"/>
        </Content>
      </Container>
    );
  }
}

export default Body;