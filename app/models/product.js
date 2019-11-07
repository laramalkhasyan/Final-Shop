import DS from 'ember-data';
const { Model, attr, belongsTo} = DS;

export default Model.extend({
  name: attr('string'),
  quantity: attr('number'),
  price: attr('number'),
  shop: belongsTo()
});
