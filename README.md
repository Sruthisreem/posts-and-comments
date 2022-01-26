# `Posts And Comments`

## An application displays lists of posts on the left side. On selecting a post, comments for the post will be listed on the right side. User can reply to the comments in the new comment section below the comment list and user will have tag suggestions while typing and can add one or more tags to comments. User can also filter the posts with respect to username

<br>

### `Deployed Application URL`

[https://Sruthisreem.github.io/posts-and-comments/](https://Sruthisreem.github.io/posts-and-comments/)

## `Installation and Setup Instructions`

---

- You will need node and npm installed globally on your machine.

- Clone this project repository -[https://github.com/Sruthisreem/posts-and-comments.git](https://github.com/Sruthisreem/posts-and-comments.git)

  ```
  git clone https://github.com/Sruthisreem/posts-and-comments.git
  ```

- `Installation`: npm install

- `To Run Test Suite` : npm test

- `To Start Server` : npm start

- `To Visit App` : http://localhost:3000/

## `Technologies`

---

A list of technologies used within the project:

- React JS - The React code is easier to maintain and is flexible due to its modular structure. Virtual DOM provides a more efficient way of updating the view in a web application and it provides an increased performance.
- Create React App - This helps to create and configure a react project easily. This has Babel and Webpack configuration for you to run and deploy your project.
- React Hooks - Hooks in React allows you to add state to functional components and have more modular and readable code.
- Redux Tool kit - easier to write good Redux applications and speeds up development and allowing you to write simpler and maintanable code.
- Bootstrap - Extensive list of components and Bundled Javascript plugins.
- JSONPlaceholder - REST API used for retriving data to be shown in the application

## `Approach and Task List`

---

This Application shows list of posts and on selecting the post its comments are listed and we can add reply as a comment in comment section. In a new comment a tag suggestion will be given to the user to add multiple tags in comment. The posts in the application can be filtered by username.

I started this process by using the create-react-app boilerplate, then adding react-autocomplete-tag, react-bootstrap and Redux Tool kit dependencies to the project.

First started with creating UI, then divided the container and took the left section and created the post Item, which shows a content such as title, content and username. Then a post List component is created which will render the post Items with respect to the posts. Then a post filter component is created to filter the posts based on value entered on filter component.

Once the left portion was completed, for right side I started with the new comment component and integrated the React Tag Autocomplete library to the component to use the add tag with suggestion feature.Then a comment Item component is created for displaying the comment of the post.Comment List component is created which will render comment Items and add new comment component at the bottom.

Created a loading component for handling loading state of the application.

Once the UI was done, started with creating a store and then provide redux store to react. Created 4 slices of store, for comments, posts, tags and users with reducer functions for differnt actions. The actions that are exported are used to call async functions.
The api files are created for each comments, users and post for data fetching and creating a new resource.

| Task List                                                             | Time Spend |
| --------------------------------------------------------------------- | ---------- |
| Project requirement analysis and identifying dependencies             | 45 mins    |
| Created project with create react app and dependencies                | 30 mins    |
| Created Layout component                                              | 20 mins    |
| Created Post Item Component                                           | 30 mins    |
| Created Posts List component                                          | 30 mins    |
| Created Post filter component for filter the posts based on user name | 45 mins    |
| Created New Comment component with auto tag component                 | 60 mins    |
| Created Comment Item component to display comment                     | 60 mins    |
| Created test case for Comment Item component                          | 30 mins    |
| Created Comment List component to display list of component Item      | 45 mins    |
| Created Loading component                                             | 30 mins    |
| Created 4 slices of store for posts, comments, users and tags         | 90 mins    |
| Created action files for asyc function calls                          | 50 mins    |
| Created api files for fetching data                                   | 60 mins    |
| Integrated the data with all the components                           | 120 mins   |
| Created readme with project documentation and setup information       | 90 mins    |

## `Additional Information`

- To view the tag suggestion user needs start typing in the field word/character below. Once a new comment is added by the user with custom tag, then that tag will be added in the suggestion list for the next add comment component.\
  2022,Billing,AWS,Google,Google,Cloud,Amazon,Apple,iPhone,Android,React,ReactJs,VanillaJs,Redux,Bootstrap
- Used react-tag-autocomplete library for tag suggestion component.
