'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
    return (
        <section className="bg-[#1a2332] py-20 text-center">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Stay Updated with Latest Insights
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Subscribe to our newsletter to get the latest articles, industry insights, and success stories delivered to your inbox.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 h-12 rounded-lg focus-visible:ring-[#f97068] focus-visible:border-[#f97068]"
                        />
                        <Button type="submit" className="bg-[#d22d2d] hover:bg-[#b02222] text-white h-12 px-8 rounded-lg font-medium text-base w-full sm:w-auto">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
