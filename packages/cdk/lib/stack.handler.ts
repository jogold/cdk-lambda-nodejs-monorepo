import { Context } from 'aws-lambda';
import { sum, mult, formatMs } from '@cdk-lambda-nodejs-monorepo/utils'

interface Event {
  a: number;
  b: number;
}

export function handler(event: Event, context: Context) {
  console.log(`The sum of ${event.a} and ${event.b} is ${sum(event.a, event.b)}`);
  console.log(`The product of ${event.a} and ${event.b} is ${mult(event.a, event.b)}`);
  console.log(formatMs(context.getRemainingTimeInMillis()));
}
