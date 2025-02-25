import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import getFormattedDate from '@/utilities/getFormattedDate';

const OrderViewPaymentsTable = ({ data }) => {
  const columns = [
    {
      label: 'Order Id',
      key: 'orderId',
    },
    {
      label: 'Seller Id',
      key: 'sellerId',
    },
    {
      label: 'Order Payment Id',
      key: 'orderPaymentId',
    },
    {
      label: 'Amount',
      key: 'amount',
    },
    {
      label: 'Currency Code',
      key: 'currencyCode',
    },
    {
      label: 'Payment Status',
      key: 'paymentStatus',
    },
    {
      label: 'Payment Method',
      key: 'paymentMethod',
    },
    {
      label: 'Created At',
      key: 'createdAt',
      content: (value) => getFormattedDate(value, true),
    },
    {
      label: 'Created By',
      key: 'createdBy',
    },
  ];
  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default OrderViewPaymentsTable;
