import { createFormHook } from '@tanstack/react-form';

import { FormSubmit } from '@/client/components/form/FormSubmit/FormSubmit';

import { fieldContext, formContext } from './useFormContext';

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldComponents: {},
  formComponents: {
    FormSubmit,
  },
  fieldContext,
  formContext,
});
