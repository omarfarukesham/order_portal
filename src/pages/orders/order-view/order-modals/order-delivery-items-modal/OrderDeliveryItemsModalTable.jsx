import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';

const OrderDeliveryItemsModalTable = ({ data }) => {
  const columns = [
    { label: 'SL No.', key: 'serial' },
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
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound message='No item info found!' />}
    </div>
  );
};
export default OrderDeliveryItemsModalTable;
