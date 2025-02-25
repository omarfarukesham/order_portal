import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderItems } from '@/services/order/useOrder';
import PageError from '../../../../../components/layout/PageError';
import OrderViewItemsBody from './OrderViewItemsBody';

const OrderViewItems = ({ order }) => {
  const { data, isFetching, error } = useOrderItems(order.id);

  return (
    <div className='h-full flex flex-wrap overflow-auto'>
      {isFetching && <LoadingSpinner message='Loading order items' />}
      {!isFetching && data?.items && (
        <OrderViewItemsBody order={order} orderItems={data?.items} />
      )}

      {!isFetching && error && <PageError message={error.message} />}
    </div>
  );
};

export default OrderViewItems;
