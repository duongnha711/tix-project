import { Box } from "@material-ui/core";
import React from "react";

export default function InternalLoading({ ...options }) {
  return (
    <Box {...options}>
      <img
        src="/images/filterLoading.gif"
        alt="filterLoading"
        width="100"
        height="100"
      />
    </Box>
  );
}
