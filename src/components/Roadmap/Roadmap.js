import React from 'react';

import { Wrapper, TimeLine, Block, Content, Circle } from './styled';

const Roadmap = () => {
  return (
    <Wrapper>
      <TimeLine />
      <Block left>
        <Circle />
        <Content>
          <h2>Title of section 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
          <span class="cd-date">Jan 18</span>
        </Content>
      </Block>
      <Block>
        <Circle />
        <Content>
          <h2>Title of section 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
          <span class="cd-date">Jan 18</span>
        </Content>
      </Block>
    </Wrapper>
  );
};

export default Roadmap;

