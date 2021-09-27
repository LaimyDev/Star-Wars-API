import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

const img = {
  width: 200,
  height: 200
};

//menu component containing the navbar and the lnks to the different pages
//the navbar is styled using css in js
const Menu = () => (
  <div>
    <Navbar bg="light" variant="light" className="justify-content-between">
      <Navbar.Brand>
        <Image src="/static/images/starwars.jpg" style={img}></Image>
      </Navbar.Brand>
      <div>
        <Link href="/">
          <a className="navLinks">HOME</a>
        </Link>
        <Link href="/about">
          <a className="navLinks">ABOUT</a>
        </Link>
      </div>
    </Navbar>
    <style jsx>{`
.navLinks {
    margin: 10px;
    padding: 5px:
    text-align: right;
    
}
`}</style>
  </div>
);

export default Menu;
