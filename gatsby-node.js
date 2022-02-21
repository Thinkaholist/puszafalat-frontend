// Get your list of languages from somewhere, env file, config.json, etc
// for sake of this snippet I am putting it here

const path = require('path');

const extraLanguages = ['en', 'sk']; // Hungarian is currently the default so it isn't needed here.

const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page;

  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE,
    },
  });

  if (extraLanguages.length) {
    extraLanguages.forEach((code) => {
      const { path, context, ...rest } = page;

      createPage({
        ...rest,
        path: `/${code}${path}`,
        // every page for each language gets the language code as a prefix
        // to its path: "/es/blog/<some-slug>" for example
        context: {
          ...context,
          locale: code || '',
        },
      });
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const puszafalatTemplate = path.resolve(`./src/templates/puszafalat.js`);
  const res = await graphql(`
    query {
      allSanityPuszafalat(sort: { fields: rank, order: ASC }) {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  const puszafalats = res.data.allSanityPuszafalat.nodes;

  puszafalats.forEach(({ slug: { current } }, index) => {
    const previousSlug =
      index === 0 ? null : puszafalats[index - 1].slug.current;
    const nextSlug =
      index === puszafalats.length - 1
        ? null
        : puszafalats[index + 1].slug.current;

    const page = {
      component: puszafalatTemplate,
      path: `/falat/${current}`,
      context: {
        slug: current,
        previousSlug,
        nextSlug,
      },
    };
    createLocalePage(page, createPage);
  });

  // generate your dynamic content here...
  // const page = {
  //   path: '/puszafalat',
  //   component: path.resolve(`./src/templates/puszafalat.js`),
  //   context: {
  //     slug: 'some-page-slug',
  //   },
  // };

  // createLocalePage(page, createPage);
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  createLocalePage(page, createPage);
};
