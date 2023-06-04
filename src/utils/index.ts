import { ITimeFormat } from "../components/Card/index.interface";

export function getElapsedTime(
  targetYear: number,
  targetMonth: number,
  targetDay: number,
  targetHour: number,
  targetMinute: number,
  targetSecond: number
): ITimeFormat {
  const targetDate = new Date(
    targetYear,
    targetMonth - 1,
    targetDay,
    targetHour,
    targetMinute,
    targetSecond
  );
  const utc8Offset = 8 * 60 * 60 * 1000;
  const elapsedTime = new Date().getTime() - targetDate.getTime() + utc8Offset;
  const second = Math.floor(elapsedTime / 1000) % 60;
  const minute = Math.floor(elapsedTime / (1000 * 60)) % 60;
  const hour = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
  const day = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

  return {
    day,
    hour,
    minute,
    second
  }
}