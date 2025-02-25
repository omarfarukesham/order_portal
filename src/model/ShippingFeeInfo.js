class ShippingFeeInfo {
  constructor(data) {
    this.originalAmount = data?.shippingFeeAmount.originalAmount;
    this.discountAmount = data?.shippingFeeAmount.discountAmount;
    this.discountedAmount = data?.shippingFeeAmount.discountedAmount;
    this.shippingCampaign = data.shippingCampaign;
  }
}
export default ShippingFeeInfo;
