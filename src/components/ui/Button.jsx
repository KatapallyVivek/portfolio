import { classNames } from '../../utils/classNames';

export default function Button({ children, variant = 'primary', className = '', href, as, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-white text-black border border-transparent hover:bg-white/90',
    secondary: 'bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40',
  };

  const Component = as || (href ? 'a' : 'button');

  return (
    <Component 
      href={href}
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
