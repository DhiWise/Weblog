import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Input,
  TextArea,
  SelectBox,
} from "components";
import { postPosts } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/useForm";
import * as yup from "yup";
import * as Content_format from "constants/Content_format";

const WriteonmediumPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      title: yup.string().required("Title is required"),
      content: yup.string().required("Content is required"),
      contentFormat: yup.string().required("ContentFormat is required"),
    });
  const form = useForm(
    { title: "", content: "", contentFormat: "", canonicalUrl: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi1(data) {
    const req = {
      data: { ...data, publishStatus: Content_format.publishStatus },
    };

    postPosts(req)
      .then((res) => {
        setapiData1(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened");
      });
  }
  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column
        className="bg-gray_50 font-gilroy items-center mx-[auto] w-[100%]"
        compid="113:559"
        comptype="Column"
      >
        <Column
          className="bg-black_900 items-center lg:pb-[38px] xl:pb-[44px] 2xl:pb-[50px] 3xl:pb-[60px] w-[100%]"
          compid="113:560"
          comptype="Column"
        >
          <header className="w-[100%]" compid="5" comptype="Header">
            <Row
              className="border border-bluegray_900 border-solid items-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]"
              compid="113:562"
              comptype="Row"
            >
              <Text
                className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[auto]"
                compid="113:567"
                comptype="Text"
              >
                Write on medium
              </Text>
              <Button
                className="common-pointer font-medium mb-[1px] 2xl:ml-[1018px] 3xl:ml-[1222px] lg:ml-[791px] xl:ml-[905px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
                compid="113:569"
                comptype="Button"
                onClick={handleBackNavigation}
                variant="OutlineBluegray50"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer font-medium mb-[1px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
                compid="113:571"
                comptype="Button"
                onClick={() => {
                  form.handleSubmit(callApi1);
                }}
                variant="FillWhiteA700"
              >
                Publish
              </Button>
            </Row>
          </header>
          <Row
            className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[96%]"
            compid="37"
            comptype="Row"
          >
            <Column
              className="items-center w-[68%]"
              compid="35"
              comptype="Column"
            >
              <Input
                className="font-medium p-[0] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                wrapClassName="w-[97%]"
                compid="113:573"
                comptype="EditText"
                onChange={(e) => {
                  form.handleChange("title", e.target.value);
                }}
                errors={form?.errors?.title}
                value={form?.values?.title}
                name="Frame9881"
                placeholder="Title"
              ></Input>
               <TextArea
                className="font-medium h-[32rem] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[23px] lg:text-[15px] xl:text-[20px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 w-[97%]"
                compid="113:576"
                comptype="EditText"
                name="Tellyourstory"
                onChange={(e) => {
                  form.handleChange("content", e.target.value);
                }}
                errors={form?.errors?.content}
                value={form?.values?.content}
                placeholder="Enter the description of the article"
                size="sm"
              ></TextArea>
            </Column>
            <Column
              className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[32%]"
              compid="36"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]"
                compid="113:578"
                comptype="Text"
              >
                Add tags
              </Text>
              <TextArea
                className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                compid="113:579"
                comptype="TextArea"
                name="Frame9883"
                placeholder="Add tags "
              ></TextArea>
              <Text
                className="font-medium lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]"
                compid="113:582"
                comptype="Text"
              >
                Canonical link
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[10px] w-[100%] xl:mt-[11px]"
                compid="113:583"
                comptype="EditText"
                onChange={(e) => {
                  form.handleChange("canonicalUrl", e.target.value);
                }}
                value={form?.values?.canonicalUrl}
                name="Frame9884"
                placeholder="Add canonical link here"
                size="sm"
              ></Input>
              <SelectBox
                className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[100%]"
                compid="113:585"
                comptype="Dropdown"
                onChange={(e) => {
                  form.handleChange("contentFormat", e);
                }}
                errors={form?.errors?.contentFormat}
                value={form?.values?.contentFormat}
                placeholderClassName="text-bluegray_600"
                name="Dropdown"
                placeholder="Select content format"
                isSearchable={true}
                isMulti={false}
              ></SelectBox>
            </Column>
          </Row>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default WriteonmediumPage;
