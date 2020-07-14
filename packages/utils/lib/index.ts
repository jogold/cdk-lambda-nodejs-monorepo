import { formatDuration } from 'date-fns';

export function sum(a: number, b: number) {
  return a + b;
}

export function mult(a: number, b: number) {
  return a * b;
}

export function formatMs(ms: number): string {
  return formatDuration({
    seconds: ms*1000
  });
}
