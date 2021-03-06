'use strict';

var $ = require('jquery');
require('./core');
require('./ui.tabs');

function tabsInit() {
  $('[data-am-widget="tabs"]').each(function() {
    var options = $(this).data('amTabsNoswipe') ? {noSwipe: 1} : {};
    $(this).tabs(options);
  });
}

$(tabsInit);

module.exports = $.AMUI.tab = {
  VERSION: '4.0.1',
  init: tabsInit
};
