import FakeInput from '@/components/form/FakeInput';
import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { useManualPayment } from '@/services/payment/usePayment';
import { toast } from 'react-toastify';

const OrderPaymentModal = ({ isOpen, setIsOpen, order }) => {
  const { isLoading, mutate } = useManualPayment();

  const handleSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully Paid');
        setIsOpen(true);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const defaultValues = {
    orderId: order.id,
    requestId: order.requestId,
    paymentMethod: 'COD',
    amount: order.netAmount,
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='grid gap-5 p-8 max-w-[400px]'
    >
      <p className='text-center text-lg mb-5'>Make Manual Payment</p>

      <Form
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        className='grid gap-5'
      >
        <FakeInput value={order.orderSequenceId} label='Order Id' />
        <FakeInput
          value={order.paymentMethod}
          label='Payment Method'
          required
        />

        <FormInput
          name='amount'
          label='Amount'
          placeholder='Amount'
          type='number'
          step='0.02'
          validations={{ required: 'Please submit amount' }}
        />

        <div className='flex justify-center mt-5'>
          <Button type='submit' loading={isLoading}>
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default OrderPaymentModal;
