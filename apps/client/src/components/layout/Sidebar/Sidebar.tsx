import { Link } from '@tanstack/react-router';
import { Home, X } from 'lucide-react';

import type { FC } from 'react';

import { Button } from '@/client/components/ui/Button/Button';

import type { ISidebar } from './Sidebar.interface';

export const Sidebar: FC<ISidebar> = ({ toggleIsOpened }) => {
  return (
    <aside>
      <div>
        <h2>Navigation</h2>
        <Button onClick={() => toggleIsOpened(false)}>
          <X size={24} />
        </Button>
      </div>

      <nav>
        <Link to="/" onClick={() => toggleIsOpened(false)}>
          <Home size={24} />
          <span>Home</span>
        </Link>
      </nav>
    </aside>
  );
};
