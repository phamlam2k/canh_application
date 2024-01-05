import React from "react";

import { Img, Text } from "components";

type LandingPageThreeUserchatProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "messagetext"
> &
  Partial<{ messagetext: string }>;

const LandingPageThreeUserchat: React.FC<LandingPageThreeUserchatProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-deep_purple-A700 flex flex-col items-start justify-start px-4 py-3 rounded-[24px] w-auto sm:w-full">
          {!!props?.messagetext ? (
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtInterRegular16WhiteA700"
            >
              {props?.messagetext}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-col items-start justify-start py-[3px] w-auto">
          <Img
            className="md:h-auto rounded-[50%] w-10"
            src="images/img_contentimage.png"
            alt="contentimage_One"
          />
        </div>
      </div>
    </>
  );
};

LandingPageThreeUserchat.defaultProps = {};

export default LandingPageThreeUserchat;
