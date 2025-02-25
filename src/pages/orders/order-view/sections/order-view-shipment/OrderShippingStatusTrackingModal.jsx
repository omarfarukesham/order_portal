import Modal from '@/components/modal/Modal';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useOrderPackageDeliveryStatus } from '@/services/order/useOrderPackage';

const OrderShippingStatusTrackingModal = ({
  isOpen,
  setIsOpen,
  trackingId,
}) => {
  const { isLoading, data: status } = useOrderPackageDeliveryStatus(trackingId);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex h-[200px] max-w-[300px] p-10'
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className='flex flex-col gap-2'>
          <div className=''>Current Delivery Status:</div>
          {status?.deliveryStatus && (
            <div className='w-fit py-1 px-2 rounded text-label bg-secondary'>
              {status?.deliveryStatus}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default OrderShippingStatusTrackingModal;
