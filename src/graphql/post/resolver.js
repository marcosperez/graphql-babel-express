class Post {
  constructor(title, content, id) {
    this.title = title;
    this.content = content;
    this.id = id;
  }
}
let posts = [];
exports.resolver = {
  Mutation: {
    createPost: function(root, { input }, context) {
      const { title, content } = input;
      const post = new Post(title, content, posts.length);
      posts.push(post);
      return post;
    }
  }
};
