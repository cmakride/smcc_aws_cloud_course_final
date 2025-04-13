import { Box, Typography } from "@mui/material";

export default function ResponseDisplay({ response }: { response: any }) {
  if (Boolean(response)) {
    return (
      <>
        <Typography variant="h2" gutterBottom>
          Response
        </Typography>
        <Box
          component="pre"
          sx={{
            backgroundColor: "#f5f5f5",
            padding: 2,
            borderRadius: 1,
            overflow: "auto",
          }}
        >
          {JSON.stringify(response, null, 2)}
        </Box>
      </>
    );
  }
  return null;
}
