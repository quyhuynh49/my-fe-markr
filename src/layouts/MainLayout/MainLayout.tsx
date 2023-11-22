import React from 'react'
import Header from '../Header';

type MainLayoutProps = {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <React.Fragment>
            <Header />
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default MainLayout
