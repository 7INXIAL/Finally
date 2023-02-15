import React from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";

// detail/23?type=viewable
export default function Example() {
  const history = useHistory();
  history.push("/a");
  const params = useParams();
  params; // { id: 23 }
  const location = useLocation();
  location;
  return <div> </div>;
}
