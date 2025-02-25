import OrderViewAmounts from './OrderViewAmounts';
import OrderViewBasicInfo from './OrderViewBasicInfo';

const OrderViewBasicInfoRow = ({ order }) => {
  return (
    <div className='flex gap-10'>
      <OrderViewBasicInfo order={order} />
      <div className='flex-1'>
        <OrderViewAmounts order={order} />
      </div>
    </div>
  );
};

export default OrderViewBasicInfoRow;
