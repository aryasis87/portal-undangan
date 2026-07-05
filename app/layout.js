import './globals.css';
import { Marcellus, Mulish } from 'next/font/google';

const marcellus = Marcellus({ subsets: ['latin'], variable: '--font-marcellus', weight: '400' });
const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });

export const metadata = {
  title: 'PortalUndangan — Undangan Digital untuk Setiap Momen',
  description: 'PortalUndangan: 8 undangan digital dengan karakter berbeda — pernikahan, lamaran, khitanan, aqiqah, ulang tahun, wisuda, reuni, dan acara kantor.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${marcellus.variable} ${mulish.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
