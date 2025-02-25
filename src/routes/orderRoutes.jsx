/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import { lazy } from 'react';
import permissions from './../configuration/permissions';
const orders = lazy(() => import('@/pages/orders/Orders'));
const orderViewDetails = lazy(() =>
  import('@/pages/orders/order-view/OrderView'),
);

// * These routes are children routes of the MainLayout
const orderRoutes = [
  {
    path: 'orders',
    element: (
      <RouteAuthorization
        element={orders}
        permission={permissions.VIEW_ORDER}
      />
    ),
  },
  {
    path: 'orders/:id',
    element: (
      <RouteAuthorization
        element={orderViewDetails}
        permission={permissions.VIEW_ORDER}
      />
    ),
  },
];

export default orderRoutes;
