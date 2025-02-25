import findValue from '@/utilities/findValue';
import { joiResolver } from '@hookform/resolvers/joi';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Form = ({
  onSubmit,
  defaultValues,
  className,
  schema,
  mode = 'onChange',
  children,
  stopPropagation = false,
}) => {
  const methods = useForm({
    defaultValues: defaultValues || {},
    mode,
    ...(schema && { resolver: joiResolver(schema) }),
  });

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);

  useEffect(() => {
    if (Object.keys(methods.formState.errors)?.length) {
      // eslint-disable-next-line no-console
      console.log(methods.formState.errors);
      const message = findValue(methods.formState.errors, 'message');
      toast.error(message);
    }
  }, [methods.formState]);

  const handleSubmit = (event) => {
    if (stopPropagation) {
      event.stopPropagation();
    }
    return methods.handleSubmit(onSubmit)(event);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
