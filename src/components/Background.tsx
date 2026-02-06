// src/components/Background.tsx
export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[length:300%_300%] bg-linear-to-br from-bg-dark via-[#1e1e3a] to-[#2a2a4a] animate-[shift_4s_ease-in-out_infinite]" />
    );
}
