import { ORDER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: ORDER_SERVICE_BASE_URL,
};

const orderService = {
  getOrders: (filters) => {
    return httpService.get(ENDPOINTS.orders, {
      ...config,
      params: {
        ...filters,
        orderSequenceId: filters ? filters?.orderSequenceId : '',
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },
  getOrderDetails: (id) => {
    return httpService.get(ENDPOINTS.orderDetails(id), {
      ...config,
    });
  },
  cancelOrder: (data) => {
    return httpService.patch(ENDPOINTS.cancelOrder(data.id), data, {
      ...config,
    });
  },
  refundOrder: (data) => {
    return httpService.patch(ENDPOINTS.refundOrder(data.id), data, {
      ...config,
    });
  },
  refundOrderItems: (data) => {
    return httpService.post(ENDPOINTS.refundOrderItems, data, {
      ...config,
    });
  },
  returnOrderItems: (data) => {
    return httpService.post(ENDPOINTS.returnOrderItems, data, {
      ...config,
    });
  },
  changeDeliveryStatus: (data) => {
    return httpService.patch(ENDPOINTS.changeDeliveryStatus(data.id), data, {
      ...config,
    });
  },
  confirmOrder: (data) => {
    return httpService.patch(ENDPOINTS.confirmOrder(data.id), data, {
      ...config,
    });
  },
  getOrderItems: (orderId) => {
    return httpService.get(ENDPOINTS.orderItems(orderId), {
      ...config,
    });
  },
  getOrderPayments: (filters) => {
    return httpService.get(ENDPOINTS.orderPayments, {
      ...config,
      params: {
        ...filters,
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },
  getOrderPaymentDetails: (filters) => {
    return httpService.get(ENDPOINTS.orderPaymentDetails, {
      ...config,
      params: {
        ...filters,
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },
  getOrderHistories: (filters) => {
    return httpService.get(ENDPOINTS.orderHistories, {
      ...config,
      params: filters,
    });
  },
  getDeliveryItemInfos: (filters) => {
    return httpService.get(ENDPOINTS.deliveryItemInfos, {
      ...config,
      params: {
        ...filters,
        size: filters?.perPage,
        page: filters?.page ? filters.page - 1 : 0,
      },
    });
  },
  addDeliveryItemInfo: (data) => {
    return httpService.post(ENDPOINTS.deliveryItemInfos, data, {
      ...config,
    });
  },
};

export default orderService;
