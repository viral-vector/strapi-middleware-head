'use strict';

const { join } = require('path');
const { existsSync } = require('fs-extra');
const _ = require('lodash');
const loadFiles = require('strapi/lib/load/load-files');
const loadConfig = require('strapi/lib/load/load-config-files');
const glob = require('strapi/lib/load/glob');

module.exports = async ({ dir }) => {
  const headDir = join(dir, 'head');

  if (!existsSync(headDir)) {
    throw new Error(
      `Missing app folder. Please create one in your app root directory`
    );
  }

  const files = await loadFiles(headDir, '!(config)/**/*.*(js|json)');
  const configs = await loadConfig(headDir, 'config/**/*.*(js|json)');

  return _.merge(files, configs);
};
