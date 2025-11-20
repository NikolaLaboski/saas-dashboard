import "./globals.css";

export const metadata = {
  title: "SaaS Dashboard",
  description: "Analytics dashboard demo for portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
