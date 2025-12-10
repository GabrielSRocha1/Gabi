import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 font-display font-bold uppercase tracking-wider text-sm transition-all duration-200 clip-path-button group active:scale-95";
  
  const variants = {
    primary: "bg-val-red text-white hover:bg-val-red/90",
    secondary: "bg-gabi-pink text-white hover:bg-gabi-pink/90",
    outline: "border-2 border-val-light/30 text-val-light hover:border-val-red hover:text-val-red bg-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Decorative corners for that tech feel */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-50 transition-opacity group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-black opacity-20"></div>
    </button>
  );
};