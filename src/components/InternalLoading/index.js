import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

export default function InternalLoading({ ...options }) {
  return (
    <Box {...options}>
      <img
        src="/images/filterLoading.gif"
        alt="filterLoading"
        width="50"
        height="50"
      />
    </Box>
  );
}
