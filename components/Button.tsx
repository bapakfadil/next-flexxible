import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: 'button' | 'submit';
  bgColor?: string;
  textColor?: string;
}

const Button = ({ title, leftIcon, rightIcon, handleClick, isSubmitting, type, bgColor, textColor }: Props) => {
  return (
    <button 
      type={type || 'button'}
      disabled={isSubmitting}
      // bgColor=""
      // textColor=""
      className={`flexCenter gap-3 px-4 py-3
        ${textColor || 'text-white'}
        ${isSubmitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple'}
        rounded-xl text-sm font-medium text-gray-100
      `}
      onClick={handleClick}
    >
      {leftIcon && 
        <Image 
          src={leftIcon} 
          width={14} 
          height={14} 
          alt="left"
        />
      }
      {title}
      {rightIcon && 
        <Image 
          src={rightIcon} 
          width={14} 
          height={14} 
          alt="right"
        />
      }
    </button>
  )
}

export default Button