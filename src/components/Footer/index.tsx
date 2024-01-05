import React from "react";

import { Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-[100px] mr-28 my-[49px] w-[86%]">
          <Text className="text-white-A700 text-xs" size="txtPoppinsRegular12">
            © 2022 Embrace, Inc. - All Rights Reserved
          </Text>
          <div className="flex flex-row gap-[125px] items-start justify-between w-auto">
            <Text
              className="text-white-A700 text-xs w-auto"
              size="txtPoppinsRegular12"
            >
              Terms of use{" "}
            </Text>
            <Text
              className="text-white-A700 text-xs w-auto"
              size="txtPoppinsRegular12"
            >
              Privacy policy{" "}
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
