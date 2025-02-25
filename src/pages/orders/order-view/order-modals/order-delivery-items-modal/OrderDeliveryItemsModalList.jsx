/* eslint-disable no-unused-vars */
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDeliveryItemInfos } from '@/services/order/useOrder';
import OrderDeliveryItemsModalTable from './OrderDeliveryItemsModalTable';
import { orderDeliverItemsModalViewModes } from './orderDeliverItemsModalViewModes';

const OrderDeliveryItemsModalList = ({ orderItem, setViewMode }) => {
  const filters = { orderItemId: orderItem.id };
  const { data, isFetching, error } = useDeliveryItemInfos(filters);

  return (
    <div className='flex-1 flex flex-col'>
      <div className='line-clamp-2 p-5 pr-7'>{orderItem.productInfo.title}</div>

      <div className='flex-1 flex'>
        {isFetching && <LoadingSpinner />}
        {!isFetching && !error && data?.items && (
          <OrderDeliveryItemsModalTable data={data?.items} />
        )}
        {!isFetching && error && <PageError message={error.message} />}
      </div>

      <div className='flex justify-center p-5'>
        <Button
          variant='outlined'
          size='small'
          className='hover:bg-primary hover:text-white'
          onClick={() => setViewMode(orderDeliverItemsModalViewModes.add)}
          disabled={orderItem.quantity <= data?.items?.length}
        >
          Add Item Info
        </Button>
      </div>
    </div>
  );
};

export default OrderDeliveryItemsModalList;
