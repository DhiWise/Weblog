import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder14: "rounded-radius14",
  CircleBorder20: "rounded-radius20",
  RoundedBorder5: "rounded-radius5",
};
const variants = {
  FillGray901: "bg-gray_901 text-bluegray_50",
  FillWhiteA700: "bg-white_A700 text-bluegray_901",
  OutlineBluegray50: "border border-bluegray_50 border-solid text-bluegray_50",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  lg: "lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder14",
    "CircleBorder20",
    "RoundedBorder5",
  ]),
  variant: PropTypes.oneOf([
    "FillGray901",
    "FillWhiteA700",
    "OutlineBluegray50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder20",
  variant: "FillGray901",
  size: "md",
};

export { Button };
