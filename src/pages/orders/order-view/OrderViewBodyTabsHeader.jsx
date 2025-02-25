import Button from '@/components/ui/Button';
import { ORDER_VIEW } from '@/configuration/constants';

const OrderViewBodyTabsHeader = ({ viewMode, setViewMode }) => {
  return (
    <div className='flex gap-3 border-b border-gray-4 p-5'>
      <Button
        variant={viewMode === ORDER_VIEW.basic ? 'secondary' : ''}
        onClick={() => setViewMode(ORDER_VIEW.basic)}
        size='small'
      >
        Basic Info
      </Button>

      <Button
        variant={viewMode === ORDER_VIEW.products ? 'secondary' : ''}
        onClick={() => setViewMode(ORDER_VIEW.products)}
        size='small'
      >
        Items
      </Button>

      <Button
        variant={viewMode === ORDER_VIEW.payments ? 'secondary' : ''}
        onClick={() => setViewMode(ORDER_VIEW.payments)}
        size='small'
      >
        Payments
      </Button>

      <Button
        variant={viewMode === ORDER_VIEW.shipment ? 'secondary' : ''}
        onClick={() => setViewMode(ORDER_VIEW.shipment)}
        size='small'
      >
        Shipping
      </Button>

      <Button
        variant={viewMode === ORDER_VIEW.history ? 'secondary' : ''}
        onClick={() => setViewMode(ORDER_VIEW.history)}
        size='small'
      >
        History
      </Button>
    </div>
  );
};

export default OrderViewBodyTabsHeader;
