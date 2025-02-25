import Form from '@/components/form/Form';
import FormTextarea from '@/components/form/FormTextarea';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderItemsReturn } from '@/services/order/useOrder';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderReturnModal = ({ isOpen, setIsOpen }) => {
  const { id } = useParams();
  const { isLoading, mutate } = useOrderItemsReturn();

  const handleSubmit = (formData) => {
    const data = {
      orderId: id,
      type: 'ORDER_RETURN',
      ...formData,
    };

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully Return');
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
      className='flex p-8 max-w-[400px]'
    >
      <Form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-5'>
        <p className='text-center my-2'>
          Do you want to <span className='font-bold italic'>Return</span> this
          order?
        </p>
        <FormTextarea
          name='reason'
          placeholder='Please write a reason'
          validations={{ required: 'Please write a reason' }}
        />

        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className='flex justify-center gap-3 mt-5'>
            <Button type='submit'>Confirm</Button>
            <Button
              onClick={() => setIsOpen(false)}
              className='bg-secondary hover:bg-primary hover:text-white'
            >
              Cancel
            </Button>
          </div>
        )}
      </Form>
    </Modal>
  );
};

export default OrderReturnModal;
