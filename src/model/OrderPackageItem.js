class OrderPackageItem {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.image = data.image;
    this.quantity = data.quantity;
    this.returnQuantity = data.returnQuantity;
    this.itemDeliveryStatus = data.itemDeliveryStatus;
    this.refundAmount = data.refundAmount;
    this.price = data.price;
    this.discount = data.discount;
    this.netDiscount = data.netDiscount;
    this.netAmount = data.netAmount;
    this.total = data.total;
    this.campaignId = data.campaignId;
    this.discountInfo = data.discountInfo;
  }
}

export default OrderPackageItem;
