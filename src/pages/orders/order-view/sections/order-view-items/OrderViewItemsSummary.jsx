import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';
import currencyFormatter from '@/utilities/currencyFormatter';

const OrderViewItemsSummary = ({ order, orderItems }) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableData>Delivery Status</TableData>
          <TableData>{currencyFormatter(order.deliveryStatus)}</TableData>
        </TableRow>

        <TableRow>
          <TableData>Total Unit Price</TableData>
          <TableData>
            {currencyFormatter(
              orderItems?.reduce(
                (totalUnitPrice, oItem) =>
                  totalUnitPrice + oItem?.productInfo?.price,
                0,
              ),
            )}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Total Item Quantity</TableData>
          <TableData>
            {orderItems?.reduce(
              (totalQuantity, oItem) => totalQuantity + oItem.quantity,
              0,
            )}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Total Price</TableData>
          <TableData>{currencyFormatter(order.totalAmount)}</TableData>
        </TableRow>

        <TableRow>
          <TableData>Total Discount</TableData>
          <TableData>{currencyFormatter(order.discountAmount)}</TableData>
        </TableRow>

        <TableRow>
          <TableData>Refunded Amount</TableData>
          <TableData>{currencyFormatter(order.totalRefundAmount)}</TableData>
        </TableRow>

        <TableRow>
          <TableData>Net Amount</TableData>
          <TableData>{currencyFormatter(order.netAmount)}</TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default OrderViewItemsSummary;
