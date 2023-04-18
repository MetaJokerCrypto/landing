import React from 'react';

import { ButtonWrapper } from './styled';

const Button = ({ children, customStyles }) => <ButtonWrapper customStyles={customStyles}>{children}</ButtonWrapper>;

export default Button;
