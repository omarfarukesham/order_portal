import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderHistories } from '@/services/order/useOrder';
import OrderViewHistoriesTable from './OrderViewHistoriesTable';

const OrderViewHistories = ({ order }) => {
  const filters = {
    orderId: order.id,
  };
  const { data, error, isFetching } = useOrderHistories(filters);

  return (
    <div className='h-full flex flex-wrap overflow-auto'>
      {isFetching && <LoadingSpinner text='Loading Order History List' />}
      {!isFetching && !error && data && (
        <OrderViewHistoriesTable data={data?.items} />
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </div>
  );
};

export default OrderViewHistories;
