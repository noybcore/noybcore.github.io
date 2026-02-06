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

export default function Services() {
    const { t } = useTranslation();
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
                        {t('services.hero.title')}
                    </motion.h1>

                    {/* Intro line */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('services.intro')}
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
                                {t('services.items.flutter.title')}
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {t('services.items.flutter.desc')}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {t('services.items.web.title')}
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {t('services.items.web.desc')}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {t('services.items.mvp.title')}
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {t('services.items.mvp.desc')}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {t('services.items.backend.title')}
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {t('services.items.backend.desc')}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 text-left sm:col-span-2 lg:col-span-1"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {t('services.items.maintenance.title')}
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {t('services.items.maintenance.desc')}
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
                            {t('services.cta.text')}
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
                            {t('services.cta.button')}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </MotionConfig>
    );
}
