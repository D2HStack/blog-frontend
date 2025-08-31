// app/layout.tsx

export const metadata = {
  title: 'My Blog',
  description: 'A portfolio blog built with Next.js 13+',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
          <h1>My Blog</h1>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #ccc' }}>
          &copy; 2025 My Blog
        </footer>
      </body>
    </html>
  );
}
