const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/pages/404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/pages/blog/index.js"))),
  "component---src-pages-contact-examples-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/pages/contact/examples.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/pages/contact/file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/pages/contact/index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/pages/contact/thanks.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/pages/tags/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/templates/blog-post.js"))),
  "component---src-templates-footer-component-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/templates/footer-component.js"))),
  "component---src-templates-index-page-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/templates/index-page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/asonj/code/portfolioAlexJohnson/src/templates/tags.js")))
}

