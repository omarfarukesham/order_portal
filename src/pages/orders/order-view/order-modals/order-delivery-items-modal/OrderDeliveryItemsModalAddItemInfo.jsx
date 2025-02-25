/* eslint-disable no-unused-vars */
import FormInput from '@/components/form/FormInput';
import Button from '@/components/ui/Button';
import { useEffect, useMemo } from 'react';
import { useFieldArray } from 'react-hook-form';

const OrderDeliveryItemsModalAddItemInfo = ({ orderItem, setViewMode }) => {
  const name = 'itemInfos';

  const { fields, append, remove } = useFieldArray({
    name: name,
  });

  const emptyItemInfo = useMemo(() => ({ key: '', value: '' }), []);

  useEffect(() => {
    if (!fields.length) {
      append(emptyItemInfo);
    }
  }, [append, emptyItemInfo, fields.length]);

  return (
    <div className='flex-1 flex flex-col gap-5'>
      {fields.map((item, index) => (
        <div key={item.id} className='flex gap-3 items-center'>
          <div className='flex-1 grid grid-cols-2 gap-3'>
            <FormInput
              name={`${name}[${index}].key`}
              placeholder='Field Name'
            />
            <FormInput
              name={`${name}[${index}].value`}
              placeholder='Field Value'
            />
          </div>
          <Button
            variant='texted-outlined'
            size='small'
            disabled={index === 0}
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </div>
      ))}

      <div>
        <Button
          variant='texted-outlined'
          size='small'
          onClick={() => append(emptyItemInfo)}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default OrderDeliveryItemsModalAddItemInfo;
