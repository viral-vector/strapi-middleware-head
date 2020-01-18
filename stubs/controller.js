'use strict';

module.exports = {
  index: async ctx => {
    await ctx.send('Strapi Middleware Head Installed. Check out the head folder!');
  },
}
