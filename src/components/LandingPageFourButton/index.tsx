import React from "react";

import { Img, Text } from "components";

type LandingPageFourButtonProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "buttontext"
> &
  Partial<{ buttontext: string }>;

const LandingPageFourButton: React.FC<LandingPageFourButtonProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center pr-4 w-auto">
          <Text
            className="text-deep_purple-A200_01 text-xl tracking-[0.50px] w-auto"
            size="txtRobotoMedium20"
          >
            {props?.buttontext}
          </Text>
        </div>
        <Img
          className="h-6 w-6"
          src="images/img_iconjamicons_blue_a700.svg"
          alt="iconjamicons_Three"
        />
      </div>
    </>
  );
};

LandingPageFourButton.defaultProps = { buttontext: "Explore Gen AI Web Q&A" };

export default LandingPageFourButton;
