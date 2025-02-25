import { useState } from 'react';
import OrderPackageCreateButton from './OrderPackageCreateButton';
import OrderPackageUpdateButton from './OrderPackageUpdateButton';
import OrderViewItemsSummary from './OrderViewItemsSummary';
import OrderViewItemsTable from './OrderViewItemsTable';

const OrderViewItemsBody = ({ order, orderItems }) => {
  const [selectedItems, setSelectedItems] = useState(
    orderItems.filter((e) => !e.isApproved),
  );

  return (
    <div className='flex-1 overflow-auto'>
      <OrderViewItemsTable
        data={orderItems}
        order={order}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <div className='flex flex-wrap gap-5 p-5'>
        <div className='flex-1 flex gap-5 flex-wrap'>
          <OrderPackageCreateButton
            orderId={order.id}
            selectedItems={selectedItems}
          />

          <OrderPackageUpdateButton
            orderId={order.id}
            selectedItems={selectedItems}
          />
        </div>

        <div className='flex-1'>
          <OrderViewItemsSummary order={order} orderItems={orderItems} />
        </div>
      </div>
    </div>
  );
};

export default OrderViewItemsBody;
