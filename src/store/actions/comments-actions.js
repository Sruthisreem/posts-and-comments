import { commentActions } from "../slices/comments-slice";
import { tagsAction } from "../slices/tags-slice";
import { getComment, postComment } from "../../api/index";

/**
 * For updating loading state and fetching comments
 * for specific post when selected
 * @param {*} postId - to retrieve corresponding comments
 */
export const getComments = (postId) => {
  return async (dispatch) => {
    try {
      dispatch(commentActions.setIsLoading(true));
      const response = await getComment(postId);
      dispatch(commentActions.setComments(response));
      dispatch(commentActions.setIsLoading(false));
    } catch (error) {
      console.error(error);
    }
  };
};

/**
 * For updating the comment list with new comment
 * and updating the tag list
 * @param {*} comment - new comment
 */
export const addComment = (comment) => {
  return async (dispatch) => {
    try {
      await postComment(comment);
      dispatch(commentActions.addComment({ ...comment, id: Math.random() }));
      dispatch(tagsAction.addTags(comment.tags));
    } catch (error) {
      console.error(error);
    }
  };
};
