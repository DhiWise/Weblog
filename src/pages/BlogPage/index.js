import React from "react";

import { Column, Row, Img, Text, Button, List } from "components";
import { useLocation, useNavigate } from "react-router-dom";
import { getArticles, getLatestperpage3 } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogPagePage = () => {
  const [apiData7, setapiData7] = React.useState();
  const [apiData8, setapiData8] = React.useState();
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi7();
  }, []);

  function callApi8() {
    const req = { params: { per_page: "3" } };

    getLatestperpage3(req)
      .then((res) => {
        setapiData8(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }
  function callApi7() {
    const req = { path: { id: location?.state?.id } };

    getArticles(req)
      .then((res) => {
        setapiData7(res);

        callApi8();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate10() {
    navigate("/writeondevto");
  }
  function handleNavigate11() {
    navigate("/writeonmedium");
  }
  function handleNavigate12() {
    navigate("/mediumprofile");
  }
  function handleNavigate13() {
    navigate("/devtoprofile");
  }
  function handleNavigate14() {
    navigate("/");
  }

  return (
    <>
      <Column
        className="bg-black_900 items-center mx-[auto] w-[100%]"
        compid="113:329"
        comptype="Column"
      >
        <Column
          className="bg-black_900 w-[100%]"
          compid="113:330"
          comptype="Column"
        >
          <header className="w-[100%]" compid="6" comptype="Header">
            <Row
              className="border border-bluegray_900 border-solid items-center justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]"
              compid="113:332"
              comptype="Row"
            >
              <Img
                src="images/img_rewind.svg"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] my-[1px] w-[4%]"
                compid="113:346"
                comptype="Image"
                alt="rewind"
              />
              <Text
                className="common-pointer font-medium font-spacegrotesk lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                compid="113:350"
                comptype="Text"
                onClick={handleNavigate14}
              >
                Weblog
              </Text>
              <Text
                className="font-gilroy font-semibold lg:ml-[168px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_50 w-[auto]"
                compid="113:336"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Text
                className="common-pointer font-gilroy font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                compid="113:338"
                comptype="Text"
                onClick={handleNavigate13}
              >
                Dev.to Profile
              </Text>
              <Text
                className="common-pointer font-gilroy font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]"
                compid="113:339"
                comptype="Text"
                onClick={handleNavigate12}
              >
                Medium Profile
              </Text>
              <Row
                className="bg-black_900 font-gilroy items-center justify-center lg:ml-[151px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] lg:mr-[52px] xl:mr-[60px] 2xl:mr-[68px] 3xl:mr-[81px] w-[24%]"
                compid="113:340"
                comptype="Row"
              >
                <Button
                  className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
                  compid="113:341"
                  comptype="Button"
                  onClick={handleNavigate11}
                  variant="FillWhiteA700"
                >
                  Write on medium
                </Button>
                <Button
                  className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                  compid="113:343"
                  comptype="Button"
                  onClick={handleNavigate10}
                  variant="FillWhiteA700"
                >
                  Write on dev.to
                </Button>
              </Row>
            </Row>
          </header>
          <Img
            src={apiData7?.["social_image"]}
            className="lg:h-[389px] xl:h-[445px] 2xl:h-[501px] 3xl:h-[601px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] rounded-radius20 w-[88%]"
            compid="113:351"
            comptype="Image"
            alt="Frame9881"
          />
          <Text
            className="font-light font-publicsans 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]"
            compid="113:353"
            comptype="Text"
          >
            <span className="text-bluegray_300 font-gilroy font-normal not-italic">
              Category
            </span>
            <span className="text-black_901"> </span>
            <span className="text-bluegray_50 font-gilroy font-bold tracking-ls1">
              Writing
            </span>
          </Text>
          <Text
            className="font-gilroy font-semibold 3xl:ml-[106px] lg:ml-[69px] xl:ml-[145px] 2xl:ml-[89px] lg:mt-[39px] xl:mt-[10px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px] text-gray_50 w-[auto]"
            compid="113:352"
            comptype="Text"
          >
            {apiData7?.title}
          </Text>
          <Row
            className="font-publicsans justify-center lg:ml-[178px] xl:ml-[80px] 2xl:ml-[230px] 3xl:ml-[276px] lg:mt-[52px] xl:mt-[25px] 2xl:mt-[68px] 3xl:mt-[81px] w-[68%]"
            compid="113:354"
            comptype="Row"
          >
            <Img
              src={apiData7?.user?.["profile_image"]}
              className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
              compid="I113:356;139:669"
              comptype="Image"
              alt="ProfileImgLarg"
            />
            <Column
              className="font-gilroy lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[70%]"
              compid="113:357"
              comptype="Column"
            >
              <Text
                className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_50 w-[auto]"
                compid="113:358"
                comptype="Text"
              >
                {apiData7?.user?.name}
              </Text>
              <Text
                className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="113:359"
                comptype="Text"
              >
                {apiData7?.["readable_publish_date"]}
              </Text>
            </Column>
          </Row>
          <Text
            className="font-gilroy font-medium lg:leading-[27px] xl:leading-[31px] 2xl:leading-[35px] 3xl:leading-[42px] lg:ml-[187px] xl:ml-[180px] 2xl:ml-[241px] 3xl:ml-[289px] lg:mt-[51px] xl:mt-[30px] 2xl:mt-[66px] 3xl:mt-[79px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[75%]"
            compid="113:366"
            comptype="Text"
          >
            <div
              dangerouslySetInnerHTML={{ __html: apiData7?.["body_html"] }}
            ></div>
          </Text>
          <Text
            className="font-gilroy font-medium lg:ml-[188px] xl:ml-[215px] 2xl:ml-[242px] 3xl:ml-[290px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_50 w-[auto]"
            compid="113:388"
            comptype="Text"
          >
            Tags
          </Text>
          <Row
            className="font-gilroy items-center lg:ml-[188px] xl:ml-[215px] 2xl:ml-[242px] 3xl:ml-[290px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[35%]"
            compid="113:389"
            comptype="Row"
          >
            {apiData7?.tags?.map((tag) => {
              return (
                <Button
                  className="font-medium lg:text-[14px] ml-[15px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[auto]"
                  compid="113:390"
                  comptype="Button"
                >
                  {tag}
                </Button>
              );
            })}
          </Row>
          <Row
            className="font-gilroy items-center justify-center lg:ml-[459px] xl:ml-[525px] 2xl:ml-[591px] 3xl:ml-[709px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[18%]"
            compid="113:400"
            comptype="Row"
          >
            <Img
              src={apiData7?.user?.["profile_image"]}
              className="lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] rounded-radius50 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
              compid="I113:401;139:669"
              comptype="Image"
              alt="ProfileImgLarg One"
            />
            <Column
              className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[67%]"
              compid="113:402"
              comptype="Column"
            >
              <Text
                className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_50 w-[auto]"
                compid="113:403"
                comptype="Text"
              >
                {apiData7?.user?.name}
              </Text>
              <Text
                className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="113:404"
                comptype="Text"
              >
                {apiData7?.user?.username}
              </Text>
            </Column>
          </Row>
          <Text
            className="font-gilroy font-semibold lg:ml-[141px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] xl:mt-[107px] 2xl:mt-[121px] 3xl:mt-[145px] lg:mt-[94px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_50 w-[auto]"
            compid="113:437"
            comptype="Text"
          >
            More Like these
          </Text>
          <List
            className="font-gilroy lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:ml-[141px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[75%]"
            compid="113:406"
            comptype="List"
            orientation="horizontal"
          >
            {apiData8?.map((apiData8ResponseEle, index) => {
              return (
                <React.Fragment key={`apiData8ResponseEle${index}`}>
                  <Column
                    className="bg-gray_900 border border-bluegray_900 border-solid 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius23 w-[100%]"
                    compid="113:407"
                    comptype="Column"
                  >
                    <Img
                      src={apiData8ResponseEle?.["social_image"]}
                      className="lg:h-[207px] xl:h-[236px] 2xl:h-[266px] 3xl:h-[319px] rounded-radius12 w-[100%]"
                      compid="113:408"
                      comptype="Image"
                      alt="placeholder"
                    />
                    <Text
                      className="font-bold lg:leading-[25px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[77%]"
                      compid="113:410"
                      comptype="Text"
                    >
                      {apiData8ResponseEle?.title}
                    </Text>
                    <Text
                      className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[95%]"
                      compid="113:411"
                      comptype="Text"
                    >
                      {apiData8ResponseEle?.description}
                    </Text>
                    <Row
                      className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
                      compid="113:412"
                      comptype="Row"
                    >
                      <Img
                        src={apiData8ResponseEle?.user?.["profile_image"]}
                        className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                        compid="I113:414;139:669"
                        comptype="Image"
                        alt="ProfileImgLarg Two"
                      />
                      <Text
                        className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]"
                        compid="113:415"
                        comptype="Text"
                      >
                        {apiData8ResponseEle?.user?.name}
                      </Text>
                      <Text
                        className="font-medium lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_50 w-[auto]"
                        compid="113:416"
                        comptype="Text"
                      >
                        {apiData8ResponseEle?.["readable_publish_date"]}
                      </Text>
                    </Row>
                  </Column>
                </React.Fragment>
              );
            })}
          </List>
          <Row
            className="bg-gray_902 font-spacegrotesk xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]"
            compid="113:440"
            comptype="Row"
          >
            <Column
              className="w-[29%] ml-[100px]"
              compid="63"
              comptype="Column"
            >
              <Row
                className="items-end lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] w-[60%]"
                compid="113:159"
                comptype="Row"
              >
                <Img
                  src="images/img_rewind.svg"
                  className="rewind"
                  compid="113:442"
                  comptype="Image"
                  alt="rewind One"
                />
                <Text
                  className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                  compid="113:446"
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
              compid="113:447"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:448"
                comptype="Text"
              >
                Quick Links
              </Text>
              <Text
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:449"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:450"
                comptype="Text"
              >
                Dev.to Profile
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:451"
                comptype="Text"
              >
                Medium Profile
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:452"
                comptype="Text"
              >
                Write on Medium
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:453"
                comptype="Text"
              >
                Write on Dev.to
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[5%]"
              compid="113:454"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:455"
                comptype="Text"
              >
                Company
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:456"
                comptype="Text"
              >
                About
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:457"
                comptype="Text"
              >
                Careers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:458"
                comptype="Text"
              >
                Writers
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:459"
                comptype="Text"
              >
                Blog
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] mt-[3px] w-[9%]"
              compid="113:460"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]"
                compid="113:461"
                comptype="Text"
              >
                Help
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:462"
                comptype="Text"
              >
                FAQs
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:463"
                comptype="Text"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                compid="113:464"
                comptype="Text"
              >
                Privacy Policy
              </Text>
            </Column>
            <Column
              className="font-gilroy xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[8%]"
              compid="113:465"
              comptype="Column"
            >
              <Text
                className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]"
                compid="113:477"
                comptype="Text"
              >
                Connect on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]"
                compid="113:466"
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

export default BlogPagePage;
