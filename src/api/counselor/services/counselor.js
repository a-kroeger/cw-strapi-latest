'use strict';

/**
 * counselor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::counselor.counselor');
