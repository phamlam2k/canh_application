import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold32Black90002: "font-poppins font-semibold",
  txtSFProTextMedium24: "font-medium font-sfprotext",
  txtPoppinsRegular16Black90001: "font-normal font-poppins",
  txtSFProTextHeavy48: "font-extrabold font-sfprotext",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular16Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular20Bluegray900: "font-normal font-poppins",
  txtRobotoRomanExtraBold36: "font-extrabold font-roboto",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtRobotoRomanExtraBold56: "font-extrabold font-roboto",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular16Bluegray40001: "font-normal font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsRegular20Bluegray20001: "font-normal font-poppins",
  txtPoppinsSemiBold56: "font-poppins font-semibold",
  txtSFProTextHeavy80: "font-extrabold font-sfprotext",
  txtRobotoMedium20: "font-medium font-roboto",
  txtPoppinsSemiBold24Bluegray400: "font-poppins font-semibold",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtRobotoRomanRegular20: "font-normal font-roboto",
  txtPoppinsSemiBold32Gray5001: "font-poppins font-semibold",
  txtRobotoRomanRegular24: "font-normal font-roboto",
  txtSFProTextBold40: "font-bold font-sfprotext",
  txtDMSansBold16: "font-bold font-dmsans",
  txtSFProTextMedium32: "font-medium font-sfprotext",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtRobotoRomanExtraBold56Gray5001: "font-extrabold font-roboto",
  txtPoppinsRegular16Gray5001: "font-normal font-poppins",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsSemiBold64: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtRobotoMedium16Bluegray90001: "font-medium font-roboto",
  txtSFProTextSemibold24: "font-semibold font-sfprotext",
  txtPoppinsRegular20Gray700: "font-normal font-poppins",
  txtSFProTextMedium32Gray700: "font-medium font-sfprotext",
  txtInterRegular16: "font-inter font-normal",
  txtPoppinsSemiBold40WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular20Gray900: "font-normal font-poppins",
  txtRobotoMedium16: "font-medium font-roboto",
  txtSFProTextMedium16: "font-medium font-sfprotext",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
