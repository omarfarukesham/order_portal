class OrderHistory {
  constructor(data) {
    this.serial = data.serial;
    this.id = data.id;
    this.orderSequenceId = data.orderSequenceId;
    this.reason = data.reason;
    this.orderId = data.orderId;
    this.previousStatus = data.previousStatus;
    this.orderRequestId = data.orderRequestId;
    this.currentStatus = data.currentStatus;
    this.actionType = data.actionType;
    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.updatedAt = data.updatedAt;
    this.updatedBy = data.updatedBy;
  }
}

export default OrderHistory;
