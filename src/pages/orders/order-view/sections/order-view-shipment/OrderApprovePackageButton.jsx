import ConfirmationModal from '@/components/modal/ConfirmationModal/ConfirmationModal';
import Button from '@/components/ui/Button';
import { useApproveOrderPackage } from '@/services/order/useOrderPackage';
import { useState } from 'react';

const OrderApprovePackageButton = ({ orderPackage }) => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const { mutate, isLoading } = useApproveOrderPackage();

  const onConfirmed = () => {
    mutate(orderPackage);
  };

  return (
    <>
      <Button
        disabled={orderPackage.approvalStatus === 'APPROVED' || isLoading}
        onClick={() => setOpenConfirmModal(true)}
        variant='texted-outlined'
        size='small'
        loading={isLoading}
      >
        Approve
      </Button>

      {openConfirmModal && (
        <ConfirmationModal
          isOpen={openConfirmModal}
          setIsOpen={setOpenConfirmModal}
          onAccept={onConfirmed}
          title={
            <div className='grid gap-3'>
              <div className='font-bold'>Are you sure?</div>
              <div>
                Do you want to <i className='font-bold'>approve</i> this order?
              </div>
            </div>
          }
        />
      )}
    </>
  );
};

export default OrderApprovePackageButton;
