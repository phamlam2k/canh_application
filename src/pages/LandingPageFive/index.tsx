import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LandingPageFivePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-20 md:px-5 py-6 w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <div className="relative w-full">
            <Img
              className="absolute h-3 left-[0] max-h-3 top-[0]"
              src="images/img_vector14.svg"
              alt="vectorFourteen"
            />
            <div className="flex flex-1 flex-col gap-8 items-start justify-start m-auto relative w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[72.00px] max-w-[568px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.12px]"
                  size="txtPoppinsSemiBold56"
                >
                  Empower Your Support Journey Using Generative AI
                </Text>
              </div>
              <Text
                className="leading-[32.00px] max-w-[568px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                size="txtPoppinsRegular20Gray900"
              >
                Cx-GPT  Creates long-lasting connections with timely &
                personalized support.
              </Text>
              <div className="flex flex-col font-dmsans items-center justify-start w-auto">
                <Button
                  className="cursor-pointer font-bold rounded-[28px] text-base text-center w-56"
                  size="md"
                  variant="gradient"
                  color="blue_400_deep_purple_A200"
                >
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
          <div className="font-roboto h-[480px] sm:h-[863px] relative w-1/2 md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Img
                  className="h-[351px] sm:mt-0 mt-32"
                  src="images/img_teacher.svg"
                  alt="teacher"
                />
                <div className="flex flex-col gap-[33px] justify-start mb-[23px]">
                  <div className="md:h-[302px] h-[309px] md:ml-[0] ml-[13px] relative w-[95%]">
                    <Img
                      className="absolute bottom-[0] h-[275px] object-cover right-[2%]"
                      src="images/img_vector_275x206.png"
                      alt="vector"
                    />
                    <Img
                      className="absolute h-[302px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[56%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <Img
                        className="h-[71px] w-[71px]"
                        src="images/img_iconjamicons_gray_100_01.svg"
                        alt="iconjamicons"
                      />
                      <div className="flex flex-col gap-3.5 items-start justify-start">
                        <Img
                          className="h-[57px] md:ml-[0] ml-[3px] w-[57px]"
                          src="images/img_iconjamicons.svg"
                          alt="iconjamicons_One"
                        />
                        <Img
                          className="h-[42px] w-[42px]"
                          src="images/img_iconjamicons_blue_gray_100_01.svg"
                          alt="iconjamicons_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-4 h-[228px] md:h-auto inset-x-[0] items-start justify-start mx-auto top-[0] w-[235px]">
              <div className="bg-white-A700 flex flex-col items-end justify-center w-full">
                <Button
                  className="cursor-pointer min-w-[201px] rounded-bl-[15px] rounded-br-[3px] rounded-tl-[15px] rounded-tr-[15px] text-center text-lg"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Nunc, at libero neque
                </Button>
              </div>
              <div className="flex flex-col items-end justify-center w-full">
                <Button
                  className="cursor-pointer min-w-[122px] rounded-bl-[15px] rounded-br-[3px] rounded-tl-[15px] rounded-tr-[15px] text-center text-lg"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Viverra sed
                </Button>
              </div>
              <Button
                className="cursor-pointer min-w-[235px] rounded-bl-[3px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] text-center text-lg"
                color="blue_gray_800"
                size="sm"
                variant="fill"
              >
                Turpis platea nunc mattis
              </Button>
              <Button
                className="cursor-pointer min-w-[186px] rounded-bl-[3px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[15px] text-center text-lg"
                color="blue_gray_800"
                size="sm"
                variant="fill"
              >
                Vitae viverra ut non
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-roboto items-center justify-start w-auto md:w-full">
          <Img
            className="h-10 w-full"
            src="images/img_vector476.svg"
            alt="vector476"
          />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-black-900_02 flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1440px] py-[136px] w-full">
              <div className="flex flex-col gap-12 items-start justify-center md:px-10 px-40 sm:px-5 w-full">
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-50_01 w-full"
                  size="txtRobotoRomanExtraBold56Gray5001"
                >
                  Generic FAQs
                </Text>
                <List
                  className="sm:flex-col flex-row font-poppins gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1120px] mx-auto w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900_02 flex flex-1 flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[24px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Img
                            className="h-36 md:h-auto object-cover w-36"
                            src="images/img_svg.png"
                            alt="svg"
                          />
                          <Text
                            className="leading-[40.00px] max-w-[318px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50_01 tracking-[-0.32px]"
                            size="txtPoppinsSemiBold32Gray5001"
                          >
                            Knowledge Base Building
                          </Text>
                        </div>
                        <Text
                          className="leading-[32.00px] max-w-[318px] md:max-w-full text-blue_gray-200_01 text-center text-xl tracking-[-0.20px]"
                          size="txtPoppinsRegular20Bluegray20001"
                        >
                          Creates a dynamic knowledge base by assimilating
                          information from uploaded documents with various file
                          formats .
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="bg-white-A700_19 justify-center sm:px-5 px-[35px] py-[11px] rounded-[21px] text-center text-sm text-white-A700 tracking-[-0.16px] w-full"
                      size="txtPoppinsSemiBold14"
                    >
                      Learn more
                    </Text>
                  </div>
                  <div className="bg-gray-900_02 flex flex-1 flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[24px] w-full">
                    <div className="flex flex-col items-center justify-start pb-[41px] w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Img
                            className="h-36 md:h-auto object-cover w-36"
                            src="images/img_svg_144x144.png"
                            alt="svg"
                          />
                          <Text
                            className="leading-[40.00px] max-w-[318px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50_01 tracking-[-0.32px]"
                            size="txtPoppinsSemiBold32Gray5001"
                          >
                            Quick Response Time
                          </Text>
                        </div>
                        <Text
                          className="leading-[32.00px] max-w-[318px] md:max-w-full text-blue_gray-200_01 text-center text-xl tracking-[-0.20px]"
                          size="txtPoppinsRegular20Bluegray20001"
                        >
                          Reduces the need for customers to wait for answers to
                          common questions.
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="bg-white-A700_19 justify-center sm:px-5 px-[35px] py-[11px] rounded-[21px] text-center text-sm text-white-A700 tracking-[-0.16px] w-full"
                      size="txtPoppinsSemiBold14"
                    >
                      Learn more
                    </Text>
                  </div>
                  <div className="bg-gray-900_02 flex flex-1 flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[24px] w-full">
                    <div className="flex flex-col items-center justify-start pb-[41px] w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Img
                            className="h-36 md:h-auto object-cover w-36"
                            src="images/img_svg_1.png"
                            alt="svg"
                          />
                          <Text
                            className="leading-[40.00px] max-w-[318px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50_01 tracking-[-0.32px]"
                            size="txtPoppinsSemiBold32Gray5001"
                          >
                            Continuous Learning
                          </Text>
                        </div>
                        <Text
                          className="leading-[32.00px] max-w-[318px] md:max-w-full text-blue_gray-200_01 text-center text-xl tracking-[-0.20px]"
                          size="txtPoppinsRegular20Bluegray20001"
                        >
                          Learns from user interactions and updates to the
                          knowledge base for ongoing improvement.
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="bg-white-A700_19 justify-center sm:px-5 px-[35px] py-[11px] rounded-[21px] text-center text-sm text-white-A700 tracking-[-0.16px] w-full"
                      size="txtPoppinsSemiBold14"
                    >
                      Learn more
                    </Text>
                  </div>
                </List>
              </div>
              <Img
                className="h-10"
                src="images/img_vector477.svg"
                alt="vector477"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1440px] py-[136px] w-full">
          <div className="flex md:flex-col flex-row gap-12 items-center justify-start md:px-10 px-40 sm:px-5 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900 w-full"
                size="txtRobotoRomanExtraBold56"
              >
                AI Assistant
              </Text>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                <Text
                  className="leading-[32.00px] max-w-[432px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>
                    Elevate your support journey through intelligent
                    conversations, personalized solutions, and a seamless
                    experience.
                  </>
                </Text>
              </div>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                <Text
                  className="leading-[32.00px] max-w-[432px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>
                    Explore a world of effortless shopping with our
                    conversational guide, making product discovery and
                    recommendations a delight.
                  </>
                </Text>
              </div>
              <Text
                className="leading-[32.00px] max-w-[432px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                size="txtPoppinsRegular20Gray900"
              >
                When things get tricky, our AI is here for you! Escalate complex
                questions for a human touch and guaranteed satisfaction.
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start pt-[3px] w-[58%] md:w-full">
              <Img
                className="h-[626px] md:h-auto object-cover w-full"
                src="images/img_group2.png"
                alt="groupTwo"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100_01 flex flex-col items-center justify-start max-w-[1440px] py-[136px] w-full">
          <div className="flex md:flex-col flex-row gap-12 items-center justify-start md:px-10 px-40 sm:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start pt-[3px] w-[58%] md:w-full">
              <Img
                className="h-[626px] md:h-auto object-cover w-full"
                src="images/img_group2.png"
                alt="groupTwo_One"
              />
            </div>
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900 w-full"
                size="txtRobotoRomanExtraBold56"
              >
                Agent CO-Pilot
              </Text>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                <Text
                  className="leading-[32.00px] max-w-[432px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>
                    Boost your support team with AI-backed chat suggestions and
                    summaries, helping agents swiftly address queries based on
                    customer&#39;s feelings
                  </>
                </Text>
              </div>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                <Text
                  className="leading-[32.00px] max-w-[432px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Gray900"
                >
                  Tailored responses for a smooth and enjoyable customer
                  experience.
                </Text>
              </div>
              <Text
                className="leading-[32.00px] max-w-[432px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                size="txtPoppinsRegular20Gray900"
              >
                Manage all your messages in one place and jump in for quick
                solutions, no matter where the conversation is happening.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-roboto items-center justify-start max-w-[1440px] py-[136px] w-full">
          <div className="flex md:flex-col flex-row gap-12 items-center justify-start md:px-10 px-40 sm:px-5 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900 w-full"
                size="txtRobotoRomanExtraBold56"
              >
                Data ANALYTICS
              </Text>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                <Text
                  className="leading-[32.00px] max-w-[432px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Gray900"
                >
                  Improve bot and agent performance by tracking relevant metrics
                  to bridge gaps in customer support.
                </Text>
              </div>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                <Text
                  className="leading-[32.00px] max-w-[432px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>
                    Let data guide you to happier customers and improved loyalty
                    – it&#39;s that simple!
                  </>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start pt-[3px] w-[58%] md:w-full">
              <Img
                className="h-[626px] md:h-auto object-cover w-full"
                src="images/img_group2.png"
                alt="groupTwo_Two"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-roboto md:gap-10 gap-16 items-center justify-start md:px-10 px-40 sm:px-5 py-[136px] w-full">
          <div className="max-w-[1120px] mx-auto relative w-full">
            <Img
              className="absolute h-3 inset-x-[0] mx-auto top-[40%] w-[246px]"
              src="images/img_vector14_deep_purple_a200_04.svg"
              alt="vectorFourteen_One"
            />
            <div className="flex flex-col gap-8 items-center justify-start m-auto max-w-[1120px] relative w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900 w-full"
                    size="txtRobotoRomanExtraBold56"
                  >
                    Why Brands Love using Cx-GPT
                  </Text>
                </div>
              </div>
              <Text
                className="text-gray-900 text-xl w-full"
                size="txtRobotoRomanRegular20"
              >
                Know our product differentiators for increased efficiency &
                revenue
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-poppins items-center justify-start max-w-[1120px] mx-auto w-full">
            <List
              className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1120px] w-full"
              orientation="horizontal"
            >
              <div className="blue_200_deep_purple_A100_border5 border-r border-solid flex flex-1 flex-col gap-4 items-center justify-start sm:ml-[0] md:px-10 px-12 sm:px-5 w-full">
                <div className="flex flex-col gap-4 h-[183px] md:h-auto items-center justify-start w-full">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_img.png"
                    alt="img"
                  />
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_02 text-center tracking-[-0.32px]"
                    size="txtPoppinsSemiBold32Black90002"
                  >
                    <>
                      Gen AI First <br />
                      Product
                    </>
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[277px] md:max-w-full text-base text-blue_gray-400_01 text-center"
                  size="txtPoppinsRegular16Bluegray40001"
                >
                  Our Gen AI-first product & expert-driven implementation help
                  our global partners stay ahead of the curve and deliver
                  unparalleled customer experiences.
                </Text>
              </div>
              <div className="blue_200_deep_purple_A100_border6 border-r border-solid flex flex-1 flex-col gap-4 items-center justify-start sm:ml-[0] md:px-10 px-12 sm:px-5 w-full">
                <div className="flex flex-col gap-4 h-[183px] md:h-auto items-center justify-start w-full">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_img.png"
                    alt="img"
                  />
                  <Text
                    className="leading-[40.00px] max-w-[277px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900_02 text-center tracking-[-0.32px]"
                    size="txtPoppinsSemiBold32Black90002"
                  >
                    10+ Years of AI Expertise
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[277px] md:max-w-full text-base text-blue_gray-400_01 text-center"
                  size="txtPoppinsRegular16Bluegray40001"
                >
                  Haptik has been a pioneer in the field of AI for well over a
                  decade, helping global brands unlock unprecedented success
                  with our innovative solutions.
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start sm:ml-[0] md:px-10 px-12 sm:px-5 w-full">
                <div className="flex flex-col gap-4 h-[183px] md:h-auto items-center justify-start w-full">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_img.png"
                    alt="img"
                  />
                  <Text
                    className="leading-[40.00px] max-w-[277px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900_02 text-center tracking-[-0.32px]"
                    size="txtPoppinsSemiBold32Black90002"
                  >
                    Experience With Scale
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[277px] md:max-w-full text-base text-blue_gray-400_01 text-center"
                  size="txtPoppinsRegular16Bluegray40001"
                >
                  Scale seamlessly as you grow your business. Brands such as
                  Paisabazaar, Jio, Paytm have partnered with us to scale their
                  support and engagement.
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-gray-50_02 flex flex-col font-poppins items-start justify-center md:px-10 px-16 sm:px-5 py-20 w-auto md:w-full">
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
        <Footer className="bg-black-900_02 flex font-poppins items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LandingPageFivePage;
