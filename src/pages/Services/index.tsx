'use client';

import { motion, type Variants, MotionConfig } from 'framer-motion';
import Button from '../../components/buttons/Button';

const fadeInUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Services() {
    return (
        <MotionConfig reducedMotion="user">
            <div className="min-h-screen flex items-center justify-center px-4 py-4 sm:py-8 md:py-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl w-full text-center space-y-10 md:space-y-16 lg:space-y-20"
                >
                    {/* Headline */}
                    <motion.h1
                        variants={fadeInUpVariants}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
                    >
                        What we build.
                    </motion.h1>

                    {/* Intro line */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
                    >
                        Focused, high-quality development — no bloat, no
                        excuses.
                    </motion.p>

                    {/* Services grid */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto pt-6 md:pt-10"
                    >
                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                Cross-platform Flutter apps
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Single codebase, native performance — iOS,
                                Android, web, desktop.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                Modern web applications
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Fast, responsive, scalable — built for real
                                users and real traffic.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                MVP builds
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Ship fast, validate early — clean code that can
                                actually grow.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                Backend & infrastructure
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Reliable APIs, databases, auth, scaling — only
                                what you actually need.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left sm:col-span-2 lg:col-span-1"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                Product maintenance & growth
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Fix, iterate, scale — long-term partner when the
                                product is live.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={fadeInUpVariants}
                        transition={{ delay: 0.6 }}
                        className="pt-8 md:pt-12 pb-8 md:pb-12"
                    >
                        <p className="text-xl sm:text-2xl text-gray-300 mb-8 md:mb-10">
                            Pick what you need. Let’s talk.
                        </p>

                        <Button
                            to="/contact"
                            variant="primary"
                            size="lg"
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            }
                        >
                            Get in Touch
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </MotionConfig>
    );
}
