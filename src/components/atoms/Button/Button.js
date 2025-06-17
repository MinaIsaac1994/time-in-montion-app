import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center font-medium focus:outline-none transition-colors duration-200 rounded-md";

const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  base: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const variantStyles = {
  primary:
    "bg-nhs-blue text-white hover:bg-blue-700 focus:ring-2 focus:ring-nhs-blue",
  secondary:
    "bg-nhs-paleGrey text-nhs-darkGrey hover:bg-gray-300 focus:ring-2 focus:ring-nhs-blue",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500",
  ghost:
    "bg-transparent text-nhs-blue hover:bg-nhs-lightBlue/10 focus:ring-2 focus:ring-nhs-blue",
};

const Button = ({
  children,
  variant = "primary",
  size = "base",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled && "opacity-50 cursor-not-allowed"
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "ghost"]),
  size: PropTypes.oneOf(["sm", "base", "lg"]),
  disabled: PropTypes.bool,
};

export default Button;
