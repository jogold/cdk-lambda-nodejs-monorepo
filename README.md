## AWS CDK with `aws-lambda-nodejs` in a monorepo

Demo of using the `NodejsFunction` construct in a monorepo.

The Lambda function in the `cdk` package (at `packages/cdk`) uses utils from
the private `utils` package (at `packages/utils`). It is correctly bundled
along with external dependencies

```bash
$ yarn
$ yarn build
$ cd packages/cdk && yarn cdk synth
````
