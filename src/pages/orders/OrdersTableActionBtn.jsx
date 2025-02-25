import EyeIcon from '@/assets/icons/EyeIcon';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const OrdersTableActionBtn = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center'>
      <Button
        // className='hover:bg-primary hover:text-white'
        variant='table-action'
        size='small'
        onClick={() => navigate('/admin/orders/' + data.id)}
      >
        <EyeIcon className='fill-gray-8' />
      </Button>
    </div>
  );
};

export default OrdersTableActionBtn;
