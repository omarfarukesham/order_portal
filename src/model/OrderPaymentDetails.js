class OrderPaymentDetails {
  constructor(data) {
    this.status = data.status;
    this.id = data.id;
    this.orderId = data.orderId;
    this.orderPaymentId = data.orderPaymentId;
    this.sellerId = data.sellerId;
    this.amount = data.amount;
    this.currencyCode = data.currencyCode;
    this.paymentStatus = data.paymentStatus;
    this.paymentMethod = data.paymentMethod;

    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.updatedAt = data.updatedAt;
    this.updatedBy = data.updatedBy;
  }
}

export default OrderPaymentDetails;
