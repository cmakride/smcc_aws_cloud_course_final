import axios from "axios";

export default async function put<TResponse = void, TData = unknown>({
  data,
  urlSuffix,
}: {
  data: TData;
  urlSuffix: string;
}) {
  const url = `https://${import.meta.env.VITE_AWS_GATEWAY_ID}.execute-api.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${import.meta.env.VITE_AWS_STAGE_NAME}/${urlSuffix}`;
  const x = await axios.put<TResponse>(url, data);
  return x.data;
}
