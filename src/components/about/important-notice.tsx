"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ImportantNotice() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 space-y-16">

                {/* Important Notice Box */}
                <AnimateOnScroll>
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
                            <Shield className="w-64 h-64 text-blue-600" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Important Notice</h3>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
                                <span className="font-bold">Ewolyn is a business advisory and consulting firm.</span> We facilitate funding
                                applications and provide expert guidance, but we do not directly lend money. All funding is provided
                                by banks, NBFCs, and government institutions.
                            </p>

                            <div className="bg-white/50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
                                <span className="font-bold">Payment Security:</span> Payments are only accepted in the name of
                                &quot;EWOLYN SERVICES PRIVATE LIMITED&quot; via Current Account through NEFT/IMPS/RTGS/Razorpay.
                                We never accept payments on personal accounts.
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* CTA Bar */}
                <AnimateOnScroll delay={200}>
                    <div className="bg-gradient-to-r from-red-900 to-[#d22d2d] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        {/* Background effects */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500 rounded-full blur-[100px] opacity-50"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-red-100 text-lg mb-10 leading-relaxed">
                                Join thousands of successful entrepreneurs who&apos;ve grown their businesses with Ewolyn&apos;s
                                expert guidance
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/funding">
                                    <Button className="bg-white text-[#d22d2d] h-14 px-8 rounded-xl font-bold text-lg w-full sm:w-auto">
                                        Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/services">
                                    <Button variant="outline" className="border-red-400 text-white h-14 px-8 rounded-xl font-medium text-lg w-full sm:w-auto bg-transparent">
                                        Explore Services
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}
