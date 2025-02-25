class OrderPayment {
  constructor(data) {
    this.status = data.status;
    this.id = data.id;
    this.orderRequestId = data.orderRequestId;
    this.pgwReferenceId = data.pgwReferenceId;
    this.paymentMethod = data.paymentMethod;
    this.paymentStatus = data.paymentStatus;
    this.currencyCode = data.currencyCode;
    this.amount = data.amount;
    this.description = data.description;

    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.updatedAt = data.updatedAt;
    this.updatedBy = data.updatedBy;
  }
}

export default OrderPayment;
