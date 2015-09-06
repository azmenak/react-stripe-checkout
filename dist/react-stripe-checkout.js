'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

var ReactStripeCheckout = React.createClass({
  displayName: 'ReactStripeCheckout',

  mixins: [ReactScriptLoaderMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'StripeCheckout',
      label: 'Pay With Card',
      locale: 'auto',
      componentClass: 'span'
    };
  },

  propTypes: {
    // If included, will render the default blue button with label text.
    // (Requires including stripe-checkout.css or adding the .styl file
    // to your pipeline)
    label: React.PropTypes.string,

    // Named component to wrap button (eg. div)
    componentClass: React.PropTypes.string,

    // Show a loading indicator
    showLoadingDialog: React.PropTypes.func,
    // Hide the loading indicator
    hideLoadingDialog: React.PropTypes.func,

    // Run this method when the scrupt fails to load. Will run if the internet
    // connection is offline when attemting to load the script.
    onScriptError: React.PropTypes.func,

    // =====================================================
    // Required by stripe
    // see Stripe docs for more info:
    //   https://stripe.com/docs/checkout#integration-custom
    // =====================================================

    // Your publishable key (test or live).
    // can't use "key" as a prop in react, so have to change the keyname
    stripeKey: React.PropTypes.string.isRequired,

    // The callback to invoke when the Checkout process is complete.
    //   function(token)
    //     token is the token object created.
    //     token.id can be used to create a charge or customer.
    //     token.email contains the email address entered by the user.
    token: React.PropTypes.func.isRequired,

    // ==========================
    // Highly Recommended Options
    // ==========================

    // Name of the company or website.
    name: React.PropTypes.string,

    // A description of the product or service being purchased.
    description: React.PropTypes.string,

    // A relative URL pointing to a square image of your brand or product. The
    // recommended minimum size is 128x128px. The recommended image types are
    // .gif, .jpeg, and .png.
    image: React.PropTypes.string,

    // The amount (in cents) that's shown to the user. Note that you will still
    // have to explicitly include it when you create a charge using the API.
    amount: React.PropTypes.number,

    // Specify auto to display Checkout in the user's preferred language, if
    // available. English will be used by default.
    //
    // https://support.stripe.com/questions/what-languages-does-stripe-checkout-support
    // for more info.
    locale: React.PropTypes.oneOf(['auto', // (Default) Automatically chosen by checkout
    'zh', //Chinese
    'nl', //Dutch
    'en', //English
    'fr', //French
    'de', //German
    'it', //Italian
    'jp', //Japanease
    'es' //Spanish
    ]),

    // ==============
    // Optional Props
    // ==============

    // The currency of the amount (3-letter ISO code). The default is USD.
    currency: React.PropTypes.oneOf(['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BWP', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EEK', 'EGP', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JMD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'MAD', 'MDL', 'MGA', 'MKD', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SZL', 'THB', 'TJS', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW']),

    // The label of the payment button in the Checkout form (e.g. “Subscribe”,
    // “Pay {{amount}}”, etc.). If you include {{amount}}, it will be replaced
    // by the provided amount. Otherwise, the amount will be appended to the
    // end of your label.
    panelLabel: React.PropTypes.string,

    // Specify whether Checkout should validate the billing ZIP code (true or
    // false)
    zipCode: React.PropTypes.bool,

    // Specify whether Checkout should collect the user's billing address
    // (true or false). The default is false.
    billingAddress: React.PropTypes.bool,

    // Specify whether Checkout should collect the user's shipping address
    // (true or false). The default is false.
    shippingAddress: React.PropTypes.bool,

    // Specify whether Checkout should validate the billing ZIP code (true or
    // false). The default is false.
    email: React.PropTypes.string,

    // Specify whether to include the option to "Remember Me" for future
    // purchases (true or false). The default is true.
    allowRememberMe: React.PropTypes.bool,

    // Specify whether to accept Bitcoin in Checkout. The default is false.
    bitcoin: React.PropTypes.bool,

    // Specify whether to accept Alipay ('auto', true, or false). The default
    // is false.
    alipay: React.PropTypes.oneOf(['auto', true, false]),

    // Specify if you need reusable access to the customer's Alipay account
    // (true or false). The default is false.
    alipayReusable: React.PropTypes.bool,

    // function() The callback to invoke when Checkout is opened (not supported
    // in IE6 and IE7).
    opened: React.PropTypes.func,

    // function() The callback to invoke when Checkout is closed (not supported
    // in IE6 and IE7).
    closed: React.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      scriptLoading: true,
      scriptLoadError: false
    };
  },

  // Used by scriptLoader mixin
  getScriptURL: function getScriptURL() {
    return 'https://checkout.stripe.com/checkout.js';
  },

  statics: {
    stripeHandler: null,
    scriptDidError: false
  },

  hasPendingClick: false,

  onScriptLoaded: function onScriptLoaded() {
    this.setState({ scriptLoading: false });
    // Initialize the Stripe handler on the first onScriptLoaded call.
    // This handler is shared by all StripeButtons on the page.
    if (!ReactStripeCheckout.stripeHandler) {
      this.updateStripeHandler();
    }
  },

  updateStripeHandler: function updateStripeHandler() {
    ReactStripeCheckout.stripeHandler = StripeCheckout.configure(this.getConfig());
    if (this.hasPendingClick) {
      this.showStripeDialog();
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    if (!this.state.scriptLoading) this.updateStripeHandler();
  },

  showLoadingDialog: function showLoadingDialog() {
    this.props.showLoadingDialog && this.props.showLoadingDialog.apply(this, arguments);
  },
  hideLoadingDialog: function hideLoadingDialog() {
    this.props.hideLoadingDialog && this.props.hideLoadingDialog.apply(this, arguments);
  },

  getConfig: function getConfig() {
    var config = {};
    config.key = this.props.stripeKey;
    var options = ['token', 'image', 'name', 'description', 'amount', 'locale', 'currency', 'panelLabel', 'zipCode', 'shippingAddress', 'billingAddress', 'email', 'allowRememberMe', 'bitcoin', 'alipay', 'alipayReusable', 'opened', 'closed'];
    for (var i = 0; i < options.length; i++) {
      var key = options[i];
      if (key in this.props) {
        config[key] = this.props[key];
      }
    }
    return config;
  },

  showStripeDialog: function showStripeDialog() {
    this.hideLoadingDialog();
    ReactStripeCheckout.stripeHandler.open(this.getConfig());
  },
  onScriptError: function onScriptError() {
    this.hideLoadingDialog();
    ReactStripeCheckout.scriptDidError = true;
    this.props.onScriptError && this.props.onScriptError.apply(this);
  },
  onClick: function onClick() {
    if (ReactStripeCheckout.scriptDidError) {
      console.log('failed to load script');
    } else if (ReactStripeCheckout.stripeHandler) {
      this.showStripeDialog();
    } else {
      this.showLoadingDialog();
      this.hasPendingClick = true;
    }
  },

  renderStripeButton: function renderStripeButton() {
    return React.createElement(
      'button',
      { className: 'stripe-checkout-button', onClick: this.onClick },
      React.createElement(
        'span',
        { className: 'inner-text' },
        this.props.label
      )
    );
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;
    return !this.props.children ? this.renderStripeButton() : React.createElement(
      ComponentClass,
      _extends({}, this.props, { onClick: this.onClick }),
      this.props.children
    );
  }
});

module.exports = ReactStripeCheckout;

