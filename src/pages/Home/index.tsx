'use client';

import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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

import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="max-w-4xl w-full text-center space-y-10 py-16">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
                >
                    {t('home.hero.title')}
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl text-gray-300 font-light tracking-wide"
                >
                    {t('home.hero.subtitle')}
                </motion.p>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ delay: 0.4 }}
                    className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    {t('home.hero.description')}
                </motion.p>

                <Button
                    to="/contact"
                    variant="primary"
                    size="lg"
                    delay={0.7}
                    onClick={() => navigate('/contact')}
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
                    {t('home.hero.cta')}
                </Button>
            </div>
        </div>
    );
}
