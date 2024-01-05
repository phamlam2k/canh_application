import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const PricingplansPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-start pb-[136px] w-auto md:w-full">
          <div className="sm:h-[1042px] h-[1229px] md:h-[1990px] md:px-5 relative w-full">
            <div className="absolute bg-gradient4  md:h-[707px] h-[896px] inset-x-[0] mx-auto pt-[22px] top-[0] w-full">
              <div className="md:h-[707px] h-[874px] m-auto w-full">
                <div className="absolute bottom-[0] h-[707px] inset-x-[0] mx-auto w-full">
                  <div className="absolute bottom-[0] h-[614px] inset-x-[0] mx-auto w-full">
                    <Img
                      className="absolute bottom-[0] h-[532px] object-cover right-[0] w-[55%]"
                      src="images/img_ellipse13.png"
                      alt="ellipseThirteen"
                    />
                    <Img
                      className="absolute h-[614px] inset-y-[0] left-[0] my-auto object-cover rotate-[-11deg] w-[68%]"
                      src="images/img_ellipse14.png"
                      alt="ellipseFourteen"
                    />
                  </div>
                  <Img
                    className="absolute h-[707px] inset-y-[0] left-[0] my-auto object-cover"
                    src="images/img_vector11.png"
                    alt="vectorEleven"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[296px] inset-x-[0] mx-auto object-cover md:w-full"
                  src="images/img_vector10.png"
                  alt="vectorTen"
                />
                <Img
                  className="absolute h-[530px] left-[0] object-cover top-[0] w-[19%]"
                  src="images/img_ellipse15.png"
                  alt="ellipseFifteen"
                />
              </div>
              <header className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto top-[2%] w-full">
                <div className="flex flex-1 sm:flex-col flex-row font-roboto sm:gap-10 gap-56 items-center justify-start max-w-[888px] w-full">
                  <Img
                    className="sm:flex-1 h-[35px] md:h-auto object-cover w-[138px] sm:w-full"
                    src="images/img_logo_blue_gray_900_01.png"
                    alt="logo"
                  />
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-12 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                      <Text
                        className="text-base text-blue_gray-900_01 tracking-[0.50px] w-auto"
                        size="txtRobotoMedium16Bluegray90001"
                      >
                        Smart skills
                      </Text>
                    </div>
                    <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                      <Text
                        className="text-base text-blue_gray-900_01 tracking-[0.50px] w-auto"
                        size="txtRobotoMedium16Bluegray90001"
                      >
                        Solutions
                      </Text>
                    </div>
                    <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                      <Text
                        className="text-base text-blue_gray-900_01 tracking-[0.50px] w-auto"
                        size="txtRobotoMedium16Bluegray90001"
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
            </div>
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-20 inset-x-[0] items-center justify-start mx-auto w-auto">
              <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                <Text
                  className="leading-[72.00px] md:text-5xl text-[64px] text-black-900_02 text-center tracking-[-1.28px]"
                  size="txtPoppinsSemiBold64"
                >
                  <>
                    Pricing plans <br />
                    for teams of all sizes
                  </>
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[695px] md:max-w-full text-blue_gray-900 text-center text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Bluegray900"
                >
                  Nisi nulla minim deserunt adipisicing est consectetur sint
                  labore commodo tempor tempor nisi. Deserunt tempor laboris
                  aute labore.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row font-sfprotext md:gap-5 items-center justify-evenly w-full">
                <div className="flex sm:flex-1 flex-col items-start justify-start shadow-bs3 w-auto sm:w-full">
                  <div className="bg-white-A700 border-b border-black-900_19 border-solid flex flex-col gap-[5px] items-center justify-center px-10 sm:px-5 py-8 rounded-tl-[12px] w-[381px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_02 w-auto"
                      size="txtSFProTextMedium32"
                    >
                      Basic
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_02 w-auto"
                        size="txtSFProTextHeavy48"
                      >
                        $19
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                        size="txtSFProTextMedium24"
                      >
                        /month
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100_02 flex flex-col gap-10 items-start justify-start p-8 sm:px-5 rounded-bl-[12px] w-[381px] sm:w-full">
                    <div className="flex flex-col font-poppins gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_check.svg"
                          alt="check"
                        />
                        <Text
                          className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                          size="txtPoppinsRegular20Gray700"
                        >
                          Consequat ex proident
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_check.svg"
                          alt="check_One"
                        />
                        <Text
                          className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                          size="txtPoppinsRegular20Gray700"
                        >
                          Deserunt sit cupidatat
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_check.svg"
                          alt="check_Two"
                        />
                        <Text
                          className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                          size="txtPoppinsRegular20Gray700"
                        >
                          Amet id ea et nisi cillum{" "}
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="border border-indigo-A400_01 border-solid cursor-pointer font-medium font-sfprotext rounded-lg text-center text-xl w-full"
                      color="indigo_A400_19"
                      size="md"
                      variant="fill"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-[730px] sm:h-[783px] justify-end relative rounded-[12px] shadow-bs3 w-[42%] md:w-full">
                  <div className="border border-black-900_01 border-solid flex flex-col h-full items-center justify-start mt-auto mx-auto w-[550px] sm:w-full">
                    <div className="bg-white-A700 border-b border-black-900_19 border-solid flex flex-col gap-[7px] items-center justify-start px-10 sm:px-5 py-8 w-[550px] sm:w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_02 w-auto"
                        size="txtSFProTextBold40"
                      >
                        Essential
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="md:text-5xl text-[80px] text-blue_gray-900_02 w-auto"
                          size="txtSFProTextHeavy80"
                        >
                          $59
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-700 w-auto"
                          size="txtSFProTextMedium32Gray700"
                        >
                          /month
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100_02 flex flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-bl-[12px] rounded-br-[12px] w-[550px] sm:w-full">
                      <div className="flex flex-col font-poppins gap-4 items-start justify-start w-full">
                        <div className="flex flex-row gap-4 items-center justify-start w-[510px] sm:w-full">
                          <Img
                            className="h-8 w-8"
                            src="images/img_check.svg"
                            alt="check_Three"
                          />
                          <Text
                            className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                            size="txtPoppinsRegular20Gray700"
                          >
                            Consequat ex proident
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[510px] sm:w-full">
                          <Img
                            className="h-8 w-8"
                            src="images/img_check.svg"
                            alt="check_Four"
                          />
                          <Text
                            className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                            size="txtPoppinsRegular20Gray700"
                          >
                            Deserunt sit cupidatat adipisicing
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[510px] sm:w-full">
                          <Img
                            className="h-8 w-8"
                            src="images/img_check.svg"
                            alt="check_Five"
                          />
                          <Text
                            className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                            size="txtPoppinsRegular20Gray700"
                          >
                            Amet id ea et nisi cillum consectetur
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-start w-[510px] sm:w-full">
                          <Img
                            className="h-8 w-8"
                            src="images/img_check.svg"
                            alt="check_Six"
                          />
                          <Text
                            className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                            size="txtPoppinsRegular20Gray700"
                          >
                            Excepteur nisi eiusmod proident
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[510px] sm:w-full">
                          <Img
                            className="h-8 w-8"
                            src="images/img_check.svg"
                            alt="check_Seven"
                          />
                          <Text
                            className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                            size="txtPoppinsRegular20Gray700"
                          >
                            Magna eu anim commodo qui nisif
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-sfprotext rounded-lg text-center text-xl w-full"
                        size="md"
                        variant="gradient"
                        color="blue_400_deep_purple_A200"
                      >
                        Get started
                      </Button>
                    </div>
                  </div>
                  <div className="absolute blue_200_deep_purple_A100_border7 border-b-4 border-solid border-t-[80px] border-x-4 flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded-[12px] w-full">
                    <div className="flex flex-row gap-2 items-center justify-start mb-[654px] w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtSFProTextSemibold24"
                      >
                        Most popular
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_frame84.svg"
                        alt="frameEightyFour"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col items-start justify-start shadow-bs4 w-auto sm:w-full">
                  <div className="bg-white-A700 border-b border-black-900_19 border-solid flex flex-col gap-[5px] items-center justify-center px-10 sm:px-5 py-8 rounded-tr-[12px] w-[381px] sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_02 w-auto"
                      size="txtSFProTextMedium32"
                    >
                      Premium
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_02 w-auto"
                        size="txtSFProTextHeavy48"
                      >
                        $119
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                        size="txtSFProTextMedium24"
                      >
                        /month
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100_02 flex flex-col gap-10 items-start justify-start p-8 sm:px-5 rounded-br-[12px] w-[381px] sm:w-full">
                    <div className="flex flex-col font-poppins gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_check.svg"
                          alt="check_Eight"
                        />
                        <Text
                          className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                          size="txtPoppinsRegular20Gray700"
                        >
                          Consequat ex proident
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_check.svg"
                          alt="check_Nine"
                        />
                        <Text
                          className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                          size="txtPoppinsRegular20Gray700"
                        >
                          Deserunt sit cupidatat
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_check.svg"
                          alt="check_Ten"
                        />
                        <Text
                          className="text-gray-700 text-xl tracking-[-0.20px] w-auto"
                          size="txtPoppinsRegular20Gray700"
                        >
                          Amet id ea et nisi cillum{" "}
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="border border-indigo-A400_01 border-solid cursor-pointer font-medium font-sfprotext rounded-lg text-center text-xl w-full"
                      color="indigo_A400_19"
                      size="md"
                      variant="fill"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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

export default PricingplansPage;
