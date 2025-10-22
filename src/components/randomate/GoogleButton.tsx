import React from 'react';

interface GoogleButtonProps {
  onClick: () => void;
  text: string;
}

export function GoogleButton({ onClick, text }: GoogleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 rounded-xl border-2 border-neutral-300 bg-white hover:bg-neutral-50 active:bg-neutral-100 transition-all flex items-center justify-center gap-3"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8055 10.2292C19.8055 9.55056 19.7501 8.86667 19.6305 8.19861H10.2001V12.0486H15.6014C15.3773 13.2911 14.6571 14.3898 13.6028 15.0875V17.5861H16.8251C18.7173 15.8444 19.8055 13.2722 19.8055 10.2292Z" fill="#4285F4"/>
        <path d="M10.2001 20.0003C12.9528 20.0003 15.2694 19.1047 16.8296 17.5864L13.6073 15.0878C12.7078 15.6975 11.5518 16.0431 10.2046 16.0431C7.54452 16.0431 5.29081 14.283 4.50356 11.917H1.18311V14.4923C2.78359 17.6794 6.33143 20.0003 10.2001 20.0003Z" fill="#34A853"/>
        <path d="M4.49908 11.917C4.08124 10.6745 4.08124 9.3312 4.49908 8.08866V5.51334H1.18308C-0.202736 8.23534 -0.202736 11.7703 1.18308 14.4923L4.49908 11.917Z" fill="#FBBC04"/>
        <path d="M10.2001 3.95734C11.6239 3.93511 13.0018 4.47256 14.0383 5.45901L16.8924 2.60489C15.183 0.990561 12.9345 0.0972793 10.2001 0.123398C6.33143 0.123398 2.78359 2.44423 1.18311 5.63151L4.49911 8.20684C5.28191 5.83567 7.53997 3.95734 10.2001 3.95734Z" fill="#EA4335"/>
      </svg>
      <span className="text-neutral-700">{text}</span>
    </button>
  );
}
