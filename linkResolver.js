// I would write this in TS but naaaah lol

exports.linkResolver = (doc) => {
    // URL for a category type
    if (doc.type === 'blog_category') {
      return `/category/${doc.uid}`
    }
  
    // URL for a page type
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }

    if (doc.type === "blog_page") {
        return `/post/${doc.uid}`
    }
  
    // Backup for all other types
    return '/'
}