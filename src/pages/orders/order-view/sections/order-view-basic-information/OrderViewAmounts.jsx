import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';
import currencyFormatter from '@/utilities/currencyFormatter';
const OrderViewAmounts = ({ order }) => {
  return (
    <Table className='flex-1'>
      <TableBody>
        <TableRow>
          <TableData>
            Item(s) Total <br />
            Item(s) Discount
          </TableData>
          <TableData>
            {currencyFormatter(order.totalAmount)} <br />
            {currencyFormatter(order.discountAmount)}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>
            Shipping Fee <br />
            Shipping Discount
          </TableData>
          <TableData>
            {currencyFormatter(order?.shippingFeeInfo?.originalAmount)} <br />
            {currencyFormatter(order?.shippingFeeInfo?.discountAmount)}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Coupon Discount</TableData>
          <TableData>
            {currencyFormatter(order.couponDiscount)} <br />
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Net Amount</TableData>
          <TableData>
            <span className='bg-secondary'>
              {currencyFormatter(order.netAmount)}
            </span>
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default OrderViewAmounts;
