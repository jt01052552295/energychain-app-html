import type { Metadata } from 'next'
import '@/scss/global.scss'

export const metadata: Metadata = {
    title: 'Energychain App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    )
}
