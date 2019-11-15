exports.createPages = async ({ actions: { createPage} }) => {
    // Fetch data using `getWorkData` function
    const allData = await getWorkData(['work1','work2', 'work3']);
    // Create a page that lists all work.
    createPage({
        path: `/`,
        component: require.resolve("./src/templates/all-work.js"),
        context: { allWork },
    })
    // Create a page for each work
    createPage({
        path:`/work/${work.name}/`.anchor,
        component: require.resolve("./src/templates/work.js"),
        context: { work },
    })
}