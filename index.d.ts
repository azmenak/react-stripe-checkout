declare module 'react-stripe-checkout' {
  export interface Card {
    id: string
    object: string
    address_city?: string
    address_country?: string
    address_line1?: string
    address_line1_check?: string
    address_line2?: string
    address_state?: string
    address_zip?: string
    address_zip_check?: string
    brand: string
    country: string
    cvc_check: string
    dynamic_last4?: string
    exp_month: number
    exp_year: number
    funding: string
    last4: string
    metadata: {}
    name: string
    tokenization_method?: string
  }

  export interface Token {
    id: string
    object: 'token'
    card: Card
    client_ip: string
    created: number
    email: string
    livemode: boolean
    type: string
    used: boolean
    bank_account?: {}
  }

  export interface Source {
    id: string
    object: 'source'
    amount: integer
    client_secret: string
    code_verification?: {}
    created: number
    currency: string
    flow: 'redirect' | 'receiver' | 'code_verification' | 'none'
    livemode: boolean
    metadata: {}
    owner: {}
    receiver: {}
    statement_descriptor: string
    status: 'canceled' | 'chargeable' | 'consumed' | 'failed' | 'pending'
    type: 'card'
    card: {}
    usage: string
  }

  export interface Address {
    billing_address_city: string
    billing_address_country: string
    billing_address_country_code: string
    billing_address_line1: string
    billing_address_zip: string
    billing_name: string
    shipping_address_city?: string
    shipping_address_country?: string
    shipping_address_country_code?: string
    shipping_address_line1?: string
    shipping_address_zip?: string
    shipping_name?: string
  }

  interface StripeCheckoutPropsWithoutCallback {
    stripeKey: string
    label?: string
    name?: string
    ComponentClass?: string
    description?: string
    image?: string
    panelLabel?: string
    amount?: number
    currency?: string
    locale?: string
    email?: string
    shippingAddress?: boolean
    billingAddress?: boolean
    zipCode?: boolean
    alipay?: boolean
    bitcoin?: boolean
    allowRememberMe?: boolean
    reconfigureOnUpdate?: boolean
    triggerEvent?: 'onTouchTap' | 'onClick' | 'onTouchStart'
  }

  interface StripeCheckoutPropsWithToken
    extends StripeCheckoutPropsWithoutCallback {
    token(token: Token, address?: Address)
  }

  interface StripeCheckoutPropsWithSource
    extends StripeCheckoutPropsWithoutCallback {
    source(source: Source)
  }

  import React = require('react')
  export default class StripeCheckout extends React.Component<
    StripeCheckoutPropsWithToken | StripeCheckoutPropsWithSource,
    Object
  > {}
}
