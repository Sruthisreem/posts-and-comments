import Card from "react-bootstrap/Card";

export default function CommentItem({ comment }) {
  return (
    <>
      <Card border="Secondary">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{comment.body}</p>
            <footer className="blockquote-footer">{comment.name}</footer>
          </blockquote>
        </Card.Body>
        {comment.tags ? (
          <Card.Footer className="text-muted">
            Tags: &nbsp;
            {comment.tags.map((item, i) => (
              <Card.Link key={i} href="#">{`${item}`}</Card.Link>
            ))}
          </Card.Footer>
        ) : (
          ""
        )}
      </Card>
    </>
  );
}
