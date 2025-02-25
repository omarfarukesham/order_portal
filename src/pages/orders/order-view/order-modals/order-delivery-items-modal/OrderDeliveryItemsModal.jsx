/* eslint-disable no-unused-vars */
import Modal from '@/components/modal/Modal';
import { useState } from 'react';
import OrderDeliveryItemsModalAdd from './OrderDeliveryItemsModalAdd';
import OrderDeliveryItemsModalList from './OrderDeliveryItemsModalList';
import { orderDeliverItemsModalViewModes } from './orderDeliverItemsModalViewModes';

const OrderDeliveryItemsModal = ({ isOpen, setIsOpen, orderItem }) => {
  const [viewMode, setViewMode] = useState(
    orderDeliverItemsModalViewModes.list,
  );

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col lg:min-h-[600px] min-h-[400px]'
    >
      {viewMode === orderDeliverItemsModalViewModes.list && (
        <OrderDeliveryItemsModalList
          orderItem={orderItem}
          setViewMode={setViewMode}
        />
      )}
      {viewMode === orderDeliverItemsModalViewModes.add && (
        <OrderDeliveryItemsModalAdd
          orderItem={orderItem}
          setViewMode={setViewMode}
        />
      )}
    </Modal>
  );
};

export default OrderDeliveryItemsModal;
