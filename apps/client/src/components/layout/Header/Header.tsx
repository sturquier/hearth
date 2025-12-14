import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import type { FC } from 'react';

import { Sidebar } from '@/client/components/layout/Sidebar/Sidebar';
import { Button } from '@/client/components/ui/Button/Button';

export const Header: FC = () => {
  const [isSidebarOpened, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header>
        <Button onClick={() => setIsSidebarOpen(true)}>
          <Menu size={24} />
        </Button>

        <Link to="/">
          <h1>Home</h1>
        </Link>

        {isSidebarOpened ? <Sidebar toggleIsOpened={setIsSidebarOpen} /> : null}
      </header>
    </>
  );
};
