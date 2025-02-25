import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderPaymentDetails } from '@/services/order/useOrder';
import OrderViewPaymentsTable from './OrderViewPaymentsTable';

const OrderViewPayments = ({ order }) => {
  const filters = {
    orderId: order.id,
  };
  const { data, error, isFetching } = useOrderPaymentDetails(filters);

  return (
    <div className='h-full flex flex-wrap overflow-auto'>
      {isFetching && <LoadingSpinner text='Loading Order Payment List' />}
      {!isFetching && !error && data && (
        <OrderViewPaymentsTable data={data?.items} />
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </div>
  );
};

export default OrderViewPayments;
