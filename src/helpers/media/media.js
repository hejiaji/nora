import { css } from 'styled-components';

const SIZES = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the SIZES and create a media template
const media = Object.keys(SIZES).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${SIZES[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media };
