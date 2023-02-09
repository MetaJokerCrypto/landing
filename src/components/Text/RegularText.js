import React from 'react';

import { P } from './styled';

const RegularText = ({ children, customStyles }) => {
  return <P customStyles={customStyles}>{children}</P>;
};

export default RegularText;
