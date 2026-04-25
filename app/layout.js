import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.anurak-tanyapalit.site'),
  title: {
    default: 'Anurak Tanyapalit | Art Portfolio',
    template: '%s | Anurak Tanyapalit',
  },
  description: 'Discover the art portfolio and creative works of Anurak Tanyapalit.',
  openGraph: {
    title: 'Anurak Tanyapalit | Art Portfolio',
    description: 'Discover the art portfolio and creative works of Anurak Tanyapalit.',
    url: 'https://www.anurak-tanyapalit.site',
    siteName: 'Anurak Tanyapalit',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          <footer style={{
            textAlign: 'center',
            padding: '24px 0',
            fontSize: '0.5rem',
            color: 'var(--text-secondary)',
            backgroundColor: 'transparent',
            marginTop: 'auto'
          }}>
            🄯 2026 Anurak Tanyapalit | All copyleft reserved
          </footer>
        </div>
      </body>
    </html>
  )
}
