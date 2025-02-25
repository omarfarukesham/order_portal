import Button from '@/components/ui/Button';
import { useState } from 'react';
import OrderPartialRefundModal from '../../order-modals/OrderPartialRefundModal';
import OrderDeliveryItemsModal from '../../order-modals/order-delivery-items-modal/OrderDeliveryItemsModal';
import OrderItemReturnModal from '../../order-modals/order-item-return-modal/OrderItemReturnModal';

const OrderViewItemsBtn = ({ order, orderItem }) => {
  const [isOpenReturnModal, setIsOpenReturnModal] = useState(false);
  const [isOpenRefundModal, setIsOpenRefundModal] = useState(false);
  const [isOpenDeliveryItemsModal, setIsOpenDeliveryItemsModal] =
    useState(false);

  return (
    <>
      <div className='flex gap-3 justify-center flex-wrap'>
        <Button
          className='w-[auto] h-[auto] hover:bg-primary hover:text-white'
          variant='outlined'
          size='small'
          onClick={() => setIsOpenReturnModal(true)}
        >
          RETURN
        </Button>

        <Button
          className='w-[auto] h-[auto] hover:bg-primary hover:text-white'
          variant='outlined'
          size='small'
          onClick={() => setIsOpenRefundModal(true)}
        >
          REFUND
        </Button>

        <Button
          className='w-[auto] h-[auto] hover:bg-primary hover:text-white'
          variant='outlined'
          size='small'
          onClick={() => setIsOpenDeliveryItemsModal(true)}
        >
          Delivery Items
        </Button>
      </div>

      {isOpenReturnModal && (
        <OrderItemReturnModal
          isOpen={isOpenReturnModal}
          setIsOpen={setIsOpenReturnModal}
          order={order}
          orderItem={orderItem}
        />
      )}

      {isOpenRefundModal && (
        <OrderPartialRefundModal
          isOpen={isOpenRefundModal}
          setIsOpen={setIsOpenRefundModal}
          order={order}
          orderItem={orderItem}
        />
      )}

      {isOpenDeliveryItemsModal && (
        <OrderDeliveryItemsModal
          isOpen={isOpenDeliveryItemsModal}
          setIsOpen={setIsOpenDeliveryItemsModal}
          order={order}
          orderItem={orderItem}
        />
      )}
    </>
  );
};

export default OrderViewItemsBtn;
