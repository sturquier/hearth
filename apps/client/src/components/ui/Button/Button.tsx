import { Button as MantineButton } from '@mantine/core';

import type { FC } from 'react';

import type { IButton } from './Button.interface';

export const Button: FC<IButton> = ({
  children,
  type = 'button',
  disabled = false,
  onClickCallback,
}) => {
  return (
    <MantineButton type={type} onClick={onClickCallback} disabled={disabled}>
      {children}
    </MantineButton>
  );
};
