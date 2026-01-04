import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedPost() {
    return (
        <section className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
            <div className="flex items-center gap-2 mb-6 border-l-4 border-[#f97068] pl-4">
                <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
            </div>

            <Card className="overflow-hidden border-0 shadow-xl bg-white rounded-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[300px] md:h-[450px] overflow-hidden bg-gray-100">
                        {/* Placeholder for the image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                            <span className="text-lg">Featured Image</span>
                        </div>
                        {/* In a real app, use next/image here */}
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                            alt="Featured Post"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 border-0">Startup Funding</Badge>
                            <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700">Featured</Badge>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            <Link href="#" className="hover:text-[#f97068] transition-colors">
                                How To Raise Funds For Startup In India
                            </Link>
                        </h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            A comprehensive guide on navigating the funding landscape in India, exploring various investment avenues available for budding entrepreneurs. Learn about angel investors, VCs, and government grants.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Nov 19, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Enego Team</span>
                            </div>
                            <div>8 min read</div>
                        </div>

                        <Button className="w-fit rounded-full bg-[#f97068] hover:bg-[#e05048] text-white px-8">
                            Read Article
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    );
}
