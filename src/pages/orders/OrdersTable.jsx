import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import ordersTableColumns from './ordersTableColumns';
const OrdersTable = ({ data }) => {
  const columns = ordersTableColumns;

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default OrdersTable;
