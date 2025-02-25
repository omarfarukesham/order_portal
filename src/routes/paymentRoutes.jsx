/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import { lazy } from 'react';
import permissions from './../configuration/permissions';
const payments = lazy(() => import('@/pages/payments/Payments'));

// * These routes are children routes of the MainLayout
const paymentRoutes = [
  {
    path: 'payments',
    element: (
      <RouteAuthorization
        element={payments}
        permission={permissions.VIEW_PAYMENT}
      />
    ),
  },
];

export default paymentRoutes;
