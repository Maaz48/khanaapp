import logo from "./logo.svg";
import "./App.css";
import Approve from "./comp/Approve";
import Reject from "./comp/Reject";
import Pending from "./comp/Pending";
import { Tabs, Tab, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ADMIN DASHBOARD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: 20,
          border: 2,
          borderStyle: "sold",
          borderColor: "black",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <Tabs
          defaultActiveKey="pending"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="pending" title="pending">
            <Pending />
          </Tab>
          <Tab eventKey="Approve" title="Approve">
            <Approve />
          </Tab>
          <Tab eventKey="Reject" title="Reject">
            <Reject />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
