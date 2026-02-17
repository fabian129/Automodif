"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string;
        details?: string[];
        icon?: any;
        longDescription?: string;
    } | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && service && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-[#121214] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative flex flex-col max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header Image/Icon Section */}
                            <div className="relative h-48 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center border-b border-white/5 shrink-0">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0052CC]/10 border border-[#0052CC]/20 flex items-center justify-center text-[#0052CC] shadow-[0_0_30px_-5px_rgba(0,82,204,0.3)]">
                                        {service.icon && <service.icon className="w-8 h-8" strokeWidth={1.5} />}
                                    </div>
                                    <h3 className="text-3xl font-medium text-white tracking-tight text-center px-6">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-8 overflow-y-auto custom-scrollbar">
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                                        {service.longDescription || service.description}
                                    </p>

                                    {service.details && service.details.length > 0 && (
                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5 mb-8">
                                            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
                                                Vad som ingår
                                            </h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {service.details.map((detail, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="p-6 border-t border-white/10 bg-zinc-900/50 flex flex-col md:flex-row gap-4 shrink-0">
                                <Link
                                    href="#contact"
                                    onClick={onClose}
                                    className="flex-1 bg-white text-black py-3.5 rounded-xl font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Boka denna tjänst
                                </Link>
                                <Link
                                    href="#contact"
                                    onClick={onClose}
                                    className="flex-1 bg-transparent border border-white/10 text-white py-3.5 rounded-xl font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                                >
                                    Få Offert
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
