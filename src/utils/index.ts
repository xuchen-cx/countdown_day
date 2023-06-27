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
  const day = Math.floor(elapsedTime / (1000 * 60 * 60 * 24)) % 365;
  const year = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365))

  return {
    year,
    day,
    hour,
    minute,
    second
  }
}

export function encrypt(str: string, key: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return result;
}

export function decrypt(str: string, key: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return result;
}