#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { TempStack } from './temp-stack';

import config from './config.json';

const app = new cdk.App();
new TempStack(app, 'TempStack', {
    stackName: `${config.PROJECT_NAME}-Stack`
});
