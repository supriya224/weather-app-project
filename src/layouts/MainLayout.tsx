import React, { ReactNode } from 'react';

interface IMainComponent {
  children: ReactNode;
}

// mainlayout function
function MainLayout({ children }: IMainComponent) {
  return (
    <main id="main-layout" className="">
      {children}
    </main>
  );
}

export default MainLayout;
