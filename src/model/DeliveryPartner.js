class DeliveryPartner {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.phone = data.phone;
    this.email = data.email;
    this.shippingPartner = data.shippingPartner;
    this.platformFee = data.platformFee;
  }
}

export default DeliveryPartner;
