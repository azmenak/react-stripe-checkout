declare module "react-stripe-checkout" {

    export interface Card {
        id: string
        object: string
        address_city: string | null
        address_country: string | null
        address_line1: string | null
        address_line1_check: string | null
        address_line2: string | null
        address_state: string | null
        address_zip: string | null
        address_zip_check: string | null
        brand: string
        country: string
        cvc_check: string
        dynamic_last4: string | null
        exp_month: number
        exp_year: number
        funding: string
        last4: string
        metadata: {}
        name: string
        tokenization_method: string | null
    }

    export interface Token {
        id: string
        object: string
        card: Card
        client_ip: string
        created: number
        email: string
        livemode: boolean
        type: string
        used: boolean
    }

    export interface Address {
        billing_address_city: string;
        billing_address_country: string;
        billing_address_country_code: string;
        billing_address_line1: string;
        billing_address_zip: string;
        billing_name: string;
        shipping_address_city?: string;
        shipping_address_country?: string;
        shipping_address_country_code?: string;
        shipping_address_line1?: string;
        shipping_address_zip?: string;
        shipping_name?: string;

    }

    export interface StripeCheckoutProps {
        token(token: Token, address?: Address)
        opened?()
        closed?()
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
        triggerEvent?: "onTouchTap" | "onClick" | "onTouchStart"
    }

    import React = require("react")
    export default class StripeCheckout extends React.Component<StripeCheckoutProps, Object> {}
}
