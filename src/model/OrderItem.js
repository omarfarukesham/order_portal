import ProductInfo from './ProductInfo';

class OrderItem {
  constructor(data) {
    this.id = data.id;
    this.productInfo = data.productInfo
      ? new ProductInfo(data.productInfo)
      : null;
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
    this.orderPackageId = data.orderPackageId;
    this.isApproved = data.isApproved;
  }
}

export default OrderItem;
