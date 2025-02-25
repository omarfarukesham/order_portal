import FakeInput from '@/components/form/FakeInput';
import Form from '@/components/form/Form';
import FormTextarea from '@/components/form/FormTextarea';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {
  useDeliveryItemInfos,
  useOrderItemsReturn,
} from '@/services/order/useOrder';
import { useMemo } from 'react';
import { toast } from 'react-toastify';
import OrderItemReturnModalDeliveryInfos from './OrderItemReturnModalDeliveryInfos';
import OrderItemReturnModalQuantitySelector from './OrderItemReturnModalQuantitySelector';

const OrderItemReturnModal = ({ isOpen, setIsOpen, order, orderItem }) => {
  const filters = { orderItemId: orderItem.id };
  const { data } = useDeliveryItemInfos(filters);

  const { isLoading, mutate } = useOrderItemsReturn();
  const handleSubmit = (formData) => {
    const data = {
      orderId: order.id,
      type: 'ITEM_RETURN',
      orderItems: [
        {
          orderItemId: orderItem.id,
          quantity: formData.quantity,
          deliveryItemInfoIds: formData.deliveryItemInfoIds,
        },
      ],
      reason: formData.reason,
    };

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully Returned');
        setIsOpen(false);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const defaultValues = {
    quantity: 0,
    deliveryItemInfoIds: [],
  };

  const maxQuantity = useMemo(
    () => orderItem.quantity - orderItem.returnQuantity,
    [orderItem.quantity, orderItem.returnQuantity],
  );

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-5 p-8 max-w-[600px] max-h-[80%] overflow-auto'
    >
      <p className='text-center text-lg my-2'> Order Return </p>
      <Form
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        stopPropagation={true}
        className='flex-1 flex flex-col gap-10'
      >
        <FakeInput label='Product Name' value={orderItem.productInfo.title} />

        <OrderItemReturnModalQuantitySelector maxQuantity={maxQuantity} />

        <OrderItemReturnModalDeliveryInfos deliveryItems={data?.items} />

        <FormTextarea
          name='reason'
          label='Reason of Return'
          validations={{ required: 'Please Write reason' }}
        />

        <div className='flex justify-center gap-5'>
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <div className='flex gap-3'>
              <Button type='submit'>Confirm</Button>
              <Button onClick={() => setIsOpen(false)} variant='secondary'>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </Form>
    </Modal>
  );
};

export default OrderItemReturnModal;
