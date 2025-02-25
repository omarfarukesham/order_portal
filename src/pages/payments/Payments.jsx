import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import PaymentsBody from './PaymentsBody';

const Payments = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Payments' backButton={false} />
      <PaymentsBody />
    </PageContainer>
  );
};

export default Payments;
