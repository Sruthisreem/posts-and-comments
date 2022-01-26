import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Layout(props) {
  return (
    <>
      <Navbar bg="secondary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>Posts And Comments</Navbar.Brand>
        </Container>
      </Navbar>
      <main>{props.children}</main>
    </>
  );
}
