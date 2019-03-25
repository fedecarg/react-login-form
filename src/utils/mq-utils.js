import { css } from 'styled-components';

export const bpxs = '(max-width: 479px)';
export const bpsm = '(min-width: 480px)';
export const bpmd = '(min-width: 700px)';
export const bpmdlg = '(min-width: 1024px)';
export const bplg = '(min-width: 1366px)';

export const xs = (style) => css`
  @media ${bpxs} {
    ${style};
  }
`;

export const sm = (style) => css`
  @media ${bpsm} {
    ${style};
  }
`;

export const md = (style) => css`
  @media ${bpmd} {
    ${style};
  }
`;

export const mdlg = (style) => css`
  @media ${bpmdlg} {
    ${style};
  }
`;

export const lg = (style) => css`
  @media ${bplg} {
    ${style};
  }
`;
