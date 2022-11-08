import React from 'react';

import { H1, H2 } from './styled';

const Heading = ({ children, type }) => {
  return type === 'h1' ? <H1>{children}</H1> : <H2>{children}</H2>
};

export default Heading;
