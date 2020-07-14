import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import * as cdk from '@aws-cdk/core';

export class MyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new lambda.NodejsFunction(this, 'handler', {
      timeout: cdk.Duration.seconds(30),
      memorySize: 1024,
    });
  }
}
