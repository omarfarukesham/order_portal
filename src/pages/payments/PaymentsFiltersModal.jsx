import Form from '@/components/form/Form';
import FormDateRangePicker from '@/components/form/FormDateRangePicker';
import FormInput from '@/components/form/FormInput';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { paymentMethods, paymentStatuses } from '@/services/data/filterData';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const PaymentsFiltersModal = ({
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
              name='createdAtFrom'
              startName='createdAtFrom'
              endName='createdAtTo'
              label='Created Date'
              placeholder='Select Date Range'
            />
            <FormInput name='id' label='Payment Id' placeholder='Payment Id' />
            <FormInput
              name='orderRequestId'
              label='Order Request Id'
              placeholder='Order Request Id'
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

export default PaymentsFiltersModal;
