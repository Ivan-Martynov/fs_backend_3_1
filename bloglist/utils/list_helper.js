// const lodash = require('lodash')

const dummy = (_blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  if (blogs) {
    return blogs.reduce(reducer, 0)
  }

  return 0
}

const favoriteBlog = (blogs) => {
  const maxLikes = (x, y) => x.likes < y.likes ? y : x

  if (!blogs || blogs.length === 0) {
    return {}
  }

  return blogs.reduce(maxLikes)
}

const mostBlogs = (blogList) => {
  const groupByAuthor = (list) => {
    const checkList = []

    let maxBlogs = {}
    let maxValue = 0

    list.forEach((item) => {
      const key = item.author
      if (!checkList[key]) {
        checkList[key] = {
          author: key,
          blogs: 1
        }
      } else {
        checkList[key].blogs++
      }

      if (checkList[key].blogs > maxValue) {
        maxValue = checkList[key].blogs
        maxBlogs = {
          author: key,
          blogs: maxValue
        }
      }
    })

    return maxBlogs
  }

  if (blogList) {
    return groupByAuthor(blogList)
  }

  return {}
}

const mostLikes = (blogList) => {
  const groupByAuthor = (list) => {
    const checkList = []

    let maxLikes = {}
    let maxValue = 0

    list.forEach((item) => {
      const key = item.author

      if (!checkList[key]) {
        checkList[key] = {
          author: key,
          likes: item.likes
        }
      } else {
        checkList[key].likes += item.likes
      }

      if (checkList[key].likes > maxValue) {
        maxValue = checkList[key].likes
        maxLikes = {
          author: key,
          likes: maxValue
        }
      }
    })

    return maxLikes
  }

  if (blogList) {
    return groupByAuthor(blogList)
  }

  return {}
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}