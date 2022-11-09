import styled, { css } from 'styled-components';

const getAnimations = () => {
	let boxShadow= ''
  let colors = ['#ffffff', '#ddf542', '#884a8c', '#719bbf'];
  let top = 0;
  let left = 0;
  let width = 0;
  let height = 0;
  let color = '';

  for (let i = 0; i < 200; i++) {
    top = Math.round(Math.random() * (Math.random() < 0.5 ? -50 : 50));
    left = Math.round(Math.random() *(Math.random() < 0.5 ? -50 : 50));
    width = Math.floor(Math.random());
    height = Math.floor(Math.random());
    color =  colors[Math.floor(Math.random() * colors.length)];

    if (i < 199) {
      boxShadow += `${top}vw ${left}vh ${width}px ${height}px ${color}, `
    } else {
      boxShadow += `${top}vw ${left}vh ${width}px ${height}px ${color}`
    }
  };

  return `box-shadow: ${boxShadow};`;
};


export const Starfield = styled.div(
  ({ theme: { colors }}) => css`
    overflow: hidden;
    transform-origin: 50% 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 1px;
    background-color: #fff;
    border-radius: 50%;
    ${getAnimations()};
    animation: zoom 10s alternate;

    @keyframes zoom {
      0% { opacity: 0; }
      80% { opacity: 1; }
    }
  `
);
