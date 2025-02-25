import { SHIPPING_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: SHIPPING_SERVICE_BASE_URL,
};

const orderPackageService = {
  getOrderPackages: (filters) => {
    return httpService.get(ENDPOINTS.orderPackages, {
      ...config,
      params: {
        ...filters,
        size: filters ? filters?.perPage : '',
        page: filters ? filters?.page - 1 : '',
      },
    });
  },
  addOrderPackage: (data) => {
    return httpService.post(ENDPOINTS.orderPackages, data, { ...config });
  },
  updateOrderPackage: (data) => {
    return httpService.patch(
      ENDPOINTS.orderPackage(data.orderPackageId),
      data,
      {
        ...config,
      },
    );
  },
  approveOrderPackage: (orderPackage) => {
    return httpService.post(
      ENDPOINTS.approveOrderPackage(orderPackage.id),
      null,
      { ...config },
    );
  },
  getOrderDeliveryStatus: (trackingId) => {
    return httpService.get(ENDPOINTS.orderPackageDeliveryStatus(trackingId), {
      ...config,
    });
  },
};

export default orderPackageService;
