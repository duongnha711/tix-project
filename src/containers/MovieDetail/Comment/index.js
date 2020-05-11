import React, { useEffect } from "react";
import Alert from "../../../components/Alert";

export default function Comment() {
  useEffect(() => {
    Alert({ icon: "info", title: "Coming soon..." });
  }, []);

  return <h1>Coming soon...</h1>;
}
