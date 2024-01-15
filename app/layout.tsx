import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-providers'
import { Poppins } from 'next/font/google'
import './globals.css'

const font = Poppins({
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: 'Vartalap',
  description: 'A Next Level community interaction web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem={false}
        storageKey='vartalap-theme'
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
