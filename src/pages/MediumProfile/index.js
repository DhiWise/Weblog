import React from "react";

import { Column, Row, Img, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";
import { getMe, getPublications } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MediumProfilePage = () => {
  const [apiData3, setapiData3] = React.useState();
  const [apiData4, setapiData4] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi3();
  }, []);

  function callApi4() {
    const req = { headers: {} };

    getPublications(req)
      .then((res) => {
        setapiData4(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened");
      });
  }
  function callApi3() {
    const req = {};

    getMe(req)
      .then((res) => {
        setapiData3(res);

        callApi4();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened");
      });
  }
  function handleNavigate4() {
    navigate("/writeondevto");
  }
  function handleNavigate5() {
    navigate("/writeonmedium");
  }
  function handleNavigate6() {
    navigate("/devtoprofile");
  }
  function handleNavigate7() {
    navigate("/");
  }

  return (
    <>
      <Column
        className="bg-gray_50 items-center mx-[auto] w-[100%]"
        compid="113:478"
        comptype="Column"
      >
        <Column
          className="bg-black_900 w-[100%]"
          compid="113:479"
          comptype="Column"
        >
          <header
            className="font-spacegrotesk w-[100%]"
            compid="3"
            comptype="Header"
          >
            <Row
              className="bg-black_900 border border-bluegray_900 border-solid items-center justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
              compid="113:481"
              comptype="Row"
            >
              <Img
                src="images/img_rewind.svg"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] my-[1px] w-[4%]"
                compid="113:495"
                comptype="Image"
                alt="rewind"
              />
              <Text
                className="common-pointer font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                compid="113:499"
                comptype="Text"
                onClick={handleNavigate7}
              >
                Weblog
              </Text>
              <Row
                className="bg-black_900 font-gilroy justify-center lg:ml-[168px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] py-[4px] w-[24%]"
                compid="113:483"
                comptype="Row"
              >
                <Text
                  className="common-pointer font-medium my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                  compid="113:485"
                  comptype="Text"
                  onClick={handleNavigate7}
                >
                  Dashboard
                </Text>
                <Text
                  className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                  compid="113:487"
                  comptype="Text"
                  onClick={handleNavigate6}
                >
                  Dev.to Profile
                </Text>
                <Text
                  className="font-semibold mb-[1px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_50 w-[auto]"
                  compid="113:488"
                  comptype="Text"
                >
                  Medium Profile
                </Text>
              </Row>
              <Row
                className="bg-black_900 font-gilroy items-center justify-center lg:ml-[150px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[232px] lg:mr-[52px] xl:mr-[60px] 2xl:mr-[68px] 3xl:mr-[81px] w-[24%]"
                compid="113:489"
                comptype="Row"
              >
                <Button
                  className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
                  compid="113:490"
                  comptype="Button"
                  onClick={handleNavigate5}
                  variant="FillWhiteA700"
                >
                  Write on medium
                </Button>
                <Button
                  className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                  compid="113:492"
                  comptype="Button"
                  onClick={handleNavigate4}
                  variant="FillWhiteA700"
                >
                  Write on dev.to
                </Button>
              </Row>
            </Row>
          </header>
          <Column
            className="border border-bluegray_900 border-solid font-gilroy items-center lg:ml-[297px] xl:ml-[339px] 2xl:ml-[382px] 3xl:ml-[458px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[47%]"
            compid="113:500"
            comptype="Column"
          >
            <Img
              src={apiData3?.data?.imageUrl}
              className="lg:h-[123px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] rounded-radius50 lg:w-[122px] xl:w-[140px] 2xl:w-[158px] 3xl:w-[189px]"
              compid="113:502"
              comptype="Image"
              alt="EllipseOne"
            />
            <Text
              className="font-semibold lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_50 w-[auto]"
              compid="113:504"
              comptype="Text"
            >
              {apiData3?.data?.name}
            </Text>
            <Text
              className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]"
              compid="113:505"
              comptype="Text"
            >
              {apiData3?.data?.username}
            </Text>
          </Column>
          <Text
            className="font-gilroy font-semibold lg:ml-[300px] xl:ml-[343px] 2xl:ml-[386px] 3xl:ml-[463px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[auto]"
            compid="113:518"
            comptype="Text"
          >
            {apiData4?.data?.length} Publications
          </Text>
          <List
            className="font-gilroy gap-[0] min-h-[auto] lg:ml-[297px] xl:ml-[339px] 2xl:ml-[382px] 3xl:ml-[458px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[47%]"
            compid="30"
            comptype="List"
            orientation="vertical"
          >
            {apiData4?.data?.map((apiData4DataEle, index) => {
              return (
                <React.Fragment key={`apiData4DataEle${index}`}>
                  <Row
                    className="border border-bluegray_900 border-solid items-end lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[15px] rounded-radius8 w-[100%]"
                    compid="113:506"
                    comptype="Row"
                  >
                    <Img
                      src={apiData4DataEle?.imageUrl}
                      className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] mb-[3px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                      compid="113:507"
                      comptype="Image"
                      alt="EllipseTwo"
                    />
                    <Column
                      className="mb-[4px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"
                      compid="113:509"
                      comptype="Column"
                    >
                      <Text
                        className="font-bold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[auto]"
                        compid="113:510"
                        comptype="Text"
                      >
                        {apiData4DataEle?.name}
                      </Text>
                      <Text
                        className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_50 w-[auto]"
                        compid="113:511"
                        comptype="Text"
                      >
                        {apiData4DataEle?.description}
                      </Text>
                    </Column>
                  </Row>
                </React.Fragment>
              );
            })}
          </List>
          <Row
            className="bg-gray_902 font-spacegrotesk lg:mt-[242px] xl:mt-[277px] 2xl:mt-[100px] 3xl:mt-[374px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]"
            compid="113:521"
            comptype="Row"
          >
            <Column className="w-[29%] ml-[100px]" compid="63" comptype="Column">
              <Row
                className="items-end lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] w-[60%]"
                compid="113:159"
                comptype="Row"
              >
                <Img
                  src="images/img_rewind.svg"
                  className="rewind"
                  compid="113:523"
                  comptype="Image"
                  alt="rewind One"
                />
                <Text
                  className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                  compid="113:527"
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
              className="font-gilroy lg:mb-[30px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[46px] 2xl:ml-[129px] 3xl:ml-[154px] mt-[1px] w-[8%]"
              compid="113:528"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:529"
                comptype="Text"
              >
                Quick Links
              </Text>
              <Text
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:530"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:531"
                comptype="Text"
              >
                Dev.to Profile
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:532"
                comptype="Text"
              >
                Medium Profile
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:533"
                comptype="Text"
              >
                Write on Medium
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:534"
                comptype="Text"
              >
                Write on Dev.to
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[5%]"
              compid="113:535"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:536"
                comptype="Text"
              >
                Company
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:537"
                comptype="Text"
              >
                About
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:538"
                comptype="Text"
              >
                Careers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:539"
                comptype="Text"
              >
                Writers
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:540"
                comptype="Text"
              >
                Blog
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[9%]"
              compid="113:541"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:542"
                comptype="Text"
              >
                Help
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:543"
                comptype="Text"
              >
                FAQs
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:544"
                comptype="Text"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:545"
                comptype="Text"
              >
                Privacy Policy
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[8%]"
              compid="113:546"
              comptype="Column"
            >
              <Text
                className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]"
                compid="113:558"
                comptype="Text"
              >
                Connect on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]"
                compid="113:547"
                comptype="Image"
                alt="GroupNinetyFour"
              />
            </Column>
          </Row>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default MediumProfilePage;
