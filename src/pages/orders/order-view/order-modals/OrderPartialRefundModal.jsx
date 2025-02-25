/* eslint-disable no-unused-vars */
import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderItemsRefund } from '@/services/order/useOrder';
import { toast } from 'react-toastify';

const OrderPartialRefundModal = ({ isOpen, setIsOpen, order, orderItem }) => {
  const { isLoading, error, mutate } = useOrderItemsRefund();

  const handleSubmit = (formData) => {
    const data = {
      orderId: order.id,
      refundItems: [
        {
          orderItemId: orderItem.id,
          refundAmount: formData.refundAmount,
        },
      ],
      reason: formData.reason,
    };

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully Refunded');
        setIsOpen(false);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10 max-w-[400px]'
    >
      <Form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-5'>
        <div className='grid gap-1 text-label'>
          <div>Product Name:</div>
          <div className='line-clamp-2 border border-gray-4 p-2 rounded-md bg-light-3 overflow-auto'>
            {orderItem.productInfo.title}
          </div>
        </div>

        <FormInput
          name='refundAmount'
          label='Refund Amount'
          type='number'
          placeholder='Amount'
          validations={{ required: 'Please write amount to be refunded' }}
        />
        <FormInput
          name='reason'
          label='Refund Reason'
          placeholder='Reason'
          validations={{ required: 'Please Write reason' }}
        />

        <div className='flex justify-center'>
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <div className='flex gap-5'>
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

export default OrderPartialRefundModal;
