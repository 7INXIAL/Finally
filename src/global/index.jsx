import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Global() {
  const locaton = useLocation();
  useEffect(() => {
    console.log(locaton, "locaton");
  }, []);
  return (
    <div>
      kskssksksk
      <Outlet />
    </div>
  );
}
