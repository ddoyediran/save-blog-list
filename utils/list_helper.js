const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogPosts) => {
  let totalSum = 0;

  blogPosts.map((blog) => {
    totalSum += blog.likes;
  });

  return totalSum;
};

module.exports = {
  dummy,
  totalLikes,
};
