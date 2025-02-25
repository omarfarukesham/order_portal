import { USER_TYPE } from '@/configuration/constants';
import { useAuthContext } from '@/context/authContext';
import OrderViewAddresses from './OrderViewAddresses';
import OrderViewBasicActions from './OrderViewBasicActions';
import OrderViewBasicInfoRow from './OrderViewBasicInfoRow';

const OrderViewBodyBasic = ({ order }) => {
  const { user } = useAuthContext();

  return (
    <div className='flex-1 flex flex-col gap-5 p-5 overflow-auto'>
      <OrderViewBasicInfoRow order={order} />
      <OrderViewAddresses order={order} />
      {user.userType === USER_TYPE.admin && (
        <OrderViewBasicActions order={order} />
      )}
    </div>
  );
};

export default OrderViewBodyBasic;
