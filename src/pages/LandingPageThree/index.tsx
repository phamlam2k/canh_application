import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import LandingPageThreeUserchat from "components/LandingPageThreeUserchat";

const LandingPageThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="flex flex-col items-center justify-between px-20 md:px-5 py-6 w-full">
          <div className="flex md:flex-col flex-row gap-12 items-center justify-start w-full">
            <div className="flex sm:flex-1 flex-col items-start justify-start w-[373px] sm:w-full">
              <Img
                className="h-[35px] md:h-auto object-cover w-[138px] sm:w-full"
                src="images/img_logo.png"
                alt="logo"
              />
            </div>
            <div className="flex flex-1 flex-row gap-12 items-center justify-start w-full">
              <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.50px] w-auto"
                  size="txtRobotoMedium16"
                >
                  Feature
                </Text>
              </div>
              <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.50px] w-auto"
                  size="txtRobotoMedium16"
                >
                  Solution
                </Text>
              </div>
              <div className="flex flex-col h-12 md:h-auto items-center justify-start px-2 py-3 w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[0.50px] w-auto"
                  size="txtRobotoMedium16"
                >
                  Pricing
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Button
                className="!text-blue-400 bg-transparent cursor-pointer font-medium min-w-[129px] rounded-lg text-base text-center tracking-[0.50px]"
                size="sm"
                variant="outline"
                color="blue_400_deep_purple_A200"
              >
                Get demo
              </Button>
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <div className="relative w-[640px] md:w-full">
            <Img
              className="absolute h-3 left-[0] top-[0] w-[190px]"
              src="images/img_vector14.svg"
              alt="vectorFourteen"
            />
            <div className="flex flex-col gap-8 items-start justify-start m-auto relative w-full">
              <div className="flex flex-col font-poppins items-start justify-start w-full">
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
                      Your Business
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
                className="leading-[160.00%] md:max-w-full max-w-screen-sm text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtRobotoRomanRegular24"
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
                  Get the answers
                </Button>
                <Button
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[224px] rounded-[28px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_icon_jamicons_outline_logos_playcircle.svg"
                      alt="icon / jam-icons / outline & logos / play-circle"
                    />
                  }
                  size="md"
                  variant="outline"
                  color="blue_400_deep_purple_A200"
                >
                  <div className="!text-blue-400 font-bold text-base text-left">
                    Watch Video
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <Img
            className="h-[581px] w-[478px]"
            src="images/img_group30.svg"
            alt="groupThirty"
          />
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1420px] mx-auto pb-[132px] md:px-5 w-full">
          <div className="bg-gradient2  flex flex-col items-center justify-start pt-[71px] md:px-10 sm:px-5 px-[71px] rounded-[50px] w-full">
            <div className="flex flex-col items-center justify-start mt-1.5 w-full">
              <Img
                className="h-[467px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] w-full"
                src="images/img_chat11.png"
                alt="chatEleven"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins md:gap-10 gap-16 items-center justify-start md:px-10 px-40 sm:px-5 py-[136px] w-full">
          <div className="flex md:flex-col flex-row gap-12 items-start justify-center max-w-7xl mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
              <div className="h-[340px] relative w-full">
                <div className="absolute h-[340px] inset-y-[0] left-[0] my-auto w-[89%] sm:w-full">
                  <div className="absolute bottom-[26%] h-24 md:h-[82px] right-[6%] w-[95px]">
                    <div className="absolute md:h-[82px] h-[95px] inset-y-[0] my-auto right-[0] w-[89%]">
                      <Img
                        className="absolute bottom-[0] h-[51px] object-cover right-[0]"
                        src="images/img_group19.png"
                        alt="groupNineteen"
                      />
                      <Img
                        className="absolute h-[82px] inset-x-[0] mx-auto object-cover top-[0] w-[83px]"
                        src="images/img_vector_82x83.png"
                        alt="vector"
                      />
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[78px] items-end justify-start left-[0] p-2 w-[79px]"
                      style={{
                        backgroundImage: "url('images/img_group5.png')",
                      }}
                    >
                      <Img
                        className="h-[33px] md:h-auto mb-7 object-cover w-[33px]"
                        src="images/img_group20.png"
                        alt="groupTwenty"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[14%] h-[65px] object-cover right-[18%]"
                    src="images/img_vector_65x74.png"
                    alt="vector_One"
                  />
                  <Img
                    className="absolute h-[53px] object-cover right-[0] top-[1%]"
                    src="images/img_.png"
                    alt="One"
                  />
                  <Img
                    className="absolute h-[340px] inset-y-[0] left-[0] my-auto object-cover rounded-[42px] w-[84%]"
                    src="images/img_572971.png"
                    alt="572971"
                  />
                </div>
                <Img
                  className="absolute h-[175px] right-[0] top-[15%]"
                  src="images/img_group38341.svg"
                  alt="group38341"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="leading-[40.00px] max-w-[508px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[-0.32px]"
                  size="txtPoppinsSemiBold32"
                >
                  Get the answers you need without knowing SQL
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[508px] md:max-w-full text-blue_gray-400 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20"
                >
                  Let business teams ask questions of data in natural language
                  and get results - when they need it.
                </Text>
              </div>
              <List
                className="flex flex-col gap-6 items-start w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-2 items-start justify-center my-0 w-full">
                  <div className="flex flex-row gap-3 items-start justify-start w-auto md:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_uiiconcheckcircledfilled.png"
                      alt="uiiconcheckcirc"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtPoppinsSemiBold24"
                    >
                      Query in plain language
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pl-10 pl-11 sm:pl-5 w-full">
                    <Text
                      className="leading-[24.00px] max-w-[464px] md:max-w-full text-base text-blue_gray-400"
                      size="txtPoppinsRegular16"
                    >
                      No matter how complex your warehouse, Q-GPT learns how to
                      get the answers you need from just plain language.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-center my-0 w-full">
                  <div className="flex flex-row gap-3 items-start justify-start w-auto md:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_uiiconcheckcircledfilled.png"
                      alt="uiiconcheckcirc"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtPoppinsSemiBold24"
                    >
                      Stunning Visualizations
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pl-10 pl-11 sm:pl-5 w-full">
                    <Text
                      className="leading-[24.00px] max-w-[464px] md:max-w-full text-base text-blue_gray-400"
                      size="txtPoppinsRegular16"
                    >
                      transforms your data into beautiful, insightful
                      visualizations
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-center my-0 w-full">
                  <div className="flex flex-row gap-3 items-start justify-start w-auto md:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_uiiconcheckcircledfilled.png"
                      alt="uiiconcheckcirc"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtPoppinsSemiBold24"
                    >
                      Self service, for real
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pl-10 pl-11 sm:pl-5 w-full">
                    <Text
                      className="leading-[24.00px] max-w-[464px] md:max-w-full text-base text-blue_gray-400"
                      size="txtPoppinsRegular16"
                    >
                      Q-GPT is designed to be used by anyone. No more waiting
                      for the data you need.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="h-[376px] max-w-[1120px] mx-auto relative w-full">
            <div className="absolute flex flex-1 flex-col gap-12 items-center justify-start left-[0] top-[0] w-full">
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="leading-[40.00px] max-w-[454px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[-0.32px]"
                  size="txtPoppinsSemiBold32"
                >
                  Answer the questions you should be asking
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[454px] md:max-w-full text-blue_gray-400 text-xl tracking-[-0.20px]"
                  size="txtPoppinsRegular20"
                >
                  Let business teams ask questions of data in natural language
                  and get results - when they need it.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-center w-full">
                  <div className="flex flex-row gap-3 items-start justify-start w-auto md:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_uiiconcheckcircledfilled.png"
                      alt="uiiconcheckcirc"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtPoppinsSemiBold24"
                    >
                      Combine your knowledge
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pl-10 pl-11 sm:pl-5 w-full">
                    <Text
                      className="leading-[24.00px] max-w-[410px] md:max-w-full text-base text-blue_gray-400"
                      size="txtPoppinsRegular16"
                    >
                      <>
                        Q-GPT learns from every questions it&#39;s ever asked,
                        and prompts you to ask the questions that really matter
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute font-inter h-[376px] inset-y-[0] my-auto right-[0] w-[56%] md:w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[73%]">
                <Img
                  className="h-[376px] md:h-auto object-cover rounded-bl-[42px] rounded-br-[42px] w-full"
                  src="images/img_572971_376x445.png"
                  alt="572971_One"
                />
              </div>
              <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-start mx-auto top-[1%] w-auto">
                <LandingPageThreeUserchat className="flex flex-row gap-2 items-start justify-end w-[618px] md:w-full" />
                <div className="flex flex-col items-start justify-start w-[618px] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="circle"
                      size="xs"
                      variant="gradient"
                      color="blue_A200_deep_purple_A200_03"
                    >
                      <Img
                        className="h-6"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="bg-white-A700 flex flex-col items-start justify-start px-4 py-2 rounded-[20px] w-auto">
                        <Text
                          className="text-base text-black-900_01 w-full"
                          size="txtInterRegular16"
                        >
                          Hello Katy! Can i help you?
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <LandingPageThreeUserchat
                  className="flex sm:flex-col flex-row gap-2 items-start justify-end w-[618px] md:w-full"
                  messagetext="What business unit achieved the revenue plan this month? "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-poppins gap-12 items-start justify-start md:px-10 px-40 sm:px-5 py-[132px] w-full">
          <Img
            className="h-[425px] max-h-[425px] sm:w-[] md:w-[]"
            src="images/img_group38339.svg"
            alt="group38339"
          />
          <div className="flex flex-1 md:flex-col flex-row gap-3 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col h-[305px] md:h-auto items-center justify-start w-auto">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_iconradiobutt.png"
                  alt="iconradiobutt"
                />
                <Line className="bg-gradient3  h-[257px] w-[3px]" />
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
                <Line className="bg-blue_gray-400 h-[205px] w-[3px]" />
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_contrast.svg"
                  alt="contrast_One"
                />
                <Line className="bg-blue_gray-400 h-[205px] w-[3px]" />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[124px] items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[745px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_02 tracking-[-0.96px] w-full"
                    size="txtPoppinsSemiBold48"
                  >
                    Tailored to your business
                  </Text>
                  <Text
                    className="leading-[32.00px] max-w-[745px] md:max-w-full text-blue_gray-900 text-xl tracking-[-0.20px]"
                    size="txtPoppinsRegular20Bluegray900"
                  >
                    Go beyond generic models. Q-GPT uses AI that is customized
                    for your database schema and aligned to your business logic.
                    Deploy fine-tuned models, monitor their performance and stay
                    aligned with human feedback.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-[745px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_02 tracking-[-0.96px] w-full"
                    size="txtPoppinsSemiBold48"
                  >
                    Keep your data private
                  </Text>
                  <Text
                    className="leading-[32.00px] max-w-[745px] md:max-w-full text-blue_gray-900 text-xl tracking-[-0.20px]"
                    size="txtPoppinsRegular20Bluegray900"
                  >
                    <>
                      Q-GPT only uses metadata to fine-tune LLMs for you –
                      it&#39;s never given access to your actual database. You
                      can use our cloud offering or deploy models on-prem.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start max-w-[745px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900_02 tracking-[-0.96px] w-full"
                    size="txtPoppinsSemiBold48"
                  >
                    Supported databases
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-xl tracking-[-0.20px] w-full"
                    size="txtPoppinsRegular20Bluegray900"
                  >
                    Q-GPT is compatible with all major SQL databases and data
                    warehouses.
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-center w-full">
                  <div className="flex flex-row gap-3 items-start justify-start w-auto md:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_uiiconcheckcircledfilled.png"
                      alt="uiiconcheckcirc_One"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                      size="txtPoppinsSemiBold24"
                    >
                      Data warehouse
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center md:pl-10 pl-11 sm:pl-5 w-full">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtPoppinsRegular16Bluegray900"
                    >
                      We support all major data warehouses, including:
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient4  flex flex-col font-poppins gap-8 items-center justify-start py-12 w-full">
          <div className="flex flex-col gap-5 items-center justify-start md:px-10 px-40 sm:px-5 w-full">
            <Text
              className="bg-clip-text bg-gradient  sm:text-4xl md:text-[38px] text-[40px] text-center text-transparent tracking-[-0.40px] w-auto"
              size="txtPoppinsSemiBold40"
            >
              Core Technology
            </Text>
            <Text
              className="leading-[32.00px] text-blue_gray-900 text-center text-xl tracking-[-0.20px]"
              size="txtPoppinsRegular20Bluegray900"
            >
              <>
                We have customized large language models for converting text
                inputs into domain-specific data queries. We also offer
                self-hosted models and fine-tune models to meet unique needs.{" "}
                <br />
                You can opt out of sharing your metadata forfine-tuning our
                general models. We are happy to develop customized models
                exclusively trained on your own datasets to align with your use
                cases and priorities.{" "}
              </>
            </Text>
          </div>
          <div className="flex flex-col font-dmsans items-center justify-center md:px-5 w-auto sm:w-full">
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto">
              <Button
                className="cursor-pointer font-bold rounded-[28px] text-base text-center w-56"
                size="md"
                variant="gradient"
                color="blue_400_deep_purple_A200"
              >
                Get started for free
              </Button>
              <Button
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[224px] rounded-[28px]"
                leftIcon={
                  <Img
                    className="h-6 mr-3"
                    src="images/img_icon_jamicons_outline_logos_playcircle.svg"
                    alt="icon / jam-icons / outline & logos / play-circle"
                  />
                }
                size="md"
                variant="outline"
                color="blue_400_deep_purple_A200"
              >
                <div className="!text-blue-400 font-bold text-base text-left">
                  Watch Video
                </div>
              </Button>
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
        <Footer className="bg-black-900_02 flex font-poppins items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LandingPageThreePage;
