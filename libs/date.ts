const isYYYY_MM_DD = (date: string): date is `YYYY-MM-DD` => /^\d{4}-\d{2}-\d{2}$/.test(date);
const isYYYYMMDD = (date: string): date is `YYYYMMDD` => /^\d{4}-\d{2}-\d{2}$/.test(date);

export const extractYear = (date: string): string | undefined => {
  if (isYYYYMMDD(date) || isYYYY_MM_DD(date)) {
    return date.slice(0, 4);
  }
  return undefined;
};
