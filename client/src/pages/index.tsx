import Link from "next/link";

type Tool = {
  id: number;
  name: string;
  url: string;
};

export default function Home() {
  const tools: Tool[] = [
    { id: 1, name: "Tiny URL", url: "/tinyurl" },
    { id: 2, name: "Doc to PDF", url: "/doctopdf" },
    { id: 3, name: "Email Verifier", url: "/emailverifier" },
    { id: 4, name: "Book Manager", url: "/bookmanager" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Tools</h1>
      <div className="space-y-4">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.url}
            className="block p-4 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
          >
            {tool.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
