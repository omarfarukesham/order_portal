import FormLabel from '@/components/form/FormLabel';
import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import Checkbox from '@/components/ui/Checkbox';
import { DELIVERY_STATUS } from '@/configuration/constants';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const OrderItemReturnModalDeliveryInfos = ({ deliveryItems = [] }) => {
  const name = 'deliveryItemInfoIds';
  const { getValues, setValue } = useFormContext();
  const [selectedIds, setSelectedIds] = useState(getValues(name));

  const handleSelection = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((e) => id !== e));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  useEffect(() => {
    setValue(name, selectedIds);
    setValue('quantity', selectedIds.length);
  }, [selectedIds, setValue]);

  const columns = [
    {
      label: 'Select',
      key: 'id',
      content: (id, deliveryItem) => {
        return (
          <Checkbox
            disabled={
              deliveryItem.deliveryItemStatus === DELIVERY_STATUS.returned
            }
            checked={selectedIds.includes(id)}
            onChange={() => handleSelection(id)}
          />
        );
      },
    },
    {
      label: 'Details',
      key: 'itemInfo',
      content: (itemInfo) => {
        const keys = Object.keys(itemInfo || {});

        return keys.map((oKey) => (
          <div key={oKey}>
            {oKey}: {itemInfo[oKey]}
          </div>
        ));
      },
    },
    { label: 'Status', key: 'deliveryItemStatus' },
  ];

  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <FormLabel label='Select Delivery Items' />
      <DataTable columns={columns} data={deliveryItems} />
      {deliveryItems?.length === 0 && (
        <NoDataFound message='No item info found!' />
      )}
    </div>
  );
};

export default OrderItemReturnModalDeliveryInfos;
