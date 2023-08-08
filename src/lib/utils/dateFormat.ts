import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (
  date: Date | string,
  format: string = "dd MMM, yyyy"
): string => {
  return formatInTimeZone(date, "Asia/Ho_Chi_Minh", format);
};

export default dateFormat;
