"use client";

import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { MapPin, BarChart3 } from 'lucide-react';

const topStates = [
    { name: "Maharashtra", value: "82L+", percentage: 100 },
    { name: "Tamil Nadu", value: "49L+", percentage: 60 },
    { name: "Gujarat", value: "41L+", percentage: 50 },
    { name: "Uttar Pradesh", value: "39L+", percentage: 48 },
    { name: "Karnataka", value: "34L+", percentage: 42 },
];

const sectorDistribution = [
    { name: "Manufacturing", percentage: 31, color: "#f97068" },
    { name: "Trading", percentage: 36, color: "#f97068" },
    { name: "Services", percentage: 33, color: "#f97068" },
];

export function IndiaPresence() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left - India Map */}
                    <AnimateOnScroll>
                        <div className="bg-[#1e2642]/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-[#f97068] flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Pan-India Presence</h2>
                            </div>

                            {/* India Map SVG */}
                            <div className="relative flex justify-center items-center min-h-[350px]">
                                <svg viewBox="0 0 400 450" className="w-full max-w-[350px] h-auto">
                                    {/* Simplified India map shape */}
                                    <path
                                        d="M200,20 L240,30 L280,50 L310,80 L330,120 L340,160 L350,200 L360,240 L350,280 L340,320 L320,360 L290,390 L250,410 L200,430 L150,410 L110,390 L80,360 L60,320 L50,280 L40,240 L50,200 L60,160 L70,120 L90,80 L120,50 L160,30 Z"
                                        fill="url(#indiaGradient)"
                                        stroke="#f97068"
                                        strokeWidth="2"
                                        className="drop-shadow-lg"
                                    />
                                    <defs>
                                        <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#dc2626" />
                                            <stop offset="100%" stopColor="#991b1b" />
                                        </linearGradient>
                                    </defs>

                                    {/* City markers */}
                                    {[
                                        { x: 120, y: 180, name: "Delhi" },
                                        { x: 100, y: 220, name: "Jaipur" },
                                        { x: 80, y: 260, name: "Ahmedabad" },
                                        { x: 100, y: 320, name: "Mumbai" },
                                        { x: 200, y: 380, name: "Bangalore" },
                                        { x: 240, y: 350, name: "Chennai" },
                                        { x: 280, y: 280, name: "Hyderabad" },
                                        { x: 300, y: 200, name: "Kolkata" },
                                        { x: 220, y: 160, name: "Lucknow" },
                                        { x: 160, y: 140, name: "Chandigarh" },
                                    ].map((city, index) => (
                                        <g key={index}>
                                            <circle cx={city.x} cy={city.y} r="6" fill="white" className="animate-pulse" />
                                            <circle cx={city.x} cy={city.y} r="3" fill="#f97068" />
                                            <text x={city.x + 10} y={city.y + 4} fill="white" fontSize="10" fontWeight="500">
                                                {city.name}
                                            </text>
                                        </g>
                                    ))}
                                </svg>
                            </div>

                            {/* Stats Footer */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-[#0f1729]/50 rounded-xl p-4">
                                    <p className="text-gray-400 text-sm mb-1">Active States</p>
                                    <p className="text-2xl font-bold text-[#f97068]">28/36</p>
                                </div>
                                <div className="bg-[#0f1729]/50 rounded-xl p-4">
                                    <p className="text-gray-400 text-sm mb-1">Top Region</p>
                                    <p className="text-2xl font-bold text-[#f97068]">West India</p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right - Stats Cards */}
                    <div className="space-y-6">
                        {/* Top MSME States */}
                        <AnimateOnScroll delay={200}>
                            <div className="bg-white rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-lg bg-[#f97068] flex items-center justify-center">
                                        <BarChart3 className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Top MSME States</h3>
                                </div>

                                <div className="space-y-4">
                                    {topStates.map((state, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-700 font-medium">{state.name}</span>
                                                <span className="text-[#f97068] font-bold">{state.value}</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-2">
                                                <div
                                                    className="bg-[#f97068] h-2 rounded-full transition-all duration-1000"
                                                    style={{ width: `${state.percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Sector Distribution */}
                        <AnimateOnScroll delay={400}>
                            <div className="bg-white rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-lg bg-[#f97068] flex items-center justify-center">
                                        <BarChart3 className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Sector Distribution</h3>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {sectorDistribution.map((sector, index) => (
                                        <div key={index} className="text-center">
                                            {/* Circular Progress */}
                                            <div className="relative w-20 h-20 mx-auto mb-3">
                                                <svg className="w-20 h-20 transform -rotate-90">
                                                    <circle
                                                        cx="40"
                                                        cy="40"
                                                        r="35"
                                                        stroke="#f0f0f0"
                                                        strokeWidth="6"
                                                        fill="none"
                                                    />
                                                    <circle
                                                        cx="40"
                                                        cy="40"
                                                        r="35"
                                                        stroke={sector.color}
                                                        strokeWidth="6"
                                                        fill="none"
                                                        strokeDasharray={`${sector.percentage * 2.2} 220`}
                                                        strokeLinecap="round"
                                                        className="transition-all duration-1000"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-lg font-bold text-gray-900">{sector.percentage}%</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm font-medium">{sector.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
