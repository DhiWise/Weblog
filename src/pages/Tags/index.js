import React from "react";

import { Column, Row, Img, Text, Button, Stack, Grid } from "components";
import { useLocation, useNavigate } from "react-router-dom";
import { getArticlesperpage6tagreact } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TagsPage = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = { params: { per_page: "6", tag: location?.state?.tags } };

    getArticlesperpage6tagreact(req)
      .then((res) => {
        setapiData(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happend");
      });
  }
  function handleNavigate4(id) {
    navigate("/blogpage", { state: { id: id } });
  }
  function handleNavigate() {
    navigate("/writeondevto");
  }
  function handleNavigate1() {
    navigate("/writeonmedium");
  }
  function handleNavigate2() {
    navigate("/mediumprofile");
  }
  function handleNavigate3() {
    navigate("/devtoprofile");
  }
  function handleNavigate17() {
    navigate("/");
  }

  return (
    <>
      <Column
        className="bg-black_900 font-spacegrotesk items-center mx-[auto] w-[100%]"
        compid="131:18"
        comptype="Column"
      >
        <header className="w-[100%]" compid="1" comptype="Header">
          <Row
            className="border border-bluegray_900 border-solid items-center justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
            compid="131:192"
            comptype="Row"
          >
            <Img
              src="images/img_rewind.svg"
              className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] my-[1px] w-[4%]"
              compid="131:206"
              comptype="Image"
              alt="rewind"
            />
            <Text
              className="common-pointer font-medium font-spacegrotesk lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
              compid="131:210"
              comptype="Text"
              onClick={handleNavigate17}
            >
              Weblog
            </Text>
            <Text
              className="font-gilroy font-semibold lg:ml-[168px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_50 w-[auto]"
              compid="131:196"
              comptype="Text"
            >
              Dashboard
            </Text>
            <Text
              className="common-pointer font-gilroy font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
              compid="131:198"
              comptype="Text"
              onClick={handleNavigate3}
            >
              Dev.to Profile
            </Text>
            <Text
              className="common-pointer font-gilroy font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
              compid="131:199"
              comptype="Text"
              onClick={handleNavigate2}
            >
              Medium Profile
            </Text>
            <Row
              className="bg-black_900 font-gilroy items-center justify-center lg:ml-[151px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] lg:mr-[52px] xl:mr-[60px] 2xl:mr-[68px] 3xl:mr-[81px] w-[24%]"
              compid="131:200"
              comptype="Row"
            >
              <Button
                className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
                compid="131:201"
                comptype="Button"
                onClick={handleNavigate1}
                variant="FillWhiteA700"
              >
                Write on medium
              </Button>
              <Button
                className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                compid="131:203"
                comptype="Button"
                onClick={handleNavigate}
                variant="FillWhiteA700"
              >
                Write on dev.to
              </Button>
            </Row>
          </Row>
        </header>
        <Stack
          className="xl:h-[1400px] 2xl:h-[1239px] 3xl:h-[1487px] lg:h-[963px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[81%]"
          compid="24"
          comptype="Stack"
        >
          <Column
            className="absolute bg-black_900  h-[auto] font-gilroy inset-[0] items-center justify-center m-[auto] lg:p-[15px] xl:p-[10px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]"
            compid="131:19"
            comptype="Column"
          >
            <Grid
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]"
              compid="28"
              comptype="Grid"
            >
              {apiData?.map((apiDataResponseEle, index) => {
                return (
                  <React.Fragment key={`apiDataResponseEle${index}`}>
                    <Column
                      className="common-pointer bg-gray_900 border border-bluegray_900 border-solid 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius23 w-[100%]"
                      compid="131:21"
                      comptype="Column"
                      onClick={() => handleNavigate4(apiDataResponseEle?.id)}
                    >
                      <Img
                        src={apiDataResponseEle?.["social_image"]}
                        className="lg:h-[207px] xl:h-[236px] 2xl:h-[266px] 3xl:h-[319px] rounded-radius12 w-[100%]"
                        compid="131:22"
                        comptype="Image"
                        alt="placeholder"
                      />
                      <Text
                        className="font-bold lg:leading-[25px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[77%]"
                        compid="131:24"
                        comptype="Text"
                      >
                        {apiDataResponseEle?.title}
                      </Text>
                      <Text
                        className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[95%]"
                        compid="131:25"
                        comptype="Text"
                      >
                        {apiDataResponseEle?.description}
                      </Text>
                      <Row
                        className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
                        compid="131:26"
                        comptype="Row"
                      >
                        <Img
                          src={apiDataResponseEle?.user?.["profile_image"]}
                          className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                          compid="I131:28;139:669"
                          comptype="Image"
                          alt="ProfileImgLarg"
                        />
                        <Text
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]"
                          compid="131:29"
                          comptype="Text"
                        >
                          {apiDataResponseEle?.user?.name}
                        </Text>
                        <Text
                          className="font-medium lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]"
                          compid="131:30"
                          comptype="Text"
                        >
                          {apiDataResponseEle?.["readable_publish_date"]}
                        </Text>
                      </Row>
                    </Column>
                  </React.Fragment>
                );
              })}
            </Grid>
          </Column>
          <Text
            className="absolute font-opensans font-semibold left-[0] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_50 top-[-20px] w-[auto]"
            compid="131:212"
            comptype="Text"
          >
            Articles of {location?.state?.tags}
          </Text>
        </Stack>
        <footer
          className="bg-gray_902 lg:mt-[33px] xl:mt-[38px] 2xl:mt-[150px] 3xl:mt-[51px] w-[100%]"
          compid="131:95"
          comptype="Footer"
        >
          <Row
            className="lg:mb-[54px] xl:mb-[62px] 2xl:mb-[70px] 3xl:mb-[84px] lg:ml-[117px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] lg:mr-[129px] xl:mr-[147px] 2xl:mr-[166px] 3xl:mr-[199px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[78%]"
            compid="131:97"
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
                  compid="131:99"
                  comptype="Image"
                  alt="rewind One"
                />
                <Text
                  className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                  compid="131:103"
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
              compid="131:104"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="131:105"
                comptype="Text"
              >
                Quick Links
              </Text>
              <Text
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:106"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:107"
                comptype="Text"
              >
                Dev.to Profile
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:108"
                comptype="Text"
              >
                Medium Profile
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:109"
                comptype="Text"
              >
                Write on Medium
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:110"
                comptype="Text"
              >
                Write on Dev.to
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[7%]"
              compid="131:111"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="131:112"
                comptype="Text"
              >
                Company
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:113"
                comptype="Text"
              >
                About
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:114"
                comptype="Text"
              >
                Careers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:115"
                comptype="Text"
              >
                Writers
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:116"
                comptype="Text"
              >
                Blog
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[11%]"
              compid="131:117"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="131:118"
                comptype="Text"
              >
                Help
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:119"
                comptype="Text"
              >
                FAQs
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:120"
                comptype="Text"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="131:121"
                comptype="Text"
              >
                Privacy Policy
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[10%]"
              compid="131:122"
              comptype="Column"
            >
              <Text
                className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]"
                compid="131:134"
                comptype="Text"
              >
                Connect on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]"
                compid="131:123"
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

export default TagsPage;
