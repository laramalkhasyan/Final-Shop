import Controller from '@ember/controller';
import { empty} from '@ember/object/computed';
import {  computed} from '@ember/object';

export default Controller.extend({
  isAddingProduct: false,
  newProductName: '',
  newProductQuantity: '',
  newProductPrice: '',
  deleteThrigger: false,
  isEditing: false,
  tempPrice:0,
  isAddButtonDisabled: empty('newProductName'),

  totalPrice: computed('newProductQuantity', 'newProductPrice', 'tempPrice', function() {
    let price = 0;
    this.model.products.forEach((product) => {
      price += product.quantity * product.price;
    })
    price-=this.tempPrice;
    return price;
  }),

  actions: {
    addProduct() {
      this.set('isAddingProduct', true);
    },

    cancelAddProduct() {
      this.set('isAddingProduct', false);
    },
    saveProduct(event) {
      event.preventDefault();
      let newShop = this.store.createRecord('product', {
        name: this.newProductName,
        quantity: this.newProductQuantity,
        price: this.newProductPrice,
        shop: this.model
      });
      newShop.save();
      this.setProperties({
        newProductName: '',
        newProductQuantity: 0,
        newProductPrice: 0,
        isAddingProduct: false,
        deleteThrigger: true
      });
    },
    editProduct(productId) {
      this.toggleProperty('isEditing');
    },
    async deleteProduct(productId) {
    let temp=0;
    await this.store.findRecord('product', productId).then(function(product) {
        temp = product.price*product.quantity;
        console.log(temp,"inner temp");
        product.deleteRecord();
        product.save();
      });
      this.setProperties({
        tempPrice: temp
      });
    }
  }
});
