import styles from "./PostItem.module.css";
import Card from "react-bootstrap/Card";

export default function PostItem({ onClickHandler, post }) {
  return (
    <>
      <Card
        border="Secondary"
        className={styles["post-item"]}
        onClick={() => {
          onClickHandler(post.id);
        }}
      >
        <Card.Header style={{ fontWeight: "bolder" }} className="text-center">
          {post.title}
          <Card.Subtitle style={{ textAlign: "right", color: "chocolate" }}>
            {post.username}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{post.body}</p>
            <footer className="blockquote-footer">{post.username}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
