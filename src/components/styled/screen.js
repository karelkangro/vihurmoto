import { css } from 'styled-components';

const sizes = {
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200
}

const screen = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default screen;