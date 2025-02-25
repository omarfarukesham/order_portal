import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';
import { USER_TYPE } from '@/configuration/constants';
import { useAuthContext } from '@/context/authContext';
import currencyFormatter from '@/utilities/currencyFormatter';
import getFormattedDate from '@/utilities/getFormattedDate';
import OrderMakePaymentButton from './OrderMakePaymentButton';

const OrderViewBasicInfo = ({ order }) => {
  const { user } = useAuthContext();

  const statusTextColor = ['SUCCESS', 'CONFIRMED'].includes(order.orderStatus)
    ? 'text-success'
    : 'text-danger';

  const paymentTextColor = ['PAID'].includes(order.paymentStatus)
    ? 'text-success'
    : 'text-danger';

  const deliveryStatusColor = ['DELIVERED', 'OPEN'].includes(
    order.deliveryStatus,
  )
    ? 'text-success'
    : 'text-danger';

  return (
    <Table className='flex-1'>
      <TableBody>
        <TableRow>
          <TableData>Order Id</TableData>
          <TableData>{order.orderSequenceId}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Placed On</TableData>
          <TableData>{getFormattedDate(order.createdAt, true)}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Order Status</TableData>
          <TableData className={statusTextColor}>{order.orderStatus}</TableData>
        </TableRow>

        <TableRow>
          <TableData>Payment Status</TableData>
          <TableData className={paymentTextColor}>
            {order.paymentStatus}
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>Delivery Status</TableData>
          <TableData className={deliveryStatusColor}>
            {order.deliveryStatus}
          </TableData>
        </TableRow>

        {user.userType === USER_TYPE.admin && (
          <TableRow>
            <TableData>Payment Method</TableData>
            <TableData className='flex gap-3 justify-between items-center'>
              <div>{order.paymentMethod}</div>

              <OrderMakePaymentButton order={order} />
            </TableData>
          </TableRow>
        )}

        <TableRow>
          <TableData>Return Quantity</TableData>
          <TableData>{order.totalReturnQuantity}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Refunded Amount</TableData>
          <TableData>{currencyFormatter(order.totalRefundAmount)}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Customer Name</TableData>
          <TableData>{order.customerName}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Seller Name</TableData>
          <TableData>{order.sellerName}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Shipping Provider</TableData>
          <TableData>{order.shippingProvider}</TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default OrderViewBasicInfo;
