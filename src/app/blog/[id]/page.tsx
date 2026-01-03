import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";
import { NewsletterCTA } from "@/components/sections/blog/NewsletterCTA";
import { BlogCard } from "@/components/sections/blog/BlogCard";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | EneGo Blog`,
    description: post.excerpt,
    keywords: `${post.category}, startup blog, MSME, business insights`,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Badge className="mb-4 bg-red-500 hover:bg-red-600 text-white font-medium">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 font-medium mb-6">
                {post.excerpt}
              </p>

              {/* Sample Content - In a real application, this would come from a CMS or markdown */}
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Overview</h2>
              <p className="text-gray-700 mb-6">
                This comprehensive guide provides detailed insights into {post.title.toLowerCase()}. 
                As an entrepreneur or business owner in India, understanding these concepts is crucial 
                for the growth and success of your venture.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Benefits</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Access to government subsidies and financial support</li>
                <li>Reduced compliance burden and simplified processes</li>
                <li>Priority sector lending from banks and financial institutions</li>
                <li>Protection against delayed payments through MSMED Act</li>
                <li>Easier access to credit and competitive interest rates</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Process</h2>
              <p className="text-gray-700 mb-6">
                Following the right process is essential for ensuring compliance and maximizing benefits. 
                Here's a detailed breakdown of the steps you need to follow:
              </p>

              <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                <li>Prepare all necessary documentation and business information</li>
                <li>Visit the official portal and create your account</li>
                <li>Fill in the application form with accurate details</li>
                <li>Upload required documents in the specified format</li>
                <li>Submit the application and note down the reference number</li>
                <li>Track your application status regularly</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Expert Tips</h2>
              <p className="text-gray-700 mb-6">
                Based on our experience helping thousands of businesses, here are some valuable tips 
                to ensure a smooth process and maximize your chances of success. Keep all documents 
                ready beforehand, ensure accuracy in all details, and maintain proper records for 
                future reference.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
              <p className="text-gray-700 mb-6">
                Understanding and leveraging the right opportunities can significantly impact your 
                business growth. If you need personalized assistance or have specific questions about 
                your situation, our team of experts is here to help guide you through the process.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Need Expert Assistance?
              </h3>
              <p className="text-gray-700 mb-6">
                Our team of consultants can help you navigate the complexities and ensure 
                you get the best outcomes for your business.
              </p>
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </main>
  );
}
