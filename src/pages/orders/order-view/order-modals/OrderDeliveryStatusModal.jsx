import Form from '@/components/form/Form';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import PageError from '@/components/layout/PageError';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDeliveryStatus } from '@/services/order/useOrder';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderDeliveryStatusModal = ({ isOpen, setIsOpen }) => {
  const { id } = useParams();
  const { isLoading, error, mutate: deliveryOrderStatus } = useDeliveryStatus();

  // const navigate = useNavigate();
  const updateReturn = (data) => {
    // alert('Coming soon .. ');
    deliveryOrderStatus(
      {
        id,
        ...data,
      },
      {
        onSuccess: () => {
          toast.success('Successfully Order delivery Status Change');
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const deliveryOptions = [
    { label: 'Processing', value: 'PROCESSING' },
    { label: 'Delivered', value: 'DELIVERED' },
    { label: 'Cancel', value: 'CANCELED' },
    { label: 'Return', value: 'RETURNED' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10 max-w-[400px]'
    >
      <Form onSubmit={updateReturn} className='flex-1 flex flex-col gap-10'>
        <p className='text-center my-2'>Select the Delivery Status</p>
        <div className=''>
          <FormDropdown
            name='deliveryStatus'
            options={deliveryOptions}
            validations={{ required: 'Please Write delivery Status' }}
          />
          {error && <PageError message={error.message} />}
        </div>
        <div className='flex justify-center gap-5'>
          {isLoading && <LoadingSpinner text='Canceling Order' />}
          {!isLoading && (
            <>
              <div className='flex justify-center gap-3 mt-5'>
                <Button type='submit'>Confirm</Button>
              </div>
              <div className='flex justify-center gap-3 mt-5'>
                <Button
                  type='submit'
                  onClick={closeModal}
                  className='bg-secondary hover:bg-primary hover:text-white'
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </Form>
    </Modal>
  );
};

export default OrderDeliveryStatusModal;
