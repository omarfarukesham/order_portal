import { ENDPOINTS } from '@/configuration/endpoints';
import DeliveryItem from '@/model/DeliveryItem';
import Order from '@/model/Order';
import OrderHistory from '@/model/OrderHistory';
import OrderItem from '@/model/OrderItem';
import OrderPayment from '@/model/OrderPayment';
import OrderPaymentDetails from '@/model/OrderPaymentDetails';
import PaginatedResponse from '@/model/PaginatedResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import orderService from './orderService';

export const useOrders = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.orders, JSON.stringify(filters)],
    queryFn: () => orderService.getOrders(filters),
    select: (response) => new PaginatedResponse(response.data?.data, Order),
  });
};
export const useOrderDetails = (id) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [ENDPOINTS.orderDetails(id)],
    queryFn: () => orderService.getOrderDetails(id),
    select: (response) => new Order(response.data?.data?.content[0]),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orderHistories] });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orderPayments] });
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.deliveryItemInfos],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orderPackages] });
    },
  });
};

export const useOrderCancel = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.cancelOrder(undefined)],
    mutationFn: orderService.cancelOrder,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderDetails(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orders] });
    },
  });
};

export const useOrderRefund = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.refundOrder(undefined)],
    mutationFn: orderService.refundOrder,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderDetails(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orders] });
    },
  });
};

export const useOrderItemsRefund = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.refundOrderItems],
    mutationFn: orderService.refundOrderItems,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderDetails(payload.orderId)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orders] });
    },
  });
};

export const useOrderItemsReturn = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.returnOrderItems],
    mutationFn: orderService.returnOrderItems,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderDetails(payload.orderId)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orders] });
    },
  });
};

export const useDeliveryStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.changeDeliveryStatus(undefined)],
    mutationFn: orderService.changeDeliveryStatus,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderDetails(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orders] });
    },
  });
};

export const useConfirmOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [ENDPOINTS.confirmOrder(undefined)],
    mutationFn: orderService.confirmOrder,
    onSuccess: (response, payload) => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.orderDetails(payload.id)],
      });
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.orders] });
    },
  });
};

export const useOrderItems = (orderId) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderItems(orderId)],
    queryFn: () => orderService.getOrderItems(orderId),
    select: (response) => new PaginatedResponse(response.data?.data, OrderItem),
  });
};

export const useOrderPayments = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderPayments, JSON.stringify(filters)],
    queryFn: () => orderService.getOrderPayments(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, OrderPayment),
  });
};

export const useOrderPaymentDetails = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderPaymentDetails, JSON.stringify(filters)],
    queryFn: () => orderService.getOrderPaymentDetails(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, OrderPaymentDetails),
  });
};

export const useOrderHistories = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.orderHistories, JSON.stringify(filters)],
    queryFn: () => orderService.getOrderHistories(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, OrderHistory),
  });
};

export const useDeliveryItemInfos = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.deliveryItemInfos, JSON.stringify(filters)],
    queryFn: () => orderService.getDeliveryItemInfos(filters),
    select: (response) =>
      new PaginatedResponse(response.data?.data, DeliveryItem),
  });
};
export const useAddDeliveryItemInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ENDPOINTS.deliveryItemInfos],
    mutationFn: orderService.addDeliveryItemInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINTS.deliveryItemInfos],
      });
    },
  });
};
