import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default function PostFilter({ onChangeHandler }) {
  return (
    <>
      <InputGroup className="mb-0" style={{ padding: "10px" }}>
        <FormControl
          placeholder="Enter username to filter posts"
          aria-label="username"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            onChangeHandler(e);
          }}
          style={{ textAlign: "center" }}
        />
      </InputGroup>
    </>
  );
}
