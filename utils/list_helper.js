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

// const favoriteBlog = (blogList) => {
//   let mostLikes = [];
//   blogList.map((blog) => {
//     mostLikes.push(blog.likes);
//   });

//   let blogWithLikes = mostLikes.indexOf(Math.max(...mostLikes));

//   return {
//     title: blogList[blogWithLikes].title,
//     author: blogList[blogWithLikes].author,
//     likes: blogList[blogWithLikes].likes,
//   };
// };

const favoriteBlog = (blogList) => {
  if (blogList.length <= 0) {
    return "Blog list is empty";
  }

  let maxLikes = 0;
  let maxIndex = 0;

  for (let i = 0; i < blogList.length; i++) {
    if (blogList[i].likes > maxLikes) {
      maxLikes = blogList[i].likes;
      maxIndex = i;
    }
  }

  return {
    title: blogList[maxIndex].title,
    author: blogList[maxIndex].author,
    likes: blogList[maxIndex].likes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
