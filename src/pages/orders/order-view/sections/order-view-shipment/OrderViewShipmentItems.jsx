import DataTable from '@/components/table/data-table/DataTable';
import currencyFormatter from '@/utilities/currencyFormatter';

const OrderViewShipmentItems = ({ orderItems = [] }) => {
  const columns = [
    { label: 'Title', key: 'title' },
    {
      label: 'Image',
      key: 'image',
      content: (value) => (
        <img src={value?.url} className='h-12 object-contain' />
      ),
    },
    { label: 'Quantity', key: 'quantity' },
    {
      label: 'Net Amount',
      key: 'netAmount',
      content: (value) => currencyFormatter(value),
    },
  ];
  return (
    <div className='flex-1'>
      <DataTable columns={columns} data={orderItems} />
    </div>
  );
};

export default OrderViewShipmentItems;
