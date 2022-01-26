import styles from "./PostList.module.css";
import PostItem from "../postItem/PostItem.Component";
import PostFilter from "../postFilter/PostFilter.Component";
import { useState, useEffect } from "react";
import { fetchPost } from "../../../store/actions/post-actions";
import { commentActions } from "../../../store/slices/comments-slice";
import { getComments } from "../../../store/actions/comments-actions";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../utils/loadingSpinner/LoadingSpinner.Component";

export default function PostList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  const [filteredPost, setFilteredPosts] = useState([]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const isLoading = useSelector((state) => state.posts.isLoading);

  // filter and update the filteredPost based on search value
  const onFilterValueChange = (e) => {
    const tempPost = posts.filter((post) =>
      post.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPosts(tempPost);
  };

  //Fetch comments on post item click
  const onPostClick = (id) => {
    dispatch(commentActions.displayComments(true));
    dispatch(commentActions.setSelectedPostId(id));
    dispatch(getComments(id));
  };

  //Render posts based on post list
  const generateComponent = function () {
    if (isLoading)
      return (
        <div className="spinner">
          <LoadingSpinner />
        </div>
      );
    else if (filteredPost.length > 0)
      return filteredPost.map((item) => (
        <PostItem onClickHandler={onPostClick} post={item} key={item.id} />
      ));
    return <h4>No Posts Found</h4>;
  };

  return (
    <div className={styles["post-list"]}>
      <PostFilter onChangeHandler={onFilterValueChange} />
      {generateComponent()}
    </div>
  );
}
