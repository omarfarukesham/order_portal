import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import Checkbox from '@/components/ui/Checkbox';
import { USER_TYPE } from '@/configuration/constants';
import { useAuthContext } from '@/context/authContext';
import OrderViewItemsBtn from './OrderViewItemsBtn';
import OrderViewItemsTableColumns from './OrderViewItemsTableColumns';

const OrderViewItemsTable = ({
  data = [],
  order,
  selectedItems = [],
  setSelectedItems = () => null,
}) => {
  const isApprovedItemExists = !!data.filter((item) => item.isApproved).length;

  // Checkbox Column Action
  const isAllSelected = data.every((e) =>
    selectedItems.map((e) => e.id).includes(e.id),
  );
  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((e) => e.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const handleAllItemClick = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data);
    }
  };

  // Columns
  const selectionColumn = {
    key: 'id',
    label: (
      <Checkbox
        checked={isAllSelected}
        onChange={handleAllItemClick}
        disabled={isApprovedItemExists}
      />
    ),
    content: (value, orderItem) => {
      return (
        <Checkbox
          checked={!!selectedItems.map((e) => e.id).includes(value)}
          onChange={() => handleItemClick(orderItem)}
          disabled={!!orderItem.isApproved}
        />
      );
    },
  };

  const actionColumn = {
    label: <div className='text-center'>Action</div>,
    content: (value, orderItem) => {
      return orderItem.id ? (
        <OrderViewItemsBtn order={order} orderItem={orderItem} />
      ) : null;
    },
  };

  const { user } = useAuthContext();
  let columns = [];
  if (user.userType === USER_TYPE.admin) {
    columns = [selectionColumn, ...OrderViewItemsTableColumns, actionColumn];
  } else {
    columns = OrderViewItemsTableColumns;
  }

  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <DataTable
        data={data}
        columns={columns}
        onRowClick={(orderItem) =>
          orderItem.isApproved ? null : handleItemClick(orderItem)
        }
      />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default OrderViewItemsTable;
