import { Metadata } from "next";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { FeaturedBlogCard } from "@/components/sections/blog/FeaturedBlogCard";
import { BlogCard } from "@/components/sections/blog/BlogCard";
import { NewsletterCTA } from "@/components/sections/blog/NewsletterCTA";
import { featuredPost, latestPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog & Insights | EneGo - Expert Guidance for Startups & MSMEs",
  description: "Get expert insights on startup funding, MSME registration, compliance, and business growth strategies. Learn from industry leaders and grow your business.",
  keywords: "startup blog, MSME funding, business insights, Indian startups, funding schemes, business registration, compliance guide",
};

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <BlogHero />

      {/* Featured Article Section */}
      <FeaturedBlogCard post={featuredPost} />

      {/* Latest Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive guides on startup funding, compliance, 
                and business growth strategies.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <NewsletterCTA />
    </main>
  );
}
