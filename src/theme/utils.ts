const pxToRem = (n: number, base: number = 16) => n/base;

// generate media queries such as (min-width: 480rem)
const media = (sizes: {[key: string]: number}) =>
  Object.keys(sizes).reduce((acc, curr) => {
    acc[curr] = `min-width: ${pxToRem(sizes[curr])}rem`;
    return acc;
},{});

export {
  pxToRem,
  media,
};
