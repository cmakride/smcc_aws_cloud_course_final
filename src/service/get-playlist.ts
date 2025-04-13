import axios from "axios";
import { PlaylistForm } from "../routes/getPlaylist.tsx";

export default async function getPlaylist({
  stars,
  user,
  genre,
}: PlaylistForm) {
  const response = await axios.get(
    `https://${import.meta.env.VITE_AWS_GATEWAY_ID}.execute-api.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${import.meta.env.VITE_AWS_STAGE_NAME}/${user}/${genre}/${stars}`,
  );
  return response.data;
}
