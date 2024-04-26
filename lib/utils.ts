export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

export const formatNumber = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
