import { get, post } from "./comment/comment-api";
import { getUsers } from "./users/user-api";
import { getPostData } from "./post/post-api";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getComment = async (postId) => {
  const url = `${baseUrl}/posts/${postId}/comments`;
  return await get(url);
};

export const postComment = async (comment) => {
  const url = `${baseUrl}/posts/${comment.postId}/comments`;
  return await post(url, comment);
};

export const fetchUsers = async () => {
  const url = `${baseUrl}/users`;
  return await getUsers(url);
};

export const fetchPosts = async () => {
  const url = `${baseUrl}/posts`;
  return await getPostData(url);
};
