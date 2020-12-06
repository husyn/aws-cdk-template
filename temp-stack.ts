import * as cdk from '@aws-cdk/core';

import config from './config.json';

export class TempStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //Create your stack here
  }
}
