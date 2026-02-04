// src/components/Background.tsx
export default function Background() {
    return (
        <div
            className="fixed inset-0 z-[-1] pointer-events-none"
            style={{
                background:
                    'linear-gradient(135deg, #0a0a1f 0%, #1e1e3a 50%, #2a2a4a 100%)',
                backgroundSize: '300% 300%',
                backgroundPosition: '0% 50%',
                backgroundRepeat: 'no-repeat',
                animation: 'shift 4s ease-in-out infinite',
            }}
        />
    );
}
