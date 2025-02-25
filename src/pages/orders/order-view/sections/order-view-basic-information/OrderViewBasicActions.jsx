import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useState } from 'react';
import OrderCancelModal from '../../order-modals/OrderCancelModal';
import OrderConfirmationModal from '../../order-modals/OrderConfirmationModal';
import OrderDeliveryStatusModal from '../../order-modals/OrderDeliveryStatusModal';
import OrderRefundModal from '../../order-modals/OrderRefundModal';
import OrderReturnModal from '../../order-modals/OrderReturnModal';

const OrderViewBasicActions = ({ order }) => {
  const [isReturnModal, setIsReturnModal] = useState(false);
  const [isDeliveryModal, setIsDeliveryModal] = useState(false);
  const [isCancelModal, setIsCancelModal] = useState(false);
  const [isRefundModal, setIsRefundModal] = useState(false);
  const [isConfirmModal, setIsConfirmModal] = useState(false);

  return (
    <CollapsibleSection
      title='Actions'
      isCollapsible={false}
      contentClassName='flex gap-5'
    >
      <Button
        className='hover:bg-primary hover:text-white'
        disabled={!order.isCancelable}
        onClick={() => setIsDeliveryModal(true)}
        variant='outlined'
        size='slim'
      >
        Delivery
      </Button>

      <Button
        className='hover:bg-primary hover:text-white'
        disabled={!order.isCancelable}
        variant='outlined'
        size='slim'
        onClick={() => setIsCancelModal(true)}
      >
        Cancel
      </Button>

      <Button
        className='hover:bg-primary hover:text-white'
        disabled={!order.isCancelable}
        onClick={() => setIsReturnModal(true)}
        variant='outlined'
        size='slim'
      >
        Return
      </Button>

      <Button
        className='hover:bg-primary hover:text-white'
        disabled={!order.isCancelable}
        variant='outlined'
        size='slim'
        onClick={() => setIsRefundModal(true)}
      >
        Refund
      </Button>

      <Button
        className='hover:bg-primary hover:text-white'
        variant='outlined'
        size='slim'
        onClick={() => setIsConfirmModal(true)}
      >
        Confirm Order
      </Button>

      {isReturnModal && (
        <OrderReturnModal isOpen={isReturnModal} setIsOpen={setIsReturnModal} />
      )}

      {isDeliveryModal && (
        <OrderDeliveryStatusModal
          isOpen={isDeliveryModal}
          setIsOpen={setIsDeliveryModal}
        />
      )}

      {isCancelModal && (
        <OrderCancelModal isOpen={isCancelModal} setIsOpen={setIsCancelModal} />
      )}

      {isRefundModal && (
        <OrderRefundModal isOpen={isRefundModal} setIsOpen={setIsRefundModal} />
      )}

      {isConfirmModal && (
        <OrderConfirmationModal
          isOpen={isConfirmModal}
          setIsOpen={setIsConfirmModal}
        />
      )}
    </CollapsibleSection>
  );
};
export default OrderViewBasicActions;
