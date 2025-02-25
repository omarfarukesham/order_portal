import CalendarIcon from '@/assets/icons/CalendarIcon';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';
import FormLabel from './FormLabel';

const FormDateRangePicker = ({
  startName = '',
  endName = '',
  label,
  placeholder,
}) => {
  const {
    getValues,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors?.[startName] || errors?.[endName];

  const [startDate, setStartDate] = useState(() => {
    const value = getValues(startName);
    return value ? new Date(value) : '';
  });

  const [endDate, setEndDate] = useState(() => {
    const value = getValues(endName);
    return value ? new Date(value) : '';
  });

  const handleChangeDateRange = (dates) => {
    const [start, end] = dates;

    if (start) {
      setStartDate(start);
      setValue(startName, new Date(start).toISOString());
    }

    if (end) {
      const modifiedEnd = new Date(end.getTime() + 86399999);

      setEndDate(modifiedEnd);
      setValue(endName, new Date(modifiedEnd).toISOString());
    }
  };

  return (
    <div>
      <FormLabel label={label} name={startName + endName} />

      <input className='sr-only' {...register(startName)} />
      <input className='sr-only' {...register(endName)} />

      <div className='relative'>
        <DatePicker
          id={startName + endName}
          onChange={handleChangeDateRange}
          startDate={startDate}
          endDate={endDate}
          selectsRange={true}
          dateFormat='dd MMMM, yyyy'
          placeholderText={placeholder}
          className='w-full text-label h-9 rounded border border-gray-4 p-2 outline-none'
          calendarClassName='custom-datepicker-calendar'
        />
        <CalendarIcon className='absolute bottom-2 right-2 h-5 w-5 text-gray-400 pointer-events-none' />
      </div>

      {/* Errors */}
      {error && <p className='text-label text-danger'>{error?.message}</p>}
    </div>
  );
};

export default FormDateRangePicker;
