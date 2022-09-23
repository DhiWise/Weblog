import React from "react";

import { Column, Row, Text, Button, Input, TextArea } from "components";
import { postArticles } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/useForm";
import * as yup from "yup";
import * as Content_format from "constants/Content_format";
import _ from "lodash";

const WriteondevtoPage = () => {
  const [apiData2, setapiData2] = React.useState();
  const formValidationSchema = yup.object().shape({
    article: yup.object().shape({
      title: yup.string().required("Title is required"),
      ["body_markdown"]: yup.string().required("Body_markdown is required"),
    }),
  });
  const form = useForm(
    { article: { title: "", body_markdown: "", tags: "", canonical_url: "" } },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi2(data) {
    const req = { data: { ...data } };
    _.set(req.data, "article.published", Content_format.published);
    postArticles(req)
      .then((res) => {
        setapiData2(res);

        toast.success("Article posted Successfully.");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened!");
      });
  }
  function handleBackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <Column
        className="bg-gray_50 font-gilroy items-center mx-[auto] w-[100%]"
        compid="113:589"
        comptype="Column"
      >
        <Column
          className="bg-black_900 items-center lg:pb-[38px] xl:pb-[44px] 2xl:pb-[50px] 3xl:pb-[60px] w-[100%]"
          compid="113:590"
          comptype="Column"
        >
          <header className="w-[100%]" compid="4" comptype="Header">
            <Row
              className="border border-bluegray_900 border-solid items-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]"
              compid="113:592"
              comptype="Row"
            >
              <Text
                className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_50 w-[auto]"
                compid="113:597"
                comptype="Text"
              >
                Write on dev.to
              </Text>
              <Button
                className="common-pointer font-medium mb-[1px] 2xl:ml-[1037px] 3xl:ml-[1245px] lg:ml-[806px] xl:ml-[922px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
                compid="113:599"
                comptype="Button"
                onClick={handleBackNavigation}
                variant="OutlineBluegray50"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer font-medium mb-[1px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
                compid="113:601"
                comptype="Button"
                onClick={() => {
                  form.handleSubmit(callApi2);
                }}
                variant="FillWhiteA700"
              >
                Publish
              </Button>
            </Row>
          </header>
          <Row
            className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[96%]"
            compid="33"
            comptype="Row"
          >
            <Column
              className="items-center w-[68%]"
              compid="31"
              comptype="Column"
            >
              <Input
                className="font-medium p-[0] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                wrapClassName="w-[97%]"
                compid="113:603"
                comptype="EditText"
                onChange={(e) => {
                  form.handleChange("article.title", e.target.value);
                }}
                errors={form?.errors?.article?.title}
                value={form?.values?.article?.title}
                name="Frame9881"
                placeholder="Title"
              ></Input>
              <TextArea
                className="font-medium h-[32rem] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[23px] lg:text-[15px] xl:text-[20px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 w-[97%]"
                compid="113:606"
                comptype="EditText"
                name="Tellyourstory"
                onChange={(e) => {
                  form.handleChange("article.body_markdown", e.target.value);
                }}
                errors={form?.errors?.article?.["body_markdown"]}
                value={form?.values?.article?.["body_markdown"]}
                placeholder="Enter the description of the article"
                size="sm"
              ></TextArea>
            </Column>
            <Column
              className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[32%]"
              compid="32"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]"
                compid="113:612"
                comptype="Text"
              >
                Add tags
              </Text>
              <TextArea
                className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                compid="113:613"
                comptype="TextArea"
                onChange={(e) => {
                  form.handleChange("article.tags", e.target.value);
                }}
                value={form?.values?.article?.tags}
                name="Frame9883"
                placeholder="Add tags "
              ></TextArea>
              <Text
                className="font-medium lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]"
                compid="113:608"
                comptype="Text"
              >
                Canonical link
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[10px] w-[100%] xl:mt-[11px]"
                compid="113:609"
                comptype="EditText"
                onChange={(e) => {
                  form.handleChange("article.canonical_url", e.target.value);
                }}
                value={form?.values?.article?.["canonical_url"]}
                name="Frame9884"
                placeholder="Add canonical link here"
                size="sm"
              ></Input>
            </Column>
          </Row>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default WriteondevtoPage;
