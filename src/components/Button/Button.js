import React from 'react';

import { ButtonWrapper } from './styled';

const Button = ({ children, customStyles, onClick }) => <ButtonWrapper customStyles={customStyles} onClick={onClick}>{children}</ButtonWrapper>;

export default Button;
