import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import ReactTags from "react-autocomplete-tag";
import "react-autocomplete-tag/dist/index.css";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-bootstrap";
import { addComment } from "../../../store/actions/comments-actions";
export default function NewComment(props) {
  const dispatch = useDispatch();
  const tagList = useSelector((state) => state.tags);
  const postId = useSelector((state) => state.comments.selectedPostId);
  const [tags, setTags] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [tagSuggestions, setTagSuggestions] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  useEffect(() => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    commentRef.current.value = "";
    setTags([]);
  }, [postId]);

  //method to add a tag
  const handleAddTag = (val) => {
    setTags((state) => [...state, val]);
    setTagSuggestions([]);
  };

  //method to delete tag
  const handleDeleteTag = (id) => {
    var temp = [...tags];
    temp.splice(id, 1);
    setTags(temp);
  };

  //method to handle autosuggestion when user enters a value
  const handleTagChange = (val) => {
    if (val.length > 0) {
      var new_sug = [];
      tagList.forEach((item) => {
        if (item.toLowerCase().includes(val.toLowerCase())) {
          new_sug.push(item);
        }
      });
      setTagSuggestions(new_sug.sort().slice(0, 10));
    } else {
      setTagSuggestions([]);
    }
  };

  //method to add a new comment
  const handlePostComment = (event) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const comment = commentRef.current.value;
    if (!name || !email || !comment) {
      setIsValid(false);
      return;
    }
    dispatch(
      addComment({
        postId,
        name,
        email,
        body: comment,
        tags,
      })
    );
    nameRef.current.value = "";
    emailRef.current.value = "";
    commentRef.current.value = "";
    setTags([]);
    setIsValid(true);
  };

  return (
    <Card border="Secondary">
      <Card.Body>
        <InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            placeholder="* Name"
            aria-label="name"
            aria-describedby="basic-addon1"
            required
            ref={nameRef}
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <FormControl
            placeholder="* Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            required
            ref={emailRef}
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <InputGroup.Text>* Comment</InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="Comment"
            required
            ref={commentRef}
          />
        </InputGroup>
        <ReactTags
          tags={tags}
          suggestions={tagSuggestions}
          onAddHandler={(val) => handleAddTag(val)}
          onDeleteHandler={(id) => handleDeleteTag(id)}
          onChangeHandler={(val) => handleTagChange(val)}
        />
        &nbsp;
        {!isValid ? (
          <Alert variant="danger" onClose={() => setIsValid(true)} dismissible>
            Please enter all required value
          </Alert>
        ) : (
          ""
        )}
        <div className="d-grid gap-2">
          <Button type="submit" variant="secondary" onClick={handlePostComment}>
            Post Comment
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
