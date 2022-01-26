/**
 * to create a new resource for a new comment
 */

export const post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!response.ok) throw Error("Failed to send post data");
  return await response.json();
};

/**
 * To retrieve all the comments for a particular post ID
 * @returns Array of comments
 */
export const get = async (url) => {
  const response = await fetch(url);

  if (!response.ok) throw Error("Failed to fetch comments!");
  return await response.json();
};
