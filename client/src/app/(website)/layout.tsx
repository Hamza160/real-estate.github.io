import Navbar from '@/components/Navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import React, { ReactNode } from 'react'

export default function WebsiteLayout({ children }: { children: ReactNode }) {
    return (
        <div className='h-full w-full'>
            <Navbar />
            <main className={`h-full flex w-full flex-col`} style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
                {children}
            </main>
        </div>
    )
}
