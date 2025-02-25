import { ENDPOINTS } from '@/configuration/endpoints';
import OrderPackage from '@/model/OrderPackage';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import orderPackageService from './orderPackageService';

export const useOrderPackages = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderPackages, JSON.stringify(filters)],
    queryFn: () => orderPackageService.getOrderPackages(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, OrderPackage),
  });
};
export const useAddOrderPackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.orderPackages],
    mutationFn: orderPackageService.addOrderPackage,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderItems(payload.orderId)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orderPackages] });
    },
  });
};
export const useUpdateOrderPackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.orderPackage(undefined)],
    mutationFn: orderPackageService.updateOrderPackage,
    onSuccess: (resposnse, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderItems(payload.orderId)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orderPackages] });
    },
  });
};
export const useApproveOrderPackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.approveOrderPackage(undefined)],
    mutationFn: orderPackageService.approveOrderPackage,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderItems(payload.orderId)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orderPackages] });
    },
  });
};
export const useOrderPackageDeliveryStatus = (trackingId) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderPackageDeliveryStatus(trackingId)],
    queryFn: () => orderPackageService.getOrderDeliveryStatus(trackingId),
    select: (response) => response.data?.data?.content[0],
  });
};
