import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from "lucide-react";

const ButtonWithIcon = ({ children, className = "", onClick, outline = false, to, ...props }) => {
  const buttonClassName = `relative text-[15px] font-bold rounded-full h-[60px] p-1 ps-9 pe-[72px] group transition-all duration-500 hover:ps-[72px] hover:pe-9 w-full sm:w-fit overflow-hidden cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center no-underline ${className}`;
  const buttonStyle = outline
    ? { backgroundColor: 'transparent', color: 'var(--brand-navy)', border: '2px solid var(--brand-navy)' }
    : { backgroundColor: 'var(--accent-orange)', color: '#fff', border: 'none' };

  const content = (
    <>
      <span className="relative z-10 transition-all duration-500">
        {children}
      </span>
      <div
        className="absolute right-1 w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-60px)] group-hover:rotate-45"
        style={
          outline
            ? { backgroundColor: 'var(--brand-navy)', color: '#fff' }
            : { backgroundColor: '#fff', color: 'var(--accent-orange)' }
        }
      >
        <ArrowUpRight size={20} strokeWidth={2.5} />
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={buttonClassName} style={buttonStyle} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      style={buttonStyle}
      {...props}
    >
      {content}
    </button>
  );
};

export default ButtonWithIcon;
