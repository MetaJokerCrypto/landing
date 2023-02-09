import React from 'react';

import Heading from 'components/Text/Heading';
import RegularText from 'components/Text/RegularText';

import { data } from 'data/projectInfoData'

import { Wrapper } from './styled'

const ProjectInfoBlock = () => {
  return (
    <>
      {data?.map(({ title, text, list }, i) => {
        return (
          <Wrapper key={i}>
            <Heading type="h2">{title}</Heading>
            {text?.map((textItem, i) => (
              <RegularText key={i}>{textItem}</RegularText>
            ))}
            <ul>
              {list?.map((listItem, i) => (
                <li key={i}>
                  <>{listItem}</>
                </li>
              ))}
            </ul>
          </Wrapper>
        )
      })}
    </>
  );
};

export default ProjectInfoBlock;

