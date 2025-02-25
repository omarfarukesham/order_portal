class DeliveryItem {
  constructor(data) {
    this.serial = data.serial;
    this.id = data.id;
    this.orderItemId = data.orderItemId;
    this.itemInfo = data.itemInfo;
    this.deliveryItemStatus = data.deliveryItemStatus;
  }
}

export default DeliveryItem;
