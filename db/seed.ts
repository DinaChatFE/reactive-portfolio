import { db } from "./index";
import { blogs } from "./schema";

const initialBlogs = [
  {
    title: "The Psychology of Transparency in UI",
    description: "How frosted surfaces and layered depth create a sense of trust and spatial awareness in modern digital interfaces.",
    category: "Design",
    date: "March 12, 2024",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuWuQTZ9mE_M4PB8nLkzGndE5SsE_V-p8N1M2M95jEDptclOzuruvIICr2BFAHeNOpiyxO0_9CDP9Rt4h7VVWqv2KWfqbuLAcqLMBppL25wowurwhu_-u_-UnYdayGavkDZlUxpq1SV3h3FEhQi-ocyN8AbNRfYNxdPCHXs-5ug2m0SOloEaiURY3yoj1cixPP02qR3hARVLTd9t3I_GrCqfYblJNptTqIs_DBlwAu5PZFUA0TiSZBuEtfU2nxDDqToKjsBXtOHy86"
  },
  {
    title: "Performance in the Era of Blurs",
    description: "Building futuristic digital screens with high resolution blur and glowing vibrant particles without sacrificing 60fps on mobile.",
    category: "Development",
    date: "Feb 28, 2024",
    readTime: "8 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfhKWMjEsDGJARXn7MzbhVDJ9rmcAUnQv58pX96ArldFntmjaZSZfGv79sgMD5zt8thoE087tazuUdrW2WfSIG-LAt36iKJCzuozddz9X9-bz1O5eY-iu2zfL8Jh3_uG_HF-7D3LZRd9em3rl84pbfsAnmPVTxUXBQmsFAhTjYOQMg1N7AkpE5m_6iiXs8r_K2bSxhbYIX1W1QsHGyPEBftOcKBgHxHL3MpE7vQ_qpC8r9Hlt2F90dUkvMh2CxqA5vCh38DK_3bLcr"
  },
  {
    title: "Minimalism as a Luxury Statement",
    description: "Why high-end brands are pivoting towards brutalist simplicity, bold typography, and dramatic sharp lighting.",
    category: "Strategy",
    date: "Jan 15, 2024",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAymLt4_p3DDMXyBkoBd2lg3zudKLou2GDcjxcmdkn2DTP9v05bMpHVMLEhqbL0jP19QZFnP6abOBBdCHHqbK6HDEr1Txrqb8QX0zLr5btkF05ui1JgrAF1ZU2DjdYrMvRlYB9to_1mlqAAWV5csPyrhcPZK_H9duSIzgA3mjg_CJ6T2WQHT19-kqRB5F3oQuTp9J3rdH8qpLyHJzFf4rU6Tqx--IEZmvyaA4P9CVMdjvXarE-LDwB2F2Z2le8vWMxrSUF2NssO85J-"
  },
  {
    title: "Typography and Metallic Textures",
    description: "An artistic study of high-end typography printed on metallic textured paper with iridescent reflections.",
    category: "Design",
    date: "Nov 30, 2023",
    readTime: "4 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfOZOugIdAOKTtB7Vk-yIVAONRfP3hYMBvTBlkW1khFwgEM1WDJqFPuhmsWnNkHL-yzEKowhMI72OZEK6NU7m9yUtBGAi5zr7r7CVUSOuoVrh45Iha9JqKep7PvCyzXpWgb219VQ7DO47l-uMVtVSw6Q4EMkYqLDtGWsML4DXGsklGXyRo03EiRjYFxeCfrOeKcXZpCxtw-EQeM04L8D6V_0UXyiIHNDUK5NNHBuWLvDDFc1AC5D3iiFCEPvpEnUFKUZaGXhJdq5qh"
  },
  {
    title: "The Modern Moody Workspace",
    description: "Showcasing a dark moody workspace with dual monitors showing code and design software glowing with subtle coral accents.",
    category: "Development",
    date: "Oct 22, 2023",
    readTime: "7 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN8n3cdPtaMM0YeZV9L3TddEXuyg_bMNUb42Gq2qmRwnaDjcpGKxHdj6OqJcyn2P6X3dT4R-yzCZGKztGBjIUq5JXlJPgIdKrRfbTHv0ZQdpjZz2MaeeqE7AJtWlkSmL7Yym24Vct-6yF2GjeEtXg0UOuLjm1k0Zmj0oMxknnYdYXOVUjydH0pqeNf5kJ8qyZTXeq1Jl6JzNVfSrMZXpgtocI7oxpl_0RW4rfz7Epjll8dXTAVOBoMJbY5C41CloA-gwnGkWubf48S"
  },
  {
    title: "Color Theory Abstraction",
    description: "How abstract vibrant gradients flowing from deep violet to sunset orange influence user perception.",
    category: "Archive",
    date: "Sep 12, 2023",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB5vepb7TNiZiAd5QmLot4UcapYn2bVuDnlubxRFY4Wr3nrUfKJp16QX9Y5umTUYZ55laIerQqWejCyCF7oOXqH9RVk1w8UtQbdyCpb3yCM654nviKgJGCmDq5ji8XiQU6yOOzEqH959EZNTEDZ1NhDy4CXF5w8em3XHxSyvHUBA5F7qvE1DT8-KCN7pCfjG7dQiH9U_MukYlKrXkJ_HNSALNLFQAuxW4sqV5FzotTHSyD7m6EDhprDevM7PFGRTjum8VTdddmG1kf"
  }
];

async function seed() {
  console.log("Seeding...");
  
  // Create table if not exists (to bypass push issues)
  const { sql } = require('@vercel/postgres');
  await sql`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      date TEXT NOT NULL,
      read_time TEXT NOT NULL,
      image TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  console.log("Table created, inserting...");

  for (const blog of initialBlogs) {
    await db.insert(blogs).values(blog);
  }
  
  console.log("Done seeding.");
}

seed().catch(console.error);