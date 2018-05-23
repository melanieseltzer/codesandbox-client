// @flow
import packageJSON from './package-json';
import prettierRC from './prettierRC';
import sandboxConfig from './sandbox';
import babelrc from './babelrc';
import angularCli from './angular-cli';
import tsconfig from './tsconfig';
import babelTranspiler from './babel-transpiler';
import customCodeSandbox from './custom-codesandbox';

const configs = {
  babelrc,
  babelTranspiler,
  packageJSON,
  prettierRC,
  sandboxConfig,
  angularCli,
  tsconfig,
  customCodeSandbox,
};

export default configs;
