"use client";

import { Badge } from "@/components/ui/badge";

export function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f1729] via-[#1a2642] to-[#0f1729] text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge 
            variant="outline" 
            className="mb-6 px-4 py-2 text-sm font-medium bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            📚 Blog & Insights
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Insights & Stories
            <br />
            <span className="text-red-500">From Industry Leaders</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering entrepreneurs with expert knowledge on funding, compliance, 
            and business growth strategies for Indian startups and MSMEs.
          </p>
        </div>
      </div>
    </section>
  );
}
