import { postActions } from "../slices/posts-slice";
import { fetchUsers, fetchPosts } from "../../api";

/**
 * For mapping username to each posts
 * @param {*} posts  - Array of Posts
 * @param {*} users  - Array of Users
 * @returns Array of posts
 */
const mapUserToPost = (posts, users) => {
  return posts.map((post) => {
    return {
      ...post,
      username: users.filter((user) => {
        return user.id === post.userId;
      })[0].username,
    };
  });
};

/**
 * fetching the post list for initial view
 */
export const fetchPost = () => {
  return async (dispatch) => {
    dispatch(postActions.setIsLoading(true));
    const userData = await fetchUsers();
    try {
      const response = await fetchPosts();
      const posts = mapUserToPost(response, userData);
      dispatch(postActions.setPosts(posts));
    } catch (error) {
      console.error(error);
    }
  };
};
