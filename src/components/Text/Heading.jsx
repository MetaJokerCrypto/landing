import React from 'react';

import { H1, H2 } from './styled';

const Heading = ({ children, type, customStyles }) => (
  type === 'h1' ? <H1 customStyles={customStyles}>{children}</H1> : <H2 customStyles={customStyles}>{children}</H2>
);

export default Heading;
