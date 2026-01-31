import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://faizjamal.dev'),
  title: "Faiz Jamal | AI Engineer & Full-Stack Developer",
  description: "Faiz Jamal is an AI Engineer and Full-Stack Developer specializing in Generative AI, LangChain, RAG systems, and scalable backend architecture. Explore projects, certifications, and experience.",
  keywords: ["Faiz Jamal", "AI Engineer", "Full-Stack Developer", "Generative AI", "LangChain", "Machine Learning", "Backend Developer", "Software Engineer"],
  authors: [{ name: "Faiz Jamal" }],
  creator: "Faiz Jamal",
  verification: {
    google: "GfB-uvwJBt16PeWatmicYWC0g-ctXnhOgLd4MrZodMw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faizjamal.dev",
    siteName: "Faiz Jamal Portfolio",
    title: "Faiz Jamal | AI Engineer & Full-Stack Developer",
    description: "Faiz Jamal is an AI Engineer and Full-Stack Developer specializing in Generative AI, LangChain, RAG systems, and scalable backend architecture.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faiz Jamal - AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz Jamal | AI Engineer & Full-Stack Developer",
    description: "AI Engineer specializing in Generative AI, LangChain, RAG systems, and scalable backend architecture.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://faizjamal.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Faiz Jamal",
    alternateName: "Faiz Ishak Jamal",
    jobTitle: "AI Engineer & Full-Stack Developer",
    description: "AI Engineer and Full-Stack Developer specializing in Generative AI, LangChain, RAG systems, and scalable backend architecture",
    url: "https://faizjamal.dev",
    email: "faizjamal1306@gmail.com",
    telephone: "+91-63803-33437",
    sameAs: [
      "https://linkedin.com/in/faiz-jamal",
      "https://github.com/FaizJamal06",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Generative AI",
      "LangChain",
      "LangGraph",
      "Machine Learning",
      "Full-Stack Development",
      "Backend Engineering",
      "RAG Systems",
      "Python",
      "JavaScript",
      "Node.js",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Engineering Student",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
