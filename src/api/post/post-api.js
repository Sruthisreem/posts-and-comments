/**
 * To retrieve list of posts to display in initial display
 * @returns Array of posts
 */
export const getPostData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) throw Error("Failed to fetch posts!");
  return await response.json();
};
