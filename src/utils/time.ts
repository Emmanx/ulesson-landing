export const convertMinsToHrsMins = (minutes: number): string => {
  let h: number | string = Math.floor(minutes / 60);
  let m: number | string = minutes % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return h > 0
    ? `${Math.round(h as number)}h ${Math.round(m as number)}m`
    : `${Math.round(m as number)}m`;
};
