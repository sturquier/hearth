import type { FC } from 'react';

import { Button } from '@hearth/client/components/ui/Button/Button';
import { useFormContext } from '@hearth/client/hooks/useFormContext';

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
