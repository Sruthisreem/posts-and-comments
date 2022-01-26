import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "./components/layout/Layout.Component";
import Container from "react-bootstrap/Container";

import "./App.css";
import PostList from "./components/posts/postList/PostList.Component";
import CommentList from "./components/comments/commentList/CommentList.Component";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <PostList />
            </Col>
            <Col xs="12" md="6">
              <CommentList />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
