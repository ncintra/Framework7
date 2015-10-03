'use strict';
/*===========================
Framework 7
===========================*/
var $ = require("./dom7");

// Version
module.exports.version = '1.2.0';

module.exports.params = function(parameters) {
  // Default Parameters
  var params = {
      cache: true,
      cacheIgnore: [],
      cacheIgnoreGetParameters: false,
      cacheDuration: 1000 * 60 * 10, // Ten minutes
      preloadPreviousPage: true,
      uniqueHistory: false,
      uniqueHistoryIgnoreGetParameters: false,
      dynamicPageUrl: 'content-{{index}}',
      allowDuplicateUrls: false,
      router: true,
      // Push State
      pushState: false,
      pushStateRoot: undefined,
      pushStateNoAnimation: false,
      pushStateSeparator: '#!/',
      pushStatePreventOnLoad: true,
      // Fast clicks
      fastClicks: true,
      fastClicksDistanceThreshold: 10,
      fastClicksDelayBetweenClicks: 50,
      // Tap Hold
      tapHold: false,
      tapHoldDelay: 750,
      tapHoldPreventClicks: true,
      // Active State
      activeState: true,
      activeStateElements: 'a, button, label, span',
      // Animate Nav Back Icon
      animateNavBackIcon: false,
      // Swipe Back
      swipeBackPage: true,
      swipeBackPageThreshold: 0,
      swipeBackPageActiveArea: 30,
      swipeBackPageAnimateShadow: true,
      swipeBackPageAnimateOpacity: true,
      // Ajax
      ajaxLinks: undefined, // or CSS selector
      // External Links
      externalLinks: '.external', // CSS selector
      // Sortable
      sortable: true,
      // Scroll toolbars
      hideNavbarOnPageScroll: false,
      hideToolbarOnPageScroll: false,
      hideTabbarOnPageScroll: false,
      showBarsOnPageScrollEnd: true,
      showBarsOnPageScrollTop: true,
      // Swipeout
      swipeout: true,
      swipeoutActionsNoFold: false,
      swipeoutNoFollow: false,
      // Smart Select Back link template
      smartSelectOpenIn: 'page', // or 'popup' or 'picker'
      smartSelectBackText: 'Back',
      smartSelectPopupCloseText: 'Close',
      smartSelectPickerCloseText: 'Done',
      smartSelectSearchbar: false,
      smartSelectBackOnSelect: false,
      scrollTopOnNavbarClick: false,
      scrollTopOnStatusbarClick: false,
      // Panels
      swipePanel: false, // or 'left' or 'right'
      swipePanelActiveArea: 0,
      swipePanelCloseOpposite: true,
      swipePanelOnlyClose: false,
      swipePanelNoFollow: false,
      swipePanelThreshold: 0,
      panelsCloseByOutside: true,
      // Modals
      modalButtonOk: 'OK',
      modalButtonCancel: 'Cancel',
      modalUsernamePlaceholder: 'Username',
      modalPasswordPlaceholder: 'Password',
      modalTitle: 'Framework7',
      modalCloseByOutside: false,
      actionsCloseByOutside: true,
      popupCloseByOutside: true,
      modalPreloaderTitle: 'Loading... ',
      modalStack: true,
      // Lazy Load
      imagesLazyLoadThreshold: 0,
      imagesLazyLoadSequential: true,
      // Name space
      viewClass: 'view',
      viewMainClass: 'view-main',
      viewsClass: 'views',
      // Notifications defaults
      notificationCloseOnClick: false,
      notificationCloseIcon: true,
      notificationCloseButtonText: 'Close',
      // Animate Pages
      animatePages: true,
      // Template7
      templates: {},
      template7Data: {},
      template7Pages: false,
      precompileTemplates: false,
      // Material
      material: false,
      materialPageLoadDelay: 0,
      materialPreloaderSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg>',
      materialRipple: true,
      materialRippleElements: '.ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, .floating-button',
      // Auto init
      init: true,
  };

  // Extend defaults with parameters
  for (var parameter in parameters) {
      params[parameter] = parameters[parameter];
  }

  return params;
}

/*===========================
Features Support Detection
===========================*/
module.exports.support = (function () {
    var support = {
        touch: !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)
    };

    // Export object
    return support;
})();

// Tap Navbar or Statusbar to scroll to top
// Template7 lib
module.exports._compiledTemplates = {};

// Touch events
module.exports.touchEvents = {
    start: this.support.touch ? 'touchstart' : 'mousedown',
    move: this.support.touch ? 'touchmove' : 'mousemove',
    end: this.support.touch ? 'touchend' : 'mouseup'
};

// Link to local storage
module.exports.ls = window.localStorage;

// RTL
var rtl = $('body').css('direction') === 'rtl';
if (rtl) $('html').attr('dir', 'rtl');

module.exports.rtl = rtl;

// Overwrite statusbar overlay
if (typeof params.statusbarOverlay !== 'undefined') {
    if (params.statusbarOverlay) $('html').addClass('with-statusbar-overlay');
    else $('html').removeClass('with-statusbar-overlay');
}
