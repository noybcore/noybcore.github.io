import { motion, type Variants, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import Button from '../../components/buttons/Button';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    time: string;
}

const fadeInUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20, // Reduced from 30 for subtler effect
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6, // Slightly faster
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Faster stagger
        },
    },
};

export default function Contact() {
    const [loading, setLoading] = useState<boolean>(false);
    const { t } = useTranslation();

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        time: new Date().toLocaleString(),
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            toast.error(t('contact.validation.name_required')); // Just a generic error fallback or specific check
            return;
        }

        setLoading(true);
        const loadingToast = toast.loading(t('contact.toasts.loading'));

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target as HTMLFormElement,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success(t('contact.toasts.success'), {
                id: loadingToast,
                duration: 5000,
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                time: new Date().toLocaleString(),
            });
        } catch (error) {
            console.error('FAILED...', error);
            toast.error(t('contact.toasts.error'), {
                id: loadingToast,
                duration: 5000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <MotionConfig reducedMotion="user">
            <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-12">
                <Toaster
                    position="bottom-center"
                    toastOptions={{
                        style: {
                            background: '#1F2937', // Gray-800
                            color: '#fff',
                            border: '1px solid #374151', // Gray-700
                        },
                        success: {
                            iconTheme: {
                                primary: '#6366f1', // Indigo-500
                                secondary: '#fff',
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: '#ef4444', // Red-500
                                secondary: '#fff',
                            },
                        },
                    }}
                />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-xl w-full text-center space-y-8 md:space-y-10" // Tighter spacing
                >
                    {/* Header Section */}
                    <div className="space-y-3">
                        <motion.h1
                            variants={fadeInUpVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
                        >
                            {t('contact.hero.title')}
                        </motion.h1>

                        <motion.p
                            variants={fadeInUpVariants}
                            className="text-lg sm:text-xl text-gray-300 font-light"
                        >
                            {t('contact.hero.subtitle')}
                        </motion.p>
                    </div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={staggerContainer}
                        className="space-y-5 text-left bg-gray-900/40 p-6 sm:p-8 rounded-2xl border border-white/5 backdrop-blur-sm"
                    >
                        {/* Name */}
                        <motion.div variants={fadeInUpVariants}>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-400 mb-1.5"
                            >
                                {t('contact.form.name')}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder={t('contact.form.name_placeholder')}
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={fadeInUpVariants}>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400 mb-1.5"
                            >
                                {t('contact.form.email')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder={t(
                                    'contact.form.email_placeholder'
                                )}
                            />
                        </motion.div>

                        {/* Subject */}
                        <motion.div variants={fadeInUpVariants}>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-400 mb-1.5"
                            >
                                {t('contact.form.subject')}
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder={t(
                                    'contact.form.subject_placeholder'
                                )}
                            />
                        </motion.div>

                        {/* Message */}
                        <motion.div variants={fadeInUpVariants}>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-400 mb-1.5"
                            >
                                {t('contact.form.message')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2.5 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                                placeholder={t(
                                    'contact.form.message_placeholder'
                                )}
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full justify-center" // Full width button
                                disabled={loading}
                                icon={
                                    loading ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    ) : (
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
                                    )
                                }
                            >
                                {loading
                                    ? t('contact.toasts.loading')
                                    : t('contact.submit')}
                            </Button>
                        </div>
                    </motion.form>

                    {/* Alternative contact */}
                    <motion.p
                        variants={fadeInUpVariants}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 text-sm"
                    >
                        {t('contact.email_alt')}{' '}
                        <a
                            href="mailto:hi@noybcore.com"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                        >
                            noybcore@gmail.com
                        </a>
                    </motion.p>
                </motion.div>
            </div>
        </MotionConfig>
    );
}
