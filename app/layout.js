import "./globals.css";

export const metadata = {
  title: "ByteSpace - Get Access to Hundreds of Courses Available",
  description: "Reinvent your career with ByteSpace. Explore top-rated courses in Web Development, UI/UX Design, Data Science, and Marketing taught by industry experts.",
  keywords: "ByteSpace, online courses, web development, UI/UX design, data science, coding bootcamps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between font-sans">
        {children}
      </body>
    </html>
  );
}
