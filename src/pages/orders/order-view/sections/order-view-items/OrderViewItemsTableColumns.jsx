import currencyFormatter from '@/utilities/currencyFormatter';

const OrderViewItemsTableColumns = [
  {
    label: 'Name',
    key: 'productInfo',
    content: (value, orderItem) => (
      <div className='grid gap-2'>
        <div className='whitespace-pre-line line-clamp-2'>
          {value?.title} <br />
        </div>
        <div className='w-fit bg-secondary rounded py-1 px-2'>
          {orderItem.isApproved
            ? 'Approved'
            : orderItem.orderPackageId
              ? 'Packaged'
              : 'Not Packaged'}
        </div>
      </div>
    ),
  },
  {
    label: 'Product Id',
    key: 'productInfo',
    content: (value) => <div className='whitespace-pre-line'>{value?.id}</div>,
  },
  {
    label: 'Image',
    key: 'productInfo',
    content: (value) => (
      <img src={value?.image?.url} className='h-12 object-contain' />
    ),
  },
  {
    label: 'Quantity',
    key: 'quantity',
  },
  {
    label: 'Return Quantity',
    key: 'returnQuantity',
  },
  {
    label: 'Delivery Status',
    key: 'itemDeliveryStatus',
  },
  {
    label: 'Refunded Amount',
    key: 'refundAmount',
    content: (value) => currencyFormatter(value),
  },
  {
    label: 'Unit Price',
    key: 'productInfo',
    content: (value) => currencyFormatter(value?.price),
  },
  {
    label: 'Total Price',
    key: 'total',
    content: (value) => currencyFormatter(value),
  },
  {
    label: 'Discount',
    key: 'netDiscount',
    content: (value) => currencyFormatter(value),
  },
  {
    label: 'Net Price',
    key: 'netAmount',
    content: (value) => currencyFormatter(value),
  },
];

export default OrderViewItemsTableColumns;
