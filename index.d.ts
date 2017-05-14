declare module "react-stripe-checkout" {
    export interface StripeCheckoutProps {
        token: (token: {}) => void;
        stripeKey: string;

        name?: string;
        description?: string;
        image?: string;
        panelLabel?: string;
        amount?: number;
        currency?: string;
        locale?: string;
        email?: string;
        shippingAddress?: boolean;
        billingAddress?: boolean;
        zipCode?: boolean;
        alipay?: boolean;
        bitcoin?: boolean;
        allowRememberMe?: boolean;
        reconfigureOnUpdate?: boolean;
        triggerEvent?: "onTouchTap" | "onClick" | "onTouchStart";
    }

    export default class StripeCheckout extends React.Component<StripeCheckoutProps, void> {}
}
