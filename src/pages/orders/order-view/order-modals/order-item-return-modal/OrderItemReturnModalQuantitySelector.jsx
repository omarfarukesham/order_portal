import FakeInput from '@/components/form/FakeInput';
import { useWatch } from 'react-hook-form';

const OrderItemReturnModalQuantitySelector = ({ maxQuantity }) => {
  const fieldName = 'quantity';
  const quantity = useWatch({ name: fieldName });

  return (
    <div className='flex-1'>
      <FakeInput
        name={fieldName}
        label='Product Quantity'
        type='number'
        value={`${quantity} of ${maxQuantity} selected`}
      />
    </div>
  );
};

export default OrderItemReturnModalQuantitySelector;
