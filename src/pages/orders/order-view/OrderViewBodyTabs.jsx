import { ORDER_VIEW } from '@/configuration/constants';
import OrderViewBodyTabsHeader from './OrderViewBodyTabsHeader';
import OrderViewBodyBasic from './sections/order-view-basic-information/OrderViewBasicInformation';
import OrderViewHistories from './sections/order-view-histories/OrderViewHistories';
import OrderViewItems from './sections/order-view-items/OrderViewItems';
import OrderViewPayments from './sections/order-view-payments/OrderViewPayments';
import OrderViewShipment from './sections/order-view-shipment/OrderViewShipment';

const OrderViewBodyTabs = ({ order, viewMode, setViewMode }) => {
  return (
    <div className='h-full flex flex-1 flex-col'>
      <OrderViewBodyTabsHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
        order={order}
      />

      {viewMode === ORDER_VIEW.basic && <OrderViewBodyBasic order={order} />}
      {viewMode === ORDER_VIEW.products && <OrderViewItems order={order} />}
      {viewMode === ORDER_VIEW.payments && <OrderViewPayments order={order} />}
      {viewMode === ORDER_VIEW.shipment && <OrderViewShipment order={order} />}
      {viewMode === ORDER_VIEW.history && <OrderViewHistories order={order} />}
    </div>
  );
};

export default OrderViewBodyTabs;
