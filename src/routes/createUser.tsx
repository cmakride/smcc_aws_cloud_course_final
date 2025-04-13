import { createFileRoute } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import put from "../api/put.ts";
import { Reason } from "../api/reason.ts";
import Button from "@mui/material/Button";
import { string } from "yup";
import TextInputConnectedToForm from "../components/form/text-input-connected-to-form.tsx";
import { Stack } from "@mui/material";
import { useState } from "react";
import ResponseDisplay from "../components/response-display.tsx";

interface UserForm {
  username: string;
  email: string;
  name: string;
}

export const Route = createFileRoute("/createUser")({
  component: RouteComponent,
});

function RouteComponent() {
  const [userResponse, setUserResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formMethods = useForm<UserForm>({
    mode: "all",
    resolver: yupResolver(
      yup.object().shape({
        username: string().required(),
        email: string().required(),
        name: string().required(),
      }),
    ),
    defaultValues: {},
  });
  const { handleSubmit, watch } = formMethods;
  const values = watch();
  const handleError = (errors: any) => {
    console.log("Submission had the following errors: ", errors);
  };
  const onSubmit = async () => {
    setIsLoading(true);
    await put<UserForm>({
      urlSuffix: "users",
      data: values,
    })
      .then((data) => {
        console.log("SUBMITTED: ", values);
        console.log("RESPONSE", data);
        setUserResponse(data);
      })
      .catch((reason: Reason) => {
        console.log("error submitting form ", reason);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit, handleError)} noValidate>
        <Stack gap={4} direction="column">
          <TextInputConnectedToForm<UserForm>
            name="username"
            label="UserName"
          />
          <TextInputConnectedToForm<UserForm> name="email" label="Email" />
          <TextInputConnectedToForm<UserForm> name="name" label="Name" />
          <Button type="submit" variant="contained" disabled={isLoading}>
            Submit
          </Button>
          <ResponseDisplay response={userResponse} />
        </Stack>
      </form>
    </FormProvider>
  );
}
