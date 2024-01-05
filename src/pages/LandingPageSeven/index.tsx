import React from "react";

import { Button, Img, Input, List, Text, TextArea } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LandingPageSevenPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-20 md:px-5 py-6 w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[136px] items-start justify-start md:px-10 px-40 sm:px-5 py-[136px] w-full">
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="md:text-5xl text-[64px] text-black-900_02 tracking-[-1.28px] w-full"
                  size="txtPoppinsSemiBold64"
                >
                  Contact sale
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[400px] md:max-w-full text-blue_gray-900 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Bluegray900"
                >
                  Get dedicated support to make CxGPT work for you.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_check.svg"
                  alt="check"
                />
                <Text
                  className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                  size="txtPoppinsRegular20Gray700"
                >
                  Book a customized demo of CxGPT
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_check.svg"
                  alt="check_One"
                />
                <Text
                  className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                  size="txtPoppinsRegular20Gray700"
                >
                  Discuss pricing plans for your team
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_check.svg"
                  alt="check_Two"
                />
                <Text
                  className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                  size="txtPoppinsRegular20Gray700"
                >
                  Learn best practice of your industry
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_check.svg"
                  alt="check_Three"
                />
                <Text
                  className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                  size="txtPoppinsRegular20Gray700"
                >
                  Migrate to CxGPT from your existing tools
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="leading-[32.00px] text-gray-700 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Gray700"
                >
                  <span className="text-gray-700 font-poppins text-left font-normal">
                    <>
                      <br />
                      Looking for product or customer support? Visit
                    </>
                  </span>
                  <span className="text-blue-400 font-poppins text-left font-normal">
                     
                  </span>
                  <a
                    href="javascript:"
                    className="text-blue-400 font-poppins text-left font-normal underline"
                  >
                    Help Center
                  </a>
                  <span className="text-blue-400 font-poppins text-left font-normal">
                    <>
                      .<br />
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-9 items-start justify-start w-full">
            <div className="flex flex-col gap-2.5 h-20 md:h-auto items-center justify-center w-auto">
              <Text
                className="bg-clip-text bg-gradient  text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                size="txtPoppinsSemiBold30"
              >
                Get in touch
              </Text>
              <Text
                className="text-black-900_01 text-lg"
                size="txtPoppinsRegular18"
              >
                We are here for you! How can we help?
              </Text>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <div className="flex flex-col gap-3 h-[100px] md:h-auto items-center justify-center w-full">
                <Text
                  className="text-base text-black-900_01"
                  size="txtPoppinsRegular16Black90001"
                >
                  Name
                </Text>
                <Input
                  name="rectangleOne"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-transparent flex h-[50px] w-full"
                  shape="round"
                  color="blue_200_deep_purple_A100"
                ></Input>
              </div>
              <div className="flex flex-col gap-[13px] h-[100px] md:h-auto items-center justify-center w-full">
                <Text
                  className="text-base text-black-900_01"
                  size="txtPoppinsRegular16Black90001"
                >
                  Email
                </Text>
                <Input
                  name="rectangleOne_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-transparent flex h-[50px] w-full"
                  shape="round"
                  color="blue_200_deep_purple_A100"
                ></Input>
              </div>
              <div className="flex flex-col gap-[13px] h-[150px] md:h-auto items-center justify-center w-full">
                <Text
                  className="text-base text-black-900_01 w-full"
                  size="txtPoppinsRegular16Black90001"
                >
                  Message
                </Text>
                <TextArea
                  className="bg-transparent blue_200_deep_purple_A100_border8 border-2 border-solid rounded-[10px] shadow-bs1 w-full"
                  name="rectangleTwo"
                  placeholder=""
                ></TextArea>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] rounded-[10px] shadow-bs5 text-center text-xl w-full"
              size="md"
              variant="gradient"
              color="blue_400_deep_purple_A200"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="bg-gray-50_02 flex flex-col items-start justify-center md:px-10 px-16 sm:px-5 py-20 w-auto md:w-full">
          <div className="h-[476px] md:h-auto max-w-[1312px] mx-auto md:px-10 sm:px-5 py-16 relative w-full">
            <div className="bg-gradient  flex flex-col h-[316px] md:h-auto items-center justify-center m-auto p-16 md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-col gap-6 items-center justify-start max-w-3xl w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.40px] w-full"
                    size="txtPoppinsSemiBold40WhiteA700"
                  >
                    Try product for free
                  </Text>
                  <Text
                    className="text-center text-white-A700 text-xl tracking-[-0.20px] w-full"
                    size="txtPoppinsRegular20WhiteA700"
                  >
                    Ut aliquip anim laboris deserunt do cillum id amet aute
                    veniam do do.
                  </Text>
                </div>
                <div className="flex flex-col font-sfprotext items-start justify-start pt-4 w-auto">
                  <div className="bg-white-A700_33 border border-solid border-white-A700 flex flex-col items-center justify-center sm:px-5 px-6 py-2.5 rounded-[22px] w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtSFProTextMedium16"
                    >
                      Get demo
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-solid border-white-A700_4c h-[476px] inset-[0] justify-center m-auto rounded-[361px] w-[56%]"></div>
            <div className="absolute border border-solid border-white-A700_4c h-[476px] inset-[0] justify-center m-auto rounded-[447px] w-[69%]"></div>
          </div>
        </div>
        <div className="bg-gray-50 flex md:flex-col flex-row font-dmsans md:gap-10 items-start justify-between p-[54px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start mb-8 md:ml-[0] ml-[65px] w-auto">
            <Img
              className="h-[49px] md:h-auto object-cover w-[195px] sm:w-full"
              src="images/img_logo.png"
              alt="logo_One"
            />
            <div className="flex flex-row gap-[47px] items-start justify-start w-auto">
              <Img
                className="h-7 md:h-auto object-cover w-7"
                src="images/img_riinstagramfill.png"
                alt="riinstagramfill"
              />
              <Img
                className="h-7 md:h-auto object-cover w-7"
                src="images/img_bitwitter.png"
                alt="bitwitter"
              />
              <Img
                className="h-7 md:h-auto object-cover w-7"
                src="images/img_icbaselinefacebook.png"
                alt="icbaselinefaceb"
              />
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[183px] text-base text-center"
              shape="round"
              size="sm"
              variant="gradient"
              color="blue_400_deep_purple_A200"
            >
              Contact Us
            </Button>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row font-poppins sm:gap-10 gap-[75px] items-start justify-start mr-[162px] md:mt-0 mt-[31px] w-auto sm:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[75px] grid grid-cols-2 w-[67%] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-12 items-start justify-start w-auto">
                <Text
                  className="text-black-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  Work With Us
                </Text>
                <Text
                  className="text-black-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  Advertise With Us
                </Text>
                <Text
                  className="text-black-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  Support Us
                </Text>
                <Text
                  className="text-black-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  Business Advices
                </Text>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-auto">
                <Text
                  className="text-black-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  Private Coaching
                </Text>
                <Text
                  className="text-black-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  Our Work
                </Text>
                <Text
                  className="text-black-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  Our Commitment
                </Text>
                <Text
                  className="text-black-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14"
                >
                  Our Team
                </Text>
              </div>
            </List>
            <div className="flex flex-col gap-12 items-start justify-start w-auto">
              <Text
                className="text-black-900_01 text-sm w-auto"
                size="txtPoppinsMedium14"
              >
                About Us
              </Text>
              <a
                href="javascript:"
                className="text-black-900_01 text-sm w-auto"
              >
                <Text size="txtPoppinsMedium14">FAQs</Text>
              </a>
              <Text
                className="text-black-900_01 text-sm w-auto"
                size="txtPoppinsMedium14"
              >
                Report a Bug
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-gradient  flex font-poppins items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LandingPageSevenPage;
