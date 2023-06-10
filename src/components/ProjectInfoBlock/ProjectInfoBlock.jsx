import React from 'react';
import styled from 'styled-components';

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';

import { data } from 'data/projectInfoData';

const ProjectInfoBlock = () => (
  <>
    {data?.map(({ title, text, list }, i) => (
      <Wrapper key={i}>
        <Heading type="h2">{title}</Heading>
        {text?.map((textItem, i) => (
          <RegularText key={i}>{textItem}</RegularText>
        ))}
        <ul>
          {list?.map((listItem, i) => (
            <li key={i}>{listItem}</li>
          ))}
        </ul>
      </Wrapper>
    ))}
  </>
);

export default ProjectInfoBlock;

const Wrapper = styled.div`
  margin-bottom: 5rem;
`;
