import Button from '@/components/ui/Button';
import { useState } from 'react';
import OrderPaymentModal from '../../order-modals/order-payment-modal/OrderPaymentModal';

const OrderMakePaymentButton = ({ order }) => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  return (
    <>
      <Button
        disabled={
          !(order.paymentStatus !== 'PAID' && order.paymentMethod === 'COD')
        }
        onClick={() => setOpenPaymentModal(true)}
        variant='texted-outlined'
        size='small'
      >
        Make payment
      </Button>

      {openPaymentModal && (
        <OrderPaymentModal
          isOpen={openPaymentModal}
          setIsOpen={setOpenPaymentModal}
          order={order}
        />
      )}
    </>
  );
};

export default OrderMakePaymentButton;
