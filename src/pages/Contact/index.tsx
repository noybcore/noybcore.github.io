'use client';

import { motion, type Variants, MotionConfig } from 'framer-motion';
import { useState } from 'react';
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

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic to be added later (e.g. API call)
        console.log('Form submitted:', formData);
        // Optionally reset form or show success message
    };

    return (
        <MotionConfig reducedMotion="user">
            <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-2xl w-full text-center space-y-10 md:space-y-16"
                >
                    {/* Headline */}
                    <motion.h1
                        variants={fadeInUpVariants}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
                    >
                        Get in touch.
                    </motion.h1>

                    {/* Short line */}
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-xl sm:text-2xl text-gray-300 font-light"
                    >
                        We reply fast.
                    </motion.p>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={staggerContainer}
                        className="space-y-8 mt-10 md:mt-12"
                    >
                        {/* Name */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="text-left"
                        >
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="Your name"
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="text-left"
                        >
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="you@example.com"
                            />
                        </motion.div>

                        {/* Subject */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="text-left"
                        >
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                placeholder="What's this about?"
                            />
                        </motion.div>

                        {/* Message */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="text-left"
                        >
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            delay={0.7}
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
                            Send Message
                        </Button>
                    </motion.form>

                    {/* Alternative contact */}
                    <motion.p
                        variants={fadeInUpVariants}
                        transition={{ delay: 0.6 }}
                        className="text-gray-500 text-sm mt-10"
                    >
                        Or just email us at{' '}
                        <a
                            href="mailto:hi@noybcore.com"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            noybcore@gmail.com
                        </a>
                    </motion.p>
                </motion.div>
            </div>
        </MotionConfig>
    );
}
