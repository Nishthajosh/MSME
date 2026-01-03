'use client';

import { 
  Sparkles, 
  Target, 
  Shield, 
  Zap, 
  Award,
  Search,
  Filter,
  Compass,
  FileText,
  FolderOpen,
  Calendar,
  Users,
  BarChart3,
  CheckCircle2,
  Circle,
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

// Stats data
const heroStats = [
  { value: "₹500Cr+", label: "Grants Secured" },
  { value: "85%", label: "Success Rate" },
  { value: "50+", label: "Schemes Covered" },
  { value: "100%", label: "Documentation Support" }
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
  "Non-repayable funding without equity dilution or interest obligations",
  "Sector-specific schemes with targeted support for priority industries",
  "Subsidies for capital expenditure, technology upgradation, and infrastructure",
  "Special focus on innovation, employment generation, and export promotion"
];

// Services
const services = [
  {
    icon: Search,
    title: "Scheme Identification",
    description: "Research and identify relevant grant programs aligned with your business model, industry, location, and growth objectives",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: Filter,
    title: "Eligibility Assessment",
    description: "Conduct thorough evaluation of your business against scheme criteria to determine qualification and prepare compliance roadmap",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Compass,
    title: "Strategic Application Planning",
    description: "Develop application strategies that highlight alignment between your business objectives and scheme priorities",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: FileText,
    title: "Proposal Development",
    description: "Create compelling proposals including project plans, impact assessments, and implementation roadmaps tailored to scheme requirements",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: FolderOpen,
    title: "Documentation Support",
    description: "Prepare comprehensive documentation packages including business plans, financial projections, and supporting evidence",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: Calendar,
    title: "Application Submission",
    description: "Handle timely submission with proper formatting, organization, and adherence to all procedural requirements",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Users,
    title: "Interview & Presentation Support",
    description: "Prepare for and participate in evaluation interviews, presentations, and clarification sessions with funding authorities",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: BarChart3,
    title: "Post-Approval Compliance",
    description: "Ensure adherence to grant terms, reporting requirements, and utilization guidelines to prevent complications",
    color: "bg-yellow-50 text-yellow-600"
  }
];

// Who can apply
const whoCanApply = [
  "Startup India Seed Fund - Financial assistance for early-stage startups for proof of concept, prototype development, product trials",
  "MSME Technology Upgradation Schemes - Capital subsidies for modernization and technology enhancement of manufacturing units",
  "PMEGP (Prime Minister's Employment Generation Programme) - Subsidies for new manufacturing, services, or trading micro-enterprises",
  "Export Promotion Capital Goods (EPCG) - Duty exemptions for capital goods imports for export-oriented businesses",
  "Biotechnology Industry Research Assistance Council (BIRAC) Grants - Funding for biotech startups and innovation projects"
];

// Conditions
const conditions = [
  "Design-Led Manufacturing Scheme - Support for domestic manufacturing of telecom and networking products",
  "SIDBI Funds - Special focus on MSMEs in priority sectors including manufacturing and service enterprises",
  "National Initiative for Developing and Harnessing Innovations (NIDHI) - Support for tech-based startups and innovation",
  "Agriculture Processing and Rural Development Grants - Funding for food processing and agribusiness ventures",
  "Textile Sector Schemes - Support for technical textiles, apparel manufacturing, and textile park development"
];

// Process steps
const processSteps = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "Understand your business model, objectives, and funding requirements through comprehensive discussion"
  },
  {
    number: 2,
    title: "Scheme Research",
    description: "Identify all relevant government schemes and grants matching your business profile and requirements"
  },
  {
    number: 3,
    title: "Eligibility Analysis",
    description: "Assess qualification potential for identified schemes and determine documentation needs"
  },
  {
    number: 4,
    title: "Application Strategy",
    description: "Develop compelling narratives that align your business with scheme objectives and highlight potential impact"
  },
  {
    number: 5,
    title: "Documentation Preparation",
    description: "Create comprehensive application packages with all required forms, business plans, and supporting documents"
  },
  {
    number: 6,
    title: "Submission & Follow-up",
    description: "Submit applications with proper tracking and engage in strategic follow-up with authorities"
  },
  {
    number: 7,
    title: "Post-Approval Support",
    description: "Guide implementation, reporting, and compliance to ensure successful grant utilization"
  }
];

// Document checklist
const documents = [
  "Business registration certificates (Incorporation Certificate, MSME Registration, etc.)",
  "PAN, GST registration, and other tax-related documents",
  "Financial statements for the past 2-3 years (as applicable)",
  "Detailed project report with implementation plan and timelines",
  "Cost estimates and quotations for proposed expenditures",
  "Land and building ownership/lease documents (where applicable)",
  "Industry-specific certifications and licenses",
  "Promoter profiles with identification and address proofs",
  "Bank statements and existing financing documentation",
  "Employment and skill development plans (for relevant schemes)"
];

// FAQs
const faqs = [
  {
    question: "Which businesses qualify for government grants in India?",
    answer: "Various businesses qualify depending on the specific scheme. Generally, MSMEs, startups registered under Startup India, manufacturing units, exporters, and businesses in priority sectors like technology, agriculture, and textiles are eligible. Each scheme has specific criteria regarding turnover, employment, investment, and industry focus."
  },
  {
    question: "How long does the government grant application process take?",
    answer: "The timeline varies by scheme, but typically ranges from 3-12 months from application to disbursement. Factors affecting timeline include scheme complexity, documentation completeness, evaluation cycles, and approval processes at different levels."
  },
  {
    question: "What costs are typically covered by government grants?",
    answer: "Government grants commonly cover capital expenditure on machinery and equipment, technology upgradation, infrastructure development, R&D activities, quality certifications, marketing and export promotion, skill development, and interest subsidies on loans."
  },
  {
    question: "What are the common reasons for grant application rejection?",
    answer: "Common rejection reasons include incomplete documentation, failure to meet eligibility criteria, weak project proposals, unrealistic projections, poor alignment with scheme objectives, and non-compliance with procedural requirements."
  },
  {
    question: "Are there any obligations after receiving a government grant?",
    answer: "Yes, recipients must comply with utilization guidelines, maintain records, submit periodic reports, achieve stated objectives, maintain employment levels, and allow inspections. Non-compliance can result in grant recall or penalties."
  },
  {
    question: "Can Ewolyn guarantee grant approval?",
    answer: "No consultant can guarantee approval as final decisions rest with government authorities. However, our expertise significantly improves success rates through proper scheme selection, strong applications, complete documentation, and strategic presentation."
  }
];

export default function GrantsPage() {
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
              Government Schemes • Non-Repayable Funding
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Government Grants
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#f97068] font-medium text-center mb-6">
            MSME • Startup India • DPIIT • Sector-Specific Schemes
          </p>

          {/* Description */}
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 text-lg">
            Access non-repayable government funding with Ewolyn's specialized grants consultancy 
            services covering scheme identification, eligibility assessment, application development, 
            documentation support, and follow-up to maximize your chances of securing government 
            financial assistance.
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
                Unlock Government Funding for Your Business
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Government grants represent a valuable source of non-repayable funding that can 
                significantly accelerate business growth without creating debt obligations. From 
                startup subsidies and R&D support to manufacturing incentives and export promotion, 
                various government schemes provide financial assistance to eligible businesses across sectors.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Ewolyn specializes in connecting MSMEs and startups with suitable government 
                grant schemes, navigating the complex application processes, and developing 
                compelling proposals that align with scheme objectives. Our expertise improves 
                your approval chances while ensuring compliance with all grant terms and conditions.
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
                  className={`p-8 rounded-2xl ${
                    index === 0 ? 'bg-red-50' : 
                    index === 1 ? 'bg-blue-50' : 
                    index === 2 ? 'bg-green-50' : 
                    'bg-orange-50'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-white text-red-500' : 
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
              Our Grants Consultancy Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#1e2642] text-gray-300 border-0 px-4 py-1.5 text-sm font-medium mb-6">
              Requirements
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Major Grant Categories We Cover
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
              Our Grant Application Process
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
                    <span className="font-semibold">Important:</span> Documentation requirements vary significantly between grant schemes. Our team provides customized checklists specific to your target schemes after initial assessment.
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
              Ready to Access Government Funding?
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Connect with our grants specialists to identify available schemes, assess 
              your eligibility, and develop compelling applications to secure non-repayable 
              funding for your business growth.
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
                <a href="tel:7777941611">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +91 77779 41611
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
