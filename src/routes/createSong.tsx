import { createFileRoute } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { string } from "yup";
import put from "../api/put.ts";
import { Reason } from "../api/reason.ts";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import TextInputConnectedToForm from "../components/form/text-input-connected-to-form.tsx";
import NumberInputConnectedToForm from "../components/form/number-input-connected-to-form.tsx";
import { useState } from "react";
import ResponseDisplay from "../components/response-display.tsx";

interface SongForm {
  username: string;
  genre: string;
  id: string;
  stars: string;
}

export const Route = createFileRoute("/createSong")({
  component: RouteComponent,
});

function RouteComponent() {
  const [songResponse, setSongResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formMethods = useForm<SongForm>({
    mode: "all",
    resolver: yupResolver(
      yup.object().shape({
        username: string().required(),
        genre: string().required(),
        id: string().required(),
        stars: string().required(),
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
    await put<SongForm>({
      urlSuffix: "songs",
      data: { ...values, stars: Number(values.stars) },
    })
      .then((data) => {
        console.log("SUBMITTED: ", values);
        console.log("RESPONSE", data);
        setSongResponse(data);
      })
      .catch((reason: Reason) => {
        console.log("error submitting form ", reason);
      }).finally(() => setIsLoading(false));
  };
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit, handleError)} noValidate>
        <Stack gap={4} direction="column">
          <TextInputConnectedToForm<SongForm>
            name="username"
            label="UserName"
          />
          <TextInputConnectedToForm<SongForm> name="genre" label="Genre" />
          <TextInputConnectedToForm<SongForm> name="id" label="ID" />
          <NumberInputConnectedToForm<SongForm> name="stars" label="Stars" />
          <Button type="submit" variant="outlined" disabled={isLoading}>
            Submit
          </Button>
          <ResponseDisplay response={songResponse} />
        </Stack>
      </form>
    </FormProvider>
  );
}
