import CollapsibleSection from '@/components/ui/CollapsibleSection';

const OrderViewAddresses = ({ order }) => {
  return (
    <CollapsibleSection
      title='Address Information'
      isCollapsible={false}
      contentClassName='flex gap-10 text-label'
    >
      <OrderAddress
        title='Billing address'
        order={order}
        address={order?.billingInfo}
      />
      <OrderAddress
        title='Shipping address'
        order={order}
        address={order?.shippingInfo}
      />
    </CollapsibleSection>
  );
};

export default OrderViewAddresses;

const OrderAddress = ({ title, address }) => {
  return (
    <div className='flex-1'>
      <p className='font-bold text-level pb-2'>{title}</p>
      <div className=''>
        <div className=''>
          <p>Name: {address?.personName}</p>
          <p>Phone: {address?.phone}</p>
          <p>email: {address?.email}</p>
          <p>{address?.details}</p>
          <p>
            {address?.zoneName && address.zoneName + ', '}
            {address?.areaName && address.areaName}
          </p>
          <p>
            {address?.stateName && address.stateName + ', '}
            {address?.countryName && address.countryName}
          </p>
        </div>
      </div>
    </div>
  );
};
