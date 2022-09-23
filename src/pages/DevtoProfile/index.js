import React from "react";

import { Column, Row, Img, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";
import { getMe, getMe1, getMe2 } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DevtoProfilePage = () => {
  const [apiData5, setapiData5] = React.useState();
  const [apiData6, setapiData6] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi5();
  }, []);

  function callApi6() {
    const req = {};

    getMe1(req)
      .then((res) => {
        setapiData6(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }
  function callApi5() {
    const req = {};

    getMe2(req)
      .then((res) => {
        setapiData5(res);

        callApi6();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }
  function handleNavigate8(id) {
    navigate("/blogpage", { state: { id: id } });
  }
  function handleNavigate16() {
    navigate("/");
  }
  function handleNavigate18() {
    navigate("/mediumprofile");
  }
  function handleNavigate19() {
    navigate("/writeonmedium");
  }
  function handleNavigate20() {
    navigate("/writeondevto");
  }
  function handleNavigate25() {
    navigate("/");
  }

  return (
    <>
      <Column
        className="bg-gray_50 items-center mx-[auto] w-[100%]"
        compid="113:233"
        comptype="Column"
      >
        <Column
          className="bg-black_900 w-[100%]"
          compid="113:234"
          comptype="Column"
        >
          <header
            className="font-spacegrotesk w-[100%]"
            compid="2"
            comptype="Header"
          >
            <Row
              className="bg-black_900 border border-bluegray_900 border-solid items-center justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
              compid="113:236"
              comptype="Row"
            >
              <Img
                src="images/img_rewind.svg"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] my-[1px] w-[4%]"
                compid="113:250"
                comptype="Image"
                alt="rewind"
              />
              <Text
                className="common-pointer font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                compid="113:254"
                comptype="Text"
                onClick={handleNavigate16}
              >
                Weblog
              </Text>
              <Row
                className="bg-black_900 font-gilroy justify-center lg:ml-[168px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] py-[4px] w-[24%]"
                compid="113:238"
                comptype="Row"
              >
                <Text
                  className="common-pointer font-medium my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                  compid="113:240"
                  comptype="Text"
                  onClick={handleNavigate25}
                >
                  Dashboard
                </Text>
                <Text
                  className="font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] my-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_50 w-[auto]"
                  compid="113:242"
                  comptype="Text"
                >
                  Dev.to Profile
                </Text>
                <Text
                  className="common-pointer font-medium mb-[1px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                  compid="113:243"
                  comptype="Text"
                  onClick={handleNavigate18}
                >
                  Medium Profile
                </Text>
              </Row>
              <Row
                className="bg-black_900 font-gilroy items-center justify-center lg:ml-[150px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[232px] lg:mr-[52px] xl:mr-[60px] 2xl:mr-[68px] 3xl:mr-[81px] w-[24%]"
                compid="113:244"
                comptype="Row"
              >
                <Button
                  className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
                  compid="113:245"
                  comptype="Button"
                  onClick={handleNavigate19}
                  variant="FillWhiteA700"
                >
                  Write on medium
                </Button>
                <Button
                  className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                  compid="113:247"
                  comptype="Button"
                  onClick={handleNavigate20}
                  variant="FillWhiteA700"
                >
                  Write on dev.to
                </Button>
              </Row>
            </Row>
          </header>
          <Column
            className="border border-bluegray_900 border-solid font-gilroy items-center lg:ml-[297px] xl:ml-[339px] 2xl:ml-[382px] 3xl:ml-[458px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[47%]"
            compid="113:255"
            comptype="Column"
          >
            <Img
              src={apiData5?.["profile_image"]}
              className="lg:h-[123px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[190px] rounded-radius50 lg:w-[122px] xl:w-[140px] 2xl:w-[158px] 3xl:w-[189px]"
              compid="113:257"
              comptype="Image"
              alt="EllipseOne"
            />
            <Text
              className="font-semibold lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_50 w-[auto]"
              compid="113:259"
              comptype="Text"
            >
              {apiData5?.name}
            </Text>
            <Text
              className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]"
              compid="113:260"
              comptype="Text"
            >
              {apiData5?.username}
            </Text>
            <Row
              className="items-center ml-[130px] lg:mt-[19px] xl:mt-[15px] 2xl:mt-[25px] 3xl:mt-[30px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[73%]"
              compid="113:261"
              comptype="Row"
            >
              <Text
                className="font-medium my-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]"
                compid="113:262"
                comptype="Text"
              >
                Joined At {apiData5?.["joined_at"]}
              </Text>
              <Img
                src="images/img_volume.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] w-[5%]"
                compid="I113:265;120:1156"
                comptype="Image"
                alt="volume"
              />
              <Text
                className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]"
                compid="113:264"
                comptype="Text"
              >
                {apiData5?.["github_username"]}
              </Text>
            </Row>
          </Column>
          <Text
            className="font-gilroy font-semibold lg:ml-[297px] xl:ml-[340px] 2xl:ml-[383px] 3xl:ml-[459px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[auto]"
            compid="113:288"
            comptype="Text"
          >
            My Articles
          </Text>
          <List
            className="font-gilroy gap-[0] min-h-[auto] lg:ml-[297px] xl:ml-[339px] 2xl:ml-[382px] 3xl:ml-[458px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[47%]"
            compid="29"
            comptype="List"
            orientation="vertical"
          >
            {apiData6?.map((apiData6ResponseEle, index) => {
              return (
                <React.Fragment key={`apiData6ResponseEle${index}`}>
                  <Row
                    className="common-pointer bg-gray_900 border border-bluegray_900 border-solid items-center lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius8 w-[100%]"
                    compid="113:266"
                    comptype="Row"
                    onClick={() => handleNavigate8(apiData6ResponseEle?.id)}
                  >
                    <Img
                      src={apiData6ResponseEle?.["cover_image"]}
                      className="lg:h-[165px] xl:h-[189px] 2xl:h-[213px] 3xl:h-[255px] rounded-radius12 w-[47%]"
                      compid="113:267"
                      comptype="Image"
                      alt="placeholder"
                    />
                    <Column
                      className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[49%]"
                      compid="113:268"
                      comptype="Column"
                    >
                      <Text
                        className="font-bold lg:leading-[25px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[77%]"
                        compid="113:270"
                        comptype="Text"
                      >
                        {apiData6ResponseEle?.title}
                      </Text>
                      <Text
                        className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[95%]"
                        compid="113:271"
                        comptype="Text"
                      >
                        {apiData6ResponseEle?.description}
                      </Text>
                      <Row
                        className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]"
                        compid="113:272"
                        comptype="Row"
                      >
                        <Img
                          src={apiData6ResponseEle?.user?.["profile_image"]}
                          className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                          compid="I113:274;139:669"
                          comptype="Image"
                          alt="ProfileImgLarg"
                        />
                        <Text
                          className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]"
                          compid="113:275"
                          comptype="Text"
                        >
                          {apiData6ResponseEle?.user?.name}
                        </Text>
                        <Text
                          className="font-medium lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]"
                          compid="113:276"
                          comptype="Text"
                        >
                          {apiData6ResponseEle?.user?.username}
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </React.Fragment>
              );
            })}
          </List>
          <Row
            className="bg-gray_902 font-spacegrotesk xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]"
            compid="113:291"
            comptype="Row"
          >
            <Column className="w-[29%] ml-[80px]" compid="63" comptype="Column">
              <Row
                className="items-end lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] w-[60%]"
                compid="113:159"
                comptype="Row"
              >
                <Img
                  src="images/img_rewind.svg"
                  className="rewind"
                  compid="113:293"
                  comptype="Image"
                  alt="rewind One"
                />
                <Text
                  className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                  compid="113:297"
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
              compid="113:298"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:299"
                comptype="Text"
              >
                Quick Links
              </Text>
              <Text
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:300"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:301"
                comptype="Text"
              >
                Dev.to Profile
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:302"
                comptype="Text"
              >
                Medium Profile
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:303"
                comptype="Text"
              >
                Write on Medium
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:304"
                comptype="Text"
              >
                Write on Dev.to
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[5%]"
              compid="113:305"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:306"
                comptype="Text"
              >
                Company
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:307"
                comptype="Text"
              >
                About
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:308"
                comptype="Text"
              >
                Careers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:309"
                comptype="Text"
              >
                Writers
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:310"
                comptype="Text"
              >
                Blog
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[9%]"
              compid="113:311"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:312"
                comptype="Text"
              >
                Help
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:313"
                comptype="Text"
              >
                FAQs
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:314"
                comptype="Text"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:315"
                comptype="Text"
              >
                Privacy Policy
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[8%]"
              compid="113:316"
              comptype="Column"
            >
              <Text
                className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]"
                compid="113:328"
                comptype="Text"
              >
                Connect on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]"
                compid="113:317"
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

export default DevtoProfilePage;
