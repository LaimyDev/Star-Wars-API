import Menu from "./Menu";
import Head from "next/head";

//shared layout component between all pages
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "5px solid black",
  backgroundColor: "white"
};

//main component in which all other pages are passed as children
const Layout = props => (
  <div style={layoutStyle}>
    <Head>
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>
    </Head>
    <div>
      <Menu></Menu>
      {props.children}
    </div>
  </div>
);

export default Layout;
