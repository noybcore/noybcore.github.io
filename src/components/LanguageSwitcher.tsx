import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'fr', label: 'FR' },
        { code: 'ar', label: 'AR' },
    ];

    return (
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`
                        text-sm font-semibold transition-colors
                        ${
                            i18n.language === lang.code
                                ? 'text-accent'
                                : 'text-text-muted hover:text-white'
                        }
                    `}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
