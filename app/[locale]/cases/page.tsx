'use client';

import { useTranslations } from 'next-intl';
import { REAL_CASES, CaseStudy } from '@/data/cases';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

export default function CasesPage() {
    const [filter, setFilter] = useState<string>('All');

    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(REAL_CASES.map(c => c.category)))];

    const filteredCases = filter === 'All'
        ? REAL_CASES
        : REAL_CASES.filter(c => c.category === filter);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Real Success Stories</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Explore real-world examples of approved visa applications. Learn from others' strategies and success.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={clsx(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                filter === cat
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCases.map((study) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="p-6 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={clsx(
                                        "px-2 py-1 rounded text-xs font-bold uppercase",
                                        study.outcome.includes('Approved') ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                                    )}>
                                        {study.outcome}
                                    </span>
                                    <span className="text-slate-400 text-sm">{study.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{study.title}</h3>
                                <p className="text-slate-600 mb-4 line-clamp-3">
                                    {study.summary}
                                </p>
                            </div>

                            <div className="bg-slate-50 p-4 border-t border-slate-100">
                                <details className="group">
                                    <summary className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer list-none">
                                        <BookOpen size={16} />
                                        Read Case Details
                                        <span className="transition group-open:rotate-180 ml-auto">▼</span>
                                    </summary>
                                    <div
                                        className="mt-4 text-slate-700 text-sm prose prose-sm max-w-none prose-p:my-2 prose-h3:text-slate-900 prose-h3:font-bold prose-h3:mt-4 prose-ul:pl-4"
                                        dangerouslySetInnerHTML={{ __html: study.content }}
                                    />
                                </details>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
