import NoDataFound from '@/components/layout/NoDataFound';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import OrderViewShipmentInfoTable from './OrderViewShipmentInfoTable';
import OrderViewShipmentItems from './OrderViewShipmentItems';

const OrderViewShipmentBody = ({ orderPackages }) => {
  if (!orderPackages.length) {
    return (
      <div className='flex-1 flex justify-center'>
        <NoDataFound />
      </div>
    );
  }

  return (
    <div className='p-5 flex-1 flex flex-col'>
      {orderPackages.map((orderPackage, index) => (
        <CollapsibleSection
          key={orderPackage.id}
          title={`Order Package: ${index + 1}`}
          open={false}
        >
          <div className='flex-1 flex flex-col md:flex-row gap-5'>
            <OrderViewShipmentInfoTable orderPackage={orderPackage} />
            <OrderViewShipmentItems orderItems={orderPackage.orderItems} />
          </div>
        </CollapsibleSection>
      ))}
    </div>
  );
};

export default OrderViewShipmentBody;
