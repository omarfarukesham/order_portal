import { ShippingInfo } from './AddressInfo';
import DeliveryPartner from './DeliveryPartner';
import OrderPackageItem from './OrderPackageItem';

class OrderPackage {
  constructor(data) {
    this.serial = data.serial;
    this.id = data.id;
    this.name = data.name;

    this.orderId = data.orderId;
    this.orderSequenceId = data.orderSequenceId;
    this.sellerId = data.sellerId;

    this.deliveryPartner = data.deliveryPartner
      ? new DeliveryPartner(data.deliveryPartner)
      : null;

    this.shippingAddress = data.shippingAddress
      ? new ShippingInfo(data.shippingAddress)
      : null;

    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;

    this.deliveryPartnerTransactionId = data.deliveryPartnerTransactionId;
    this.orderTrackingNo = data.orderTrackingNo;
    this.approvalStatus = data.approvalStatus;
    this.approvalDate = data.approvalDate;
    this.approvedBy = data.approvedBy;
    this.deliveryStatus = data.deliveryStatus;
    this.deliveryPartnerFee = data.deliveryPartnerFee;
    this.platformDeliveryFee = data.platformDeliveryFee;
    this.comment = data.comment;
    this.partnerPaymentStatus = data.partnerPaymentStatus;
    this.partnerCollectedAmount = data.partnerCollectedAmount;
    this.receivedPaymentAmount = data.receivedPaymentAmount;
    this.receivedPaymentStatus = data.receivedPaymentStatus;
    this.orderItems = data.orderItems?.map(
      (orderItem) => new OrderPackageItem(orderItem),
    );
  }
}

export default OrderPackage;
