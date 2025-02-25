import Button from '@/components/ui/Button';
import { useUpdateOrderPackage } from '@/services/order/useOrderPackage';
import { toast } from 'react-toastify';

const OrderPackageUpdateButton = ({ orderId, selectedItems }) => {
  const { isLoading, mutate } = useUpdateOrderPackage();
  const orderPackageId = selectedItems.filter((e) => e.orderPackageId)?.[0]
    ?.orderPackageId;
  const isAllAreApproved = selectedItems.every((e) => e.isApproved);

  const handlePackageUpdate = () => {
    const data = {
      orderPackageId,
      orderId,
      orderItemIds: selectedItems.map((e) => e.id),
    };

    mutate(data, {
      onSuccess: () => {
        toast.success('Package updated successfully');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  if (!orderPackageId || isAllAreApproved) return null;

  return (
    <Button
      loading={isLoading}
      className='w-36'
      size='slim'
      onClick={handlePackageUpdate}
      disabled={!orderPackageId}
    >
      Update Package
    </Button>
  );
};

export default OrderPackageUpdateButton;
