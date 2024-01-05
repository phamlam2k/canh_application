import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[24px]",
} as const;
const variants = {
  gradient: {
    blue_A200_deep_purple_A200_03: "bg-gradient1 ",
    blue_400_deep_purple_A200: "bg-gradient  text-white-A700",
  },
  outline: {
    indigo_A400_deep_purple_A200_02:
      "border-b-4 border-solid indigo_A400_deep_purple_A200_02_border",
    blue_400_deep_purple_A200:
      "blue_400_deep_purple_A200_border border-2 border-solid",
  },
  fill: {
    indigo_A400_19: "bg-indigo-A400_19 text-indigo-A400_01",
    white_A700: "bg-white-A700 shadow-bs text-gray-900",
    blue_gray_800: "bg-blue_gray-800 shadow-bs text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-2",
  sm: "p-[13px]",
  md: "p-[17px]",
  lg: "p-[21px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
