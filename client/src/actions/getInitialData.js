import axios from "axios";
import _ from "lodash";
function getItems() {
  return axios.get("http://localhost:3001/items?itemType=mug");
}

function getBrands() {
  return axios.get("http://localhost:3002/companies");
}

function getTagsFromItems() {
  return axios.get("http://localhost:3001/items");
}

const getInitialData = () => {
  return function (dispatch) {
    Promise.all([getItems(), getBrands(), getTagsFromItems()])
      .then(function (results) {
        const items = results[0];
        const brands = results[1];
        const allItems = results[2];

        //Collect all unique tags from items tag attribute.
        const uniqTags = allItems.data.reduce(function (prev, curr) {
          return _.union(prev, curr.tags);
        }, []);

        const objectTags = [];
        uniqTags.map((tag) => objectTags.push({ name: tag }));

        dispatch({
          type: "GET_INITIAL_DATA",
          payload: { items: items.data, brands: brands.data, tags: objectTags },
        });
      })
      .catch((err) => console.log(err));
  };
};
export default getInitialData;
