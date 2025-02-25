import Button from '@/components/ui/Button';
import { useAddOrderPackage } from '@/services/order/useOrderPackage';
import { toast } from 'react-toastify';

const OrderPackageCreateButton = ({ orderId, selectedItems }) => {
  const { isLoading, mutate } = useAddOrderPackage();
  const allAreWithoutOrderPackageId = selectedItems.every(
    (e) => !e.orderPackageId,
  );

  const handlePackageCreate = () => {
    const data = {
      orderId,
      orderItemIds: selectedItems.map((e) => e.id),
    };

    mutate(data, {
      onSuccess: () => {
        toast.success('Package created successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  if (!allAreWithoutOrderPackageId || selectedItems.length < 1) return null;

  return (
    <Button
      loading={isLoading}
      className='w-36'
      size='slim'
      onClick={handlePackageCreate}
    >
      Create Package
    </Button>
  );
};

export default OrderPackageCreateButton;
