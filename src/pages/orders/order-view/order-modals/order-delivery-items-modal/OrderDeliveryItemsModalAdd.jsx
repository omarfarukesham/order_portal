/* eslint-disable no-unused-vars */
import Form from '@/components/form/Form';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAddDeliveryItemInfo } from '@/services/order/useOrder';
import { toast } from 'react-toastify';
import OrderDeliveryItemsModalAddItemInfo from './OrderDeliveryItemsModalAddItemInfo';
import { orderDeliverItemsModalViewModes } from './orderDeliverItemsModalViewModes';

const OrderDeliveryItemsModalAdd = ({ orderItem, setViewMode }) => {
  const { isLoading, mutate } = useAddDeliveryItemInfo();

  const handleSubmit = (formData) => {
    const data = {
      orderItemId: orderItem.id,
      itemInfo: formData.itemInfos?.reduce((itemInfo, e) => {
        itemInfo[e.key] = e.value;
        return itemInfo;
      }, {}),
    };

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully Delivery Items Added');
        setViewMode(orderDeliverItemsModalViewModes.list);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-5 p-8'>
      <div className='grid gap-1 text-label'>
        <div>Product Name:</div>
        <div className='line-clamp-2 border border-gray-4 p-2 rounded-md bg-light-3 overflow-auto'>
          {orderItem.productInfo.title}
        </div>
      </div>

      <OrderDeliveryItemsModalAddItemInfo />

      <div className='flex justify-center'>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className='flex gap-5'>
            <Button type='submit' size='slim'>
              Save
            </Button>
            <Button
              variant='secondary'
              size='slim'
              onClick={() => setViewMode(orderDeliverItemsModalViewModes.list)}
            >
              Back
            </Button>
          </div>
        )}
      </div>
    </Form>
  );
};

export default OrderDeliveryItemsModalAdd;
