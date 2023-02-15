import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

// detail/23?type=viewable

export default function ModuleA() {
  const navigate = useNavigate();
  navigate("/a");

  let [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("type"); // viewable
  searchParams.getAll("type"); // [viewable]
  // setSearchParams({
  //   ...searchParams,
  //   sjj:"ssdsd"
  // })

  let params = useParams();
  params; // { id: 23 }

  let location = useLocation();
  location;

  return <div> </div>;
}
