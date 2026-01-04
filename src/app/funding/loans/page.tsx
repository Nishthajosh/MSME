'use client';

import {
  Sparkles,
  Target,
  Shield,
  Zap,
  Award,
  Building,
  CreditCard,
  Grid3X3,
  ShieldCheck,
  BarChart3,
  Landmark,
  Users,
  TrendingUp,
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
  { value: "₹500Cr+", label: "Loan Value Facilitated" },
  { value: "92%", label: "Approval Rate" },
  { value: "48hrs", label: "Quick Processing" },
  { value: "20+", label: "Lending Partners" }
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
  "Personalized loan recommendations based on business requirements and eligibility",
  "Access to preferential rates and specialized schemes through our lending networks",
  "Comprehensive documentation support to streamline application processes",
  "Expert negotiation and structuring for optimal terms and conditions"
];

// Loan Services
const loanServices = [
  {
    icon: Building,
    title: "Term Loans",
    description: "Long-term financing for business expansion, asset acquisition, and strategic investments with structured repayment schedules",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: CreditCard,
    title: "Working Capital Loans",
    description: "Short-term financing for operational expenses, inventory management, and cash flow optimization",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Grid3X3,
    title: "MSME Priority Lending",
    description: "Special financing options under priority sector lending for micro, small, and medium enterprises",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: ShieldCheck,
    title: "Collateral-Free Financing",
    description: "CGTMSE-backed and unsecured loan options for businesses without sufficient collateral assets",
    color: "bg-orange-50 text-orange-500"
  },
  {
    icon: BarChart3,
    title: "Project Financing",
    description: "Specialized funding for specific projects with customized disbursement and repayment structures",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: Landmark,
    title: "Government Scheme Loans",
    description: "Access to PMMY (Mudra), Stand-Up India, CLCSS, and other government-sponsored financing programs",
    color: "bg-red-50 text-red-500"
  },
  {
    icon: Users,
    title: "Startup Financing",
    description: "Specialized lending options for startups through venture debt and innovative financing structures",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: TrendingUp,
    title: "Business Expansion Loans",
    description: "Tailored financing solutions for market expansion, capacity enhancement, and growth initiatives",
    color: "bg-amber-50 text-amber-600"
  }
];

// Who can apply
const whoCanApply = [
  "Business vintage of at least 1-3 years (varies by loan type and lender)",
  "Minimum annual turnover requirements based on loan amount and purpose",
  "Stable financial performance with positive growth trends",
  "Good credit history with minimal defaults and timely repayments",
  "Adequate debt service coverage ratio (DSCR) to support new loan obligations"
];

// Conditions
const conditions = [
  "Complete KYC documentation for business and promoters",
  "Proper business registration (Private Limited, LLP, Proprietorship, etc.)",
  "GST registration and compliance (for applicable businesses)",
  "ITR filings for both business and promoters for previous years",
  "Collateral requirements based on loan type and lender policies"
];

// Process steps
const processSteps = [
  {
    number: 1,
    title: "Requirement Analysis",
    description: "Understand your financing needs, purpose, timeline, and repayment capacity through detailed discussion"
  },
  {
    number: 2,
    title: "Eligibility Assessment",
    description: "Evaluate your business profile against various loan options and lender criteria to identify optimal matches"
  },
  {
    number: 3,
    title: "Loan Structuring",
    description: "Design appropriate loan parameters including amount, tenure, repayment structure, and security arrangements"
  },
  {
    number: 4,
    title: "Documentation Support",
    description: "Prepare comprehensive application packages with all required financial statements and business documentation"
  },
  {
    number: 5,
    title: "Lender Submission",
    description: "Present your case to selected lenders with proper positioning and follow-up to expedite processing"
  },
  {
    number: 6,
    title: "Term Negotiation",
    description: "Secure favorable interest rates, processing fees, and other terms through expert negotiation"
  },
  {
    number: 7,
    title: "Disbursement Facilitation",
    description: "Coordinate completion of pre-disbursement formalities and ensure timely fund release"
  }
];

// Document checklist
const documents = [
  "Business registration documents (Incorporation Certificate, Partnership Deed, etc.)",
  "KYC documents of directors/partners/proprietors (PAN, Aadhar, etc.)",
  "GST registration certificate and returns (last 6-12 months)",
  "Income Tax Returns for business (last 2-3 years)",
  "Audited financial statements (Balance Sheet, P&L for last 2-3 years)",
  "Bank statements (last 6-12 months)",
  "Proof of business premises (ownership/lease documentation)",
  "Collateral documents (property papers, valuation reports if applicable)",
  "Business profile and project report (for project/expansion financing)",
  "Existing loan statements and repayment track record (if any)"
];

// FAQs
const faqs = [
  {
    question: "What types of business loans are available for MSMEs in India?",
    answer: "MSMEs can access various loan types including term loans, working capital loans, equipment financing, invoice financing, Mudra loans (Shishu, Kishore, Tarun), CGTMSE-backed collateral-free loans, and government scheme loans like Stand-Up India and CLCSS."
  },
  {
    question: "How long does the business loan approval process take?",
    answer: "Processing time varies by lender and loan type. NBFCs typically process within 3-7 days, while banks may take 2-4 weeks. Government scheme loans may take longer due to additional verification. Our facilitation can help expedite processing through proper documentation and positioning."
  },
  {
    question: "What interest rates can I expect for business loans?",
    answer: "Interest rates range from 8-24% depending on factors like loan type, lender, business profile, credit history, and collateral. Government scheme loans often offer lower rates. Our team helps identify the most competitive rates based on your eligibility profile."
  },
  {
    question: "What collateral is required for business loans?",
    answer: "Collateral requirements vary by loan type and amount. Options include property, fixed deposits, inventory, or receivables. CGTMSE-backed loans up to ₹2 crore may be available without collateral. Our team can help identify suitable options based on your asset position."
  },
  {
    question: "How can I improve my business loan eligibility?",
    answer: "Key factors include maintaining good credit scores, consistent business turnover, positive cash flows, proper documentation, GST compliance, and timely repayment of existing obligations. We provide guidance on improving eligibility before application."
  },
  {
    question: "Can startups and new businesses get loans without significant operating history?",
    answer: "Yes, options exist through Mudra loans (for new businesses), CGTMSE-backed startup financing, NBFC products for newer businesses, and specialized startup lending programs. Eligibility and terms vary based on business plan strength and promoter profiles."
  }
];

export default function LoansPage() {
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
              Business Finance • Debt Capital
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Business Loan Services
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#f97068] font-medium text-center mb-6">
            Term Loans • Working Capital • MSME Schemes • Collateral-Free Options
          </p>

          {/* Description */}
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 text-lg">
            Access optimal business financing with Ewolyn's specialized loan advisory services covering
            bank loans, NBFC financing, government schemes, and specialized credit products with end-to-end
            support from application to disbursement.
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
                Business Loan Solutions for Every Need
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Business loans provide essential capital for growth initiatives, operational
                requirements, and strategic investments. From short-term working capital to long-term
                expansion financing, the right debt capital at the right time accelerates business
                development while preserving ownership and control.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Ewolyn specializes in connecting businesses with optimal financing solutions based
                on their specific needs, financial profile, and growth stage. Our expertise spans
                traditional banking, NBFC partnerships, government schemes, and specialized financing
                options, ensuring you receive the most favorable terms and efficient processing.
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
              Our Business Loan Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanServices.map((service, index) => (
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
              Business Loan Eligibility Factors
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
              <h3 className="text-xl font-semibold text-[#f97068] mb-6">Conditions</h3>
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
              Our Loan Facilitation Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {processSteps.slice(0, 4).map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#f97068]/30 transition-colors relative"
              >
                <div className="w-12 h-12 rounded-full bg-[#f97068] text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-3 text-gray-300">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {processSteps.slice(4).map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#f97068]/30 transition-colors"
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
              Documentation Requirements
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
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <span className="font-semibold">Important:</span> Documentation requirements vary based on loan type, amount, lender policies, and your business structure. Our team provides customized checklists based on your specific loan requirements.
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
              Ready to Secure Business Financing?
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Connect with our loan specialists to identify optimal financing options,
              assess your eligibility, and navigate the application process for successful funding.
            </p>

            {/* Stats */}
            <div className="flex justify-center items-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">₹500Cr+</div>
                <div className="text-gray-400 text-sm">Funded</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">20K+</div>
                <div className="text-gray-400 text-sm">Businesses</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8">
                <Link href="/contact">
                  Start Application
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
