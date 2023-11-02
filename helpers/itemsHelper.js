const formatProduct = (product) => {
  return {
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: product.price,
      decimals: 0,
    },
    picture: `https://http2.mlstatic.com/D_NQ_NP_${product.thumbnail_id}-V.webp`,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
    state_name: product.address?.state_name,
    sold_quantity: product.sold_quantity,
  };
};

module.exports = {
  formatProduct,
};
