import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import OrderViewBody from './OrderViewBody';

const OrderView = () => {
  return (
    <PageContainer className='flex flex-col gap-3 overflow-hidden'>
      <PageHeader title='Order Details' />
      <OrderViewBody />
    </PageContainer>
  );
};

export default OrderView;
