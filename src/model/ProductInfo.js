class ProductInfo {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.sku = data.sku;
    this.image = data.image;
    this.price = data.price;
    this.discount = data.discount;
    this.netDiscount = data.netDiscount;
    this.total = data.total;
  }
}

export default ProductInfo;
