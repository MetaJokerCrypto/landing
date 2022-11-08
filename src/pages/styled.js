import styled, { css } from 'styled-components';
import { ReactComponent as StarIcon } from 'images/stars.svg'
// Change react components

export const ItalicText = styled.span`
  font-style: italic;
`;

export const Stars = styled(StarIcon)`
  width: 24px;
  height: 24px;
`;
