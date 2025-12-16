'use client';

import React, { useState } from 'react';
import { VisaDetail } from '@/data/visa_details';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, FileText, List, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export default function VisaDetailView({ detail }: { detail: VisaDetail }) {
    const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'process' | 'documents'>('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <FileText size={18} /> },
        { id: 'requirements', label: 'Requirements', icon: <CheckCircle size={18} /> },
        { id: 'process', label: 'Process', icon: <Clock size={18} /> },
        { id: 'documents', label: 'Documents', icon: <List size={18} /> },
    ];

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">{detail.title}</h1>
                <p className="text-xl text-slate-600 leading-relaxed">{detail.description}</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-200 mb-8 sticky top-20 bg-white/90 backdrop-blur-sm z-30 pt-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={clsx(
                            "flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-all relative",
                            activeTab === tab.id
                                ? "text-blue-600 bg-blue-50/50"
                                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                        )}
                    >
                        {tab.icon}
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">Introduction</h3>
                                    <p className="text-blue-800/80">
                                        This guide provides a comprehensive breakdown of the {detail.title} application.
                                        Review the sections above to understand the specific criteria, the step-by-step roadmap,
                                        and the exact documents you need to prepare.
                                    </p>
                                </div>

                                {/* Summary Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 rounded-xl border border-slate-100 shadow-sm bg-white">
                                        <div className="text-emerald-500 mb-2 font-bold text-lg">Self-Petition</div>
                                        <p className="text-sm text-slate-500">
                                            For EB-1A and EB-2 NIW, you do not need an employer sponsor. You are the petitioner.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-xl border border-slate-100 shadow-sm bg-white">
                                        <div className="text-indigo-500 mb-2 font-bold text-lg">Premium Processing</div>
                                        <p className="text-sm text-slate-500">
                                            Available (Form I-907). Get a response in 15-45 business days for an extra fee.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-xl border border-slate-100 shadow-sm bg-white">
                                        <div className="text-amber-500 mb-2 font-bold text-lg">Key Criteria</div>
                                        <p className="text-sm text-slate-500">
                                            Focus on objective evidence like citations, awards, and reviews.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'requirements' && (
                            <div className="space-y-8">
                                {detail.requirements.map((req, idx) => (
                                    <div key={idx} className="bg-white border boundary-slate-200 rounded-xl p-6 shadow-sm">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                                                {idx + 1}
                                            </div>
                                            {req.title}
                                        </h3>
                                        <ul className="space-y-3 pl-4">
                                            {req.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-600">
                                                    <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'process' && (
                            <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 py-4">
                                {detail.process.map((step, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600" />

                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                                    Step {step.step}: {step.title}
                                                </h3>
                                                <p className="text-slate-600 max-w-2xl">{step.description}</p>
                                            </div>
                                            {step.duration && (
                                                <div className="shrink-0 px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full whitespace-nowrap">
                                                    ⏱️ {step.duration}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'documents' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {detail.documents.map((cat, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                                            {cat.category}
                                        </h3>
                                        <ul className="space-y-2">
                                            {cat.items.map((doc, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <FileText size={16} className="text-slate-400" />
                                                    {doc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
