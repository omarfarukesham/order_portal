import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderPackages } from '@/services/order/useOrderPackage';
import OrderViewShipmentBody from './OrderViewShipmentBody';

const OrderViewShipment = ({ order }) => {
  const filters = {
    orderId: order.id,
    sort: '_id,asc',
  };
  const { data, error, isFetching } = useOrderPackages(filters);

  return (
    <div className='h-full flex flex-wrap overflow-auto'>
      {isFetching && <LoadingSpinner text='Loading Order Package' />}
      {!isFetching && !error && data && (
        <OrderViewShipmentBody orderPackages={data?.items} />
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </div>
  );
};

export default OrderViewShipment;
