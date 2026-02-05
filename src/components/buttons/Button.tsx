import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
        scale: 1.05,
        boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.4)',
    },
    tap: { scale: 0.96 },
};

interface ButtonProps {
    children: ReactNode;
    to?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    icon?: ReactNode;
    delay?: number;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    children,
    to,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    icon,
    delay = 0,
    type = 'button',
    ...props
}: ButtonProps) {
    const navigate = useNavigate();

    const baseStyles = `
    inline-flex items-center justify-center 
    font-semibold tracking-wide transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900
    rounded-full shadow-lg cursor-pointer
  `;

    const sizeStyles = {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-7 py-3.5 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    // Variant styles
    const variantStyles = {
        primary: `
      text-white 
      bg-gradient-to-r from-blue-600 to-indigo-600 
      hover:from-blue-700 hover:to-indigo-700 
      focus:ring-blue-500/40
      shadow-blue-900/30 hover:shadow-blue-700/50
    `,
        secondary: `
      text-white 
      bg-gradient-to-r from-gray-700 to-gray-900 
      hover:from-gray-800 hover:to-black 
      focus:ring-gray-500/40
    `,
        outline: `
      text-indigo-400 border-2 border-indigo-500/60 
      hover:bg-indigo-500/10 hover:text-indigo-300 
      focus:ring-indigo-500/30
      bg-transparent shadow-none
    `,
        ghost: `
      text-gray-300 hover:text-white 
      bg-transparent hover:bg-white/10 
      shadow-none focus:ring-gray-500/30
    `,
    };

    const handleClick = () => {
        if (disabled) return;
        if (to) {
            navigate(to);
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ delay, duration: 0.6, ease: 'easeOut' }}
            className="inline-block"
        >
            <motion.button
                type={type}
                variants={buttonVariants}
                whileHover={disabled ? undefined : 'hover'}
                whileTap={disabled ? undefined : 'tap'}
                disabled={disabled}
                onClick={handleClick}
                className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
                {...props}
            >
                {children}
                {icon && <span className="ml-2.5">{icon}</span>}
            </motion.button>
        </motion.div>
    );
}
