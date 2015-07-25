# React Stripe Checkout Component
Stripe's Checkout makes it almost too easy to take people's money.
This should make it even easier if you're building a react
application.

Get started by installing with npm

    npm install react-stripe-checkout

`token` and `stripeKey` are the only *required* props,
everything else is options as per the stripe docs. See [Checkout
Docs](https://stripe.com/docs/checkout#integration-custom). All props
go through simple validation and are passed to stripe checkout.

```javascript
var react = require('react'),
    StripeCheckout = require('react-stripe-checkout');

var TakeMoney = React.createClass({
  onToken: function(token) {
    xhrStripeTokenToMyServer(token).then( => {
      // please do with HTTPS
    });
  },

  ...
  
  render: function() {
    return (
        ...
        <StripeCheckout
          token={this.onToken}
          stripeKey="my_PUBLISHABLE_stripekey" />
    )
  }
})
```

### Send all the props!

```javascript
<StripeCheckout
  name="Three Comma Co."
  description="Big Data Stuff"
  image="http://nancyfriedman.typepad.com/.a/6a00d8341c4f9453ef01a3fd095a0b970b-pi"
  panelLabel="Give Money"
  amount={1000000}
  currency="USD"
  stripeKey="..."
  token={this.onToken}>
  <button className="myOwnButton">
    <span>Use your own child component, which gets wrapped in a
span</span>
  </button>
</StripeCheckout>
```

### Other info
This was probably terribly written, I'll look at any PR coming my way.

### Contributors
- [@orhan-swe](https://github.com/orhan-swe) added updates to checkout after intantiation
- [@ekalvi](https://github.com/ekalvi) added multiple checkout buttons per page 
