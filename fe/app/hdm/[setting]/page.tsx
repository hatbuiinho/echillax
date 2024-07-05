"use client";
import DynamicFormField from "@/components/form/DynamicFormField";
import {
  MemberFormValue,
  initTouched,
  initialMemberFormValue,
  memberFormConfig,
} from "@/config/memberFormConfig";
import { memberFormSchemas } from "@/config/memberFormValidation";
import { createMember } from "@/services/memberService";
import { useSettings } from "@/stores/settings";
import { getFileLinkFromDirectus } from "@/utils/directus";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import clsx from "clsx";
import { Form, FormikProvider, useFormik } from "formik";
import { useParams } from "next/navigation";
import { useState } from "react";
import useSWRImmutable from "swr/immutable";
import { toFormikValidationSchema } from "zod-formik-adapter";

export default function AboutPage() {
  const { fetchSettings, org, coverId } = useSettings();
  const { setting } = useParams<{ setting: string }>();
  const [sectionIndex, setSectionIndex] = useState(0);

  const formik = useFormik<MemberFormValue>({
    initialValues: initialMemberFormValue,
    validationSchema: toFormikValidationSchema(memberFormSchemas[sectionIndex]),
    onSubmit: async (value) => {
      if (sectionIndex == memberFormConfig.length - 1) {
        await submit(value);
      } else {
        handleNext();
      }
    },
  });
  const handleNext = () => {
    formik.setTouched(initTouched);
    if (sectionIndex < memberFormConfig.length - 1) {
      setSectionIndex((old) => old + 1);
    }
  };
  const handleBack = () => {
    if (sectionIndex > 0) {
      setSectionIndex((old) => old - 1);
    }
  };

  const fetcher = async (settingId: string) => {
    if (settingId) {
      await fetchSettings(settingId);
    }
  };
  const { isLoading } = useSWRImmutable(setting, fetcher);

  console.log("formik", formik.touched);

  const submit = async (value: MemberFormValue) => {
    if (org?.Id) {
      value.CtnId = org?.Id;
    }
    await createMember(value);
  };

  return (
    <FormikProvider value={formik}>
      <>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="pt-2">
            <div className="mb-2 rounded-lg bg-primary-100  p-2 font-bold">
              {org?.Name}
            </div>

            <div className="mb-4">
              {coverId && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="rounded-lg"
                  src={getFileLinkFromDirectus({ id: coverId })}
                  alt="Cover"
                />
              )}
            </div>
          </div>
        )}
        <Form noValidate className={clsx({ hidden: isLoading })}>
          {memberFormConfig.map((section, index) => {
            const { hasBack, hasNext, hasSubmit } = section;
            return (
              <div
                key={section.id}
                className={clsx("mb-5", {
                  hidden: index != sectionIndex,
                })}
              >
                <Card
                  className="mb-2 border-t-5 border-primary-500 py-4"
                  key={section.title}
                >
                  <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                    <h2 className="font-bold uppercase">{section.title}</h2>
                    <p className="text-default-500">{section.description}</p>
                  </CardHeader>
                </Card>

                <div className="-mx-2 flex flex-wrap">
                  {section.formQuestions.map((question) => {
                    const { width } = question;
                    return (
                      <div
                        key={question.name}
                        className={clsx("mb-2 px-2", {
                          "basis-1/2": width == "1/2",
                          "basis-full": !width || width === "full",
                        })}
                      >
                        <Card className="h-full">
                          <CardHeader>
                            <h4 className="font-bold">{question.label}</h4>
                          </CardHeader>
                          <CardBody>
                            <DynamicFormField
                              type={question.type}
                              fieldProps={{
                                ...question,
                              }}
                            />
                          </CardBody>
                        </Card>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-start gap-3">
                  {hasBack && <Button onClick={handleBack}>Quay lại</Button>}
                  {hasNext && (
                    <Button color="primary" type="submit">
                      Tiếp
                    </Button>
                  )}
                  {hasSubmit && (
                    <Button color="primary" type="submit">
                      Gửi
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </Form>
      </>
    </FormikProvider>
  );
}
