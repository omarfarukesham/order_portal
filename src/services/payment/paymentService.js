import { ORDER_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: ORDER_SERVICE_BASE_URL,
};

const paymentService = {
  makeManualPayment: (data) => {
    return httpService.post(ENDPOINTS.makeManualPayment, data, { ...config });
  },
};

export default paymentService;
