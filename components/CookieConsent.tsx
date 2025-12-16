'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('visa-cookie-consent');
        if (!consent) {
            // Show after a small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('visa-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('visa-cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-slate-200 shadow-2xl"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="font-bold text-slate-800 text-lg mb-1">We value your privacy 🍪</h3>
                            <p className="text-slate-600 text-sm">
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                By clicking "Accept All", you consent to our use of cookies.
                                Read our <a href="/legal/privacy" className="text-blue-600 underline hover:text-blue-700">Privacy Policy</a>.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleDecline}
                                className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors font-medium text-sm whitespace-nowrap"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium text-sm whitespace-nowrap shadow-md hover:shadow-lg"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
