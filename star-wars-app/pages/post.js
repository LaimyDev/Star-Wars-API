import Layout from "../components/myLayout";
//withRouter module is fetched allowing for access to the closest routes match
import { withRouter } from "next/router";

//the data received using the withRouter module
const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.name}</h1>
    <p>
      <b>Gender: </b>
      {props.router.query.gender}
    </p>
    <p>
      <b>Eye Color: </b>
      {props.router.query.eye_color}
    </p>
    <p>
      <b>Skin Color: </b>
      {props.router.query.skin_color}
    </p>
  </div>
));

//the content is then added to the main layout component
const Page = props => (
  <Layout>
    <Content></Content>
  </Layout>
);

export default Page;
