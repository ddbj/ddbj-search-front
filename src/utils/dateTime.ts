import dayjs from "dayjs";

export const formatToDateStr = (str: string) => {
  return dayjs(str).format("YYYY-MM-DD");
};
