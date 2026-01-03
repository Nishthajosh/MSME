import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2642] to-[#0f1729] text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-500/20 rounded-full mb-6">
            <FileQuestion className="w-12 h-12 text-red-500" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Blog Post Not Found</h2>
          
          <p className="text-lg text-gray-300 mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/blog">
            <Button className="bg-red-500 hover:bg-red-600 text-white gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
