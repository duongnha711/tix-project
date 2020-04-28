import { FormControl, Select } from "@material-ui/core";
import React from "react";

export default function SelectInput({ children, ...rest }) {
  return (
    <FormControl size="small">
      <Select native variant="outlined" color="primary" {...rest}>
        {children}
      </Select>
    </FormControl>
  );
}
