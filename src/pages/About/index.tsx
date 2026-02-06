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

import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    return (
        <MotionConfig reducedMotion="user">
            <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
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
                        {t('about.hero.title')}
                    </motion.h1>

                    {/* Intro paragraph */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('about.intro')}
                    </motion.p>

                    {/* Core description */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('about.description')}
                    </motion.p>

                    {/* Key strengths */}
                    <motion.ul
                        variants={staggerContainer}
                        className="grid gap-5 sm:gap-6 sm:grid-cols-2 text-left max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed"
                    >
                        <motion.li
                            variants={fadeInUpVariants}
                            className="flex items-start gap-4"
                        >
                            <span className="text-indigo-400 text-2xl">•</span>
                            <span>Cross-platform excellence with Flutter</span>
                        </motion.li>
                        <motion.li
                            variants={fadeInUpVariants}
                            className="flex items-start gap-4"
                        >
                            <span className="text-indigo-400 text-2xl">•</span>
                            <span>Ship fast — weeks, not months</span>
                        </motion.li>
                        <motion.li
                            variants={fadeInUpVariants}
                            className="flex items-start gap-4"
                        >
                            <span className="text-indigo-400 text-2xl">•</span>
                            <span>You own the code — zero lock-in</span>
                        </motion.li>
                        <motion.li
                            variants={fadeInUpVariants}
                            className="flex items-start gap-4"
                        >
                            <span className="text-indigo-400 text-2xl">•</span>
                            <span>Long-term partner — we grow with you</span>
                        </motion.li>
                    </motion.ul>

                    {/* Closing + CTA */}
                    <motion.div
                        variants={fadeInUpVariants}
                        transition={{ delay: 0.6 }}
                        className="pt-8 md:pt-12 pb-8 md:pb-12"
                    >
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10">
                            {t('about.cta.text')}
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
                            {t('about.cta.button')}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </MotionConfig>
    );
}
