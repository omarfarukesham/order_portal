export const orderStatuses = [
  { value: 'OPEN', label: 'Open' },
  { value: 'FAILED', label: 'Failed' },
  { value: 'SUCCESS', label: 'Success' },
  { value: 'CANCELED', label: 'Canceled' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'APPROVED', label: 'Approved' },
  { value: 'PROCESSING', label: 'Processing' },
  { value: 'ON_SHIPPING', label: 'On Shipping' },
  { value: 'SHIPPED', label: 'Shipped' },
  { value: 'COMPLETED', label: 'Completed' },
];

export const deliveryStatuses = [
  { value: 'OPEN', label: 'Open' },
  { value: 'PROCESSING', label: 'Processing' },
  { value: 'DELIVERED', label: 'Delivered' },
  { value: 'CANCELED', label: 'Canceled' },
  { value: 'RETURNED', label: 'Returned' },
  { value: 'PARTIAL_RETURNED', label: 'Partial Returned' },
];

export const paymentStatuses = [
  { value: 'OPEN', label: 'Open' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'PAID', label: 'Paid' },
  { value: 'FAILED', label: 'Failed' },
  { value: 'REFUNDED', label: 'Refunded' },
];

export const paymentMethods = [
  { label: 'COD', value: 'COD' },
  { label: 'SSL COMMERZ', value: 'SSL_COMMERZ' },
];
