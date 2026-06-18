const formatter = new Intl.NumberFormat("en-US");

export const formatNumber = (number: number) => formatter.format(number);
