import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import getFormattedDate from '@/utilities/getFormattedDate';

const OrderViewHistoriesTable = ({ data }) => {
  const columns = [
    {
      label: 'Order Sequence Id',
      key: 'orderSequenceId',
    },
    {
      label: 'Reference Id',
      key: 'orderRequestId',
    },
    {
      label: 'Action Type',
      key: 'actionType',
    },
    {
      label: 'Previous Status',
      key: 'previousStatus',
    },
    {
      label: 'Current Status',
      key: 'currentStatus',
    },
    {
      label: 'Reason',
      key: 'reason',
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

export default OrderViewHistoriesTable;
