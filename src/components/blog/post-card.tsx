import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface PostCardProps {
    title: string;
    excerpt: string;
    category: string;
    image: string;
    date?: string;
    slug?: string;
}

export function PostCard({ title, excerpt, category, image, slug = "#" }: PostCardProps) {
    return (
        <Link href={slug} className="group h-full block">
            <Card className="h-full overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Badge className="absolute top-4 left-4 z-10 bg-[#f97068] hover:bg-[#e05048] border-0">
                        {category}
                    </Badge>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <CardHeader className="pt-6 pb-2 px-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f97068] transition-colors line-clamp-2">
                        {title}
                    </h3>
                </CardHeader>

                <CardContent className="px-6 pb-6 flex-grow">
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {excerpt}
                    </p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0 mt-auto">
                    <span className="text-[#f97068] font-medium text-sm flex items-center gap-1 group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                </CardFooter>
            </Card>
        </Link>
    );
}
