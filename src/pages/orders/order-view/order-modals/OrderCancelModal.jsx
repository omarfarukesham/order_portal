import Form from '@/components/form/Form';
import FormTextarea from '@/components/form/FormTextarea';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderCancel } from '@/services/order/useOrder';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderCancelModal = ({ isOpen, setIsOpen }) => {
  const { id } = useParams();
  const { isLoading, mutate } = useOrderCancel();

  const updateCancel = (formData) => {
    const data = {
      id: id,
      ...formData,
    };

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully Cancel Order');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10 max-w-[400px]'
    >
      <Form onSubmit={updateCancel} className='flex-1 flex flex-col gap-5'>
        <p className='text-center my-2'>
          Do you want to <span className='font-bold italic'>Cancel</span> this
          order?
        </p>
        <FormTextarea
          name='reason'
          placeholder='Please write a reason'
          validations={{ required: 'Please write a reason' }}
        />

        {isLoading && <LoadingSpinner text='Canceling Order' />}
        {!isLoading && (
          <div className='flex justify-center gap-3 mt-5'>
            <Button type='submit'>Confirm</Button>
            <Button
              type='submit'
              onClick={closeModal}
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

export default OrderCancelModal;
