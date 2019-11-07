export default function(server) {
  var shop = server.schema.shops.create({'name': 'Zara'});
  var shop2 = server.schema.shops.create({'name': 'Bershka'});

  server.schema.products.create({
    name: 'Shoe 1',
    quantity: 2,
    price:100,
    shop: shop2
  });
  server.schema.products.create({
    name: 'Shoe 2',
    quantity: 10,
    price:100,
    shop: shop
  });
}
