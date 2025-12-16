'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { VISA_CATEGORIES, VisaType } from '@/data/visas';
import { Check, Star } from 'lucide-react';

interface VisaSelectorProps {
    selectedVisaId: string;
    onSelect: (visa: VisaType) => void;
}

export default function VisaSelector({ selectedVisaId, onSelect }: VisaSelectorProps) {
    return (
        <div className="w-full max-w-7xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Choose Your Path</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Immigrant Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden">
                    <div className="bg-emerald-600/5 p-4 border-b border-emerald-100 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-emerald-800">{VISA_CATEGORIES.immigrant.title}</h3>
                            <p className="text-sm text-emerald-600/80">{VISA_CATEGORIES.immigrant.description}</p>
                        </div>
                        <div className="text-2xl">🏛️</div>
                    </div>
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {VISA_CATEGORIES.immigrant.visas.map(visa => (
                            <VisaCard
                                key={visa.id}
                                visa={visa}
                                isSelected={selectedVisaId === visa.id}
                                onSelect={() => onSelect(visa)}
                                colorClass="emerald"
                            />
                        ))}
                    </div>
                </div>

                {/* Non-Immigrant Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
                    <div className="bg-blue-600/5 p-4 border-b border-blue-100 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-blue-800">{VISA_CATEGORIES.non_immigrant.title}</h3>
                            <p className="text-sm text-blue-600/80">{VISA_CATEGORIES.non_immigrant.description}</p>
                        </div>
                        <div className="text-2xl">✈️</div>
                    </div>
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {VISA_CATEGORIES.non_immigrant.visas.map(visa => (
                            <VisaCard
                                key={visa.id}
                                visa={visa}
                                isSelected={selectedVisaId === visa.id}
                                onSelect={() => onSelect(visa)}
                                colorClass="blue"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function VisaCard({ visa, isSelected, onSelect, colorClass }: {
    visa: VisaType,
    isSelected: boolean,
    onSelect: () => void,
    colorClass: 'emerald' | 'blue'
}) {
    const isEmerald = colorClass === 'emerald';

    return (
        <button
            onClick={onSelect}
            className={clsx(
                "relative text-left p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md group",
                isSelected
                    ? (isEmerald ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200 ring-offset-1" : "border-blue-500 bg-blue-50 ring-2 ring-blue-200 ring-offset-1")
                    : "border-slate-100 bg-white hover:border-slate-300"
            )}
        >
            {/* Badge */}
            {visa.badge && (
                <span className={clsx(
                    "absolute -top-2 -right-2 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm text-white",
                    isEmerald ? "bg-amber-500" : "bg-indigo-500"
                )}>
                    {visa.badge}
                </span>
            )}

            <div className="flex justify-between items-start mb-1">
                <span className={clsx(
                    "font-bold text-lg",
                    isSelected ? (isEmerald ? "text-emerald-700" : "text-blue-700") : "text-slate-800"
                )}>
                    {visa.code}
                </span>
                {isSelected && (
                    <div className={clsx(
                        "rounded-full p-0.5 text-white",
                        isEmerald ? "bg-emerald-500" : "bg-blue-500"
                    )}>
                        <Check size={12} strokeWidth={3} />
                    </div>
                )}
            </div>

            <div className="font-semibold text-sm text-slate-700 mb-1 leading-snug">{visa.name}</div>
            <div className="text-xs text-slate-500 leading-relaxed line-clamp-2">{visa.description}</div>
        </button>
    );
}
