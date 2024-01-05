import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import LandingPageFourButton from "components/LandingPageFourButton";

const LandingPageFourPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-20 md:px-5 py-6 w-full">
          <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 gap-56 items-center justify-start max-w-[888px] w-full">
            <Img
              className="sm:flex-1 h-[35px] md:h-auto object-cover w-[138px] sm:w-full"
              src="images/img_logo.png"
              alt="logo"
            />
            <div className="flex flex-row gap-12 items-center justify-start w-auto">
              <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.50px] w-auto"
                  size="txtRobotoMedium16"
                >
                  Products
                </Text>
              </div>
              <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.50px] w-auto"
                  size="txtRobotoMedium16"
                >
                  Resource
                </Text>
              </div>
              <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.50px] w-auto"
                  size="txtRobotoMedium16"
                >
                  About us
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="!text-blue-400 bg-transparent cursor-pointer font-medium min-w-[129px] text-base text-center tracking-[0.50px]"
            shape="round"
            size="sm"
            variant="outline"
            color="blue_400_deep_purple_A200"
          >
            Get demo
          </Button>
        </header>
        <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-20 items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <div className="relative w-full">
            <Img
              className="absolute h-3 left-[0] max-h-3 top-[0]"
              src="images/img_vector14.svg"
              alt="vectorFourteen"
            />
            <div className="flex flex-1 flex-col gap-8 items-start justify-start m-auto relative w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[72.00px] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.12px]"
                  size="txtPoppinsSemiBold56"
                >
                  <span className="text-gray-900 font-poppins text-left font-semibold">
                    <>
                      Elevate
                      <br />
                    </>
                  </span>
                  <span className="text-deep_purple-A200_01 font-poppins text-left font-semibold">
                    <>
                      Customer Satisfaction
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-poppins text-left font-semibold">
                    <>
                      with generative <br />
                      AI-powered
                    </>
                  </span>
                </Text>
              </div>
              <Text
                className="leading-[32.00px] max-w-[568px] md:max-w-full text-gray-900 text-xl tracking-[-0.20px]"
                size="txtPoppinsRegular20Gray900"
              >
                Q-GPT Breaks through the information barriers slowing down your
                business.
              </Text>
              <div className="flex sm:flex-col flex-row font-dmsans gap-6 items-center justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-bold rounded-[28px] text-base text-center w-56"
                  size="md"
                  variant="gradient"
                  color="blue_400_deep_purple_A200"
                >
                  Customer Satisfaction
                </Button>
                <Input
                  name="button"
                  placeholder="Elevate Your Business"
                  className="!placeholder:text-blue-400 !text-blue-400 font-bold md:h-auto p-0 sm:h-auto text-base text-left w-full"
                  wrapClassName="bg-transparent rounded-[28px] w-[48%] sm:w-full"
                  size="xs"
                  color="blue_400_deep_purple_A200"
                ></Input>
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
        <div className="flex flex-col font-roboto gap-9 items-center justify-start pt-20 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 w-full"
                size="txtRobotoRomanExtraBold56"
              >
                Do it all in chat
              </Text>
            </div>
            <Text
              className="text-center text-gray-900 text-xl w-full"
              size="txtRobotoRomanRegular20"
            >
              Chat as a collaboration hub. Intuitive experience.
            </Text>
          </div>
          <div className="font-dmsans md:h-[1065px] sm:h-[640px] h-[922px] md:px-5 relative w-full">
            <div className="absolute bg-gray-100_01 inset-[0] m-auto md:px-10 px-40 sm:px-5 py-[124px] w-[1440px] md:w-full">
              <Img
                className="absolute h-2.5 left-[18%] top-[14%] w-[121px]"
                src="images/img_vector14.svg"
                alt="vectorFourteen_One"
              />
              <div className="bg-white-A700 flex flex-col h-[640px] md:h-auto items-center justify-start m-auto relative rounded-[20px] shadow-bs2 w-full">
                <div className="border-b border-blue_gray-200 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Button
                    className="!text-indigo-A400 bg-transparent cursor-pointer font-bold min-w-[219px] text-base text-center"
                    shape="square"
                    size="lg"
                    variant="outline"
                    color="indigo_A400_deep_purple_A200_02"
                  >
                    AI-Powered Web Q&A
                  </Button>
                  <div className="flex flex-col items-center justify-center p-6 sm:px-5 w-auto">
                    <Text
                      className="text-base text-blue_gray-400 text-center w-auto"
                      size="txtDMSansBold16"
                    >
                      AI Sales Assistant
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 sm:px-5 w-auto">
                    <Text
                      className="text-base text-blue_gray-400 text-center w-auto"
                      size="txtDMSansBold16"
                    >
                      Agent Co-pilot
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 sm:px-5 w-auto">
                    <Text
                      className="text-base text-blue_gray-400 text-center w-auto"
                      size="txtDMSansBold16"
                    >
                      Intelligent Analytics
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-col flex-row font-roboto gap-12 h-[576px] items-center justify-start md:px-10 px-12 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_picture.png')" }}
                >
                  <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-[542px] sm:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="leading-[110.00%] text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                          size="txtRobotoRomanExtraBold36"
                        >
                          <>
                            Build a Gen AI <br />
                            Assistant in No Time
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-36 md:h-auto items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="leading-[180.00%] max-w-[542px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoRomanRegular20"
                        >
                          Offer hassle-free 24/7 support powered by Generative
                          AI. Fetch website information based on customer
                          queries & generate dynamic responses with CRM & Web
                          API integration.
                        </Text>
                      </div>
                    </div>
                    <LandingPageFourButton className="flex flex-row items-center justify-center pr-2 py-4 rounded-lg w-auto" />
                  </div>
                  <Img
                    className="md:flex-1 h-[337px] sm:h-auto object-cover w-[414px] md:w-full"
                    src="images/img_aiwebqa5101.png"
                    alt="aiwebqa5101"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-200 border-b border-gray-200 border-solid flex flex-col font-poppins h-[72px] md:h-auto inset-x-[0] items-center justify-center mx-auto rounded-[36px] top-[0] w-auto">
              <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-center justify-center rounded-[36px] w-full">
                <Button
                  className="!text-gray-50_01 cursor-pointer font-semibold h-[72px] rounded-[36px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.24px]"
                  size="md"
                  variant="gradient"
                  color="blue_400_deep_purple_A200"
                >
                  Internal management
                </Button>
                <div className="flex flex-col h-[72px] md:h-auto items-center justify-start sm:px-5 px-6 py-2">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl tracking-[-0.24px] w-auto"
                      size="txtPoppinsSemiBold24Bluegray400"
                    >
                      Customer Support
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-poppins px-40 md:px-5 py-[136px] relative w-full">
          <Img
            className="absolute h-3 inset-x-[0] mx-auto top-[24%] w-[246px]"
            src="images/img_vector14_deep_purple_a200_04.svg"
            alt="vectorFourteen_Two"
          />
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start m-auto relative w-auto"
            orientation="horizontal"
          >
            <div className="bg-gray-100_01 flex flex-col items-center justify-start p-8 sm:px-5 rounded-[25px] w-[380px] sm:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_img.png"
                  alt="img"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_02 text-center tracking-[-0.32px] w-full"
                    size="txtPoppinsSemiBold32Black90002"
                  >
                    Keep your data private
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-blue_gray-400_01 text-center w-full"
                    size="txtPoppinsRegular16Bluegray40001"
                  >
                    we never access your database or move your data.
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-100_01 flex flex-col items-center justify-start p-8 sm:px-5 rounded-[25px] w-[380px] sm:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_img_80x80.png"
                  alt="img"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_02 text-center tracking-[-0.32px]"
                    size="txtPoppinsSemiBold32Black90002"
                  >
                    <>
                      No language <br />
                      barrier
                    </>
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-blue_gray-400_01 text-center w-full"
                    size="txtPoppinsRegular16Bluegray40001"
                  >
                    We can communicate in a language of your choice.
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-100_01 flex flex-col items-center justify-start p-8 sm:px-5 rounded-[25px] w-[380px] sm:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-20"
                  src="images/img_img_1.png"
                  alt="img"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_02 text-center tracking-[-0.32px] w-full"
                    size="txtPoppinsSemiBold32Black90002"
                  >
                    <>Solutions for Every Industry</>
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-blue_gray-400_01 text-center w-full"
                    size="txtPoppinsRegular16Bluegray40001"
                  >
                    We can communicate in a language of your choice.
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="flex md:flex-col flex-row font-roboto md:gap-10 gap-16 items-center justify-center md:px-10 px-40 sm:px-5 py-[136px] w-full">
          <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[614px] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900 w-full"
                  size="txtRobotoRomanExtraBold56"
                >
                  Connected to your apps
                </Text>
              </div>
            </div>
            <Text
              className="leading-[180.00%] text-gray-900 text-xl"
              size="txtRobotoRomanRegular20"
            >
              <>
                Connect your AI Assistant with your favorite internal or
                external tools. Teach it to perform custom actions or retrieve
                information.
                <br />
                <br />
                Use our one-click integrations or connect via Quickchat API.
              </>
            </Text>
          </div>
          <div className="h-[498px] relative w-[44%] md:w-full">
            <Img
              className="h-[498px] m-auto object-cover w-full"
              src="images/img_654e1d306b3b83d.png"
              alt="654e1d306b3b83d"
            />
            <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[29px] sm:px-5 right-[30%] rounded-[50%] w-[162px]">
              <Img
                className="h-[100px] md:h-auto object-cover"
                src="images/img_vector_100x102.png"
                alt="vector_One"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-roboto md:gap-10 gap-16 items-center justify-start md:px-10 px-40 sm:px-5 py-[136px] w-full">
          <div className="max-w-[1120px] mx-auto relative w-full">
            <Img
              className="absolute h-3 inset-x-[0] mx-auto top-[40%] w-[246px]"
              src="images/img_vector14_deep_purple_a200_04.svg"
              alt="vectorFourteen_Three"
            />
            <div className="flex flex-col gap-8 items-center justify-start m-auto max-w-[1120px] relative w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900 w-full"
                    size="txtRobotoRomanExtraBold56"
                  >
                    Why Partner with QueryGPT
                  </Text>
                </div>
              </div>
              <Text
                className="text-gray-900 text-xl w-full"
                size="txtRobotoRomanRegular20"
              >
                500+ Companies Have Partnered with QueryGPT to Grow Their
                Business
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-poppins items-center justify-start max-w-[1120px] mx-auto w-full">
            <List
              className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1120px] w-full"
              orientation="horizontal"
            >
              <div className="blue_200_deep_purple_A100_border3 border-r border-solid flex flex-1 flex-col gap-4 items-center justify-start sm:ml-[0] md:px-10 px-12 sm:px-5 w-full">
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
              <div className="blue_200_deep_purple_A100_border4 border-r border-solid flex flex-1 flex-col gap-4 items-center justify-start sm:ml-[0] md:px-10 px-12 sm:px-5 w-full">
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
        <div className="flex md:flex-col flex-row font-poppins gap-12 items-start justify-center md:px-10 px-40 sm:px-5 py-[136px] w-full">
          <div className="bg-gradient5  flex flex-1 sm:flex-col flex-row gap-4 items-start justify-center px-12 md:px-5 py-8 rounded-[12px] w-full">
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50_01 tracking-[-0.32px] w-full"
                  size="txtPoppinsSemiBold32Gray5001"
                >
                  Query-GPT
                </Text>
              </div>
              <Text
                className="leading-[24.00px] max-w-[290px] md:max-w-full text-base text-gray-50_01"
                size="txtPoppinsRegular16Gray5001"
              >
                Query-GPT Breaks through the information barriers slowing down
                your business.
              </Text>
            </div>
            <Img
              className="h-[161px] max-h-[161px] sm:w-[]"
              src="images/img_group31.svg"
              alt="groupThirtyOne"
            />
          </div>
          <div className="bg-gradient5  flex flex-1 flex-col items-center justify-start px-12 md:px-5 py-8 rounded-[12px] w-full">
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-center w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50_01 tracking-[-0.32px] w-full"
                    size="txtPoppinsSemiBold32Gray5001"
                  >
                    Cx-GPT
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[290px] md:max-w-full text-base text-gray-50_01"
                  size="txtPoppinsRegular16Gray5001"
                >
                  {" "}
                  Cx-GPT  Creates long-lasting connections with timely &
                  personalized support
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[22px] items-center justify-start w-[31%] sm:w-full">
                <div className="h-[127px] md:h-[87px] relative w-full">
                  <div className="h-[127px] md:h-[87px] m-auto w-full">
                    <div className="h-[127px] md:h-[87px] m-auto w-full">
                      <div className="absolute bottom-[0] flex flex-col gap-[22px] inset-x-[0] justify-start mx-auto w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Img
                            className="h-[26px] md:h-auto object-cover"
                            src="images/img_vector_26x12.png"
                            alt="vector_Two"
                          />
                          <Img
                            className="h-[26px] md:h-auto object-cover"
                            src="images/img_vector_26x12.png"
                            alt="vector_Three"
                          />
                        </div>
                        <div className="md:h-[39px] h-[55px] md:ml-[0] ml-[41px] relative w-[53%]">
                          <div className="md:h-[39px] h-[55px] m-auto w-full">
                            <div className="absolute md:h-[39px] h-[41px] inset-x-[0] mx-auto top-[0] w-full">
                              <Img
                                className="absolute bottom-[0] h-[38px] object-cover right-[0]"
                                src="images/img_group21.png"
                                alt="groupTwentyOne"
                              />
                              <Img
                                className="absolute h-[39px] left-[0] object-cover top-[0]"
                                src="images/img_vector_39x49.png"
                                alt="vector_Four"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[38px] left-[0] object-cover"
                              src="images/img_vector_38x45.png"
                              alt="vector_Five"
                            />
                          </div>
                          <Img
                            className="absolute h-[17px] left-[23%] object-cover top-[22%] w-[17px]"
                            src="images/img_group22.png"
                            alt="groupTwentyTwo"
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[75px] inset-x-[0] items-center justify-start mx-auto pb-[11px] px-[11px] top-[0] w-[86%]"
                        style={{
                          backgroundImage: "url('images/img_group10.png')",
                        }}
                      >
                        <div className="flex flex-col gap-1.5 items-center justify-start w-[98%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start pt-0.5 w-[57%] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group12.png')",
                            }}
                          >
                            <Img
                              className="h-[13px] md:h-auto object-cover"
                              src="images/img_vector_13x51.png"
                              alt="vector_Six"
                            />
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[41px] items-center justify-start pb-[5px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group10.png')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[22px]"
                                src="images/img_vector.svg"
                                alt="vector_Seven"
                              />
                              <div className="flex flex-row gap-2 items-center justify-center mt-0.5 w-1/4 md:w-full">
                                <div className="bg-blue_gray-100 h-2.5 rounded-[3px] w-[32%]"></div>
                                <div className="bg-blue_gray-100 h-2.5 rounded-[3px] w-[32%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[18%] h-[52px] object-cover right-[13%] w-[52px]"
                      src="images/img_vector_52x52.png"
                      alt="vector_Eight"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[16%] h-[15px] left-[26%] object-cover"
                    src="images/img_group23.png"
                    alt="groupTwentyThree"
                  />
                </div>
                <Img
                  className="h-[11px] md:h-auto object-cover"
                  src="images/img_vector_11x63.png"
                  alt="vector_Nine"
                />
              </div>
            </div>
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

export default LandingPageFourPage;
