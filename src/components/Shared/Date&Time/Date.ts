export const formatLocalTime = (utcDateString: string): string => {
  const date = new Date(utcDateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    //   second: "2-digit",
    hour12: true, // for 12-hour clock
  });
};
export const formatLocalDate = (utcDateString: string): string => {
  const date = new Date(utcDateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    //   second: "2-digit",
    hour12: true, // for 12-hour clock
  });
};
