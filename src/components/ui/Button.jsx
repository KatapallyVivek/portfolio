import { classNames } from '../../utils/classNames';
import { FiArrowRight } from 'react-icons/fi';

export default function Button({ children, variant = 'primary', className = '', href, as, showArrow = false, ...props }) {
  const baseStyles = 'group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0';
  
  const variants = {
    primary: 'bg-white text-black border border-transparent hover:border-white/80 hover:shadow-white/10 hover:bg-white/95',
    secondary: 'bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-white/40 hover:shadow-white/5',
  };

  const Component = as || (href ? 'a' : 'button');

  return (
    <Component 
      href={href}
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
      {showArrow && (
        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Component>
  );
}
