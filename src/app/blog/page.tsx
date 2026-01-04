import { BlogHero } from "@/components/blog/blog-hero";
import { FeaturedPost } from "@/components/blog/featured-post";
import { PostCard } from "@/components/blog/post-card";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";
import { Button } from "@/components/ui/button";

const BLOG_POSTS = [
    {
        title: "Without Security Business Loan: A Complete Guide",
        excerpt: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at risk.",
        category: "Business Loan",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "/blog/without-security-business-loan"
    },
    {
        title: "Minimum Capital Requirement For LLP In India",
        excerpt: "Everything you need to know about the capital requirements, legal compliances, and benefits of starting an LLP in India.",
        category: "Legal & Compliance",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "/blog/minimum-capital-requirement-llp"
    },
    {
        title: "Andhra Pradesh MSME Export Convention 2025",
        excerpt: "Highlights and key takeaways from the upcoming MSME export convention in Andhra Pradesh focusing on global trade opportunities.",
        category: "Events & News",
        image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "/blog/andhra-pradesh-msme-export"
    },
    {
        title: "Spark Grant: Igniting Innovation",
        excerpt: "Details on the Spark Grant initiative designed to support innovative startups and research-driven projects.",
        category: "Grants",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "/blog/spark-grant-igniting-innovation"
    },
    {
        title: "Mahila Empowerment Scheme For Women Entrepreneurs",
        excerpt: "Exploring government schemes dedicated to empowering women entrepreneurs through financial assistance and mentorship.",
        category: "Women Entrepreneurship",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "/blog/mahila-empowerment-scheme"
    },
    {
        title: "MeitY GENESIS EIR 2.0: Accelerating Tech Startups",
        excerpt: "An overview of the MeitY GENESIS Entrepreneur-in-Residence program and how it supports early-stage tech startups in Tier-2/3 cities.",
        category: "Government Schemes",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "/blog/meity-genesis-eir"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white pb-0">
            <BlogHero />
            <FeaturedPost />

            <section className="container mx-auto px-4 mb-20">
                <div className="flex items-center gap-2 mb-8 border-l-4 border-[#f97068] pl-4">
                    <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <PostCard
                            key={index}
                            {...post}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" className="border-gray-300 text-gray-600 hover:text-[#f97068] hover:border-[#f97068]">
                        Load More Articles
                    </Button>
                </div>
            </section>

            <NewsletterSignup />
        </main>
    );
}
