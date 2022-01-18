'use strict';

/**
 * doer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doer.doer');
