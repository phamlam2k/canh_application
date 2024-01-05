import React from "react";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-10 gap-56 items-center justify-start max-w-[888px] w-full">
          <Img
            className="sm:flex-1 h-[35px] md:h-auto object-cover w-[138px] sm:w-full"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-12 items-center justify-start w-auto sm:w-full">
            <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
              <Text
                className="text-base text-gray-900 tracking-[0.50px] w-auto"
                size="txtRobotoMedium16"
              >
                Smart skills
              </Text>
            </div>
            <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
              <Text
                className="text-base text-gray-900 tracking-[0.50px] w-auto"
                size="txtRobotoMedium16"
              >
                Solutions
              </Text>
            </div>
            <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
              <Text
                className="text-base text-gray-900 tracking-[0.50px] w-auto"
                size="txtRobotoMedium16"
              >
                Pricing Plan
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="!text-blue-400 bg-transparent cursor-pointer font-bold font-dmsans min-w-[144px] rounded-[20px] text-center text-sm"
          size="xs"
          variant="outline"
          color="blue_400_deep_purple_A200"
        >
          Book a demo
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
