import { Badge } from "@/components/ui/badge";

export function BlogHero() {
    return (
        <section className="relative bg-[#1a2332] py-20 text-center overflow-hidden">
            {/* Background gradient/glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 px-4 mx-auto flex flex-col items-center">
                <Badge variant="outline" className="mb-6 px-4 py-1.5 border-red-500/30 bg-red-950/30 text-red-400 hover:bg-red-950/40 transition-colors uppercase tracking-wider text-xs font-medium">
                    Blog & Insights
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                    Insights & Stories <br className="hidden md:block" />
                    <span className="text-[#f97068]">From Industry Leaders</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Discover inspiring stories, practical insights, and expert advice on women entrepreneurship, startup growth, and business success.
                </p>
            </div>
        </section>
    );
}
