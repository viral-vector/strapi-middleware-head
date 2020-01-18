'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Create dir structure
 */
let dr = path.join(__dirname, '../..', 'head');

if(!fs.existsSync(dr)){
  fs.mkdirSync(dr);
  fs.mkdirSync(path.join(dr, 'config'));
  fs.mkdirSync(path.join(dr, 'controllers'));
}

/**
 * Config Files
 */
let drRoutes = path.join(dr, 'config/routes.json');
if(!fs.existsSync(drRoutes)){
  fs.copyFileSync(path.join(__dirname, 'stubs/routes.json'), drRoutes);
}

/**
 * Controller
 */
let drCntrls = path.join(dr, 'controllers/index.js');
if(!fs.existsSync(drCntrls)){
  fs.copyFileSync(path.join(__dirname, 'stubs/controller.js'), drCntrls);
}
