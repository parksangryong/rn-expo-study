import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export const formatDate = (date: string) => {
  return dayjs(date).format("YYYY.MM.DD HH:mm:ss");
};

export const postFormatDate = (date: string) => {
  if (dayjs(date).isSame(dayjs(), "day")) {
    const diff = dayjs().diff(dayjs(date), "hour");
    if (diff < 1) {
      const minute = dayjs().diff(dayjs(date), "minute");
      return `${minute}분 전`;
    }
    return `${diff}시간 전`;
  }

  return dayjs(date).format("YYYY.MM.DD HH:mm:ss");
};

export default dayjs;
