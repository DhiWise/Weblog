import React from "react";

import { Column, Stack, Grid, Img, Text, Row, Button } from "components";
import { useNavigate } from "react-router-dom";
import { getArticlesperpage6tagreact } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardPage = () => {
  const [apiData9, setapiData9] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi9();
  }, []);

  function callApi9() {
    const req = { params: { per_page: "6" } };

    getArticlesperpage6tagreact(req)
      .then((res) => {
        setapiData9(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }
  function handleNavigate9(id) {
    navigate("/blogpage", { state: { id: id } });
  }
  function handleNavigate19(tags) {
    navigate("/tags", { state: { tags: tags } });
  }
  function handleNavigate21() {
    navigate("/devtoprofile");
  }
  function handleNavigate22() {
    navigate("/mediumprofile");
  }
  function handleNavigate23() {
    navigate("/writeonmedium");
  }
  function handleNavigate24() {
    navigate("/writeondevto");
  }

  return (
    <>
      <Column
        className="bg-black_900 font-gilroy items-center mx-[auto] w-[100%]"
        compid="113:79"
        comptype="Column"
      >
        <Stack
          className="lg:h-[1001px] xl:h-[1145px] 2xl:h-[1287px] 3xl:h-[1545px] w-[100%]"
          compid="7"
          comptype="Stack"
        >
          <Column
            className="absolute bg-black_900 items-center mt-[100px] pl-[32px] pr-[32px] pb-[32px] 3xl:p-[38px] right-[0] w-[79%]"
            compid="113:80"
            comptype="Column"
          >
            <Grid
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]"
              compid="23"
              comptype="Grid"
            >
              {apiData9?.map((apiData9ResponseEle, index) => {
                return (
                  <React.Fragment key={`apiData9ResponseEle${index}`}>
                    <Column
                      className="common-pointer bg-gray_900 border border-bluegray_900 border-solid 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius23 w-[100%]"
                      compid="113:82"
                      comptype="Column"
                      onClick={() => handleNavigate9(apiData9ResponseEle?.id)}
                    >
                      <Img
                        src={apiData9ResponseEle?.["social_image"]}
                        className="lg:h-[207px] xl:h-[236px] 2xl:h-[266px] 3xl:h-[319px] rounded-radius12 w-[100%]"
                        compid="113:83"
                        comptype="Image"
                        alt="placeholder"
                      />
                      <Text
                        className="font-bold lg:leading-[25px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[77%]"
                        compid="113:85"
                        comptype="Text"
                      >
                        {apiData9ResponseEle?.title}
                      </Text>
                      <Text
                        className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[95%]"
                        compid="113:86"
                        comptype="Text"
                      >
                        {apiData9ResponseEle?.description}
                      </Text>
                      <Row
                        className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
                        compid="113:87"
                        comptype="Row"
                      >
                        <Img
                          src={apiData9ResponseEle?.user?.["profile_image"]}
                          className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                          compid="I113:89;139:669"
                          comptype="Image"
                          alt="ProfileImgLarg"
                        />
                        <Text
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]"
                          compid="113:90"
                          comptype="Text"
                        >
                          {apiData9ResponseEle?.user?.name}
                        </Text>
                        <Text
                          className="font-medium lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]"
                          compid="113:91"
                          comptype="Text"
                        >
                          {apiData9ResponseEle?.["readable_publish_date"]}
                        </Text>
                      </Row>
                    </Column>
                  </React.Fragment>
                );
              })}
            </Grid>
          </Column>
          <Row
            className="absolute bg-black_900 border border-bluegray_900 border-solid items-center justify-between lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] right-[0] top-[0] w-[79%]"
            compid="113:142"
            comptype="Row"
          >
            <Row
              className="bg-black_900 lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] py-[4px] w-[30%]"
              compid="113:145"
              comptype="Row"
            >
              <Text
                className="font-semibold my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_50 w-[auto]"
                compid="113:147"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Text
                className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                compid="113:149"
                comptype="Text"
                onClick={handleNavigate21}
              >
                Dev.to Profile
              </Text>
              <Text
                className="common-pointer font-medium mb-[1px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                compid="113:150"
                comptype="Text"
                onClick={handleNavigate22}
              >
                Medium Profile
              </Text>
            </Row>
            <Row
              className="bg-black_900 items-center justify-center mb-[1px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] w-[30%]"
              compid="113:151"
              comptype="Row"
            >
              <Button
                className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
                compid="113:152"
                comptype="Button"
                onClick={handleNavigate23}
                variant="FillWhiteA700"
              >
                Write on medium
              </Button>
              <Button
                className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                compid="113:154"
                comptype="Button"
                onClick={handleNavigate24}
                variant="FillWhiteA700"
              >
                Write on dev.to
              </Button>
            </Row>
          </Row>
          <Column
            className="absolute h-[109%] bg-black_900 border border-bluegray_900 border-solid font-spacegrotesk items-center left-[0] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] top-[0] w-[21%]"
            compid="113:196"
            comptype="Column"
          >
            <Row
              className="items-end justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[72%]"
              compid="113:197"
              comptype="Row"
            >
              <Img
                src="images/img_rewind.svg"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] mb-[1px] w-[32%]"
                compid="113:198"
                comptype="Image"
                alt="rewind"
              />
              <Text
                className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                compid="113:202"
                comptype="Text"
              >
                Weblog
              </Text>
            </Row>
            <Column
              className="font-opensans lg:mb-[503px] xl:mb-[575px] 2xl:mb-[647px] 3xl:mb-[776px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]"
              compid="22"
              comptype="Column"
            >
              <Text
                className="font-semibold ml-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_50 w-[auto]"
                compid="113:206"
                comptype="Text"
              >
                Recommended Topics
              </Text>
              <Row
                className="font-gilroy items-center ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                compid="11"
                comptype="Row"
              >
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[44%]"
                  compid="113:207"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("react")}
                >
                  React
                </Button>
                <Button
                  className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[52%]"
                  compid="113:231"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("javascript")}
                >
                  javascript
                </Button>
              </Row>
              <Row
                className="font-gilroy items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[84%]"
                compid="12"
                comptype="Row"
              >
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[56%]"
                  compid="113:209"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("flutter")}
                >
                  Flutter
                </Button>
                <Button
                  className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[40%]"
                  compid="113:229"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("frontend")}
                >
                  Frontend
                </Button>
              </Row>
              <Row
                className="font-gilroy items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[84%]"
                compid="13"
                comptype="Row"
              >
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[80%]"
                  compid="113:211"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("webdev")}
                >
                  Web Development
                </Button>
                <Button
                  className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[35%]"
                  compid="113:227"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("backend")}
                >
                  Backend
                </Button>
              </Row>
              <Row
                className="font-gilroy items-center justify-between lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[auto]"
                compid="14"
                comptype="Row"
              >
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[50%]"
                  compid="113:213"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("programming")}
                >
                  Programming
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[45%]"
                  compid="113:223"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("python")}
                >
                  Python
                </Button>
              </Row>
              <Row
                className="font-gilroy items-center justify-between lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[76%]"
                compid="15"
                comptype="Row"
              >
                <Button
                  className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[48%]"
                  compid="113:217"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("html")}
                >
                  html
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[38%]"
                  compid="113:225"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("css")}
                >
                  Css
                </Button>
              </Row>
              <Row
                className="font-gilroy items-center justify-between ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[65%]"
                compid="16"
                comptype="Row"
              >
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[48%]"
                  compid="113:215"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("devops")}
                >
                  devops
                </Button>
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[45%]"
                  compid="113:219"
                  comptype="Button"
                  shape="CircleBorder14"
                  size="sm"
                  onClick={() => handleNavigate19("aws")}
                >
                  aws
                </Button>
              </Row>
            </Column>
          </Column>
        </Stack>
        <footer
          className="bg-gray_902 font-spacegrotesk xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]"
          compid="113:156"
          comptype="Footer"
        >
          <Row
            className="lg:mb-[54px] xl:mb-[62px] 2xl:mb-[70px] 3xl:mb-[84px] lg:ml-[117px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] lg:mr-[129px] xl:mr-[147px] 2xl:mr-[166px] 3xl:mr-[199px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[78%]"
            compid="113:158"
            comptype="Row"
          >
            <Column className="w-[29%]" compid="63" comptype="Column">
              <Row
                className="items-end lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] w-[60%]"
                compid="113:159"
                comptype="Row"
              >
                <Img
                  src="images/img_rewind.svg"
                  className="rewind"
                  compid="113:160"
                  comptype="Image"
                  alt="rewind One"
                />
                <Text
                  className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                  compid="113:164"
                  comptype="Text"
                >
                  Weblog
                </Text>
              </Row>
              <Text
                className="font-medium lg:ml-[11px] mr-[13px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[24px] xl:text-[16px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                compid="201:25"
                variant="body2"
                comptype="Text"
              >
                Made with ❤️ using DhiWise
              </Text>
            </Column>
            <Column
              className="font-gilroy lg:ml-[100px] xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] mt-[1px] w-[10%]"
              compid="113:165"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:166"
                comptype="Text"
              >
                Quick Links
              </Text>
              <Text
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:167"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:168"
                comptype="Text"
              >
                Dev.to Profile
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:169"
                comptype="Text"
              >
                Medium Profile
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:170"
                comptype="Text"
              >
                Write on Medium
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:171"
                comptype="Text"
              >
                Write on Dev.to
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[7%]"
              compid="113:172"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:173"
                comptype="Text"
              >
                Company
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:174"
                comptype="Text"
              >
                About
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:175"
                comptype="Text"
              >
                Careers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:176"
                comptype="Text"
              >
                Writers
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:177"
                comptype="Text"
              >
                Blog
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[11%]"
              compid="113:178"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:179"
                comptype="Text"
              >
                Help
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:180"
                comptype="Text"
              >
                FAQs
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:181"
                comptype="Text"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:182"
                comptype="Text"
              >
                Privacy Policy
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[10%]"
              compid="113:183"
              comptype="Column"
            >
              <Text
                className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]"
                compid="113:195"
                comptype="Text"
              >
                Connect on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]"
                compid="113:184"
                comptype="Image"
                alt="GroupNinetyFour"
              />
            </Column>
          </Row>
        </footer>
      </Column>

      <ToastContainer />
    </>
  );
};

export default DashboardPage;
