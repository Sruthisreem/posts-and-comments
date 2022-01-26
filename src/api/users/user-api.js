/**
 * To retrieve user data
 * @returns Array of User Data
 */
export const getUsers = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error("Failed to Fetch User data!");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
