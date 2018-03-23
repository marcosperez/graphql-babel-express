import userService from "../../services/user/user";

class Post {
  constructor(title, content, id, user_id) {
    this.title = title;
    this.content = content;
    this.id = id;
    this.user_id = user_id;
  }
}
let posts = [];
exports.resolver = {
  Mutation: {
    createPost: function(root, { input }, context) {
      const { title, content, user_id } = input;
      const post = new Post(title, content, posts.length, user_id);
      posts.push(post);
      return post;
    }
  },
  Post: {
    User: post => userService.getUser(post.user_id)
  }
};
