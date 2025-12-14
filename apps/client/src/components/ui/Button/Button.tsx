import type { FC } from 'react';

import type { IButton } from './Button.interface';

export const Button: FC<IButton> = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
