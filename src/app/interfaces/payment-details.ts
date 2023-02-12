export interface PaymentDetails {
    name: string,
      expiration: string,
      securityCode: string,
      cardNumber: string,
      header?: string,
      message?:string
}
