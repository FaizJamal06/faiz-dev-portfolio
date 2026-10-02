import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://faizjamal.dev'),
  title: "Faiz Jamal | Forward Deployed Engineer, AI & Full-Stack",
  description: "Faiz Jamal is a Forward Deployed Engineer building agentic AI systems, voice AI, RAG pipelines, and full-stack backends with LangGraph, FastAPI, Node.js, and React. Explore projects, certifications, and experience.",
  keywords: ["Faiz Jamal", "Forward Deployed Engineer", "AI Engineer", "Full-Stack Developer", "Generative AI", "LangGraph", "Agentic AI", "Voice AI", "Backend Developer", "Software Engineer"],
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
    title: "Faiz Jamal | Forward Deployed Engineer, AI & Full-Stack",
    description: "Faiz Jamal is a Forward Deployed Engineer building agentic AI systems, voice AI, RAG pipelines, and full-stack backends.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faiz Jamal - Forward Deployed Engineer, AI & Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz Jamal | Forward Deployed Engineer, AI & Full-Stack",
    description: "Forward Deployed Engineer building agentic AI systems, voice AI, RAG pipelines, and full-stack backends.",
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
    jobTitle: "Forward Deployed Engineer",
    description: "Forward Deployed Engineer building agentic AI systems, voice AI, RAG pipelines, and full-stack backends",
    url: "https://faizjamal.dev",
    email: "faizjamal1306@gmail.com",
    telephone: "+91-63803-33437",
    sameAs: [
      "https://www.linkedin.com/in/faizjamal06",
      "https://github.com/FaizJamal06",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Generative AI",
      "LangGraph",
      "Agentic AI",
      "Multi-Agent Orchestration",
      "Voice AI",
      "Full-Stack Development",
      "Backend Engineering",
      "RAG Systems",
      "Python",
      "JavaScript",
      "Node.js",
      "FastAPI",
      "React",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Sri Ramakrishna Engineering College",
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
