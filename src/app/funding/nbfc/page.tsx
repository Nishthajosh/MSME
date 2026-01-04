'use client';

import {
    Sparkles,
    Target,
    Shield,
    Zap,
    Award,
    Clock,
    Building,
    TrendingUp,
    ShieldCheck,
    BarChart3,
    CreditCard,
    Banknote,
    Settings,
    LineChart,
    CheckCircle2,
    Circle,
    FileText,
    FileDown,
    Phone,
    ArrowRight,
    ChevronRight,
    Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Hero Stats
const heroStats = [
    { value: "24-72hrs", label: "Disbursement Time" },
    { value: "1Cr+", label: "Maximum Funding" },
    { value: "95%", label: "Approval Rate" },
    { value: "25+", label: "NBFC Partners" }
];

// Feature cards
const featureCards = [
    { icon: Target, label: "Focused", color: "bg-red-50 text-red-500" },
    { icon: Shield, label: "Secure", color: "bg-blue-50 text-blue-500" },
    { icon: Zap, label: "Fast", color: "bg-green-50 text-green-500" },
    { icon: Award, label: "Trusted", color: "bg-orange-50 text-orange-500" }
];

// Benefits list
const benefits = [
    "Accelerated processing and disbursement compared to traditional banking",
    "Flexible eligibility criteria with focus on business potential over historical performance",
    "Specialized financing solutions for specific industries and business models",
    "Options for businesses with limited banking history or previous credit challenges"
];

// NBFC Services
const nbfcServices = [
    {
        icon: Clock,
        title: "Express Business Loans",
        description: "Quick-disbursement loans with minimal documentation and 24-48 hour processing for urgent business requirements",
        color: "bg-blue-50 text-blue-600"
    },
    {
        icon: Building,
        title: "Working Capital Financing",
        description: "Flexible short-term funding for operational expenses, inventory management, and cash flow optimization",
        color: "bg-orange-50 text-orange-600"
    },
    {
        icon: TrendingUp,
        title: "Business Expansion Loans",
        description: "Growth-focused financing for market expansion, capacity enhancement, and business scaling initiatives",
        color: "bg-purple-50 text-purple-600"
    },
    {
        icon: ShieldCheck,
        title: "Unsecured Business Loans",
        description: "No-collateral financing options based on business performance and revenue potential rather than assets",
        color: "bg-green-50 text-green-600"
    },
    {
        icon: BarChart3,
        title: "Revenue-Based Financing",
        description: "Innovative funding with repayments tied to business revenue performance rather than fixed EMI structures",
        color: "bg-pink-50 text-pink-600"
    },
    {
        icon: CreditCard,
        title: "Merchant Cash Advances",
        description: "Upfront capital with repayment through percentage of daily card sales, ideal for retail and service businesses",
        color: "bg-amber-50 text-amber-600"
    },
    {
        icon: Settings,
        title: "Equipment Financing",
        description: "Specialized funding for machinery, equipment, and asset acquisition with flexible repayment options",
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        icon: LineChart,
        title: "Invoice Financing",
        description: "Unlock working capital by leveraging outstanding invoices and receivables for immediate funding",
        color: "bg-cyan-50 text-cyan-600"
    }
];

// Who can apply
const whoCanApply = [
    "MSMEs and startups seeking quick funding without extensive documentation",
    "Businesses with limited banking history or previous credit challenges",
    "Companies requiring flexible repayment structures tied to business performance",
    "Retail and service businesses with consistent revenue streams",
    "Enterprises seeking specialized sector-focused financing products"
];

// Conditions
const conditions = [
    "Minimum business vintage of 6-12 months (varies by NBFC partner)",
    "Basic KYC documentation for business and promoters",
    "Bank statements showing regular business transactions",
    "GST registration and compliance (for applicable loan amounts)",
    "Proof of business existence and operational activity"
];

// Process steps
const processSteps = [
    {
        number: 1,
        title: "Requirement Analysis",
        description: "Understand your financing needs, urgency, and specific business requirements"
    },
    {
        number: 2,
        title: "NBFC Matching",
        description: "Identify optimal NBFC partners based on your eligibility profile and funding requirements"
    },
    {
        number: 3,
        title: "Application Preparation",
        description: "Compile required documentation and prepare application packages for selected NBFCs"
    },
    {
        number: 4,
        title: "Multi-NBFC Submission",
        description: "Submit applications to multiple suitable NBFCs for competitive terms and faster approval"
    },
    {
        number: 5,
        title: "Offer Evaluation",
        description: "Compare and analyze offers from different NBFCs for optimal terms and conditions"
    },
    {
        number: 6,
        title: "Quick Disbursement",
        description: "Complete formalities and facilitate rapid fund disbursement within 24-72 hours"
    }
];

// Document checklist
const documents = [
    "Business registration documents (GST, Udyam, etc.)",
    "KYC documents of proprietor/directors/partners",
    "Bank statements (last 6 months)",
    "GST returns (last 6-12 months filing)",
    "Business proof and address verification",
    "Previous loan details (if any)",
    "Business financial summary or ITR (if available)",
    "Post-dated cheques or NACH mandate"
];

// FAQs
const faqs = [
    {
        question: "What is NBFC financing and how is it different from bank loans?",
        answer: "NBFC (Non-Banking Financial Company) financing provides alternative lending options with faster processing, more flexible eligibility criteria, and specialized products. Unlike banks, NBFCs focus more on business potential and cash flows rather than strict compliance with traditional lending norms."
    },
    {
        question: "How quickly can I get funding through NBFC partners?",
        answer: "NBFC financing is significantly faster than traditional banking. Most NBFC products can be processed and disbursed within 24-72 hours after documentation completion. Some express products offer same-day disbursement for urgent requirements."
    },
    {
        question: "What are the typical interest rates for NBFC loans?",
        answer: "NBFC interest rates typically range from 12-36% depending on the product type, business profile, and risk assessment. While rates may be higher than banks, the trade-off is faster processing, flexible eligibility, and specialized products not available through traditional banking."
    },
    {
        question: "Can I get NBFC financing without collateral?",
        answer: "Yes, many NBFC products are unsecured and don't require collateral. NBFCs often rely on business cash flows, revenue patterns, and alternative data points for credit assessment. However, secured options with lower rates are also available."
    },
    {
        question: "What if I have a low CIBIL score?",
        answer: "NBFCs generally have more flexible credit criteria compared to banks. While a good CIBIL score helps secure better terms, many NBFC partners consider businesses with lower scores if other indicators like business revenue and cash flows are strong."
    },
    {
        question: "How does Ewolyn help with NBFC financing?",
        answer: "Ewolyn connects you with suitable NBFC partners based on your specific needs and eligibility. We handle application preparation, submit to multiple NBFCs for competitive offers, negotiate terms, and facilitate quick disbursement, saving you time and improving approval chances."
    }
];

export default function NBFCPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729] py-20 overflow-hidden">
                {/* Floating elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-3 h-3 bg-[#f97068]/30 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[#f97068]/20 rounded-full animate-pulse"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <Badge className="bg-[#1e2642] text-gray-300 border-0 px-4 py-2 text-sm font-medium">
                            <Sparkles className="w-4 h-4 mr-2 text-[#f97068]" />
                            Alternative Financing • Flexible Funding
                        </Badge>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
                        NBFC Financing Solutions
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-[#f97068] font-medium text-center mb-6">
                        Quick Disbursement • Flexible Eligibility • Specialized Products
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 text-lg">
                        Access alternative business funding through Ewolyn's NBFC financing services, offering faster
                        processing, flexible eligibility criteria, and specialized lending products tailored for
                        businesses with unique requirements or limited banking history.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {heroStats.map((stat, index) => (
                            <div key={index} className="bg-[#1e2642]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/5">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div>
                            <Badge className="bg-[#fff0f0] text-[#f97068] border-0 px-4 py-1.5 text-sm font-medium mb-6">
                                Overview
                            </Badge>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Consider NBFC Financing?
                            </h2>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Non-Banking Financial Companies (NBFCs) offer essential alternatives to
                                traditional bank financing, with unique advantages including faster processing,
                                more flexible eligibility criteria, specialized sector-focused products, and innovative
                                lending approaches for businesses with limited banking history or non-traditional requirements.
                            </p>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Ewolyn specializes in connecting businesses with the optimal NBFC partners based
                                on specific funding needs and eligibility profiles. Our deep industry relationships
                                and understanding of NBFC lending criteria enable us to secure favorable terms
                                while significantly accelerating the approval and disbursement process.
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Feature Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {featureCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`p-8 rounded-2xl ${index === 0 ? 'bg-red-50' :
                                        index === 1 ? 'bg-blue-50' :
                                            index === 2 ? 'bg-green-50' :
                                                'bg-orange-50'
                                        }`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${index === 0 ? 'bg-white text-red-500' :
                                        index === 1 ? 'bg-white text-blue-500' :
                                            index === 2 ? 'bg-white text-green-500' :
                                                'bg-white text-orange-500'
                                        }`}>
                                        <card.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{card.label}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="bg-[#fff0f0] text-[#f97068] border-0 px-4 py-1.5 text-sm font-medium mb-6">
                            Benefits
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our NBFC Financing Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nbfcServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#f97068]/20 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="bg-[#1e2642] text-gray-300 border-0 px-4 py-1.5 text-sm font-medium mb-6">
                            Requirements
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            NBFC Financing Eligibility
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {/* Who Can Apply */}
                        <div className="bg-[#1e2642]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                            <h3 className="text-xl font-semibold text-[#f97068] mb-6">Who Can Apply?</h3>
                            <div className="space-y-4">
                                {whoCanApply.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conditions */}
                        <div className="bg-[#1e2642]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                            <h3 className="text-xl font-semibold text-[#f97068] mb-6">Basic Requirements</h3>
                            <div className="space-y-4">
                                {conditions.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Circle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="bg-[#fff0f0] text-[#f97068] border-0 px-4 py-1.5 text-sm font-medium mb-6">
                            Process
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our NBFC Financing Process
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#f97068]/30 transition-colors relative"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#f97068] text-white flex items-center justify-center text-xl font-bold mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentation Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="bg-[#fff0f0] text-[#f97068] border-0 px-4 py-1.5 text-sm font-medium mb-6">
                            Documentation
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Minimal Documentation Required
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Document Checklist Card */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                            {/* Header */}
                            <div className="bg-[#1e2642] px-6 py-4 flex justify-between items-center">
                                <h3 className="text-white font-semibold">Document Checklist</h3>
                                <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                                    <FileDown className="w-4 h-4 mr-2" />
                                    Download List
                                </Button>
                            </div>

                            {/* Documents Grid */}
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {documents.map((doc, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded bg-[#fff0f0] flex items-center justify-center flex-shrink-0">
                                                <FileText className="w-4 h-4 text-[#f97068]" />
                                            </div>
                                            <span className="text-gray-700 text-sm">{doc}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Info Box */}
                                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-800 text-sm">
                                        <span className="font-semibold">Minimal Documentation:</span> NBFC financing typically requires significantly less documentation compared to traditional bank loans. Our team helps identify the minimum required documents based on your chosen NBFC partner.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge className="bg-[#3d2929] text-[#f97068] border-0 px-4 py-1.5 text-sm font-medium mb-6">
                            FAQs
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-3">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white rounded-xl border-0 overflow-hidden"
                                >
                                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 text-gray-900 font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 text-gray-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729]">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        {/* Badge */}
                        <Badge className="bg-[#1e2642] text-gray-300 border-0 px-4 py-2 text-sm font-medium mb-6">
                            <Star className="w-4 h-4 mr-2 text-yellow-400" />
                            Get Started Today
                        </Badge>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready for Quick NBFC Financing?
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                            Connect with our NBFC financing specialists to identify suitable partners,
                            compare offers, and secure fast funding for your business requirements.
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center items-center gap-8 mb-10">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">24-72hrs</div>
                                <div className="text-gray-400 text-sm">Disbursement</div>
                            </div>
                            <div className="w-px h-12 bg-gray-600"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">25+</div>
                                <div className="text-gray-400 text-sm">NBFC Partners</div>
                            </div>
                            <div className="w-px h-12 bg-gray-600"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">95%</div>
                                <div className="text-gray-400 text-sm">Approval Rate</div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8">
                                <Link href="/contact">
                                    Apply Now
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10 rounded-full px-8">
                                <a href="tel:9737799937">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call: +91 97377 99937
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
