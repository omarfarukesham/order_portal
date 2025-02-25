import currencyFormatter from '@/utilities/currencyFormatter';
import getFormattedDate from '@/utilities/getFormattedDate';
import OrdersTableActionBtn from './OrdersTableActionBtn';
const ordersTableColumns = [
  {
    label: 'SL No.',
    key: 'serial',
  },
  {
    label: 'Order ID',
    key: 'orderSequenceId',
  },
  {
    label: 'Customer Name',
    key: 'customerName',
  },
  {
    label: 'Seller Name',
    key: 'sellerName',
  },
  {
    label: 'Order Status',
    key: 'orderStatus',
    content: (value) => {
      let statusClass = '';

      // Check order status and set corresponding class
      if (value === 'CANCELED' || value === 'FAILED') {
        statusClass = 'text-danger';
      } else if (['SUCCESS', 'CONFIRMED'].includes(value)) {
        statusClass = 'text-success';
      }

      return <div className={statusClass}>{value}</div>;
    },
  },
  {
    label: 'Payment Status',
    key: 'paymentStatus',
    content: (value) => {
      let statusClass = '';

      // Check order status and set corresponding class
      if (value === 'FAILED') {
        statusClass = 'text-danger';
      } else if (value === 'PAID') {
        statusClass = 'text-success';
      }

      return <div className={statusClass}>{value}</div>;
    },
  },
  {
    label: 'Payment Method',
    key: 'paymentMethod',
  },
  {
    label: 'Delivery Status',
    key: 'deliveryStatus',
  },
  {
    label: 'Total',
    key: 'totalAmount',
    content: (value, order) => currencyFormatter(value, order.currencyCode),
  },
  {
    label: 'Discount',
    key: 'discountAmount',
    content: (value, order) => currencyFormatter(value, order.currencyCode),
  },
  {
    label: 'Shipping Fee',
    key: 'shippingFee',
    content: (value, order) => currencyFormatter(value, order.currencyCode),
  },
  {
    label: 'Net Amount',
    key: 'netAmount',
    content: (value, order) => currencyFormatter(value, order.currencyCode),
  },
  {
    label: 'Created At',
    key: 'createdAt',
    content: (value) => getFormattedDate(value, true),
  },
  {
    label: <div className='text-center'>Action</div>,
    content: (_, order) => <OrdersTableActionBtn data={order} />,
  },
];

export default ordersTableColumns;
