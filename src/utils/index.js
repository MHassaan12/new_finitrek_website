export const createMenu = (data) => {
    const groupedData = data.reduce((result, item) => {
        const title = item.categoryName;
        if (!result[title]) {
            result[title] = [];
        }
        const obj = {
            path: `/home/${item.slug}`,
            title: item.title,
            type: "link"
        }
        result[title].push(obj);
        return result;
    }, {});

    // Convert the grouped data to an array of objects
    const groupedArray = Object.entries(groupedData).map(([title, children]) => ({
        title: title,
        children: children

    }));

    return groupedArray
}
