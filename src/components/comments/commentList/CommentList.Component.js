import styles from "./CommentList.module.css";
import CommentItem from "../commentItem/CommentItem.Component";
import NewComment from "../newComment/NewComment.Component";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../utils/loadingSpinner/LoadingSpinner.Component";

export default function CommentList() {
  //Read data from the store
  const comments = useSelector((state) => state.comments.comments);
  const isLoading = useSelector((state) => state.comments.isLoading);
  const shouldDisplayComments = useSelector(
    (state) => state.comments.shouldDisplayComments
  );

  /**
   * generate comment component
   *
   */
  const generateComponents = () => {
    let components;
    if (isLoading) {
      components = (
        <div className="spinner">
          <LoadingSpinner />
        </div>
      );
    } else {
      if (comments.length > 0)
        components = (
          <>
            {comments.map((item) => (
              <CommentItem comment={item} key={item.id} />
            ))}
            <NewComment />
          </>
        );
      else if (shouldDisplayComments) components = <NewComment />;
      else components = <p>Select any post to view comments</p>;
    }
    return components;
  };

  return (
    <>
      <div className={styles["comment-list"]}>
        <h4>Comments</h4>
        {generateComponents()}
      </div>
    </>
  );
}
