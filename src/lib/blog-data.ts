export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar?: string;
  };
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Complete Guide to MSME Registration in India: Benefits & Process 2026",
    excerpt: "Discover how MSME registration can unlock government subsidies, priority lending, and tax benefits for your small business. A comprehensive guide covering eligibility, documentation, and step-by-step registration process.",
    category: "Business Registration",
    image: "/first.jpg",
    date: "January 2, 2026",
    readTime: "8 min read",
    author: {
      name: "Rajesh Kumar",
    },
    featured: true,
  },
  {
    id: "2",
    title: "Startup India Seed Fund Scheme: How to Apply and Get ₹20 Lakhs",
    excerpt: "Learn about the Startup India Seed Fund Scheme (SISFS) that provides financial assistance up to ₹20 lakhs for proof of concept and prototype development. Complete application guide with eligibility criteria.",
    category: "Funding",
    image: "/andromeda.png",
    date: "December 28, 2025",
    readTime: "6 min read",
    author: {
      name: "Priya Sharma",
    },
  },
  {
    id: "3",
    title: "GST Compliance for Startups: Essential Guide to Stay Penalty-Free",
    excerpt: "Understanding GST registration, filing returns, and compliance requirements for Indian startups. Avoid penalties with our practical guide covering input tax credit, invoicing, and common mistakes to avoid.",
    category: "Compliance",
    image: "/dataneuron.png",
    date: "December 25, 2025",
    readTime: "10 min read",
    author: {
      name: "Amit Patel",
    },
  },
  {
    id: "4",
    title: "Top 10 Government Schemes for Women Entrepreneurs in 2026",
    excerpt: "Explore special funding schemes, subsidies, and support programs designed for women-led businesses in India. From MUDRA loans to Stand-Up India, discover opportunities to grow your venture.",
    category: "Funding",
    image: "/mas.png",
    date: "December 20, 2025",
    readTime: "7 min read",
    author: {
      name: "Sneha Reddy",
    },
  },
  {
    id: "5",
    title: "How to Raise Angel Investment for Your Indian Startup",
    excerpt: "A practical guide to securing angel funding in India. Learn about pitch preparation, valuation, term sheets, and connecting with angel networks. Real success stories from funded startups included.",
    category: "Investment",
    image: "/tatatele.png",
    date: "December 15, 2025",
    readTime: "9 min read",
    author: {
      name: "Vikram Singh",
    },
  },
  {
    id: "6",
    title: "Credit Guarantee Scheme for MSMEs: Collateral-Free Loans Explained",
    excerpt: "Understand how CGTMSE enables MSMEs to access loans up to ₹2 crores without collateral. Learn about eligibility, interest rates, application process, and participating banks.",
    category: "Business Finance",
    image: "/first.jpg",
    date: "December 10, 2025",
    readTime: "6 min read",
    author: {
      name: "Meera Iyer",
    },
  },
];

export const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
export const latestPosts = blogPosts.filter(post => !post.featured).slice(0, 6);
