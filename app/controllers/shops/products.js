import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
import { computed } from '@ember/object';
import {set } from '@ember/object';

export default Controller.extend({
    isAddingProduct: false,
    newProductName: '',
    newProductQuantity: '',
    newProductPrice: '',
    deleteThrigger: false,
    isEditing: false,
    // productName:'',
    // productQuantity:'',
    isAddButtonDisabled: empty('newProductName'),

    totalPrice: computed('newProductQuantity', 'newProductPrice', 'deleteThrigger', function() {
        let price = 0;
        this.model.products.forEach((product) => {
            price += product.quantity * product.price;
        })
        this.setProperties({
            deleteThrigger: false
        });
        return price;
    }),

    actions: {
        addProduct() {
            this.set('isAddingProduct', true);
        },

        cancelAddProduct() {
            this.set('isAddingBand', false);
        },
        saveProduct(event) {
            event.preventDefault();
            let newShop = this.store.createRecord('product', { name: this.newProductName, quantity: this.newProductQuantity, price: this.newProductPrice, shop: this.model });
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
        deleteProduct(productId) {
            this.setProperties({
                deleteThrigger: true
            });
            this.store.findRecord('product', productId).then(function(product) {
                product.deleteRecord();
                product.get('isDeleted');
                product.save();
            })
        }
    }
});