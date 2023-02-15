import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Example
class Example extends React.PureComponent {
  componentDidMount() {
    console.log(this.props, "props");
  }
  render() {
    return <div>home??????????</div>;
  }
}

// withRouter
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    console.log(props, "???");
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

// use without props
// export default withRouter(Example);

// use with props
export default function (props) {
  const Component = withRouter(Example);
  return <Component ak="ddddd" {...props} />;
}
