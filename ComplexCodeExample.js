/* 
Filename: ComplexCodeExample.js
Content: This code demonstrates a complex implementation of a social media platform 
*/

// Define a class for a User
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.followers = [];
    this.posts = [];
  }

  follow(user) {
    this.followers.push(user);
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
  }
}

// Define a class for a Post
class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(user, comment) {
    this.comments.push({ user: user, comment: comment });
  }
}

// Create some users
const user1 = new User("John", "john@example.com");
const user2 = new User("Emily", "emily@example.com");
const user3 = new User("Michael", "michael@example.com");

// User1 follows user2
user1.follow(user2);

// User1 create a post
user1.createPost("Hello World!");

// User2 adds a like and a comment to User1's post
user2.posts[0].addLike();
user2.posts[0].addComment(user2, "Great post!");

// User3 comments on User1's post
user1.posts[0].addComment(user3, "Thanks!");

console.log(user1);
console.log(user2);