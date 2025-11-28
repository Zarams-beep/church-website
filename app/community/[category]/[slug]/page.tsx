import "@/styles/homepage.css";
import "@/styles/community.css";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function CommunityItemPage({ params }: PageProps) {
  const { category, slug } = await params;

  console.log("Page params:", { category, slug });

  // Fetch the specific item
  const res = await fetch(
    `http://localhost:3000/community/api/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch:", res.status);
    notFound();
  }

  const item = await res.json();

  if (!item || item.error) {
    notFound();
  }

  return (
    <div className="community-album-container community-main-items-container">
      <div className="community-items-container container">
        <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
        <p className="text-gray-600 mb-6">
          {new Date(item.date).toLocaleDateString()}
        </p>
        <img
          src={item.image}
          alt={item.title}
          className="w-full max-w-4xl mx-auto rounded-lg mb-8"
        />
        <div className="prose max-w-4xl mx-auto">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}