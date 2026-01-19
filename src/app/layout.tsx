import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "Sushant Chaudhary | AI Engineer & Frontend Developer",
  description: "Personal portfolio of Sushant Chaudhary, an AI Engineer & Frontend Developer specializing in agentic systems and RAG pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}