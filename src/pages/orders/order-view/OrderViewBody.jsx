import PageError from '@/components/layout/PageError';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { ORDER_VIEW } from '@/configuration/constants';
import { useOrderDetails } from '@/services/order/useOrder';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderViewBodyTabs from './OrderViewBodyTabs';

const OrderViewBody = () => {
  const { id } = useParams();
  const { data: orderDetails, error, isFetching } = useOrderDetails(id);
  const [viewMode, setViewMode] = useState(ORDER_VIEW.basic);

  return (
    <PageInnerContainer className='flex flex-col'>
      {isFetching && <LoadingSpinner text='Loading Order' className='flex' />}
      {!isFetching && orderDetails && !error && (
        <OrderViewBodyTabs
          order={orderDetails}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      )}
      {!isFetching && error && <PageError message={error.message} />}
    </PageInnerContainer>
  );
};

export default OrderViewBody;
