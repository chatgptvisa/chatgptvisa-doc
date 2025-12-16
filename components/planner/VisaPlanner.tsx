'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Printer, Save, Calculator, FileText } from 'lucide-react';
import clsx from 'clsx';

type Step = {
    id: number;
    title: string;
    icon: React.ReactNode;
};

const steps: Step[] = [
    { id: 1, title: 'Eligibility', icon: '📋' },
    { id: 2, title: 'Evidence', icon: '📂' },
    { id: 3, title: 'Drafting', icon: '✍️' },
    { id: 4, title: 'Filing', icon: '📮' },
    { id: 5, title: 'Result', icon: '🏁' },
];

export default function VisaPlanner() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<Record<string, any>>({});

    // Load from local storage
    useEffect(() => {
        const saved = localStorage.getItem('eb1a-planner-data');
        if (saved) {
            try {
                setFormData(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to load saved data');
            }
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem('eb1a-planner-data', JSON.stringify(formData));
    }, [formData]);

    const toggleCheckbox = (key: string) => {
        setFormData(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const updateInput = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => setCurrentStep(p => Math.min(steps.length, p + 1));
    const prevStep = () => setCurrentStep(p => Math.max(1, p - 1));

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">

            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-2">
                    DIY EB-1A Visa Planner
                </h1>
                <p className="text-slate-500">
                    Your Independent Journey to the Green Card — Without Expensive Agencies
                </p>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8 relative overflow-visible">
                <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-100 -z-0 -translate-y-1/2" />
                <div className="flex justify-between relative z-10">
                    {steps.map((step) => {
                        const isActive = step.id === currentStep;
                        const isCompleted = step.id < currentStep;
                        return (
                            <button
                                key={step.id}
                                onClick={() => setCurrentStep(step.id)}
                                className="flex flex-col items-center group"
                            >
                                <div className={clsx(
                                    "w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 border-4",
                                    isActive ? "bg-blue-600 text-white border-white shadow-lg scale-110" :
                                        isCompleted ? "bg-green-500 text-white border-white" :
                                            "bg-slate-100 text-slate-400 border-white"
                                )}>
                                    {isCompleted ? <Check size={20} /> : step.icon}
                                </div>
                                <span className={clsx(
                                    "text-xs font-semibold mt-2 transition-colors",
                                    isActive ? "text-blue-600" : isCompleted ? "text-green-500" : "text-slate-400"
                                )}>
                                    {step.title}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Content Sections */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="p-8"
                    >
                        {currentStep === 1 && (
                            <StepEligibility formData={formData} toggleCheckbox={toggleCheckbox} />
                        )}
                        {currentStep === 2 && (
                            <StepEvidence formData={formData} toggleCheckbox={toggleCheckbox} />
                        )}
                        {currentStep === 3 && (
                            <StepDrafting formData={formData} toggleCheckbox={toggleCheckbox} />
                        )}
                        {currentStep === 4 && (
                            <StepFiling formData={formData} toggleCheckbox={toggleCheckbox} updateInput={updateInput} />
                        )}
                        {currentStep === 5 && (
                            <StepSummary formData={formData} />
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Footer */}
                <div className="bg-slate-50 border-t border-slate-200 p-6 flex justify-between items-center">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg text-slate-600 hover:bg-slate-200 disabled:opacity-50 transition-colors"
                    >
                        <ChevronLeft size={20} /> Previous
                    </button>
                    <div className="text-sm text-slate-400">
                        Step {currentStep} of {steps.length}
                    </div>
                    <button
                        onClick={nextStep}
                        disabled={currentStep === steps.length}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-md hover:shadow-lg"
                    >
                        {currentStep === steps.length ? "Finish" : "Next"} <ChevronRight size={20} />
                    </button>
                </div>
            </div>

        </div>
    );
}

// --- Steps Components ---

function StepEligibility({ formData, toggleCheckbox }: any) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">📋</div>
                <h2 className="text-2xl font-bold text-slate-800">Check Your Eligibility</h2>
            </div>

            <p className="text-slate-600 mb-6">
                To qualify for EB-1A, you must meet at least <strong>3 out of 10</strong> criteria. Check the ones you plan to target.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { id: 'crit_awards', label: 'Awards', sub: 'Nationally recognized prizes' },
                    { id: 'crit_membership', label: 'Membership', sub: 'Associations requiring outstanding achievement' },
                    { id: 'crit_media', label: 'Media Coverage', sub: 'Professional publications about you' },
                    { id: 'crit_judge', label: 'Judging', sub: 'Judging the work of others in the field' },
                    { id: 'crit_contrib', label: 'Contributions', sub: 'Original contributions of major significance' },
                    { id: 'crit_scholarly', label: 'Scholarly Articles', sub: 'Authored articles in major journals' },
                    { id: 'crit_exhibit', label: 'Exhibitions', sub: 'Display of work at artistic exhibitions' },
                    { id: 'crit_leading', label: 'Leading Role', sub: 'Critical role in distinguished organizations' },
                    { id: 'crit_salary', label: 'High Salary', sub: 'Significantly high remuneration' },
                    { id: 'crit_commercial', label: 'Commercial Success', sub: 'Box office success in performing arts' },
                ].map((item) => (
                    <div
                        key={item.id}
                        onClick={() => toggleCheckbox(item.id)}
                        className={clsx(
                            "flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:bg-slate-50",
                            formData[item.id] ? "border-blue-500 bg-blue-50/50" : "border-slate-100"
                        )}
                    >
                        <div className={clsx(
                            "w-5 h-5 rounded border flex items-center justify-center mt-0.5 transition-colors",
                            formData[item.id] ? "bg-blue-500 border-blue-500 text-white" : "border-slate-300 bg-white"
                        )}>
                            {formData[item.id] && <Check size={14} />}
                        </div>
                        <div>
                            <div className="font-semibold text-slate-800">{item.label}</div>
                            <div className="text-xs text-slate-500">{item.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <h4 className="text-amber-800 font-bold mb-1">💡 Strategy Tip</h4>
                <p className="text-sm text-amber-900/80">
                    Aim for 4-5 criteria to be safe. "Judging" and "Scholarly Articles" are often the most objective ones to prove for researchers.
                </p>
            </div>
        </div>
    );
}

function StepEvidence({ formData, toggleCheckbox }: any) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl">📂</div>
                <h2 className="text-2xl font-bold text-slate-800">Evidence Gathering</h2>
            </div>

            <div className="space-y-4">
                <h3 className="font-semibold text-slate-700">Essential Documents</h3>

                {[
                    { id: 'doc_cv', label: 'Detailed Resume / CV', sub: 'Focus on achievements, not duty descriptions' },
                    { id: 'doc_degrees', label: 'Advanced Degrees', sub: 'Ph.D. or Masters Diploma and Transcripts' },
                    { id: 'doc_letters', label: 'Recommendation Letters', sub: '4-6 letters from independent experts' },
                    { id: 'doc_citations', label: 'Citation Report', sub: 'Google Scholar profile export' },
                ].map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100" onClick={() => toggleCheckbox(item.id)}>
                        <div className={clsx(
                            "w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors",
                            formData[item.id] ? "bg-green-500 border-green-500 text-white" : "border-slate-300 bg-white"
                        )}>
                            {formData[item.id] && <Check size={14} />}
                        </div>
                        <div className="flex-1">
                            <div className="font-medium text-slate-800">{item.label}</div>
                            <div className="text-xs text-slate-500">{item.sub}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StepDrafting({ formData, toggleCheckbox }: any) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">✍️</div>
                <h2 className="text-2xl font-bold text-slate-800">Drafting the Petition</h2>
            </div>

            <div className="prose prose-slate">
                <p>The core of your application is the <strong>Petition Letter</strong> (Legal Brief). It must connect your evidence to the criteria using the "Kazarian" two-step analysis.</p>
            </div>

            <div className="space-y-4 mt-4">
                {[
                    { id: 'draft_letter', label: 'Petition Letter Drafted', sub: 'Typically 15-30 pages arguing your case' },
                    { id: 'draft_index', label: 'Exhibit List Created', sub: 'Organized Table of Contents for your evidence' },
                    { id: 'draft_print', label: 'Exhibits Printed & Tagged', sub: 'Use bottom dividers/tabs for easy navigation' },
                ].map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100" onClick={() => toggleCheckbox(item.id)}>
                        <div className={clsx(
                            "w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors",
                            formData[item.id] ? "bg-purple-500 border-purple-500 text-white" : "border-slate-300 bg-white"
                        )}>
                            {formData[item.id] && <Check size={14} />}
                        </div>
                        <div className="flex-1">
                            <div className="font-medium text-slate-800">{item.label}</div>
                            <div className="text-xs text-slate-500">{item.sub}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function StepFiling({ formData, toggleCheckbox, updateInput }: any) {
    const calculateTotal = () => {
        const i140 = 715;
        const asylum = 600; // New Asylum Program Fee
        const premium = formData.opt_premium ? 2805 : 0;
        return i140 + asylum + premium;
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">📮</div>
                <h2 className="text-2xl font-bold text-slate-800">Filing & Fees</h2>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                    <Calculator size={18} /> Cost Calculator
                </h3>

                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span>I-140 Filing Fee</span>
                        <span className="font-mono">$715</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Asylum Program Fee</span>
                        <span className="font-mono">$600</span>
                    </div>
                    <div className="flex justify-between text-sm items-center pt-2 border-t border-slate-200">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="opt_premium"
                                checked={formData.opt_premium || false}
                                onChange={() => toggleCheckbox('opt_premium')}
                                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="opt_premium" className="cursor-pointer">Premium Processing (I-907)</label>
                        </div>
                        <span className="font-mono text-slate-500">+$2,805</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-blue-700 pt-3 border-t-2 border-slate-200 mt-2">
                        <span>Total USCIS Fees</span>
                        <span>${calculateTotal().toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">I-140 Tracking Number</label>
                    <input
                        type="text"
                        placeholder="e.g. LIN25..."
                        value={formData.tracking_num || ''}
                        onChange={(e) => updateInput('tracking_num', e.target.value)}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Filing Date</label>
                    <input
                        type="date"
                        value={formData.filing_date || ''}
                        onChange={(e) => updateInput('filing_date', e.target.value)}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
            </div>
        </div>
    )
}

function StepSummary({ formData }: any) {
    return (
        <div className="space-y-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                🎉
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Ready to Launch!</h2>
            <p className="text-slate-600 max-w-lg mx-auto">
                You have structured your EB-1A DIY process. Review your checklist below and ensure every item is double-checked before mailing your package.
            </p>

            <div className="bg-slate-900 text-slate-200 p-8 rounded-2xl text-left max-w-lg mx-auto shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                    <div className={clsx("w-3 h-3 rounded-full", formData.crit_awards ? "bg-green-400" : "bg-red-500")} />
                    <span>Eligibility Criteria Selected</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className={clsx("w-3 h-3 rounded-full", formData.doc_letters ? "bg-green-400" : "bg-red-500")} />
                    <span>Reference Letters Prepared</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className={clsx("w-3 h-3 rounded-full", formData.draft_letter ? "bg-green-400" : "bg-red-500")} />
                    <span>Petition Letter Drafted</span>
                </div>
                <div className="pt-4 border-t border-slate-700">
                    <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors" onClick={() => window.print()}>
                        <Printer size={20} /> Print Checklist
                    </button>
                </div>
            </div>
        </div>
    )
}
