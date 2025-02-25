import { ENDPOINTS } from '@/configuration/endpoints';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import paymentService from './paymentService';

export const useManualPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINTS.makeManualPayment],
    mutationFn: paymentService.makeManualPayment,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orders] });
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderDetails(payload.orderId)],
      });
    },
  });
};
