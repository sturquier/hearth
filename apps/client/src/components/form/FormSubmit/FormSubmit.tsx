import type { FC } from 'react';

import { Button } from '@/client/components/ui/Button/Button';
import { useFormContext } from '@/client/hooks/useFormContext';

import type { IFormSubmit } from './FormSubmit.interface';

export const FormSubmit: FC<IFormSubmit> = ({ children }) => {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button type="submit" disabled={isSubmitting}>
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
};
