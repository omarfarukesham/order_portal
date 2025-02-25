import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';
import currencyFormatter from '@/utilities/currencyFormatter';
import getFormattedDate from '@/utilities/getFormattedDate';
import OrderApprovePackageButton from './OrderApprovePackageButton';
import OrderShippingStatusTrackingButton from './OrderShippingStatusTrackingButton';

const OrderViewShipmentInfoTable = ({ orderPackage }) => {
  const paymentTextColor =
    orderPackage.paymentStatus === 'PAID' ? 'text-success' : 'text-danger';
  const deliveryStatusColor =
    orderPackage.deliveryStatus === 'DELIVERED' ||
    orderPackage.deliveryStatus === 'OPEN'
      ? 'text-success'
      : 'text-danger';

  const approvalStatusColor =
    orderPackage.approvalStatus === 'APPROVED' ? 'text-success' : 'text-danger';

  return (
    <Table className='flex-1'>
      <TableBody>
        <TableRow>
          <TableData>Order Package Id</TableData>
          <TableData>{orderPackage.id}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Order Id</TableData>
          <TableData>{orderPackage.orderId}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Order Sequence Id</TableData>
          <TableData>{orderPackage.orderSequenceId}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Created At</TableData>
          <TableData>
            {getFormattedDate(orderPackage.createdAt, true)}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Delivery Status</TableData>
          <TableData className={deliveryStatusColor}>
            {orderPackage.deliveryStatus}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Receiver Name</TableData>
          <TableData>{orderPackage?.shippingAddress?.personName}</TableData>
        </TableRow>
        <TableRow>
          <TableData>Seller Id</TableData>
          <TableData>{orderPackage.sellerId}</TableData>
        </TableRow>

        <TableRow>
          <TableData>Delivery Partner</TableData>
          <TableData>
            {orderPackage?.deliveryPartner?.shippingPartner}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Comment</TableData>
          <TableData>{orderPackage.comment}</TableData>
        </TableRow>

        <TableRow>
          <TableData>Partner Collected Amount</TableData>
          <TableData>
            {currencyFormatter(orderPackage.partnerCollectedAmount)}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Payment Payment Status</TableData>
          <TableData className={paymentTextColor}>
            {orderPackage.partnerPaymentStatus}
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Approval Status</TableData>
          <TableData className='flex gap-3 justify-between items-center'>
            <div className={approvalStatusColor}>
              {orderPackage?.approvalStatus}
            </div>

            <OrderApprovePackageButton orderPackage={orderPackage} />
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>Delivery Partner Transaction Id</TableData>
          <TableData>{orderPackage.deliveryPartnerTransactionId}</TableData>
        </TableRow>

        <TableRow>
          <TableData>Order Tracking No</TableData>
          <TableData className='flex gap-3 justify-between items-center'>
            <div>{orderPackage.orderTrackingNo}</div>

            {orderPackage.orderTrackingNo && (
              <OrderShippingStatusTrackingButton
                trackingId={orderPackage.orderTrackingNo}
              />
            )}
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default OrderViewShipmentInfoTable;
