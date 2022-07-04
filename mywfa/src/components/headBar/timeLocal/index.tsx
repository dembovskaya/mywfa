import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const TimeLocal = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  return <Grid>{date.toLocaleTimeString()}</Grid>;
};

export default TimeLocal;
