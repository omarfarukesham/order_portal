import getFormattedDate from '@/utilities/getFormattedDate';

const PaymentsTableColumns = [
  {
    label: 'PGW ReferenceId',
    key: 'pgwReferenceId',
  },
  {
    label: 'Order Request Id',
    key: 'orderRequestId',
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
    label: 'Payment Method',
    key: 'paymentMethod',
  },
  {
    label: 'Payment Status',
    key: 'paymentStatus',
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

export default PaymentsTableColumns;
