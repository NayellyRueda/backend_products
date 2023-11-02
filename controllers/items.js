const HttpClient = require("../helpers/httpClient");
const { formatProduct } = require("../helpers/itemsHelper");

const httpClient = new HttpClient();
const baseUrl = process.env.API_URL;

const searchProduct = async (request, response) => {
  const { q } = request.query;

  const {
    data: { results, filters },
  } = await httpClient.get(`${baseUrl}/sites/MLA/search?q=${q}&limit=4`);

  const categories = !filters.length
    ? []
    : filters[0].values[0].path_from_root.map((category) => category.name);

  const items = results.map((product) => formatProduct(product));

  response.json({
    author: {
      name: "",
      lastname: "",
    },
    categories,
    items,
  });
};

const findProduct = async (request, response) => {
  const { id } = request.params;
  const { data, status } = await httpClient.get(`${baseUrl}/items/${id}`);

  if (status !== 200) return response.status(status).send("Not found");

  const {
    data: { plain_text },
  } = await httpClient.get(`${baseUrl}/items/${id}/description`);

  const item = formatProduct(data);

  item["description"] = plain_text;

  response.json({
    author: {
      name: "",
      lastname: "",
    },
    item,
  });
};

module.exports = {
  searchProduct,
  findProduct,
};
