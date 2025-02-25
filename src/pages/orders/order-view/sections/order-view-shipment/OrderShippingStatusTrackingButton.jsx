import Button from '@/components/ui/Button';
import { useState } from 'react';
import OrderShippingStatusTrackingModal from './OrderShippingStatusTrackingModal';

const OrderShippingStatusTrackingButton = ({ trackingId }) => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpenConfirmModal(true)}
        variant='texted-outlined'
        size='small'
      >
        Get Status
      </Button>

      {openConfirmModal && (
        <OrderShippingStatusTrackingModal
          isOpen={openConfirmModal}
          setIsOpen={setOpenConfirmModal}
          trackingId={trackingId}
        />
      )}
    </>
  );
};

export default OrderShippingStatusTrackingButton;
