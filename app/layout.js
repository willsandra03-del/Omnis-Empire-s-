import Playfair_Display from 'next/font/google';

export default function RootLayout({ children }) {
  return (
    <html className='bg-[#050505] text-[#E1E1E1]'>
      <body className='frame'>{children}</body>
    </html>
  );
}