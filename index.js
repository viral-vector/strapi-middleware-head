'use strict';

/**
 * Module dependencies
 */

const _ = require('lodash');
const Router = require('koa-router');
const loadHead = require('./utils/load-head');
const createEndpointComposer = require('./utils/composeEndpoint');

/**
 * Router hook
 */
module.exports = strapi => {

  const composeEndpoint = createEndpointComposer(strapi);

  return {
    /**
     * Initialize the hook
     */
    initialize(){
      this.boot().then(result => {
        const router = new Router({
          prefix: null,
        });

        _.forEach(strapi.head.config.routes, value => {
          composeEndpoint(value, {
            plugin: '',
            router: ['','/'].includes(value.path)? router : strapi.router
          });
        });

        strapi.app.use(router.routes()).use(router.allowedMethods());
      })
    },

    /**
     * Boot Head
     */
    async boot() {
      strapi.head = await loadHead(strapi);

      Object.keys(strapi.head.controllers || []).forEach(key => {
        if (!strapi.head.controllers[key].identity) {
          strapi.head.controllers[key].identity = key;
        }
      });

      return strapi.head;
    }

  };
};
