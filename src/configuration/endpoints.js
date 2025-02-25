export const ENDPOINTS = {
  authenticate: '/authenticate',
  userInfo: '/user-info',
  sendOtp: '/send',
  verifyOtp: '/verify',
  resetPassword: '/users/reset-password',
  checkUser: '/users/check-user',
  registration: '/users/register',

  // Order Service Endpoints
  orders: '/orders',
  orderDetails: (id) => `/orders/${id}/details`,
  cancelOrder: (id) => `/orders/${id}/cancel`,
  refundOrder: (id) => `/orders/${id}/refund`,
  changeDeliveryStatus: (id) => `orders/${id}/delivery-status`,
  confirmOrder: (id) => `orders/${id}/confirm-order`,
  returnOrderItems: '/order-items/return',
  refundOrderItems: '/order-items/refund',
  deliveryItemInfos: '/delivery-item-infos',
  makeManualPayment: '/order-payments/make-manual-payment',

  orderItems: (orderId) => `/order-items/package-info/${orderId}`,
  orderPayments: '/order-payments',
  orderPaymentDetails: '/order-payment-details',
  orderHistories: '/order-histories',

  // OrderPackage
  orderPackages: '/order-packages',
  orderPackage: (id) => `/order-packages/${id}`,
  approveOrderPackage: (id) => `/order-packages/approve/${id}`,
  orderPackageDeliveryStatus: (trackingId) =>
    `/order-packages/delivery-status/${trackingId}`,
};
