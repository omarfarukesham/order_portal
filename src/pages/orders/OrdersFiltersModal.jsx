import Form from '@/components/form/Form';
import FormDateRangePicker from '@/components/form/FormDateRangePicker';
import FormInput from '@/components/form/FormInput';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import {
  deliveryStatuses,
  orderStatuses,
  paymentMethods,
  paymentStatuses,
} from '@/services/data/filterData';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const OrderFiltersModal = ({
  isOpen,
  setIsOpen,
  filters,
  applyFilters,
  clearFilters,
}) => {
  const filtersData = {
    ...filters,
  };

  const handleApplyFilters = (data) => {
    applyFilters(removeUndefinedKeys(data));
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    clearFilters();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10'
    >
      <Form
        onSubmit={handleApplyFilters}
        defaultValues={filtersData}
        className='flex-1 flex flex-col gap-10'
      >
        <div className='flex-1'>
          <div className='grid md:grid-cols-2 gap-x-10 gap-y-6'>
            <FormDateRangePicker
              startName='createdAtFrom'
              endName='createdAtTo'
              label='Created Date'
              placeholder='Select Date Range'
            />

            <FormInput name='id' label='Order Id' placeholder='Order Id' />
            <FormInput
              name='orderSequenceId'
              label='Order Sequence Id'
              placeholder='Order Sequence Id'
            />
            <FormInput
              name='requestId'
              label='Request Id'
              placeholder='Request Id'
            />
            <FormDropdown
              name='orderStatus'
              label='Order Status'
              options={orderStatuses}
              className='bg-white'
              placeholder='Select Order Status'
            />
            <FormDropdown
              name='deliveryStatus'
              label='Delivery Status'
              options={deliveryStatuses}
              className='bg-white'
              placeholder='Select Delivery Status'
            />
            <FormDropdown
              name='paymentStatus'
              label='Payment Status'
              options={paymentStatuses}
              className='bg-white'
              placeholder='Select Payment Status'
            />

            <FormDropdown
              name='paymentMethod'
              label='Payment Method'
              options={paymentMethods}
              className='bg-white'
              placeholder='Select Payment Status'
            />
          </div>
        </div>
        <div className='flex justify-center gap-5'>
          <Button type='submit' className='text-white border-white'>
            Apply Filters
          </Button>
          <Button
            onClick={handleClearFilters}
            variant='secondary'
            className='text-white border-white'
          >
            Clear Filters
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default OrderFiltersModal;
