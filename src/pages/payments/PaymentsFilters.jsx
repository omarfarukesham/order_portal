import FilterIcon from '@/assets/icons/FilterIcon';
import Button from '@/components/ui/Button';
import Pagination from '@/components/ui/Pagination';
import Search from '@/components/ui/Search';
import debounce from '@/utilities/debounce';
import { useState } from 'react';
import PaymentsFiltersModal from './PaymentsFiltersModal';

const PaymentsFilters = ({
  onFilterChange,
  filters,
  paginate,
  applyFilters,
  clearFilters,
}) => {
  // console.log(filters.name);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const handleSearchNameChange = (newSearchName) => {
    onFilterChange({
      pgwReferenceId: newSearchName,
      perPage: 10,
      page: 1,
    });
  };

  const debounceSearch = debounce(handleSearchNameChange, 500);
  return (
    <div className='p-5 flex items-center flex-wrap gap-3'>
      <div className='flex items-center gap-3'>
        <Search
          placeholder='PGW Reference Id'
          onChange={debounceSearch}
          value={filters.pgwReferenceId}
        />
        <Button
          onClick={() => setIsFiltersModalOpen(true)}
          variant='outlined'
          size='small'
          className='bg-white'
        >
          <FilterIcon /> Filter
        </Button>
        {paginate?.totalElements && (
          <div className='flex gap-1'>
            <strong>{paginate?.totalElements}</strong>
            <div>records</div>
          </div>
        )}
      </div>

      <div className='flex-1 flex flex-col gap-3 md:items-end'>
        <Pagination
          perPage={filters.perPage}
          page={filters.page}
          onChange={onFilterChange}
          paginate={paginate}
        />
      </div>

      {isFiltersModalOpen && (
        <PaymentsFiltersModal
          isOpen={isFiltersModalOpen}
          setIsOpen={setIsFiltersModalOpen}
          filters={filters}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
        />
      )}
    </div>
  );
};

export default PaymentsFilters;
