import { createFileRoute } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { string } from "yup";
import { Reason } from "../api/reason.ts";
import Button from "@mui/material/Button";
import getPlaylist from "../service/get-playlist.ts";
import TextInputConnectedToForm from "../components/form/text-input-connected-to-form.tsx";
import NumberInputConnectedToForm from "../components/form/number-input-connected-to-form.tsx";
import { Stack } from "@mui/material";
import { useState } from "react";
import ResponseDisplay from "../components/response-display.tsx";

export interface PlaylistForm {
  user: string;
  genre: string;
  stars: string;
}

export const Route = createFileRoute("/getPlaylist")({
  component: RouteComponent,
});

function RouteComponent() {
  const [playlistResponse, setPlaylistResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formMethods = useForm<PlaylistForm>({
    mode: "all",
    resolver: yupResolver(
      yup.object().shape({
        user: string().required(),
        genre: string().required(),
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
    await getPlaylist(values)
      .then((data: any) => {
        console.log("SUBMITTED: ", values);
        console.log("RESPONSE", data);
        setPlaylistResponse(data);
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
          <TextInputConnectedToForm<PlaylistForm> name="user" label="User" />
          <TextInputConnectedToForm<PlaylistForm> name="genre" label="Genre" />
          <NumberInputConnectedToForm<PlaylistForm>
            name="stars"
            label="Stars"
          />
          <Button type="submit" variant="outlined" disabled={isLoading}>
            Submit
          </Button>
          <ResponseDisplay response={playlistResponse} />
        </Stack>
      </form>
    </FormProvider>
  );
}
