import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
    isAddingProduct: false,
    editedName: '',
    editedQuantity: '',
    editedPrice: '',
    deleteThrigger: false,
    isEditing: false,
    tempPrice: 0,
    isAddButtonDisabled: empty('editedName', 'editedQuantity', 'editedPrice'),
    id: '',

    totalPrice: computed('editedName', 'editedQuantity', 'editedPrice', 'tempPrice', function() {
        let price = 0;
        this.model.products.forEach((product) => {
            price += product.quantity * product.price;
        })
        price -= this.tempPrice;
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
                name: this.editedName,
                quantity: this.editedQuantity,
                price: this.editedPrice,
                shop: this.model
            });
            newShop.save();
            this.setProperties({
                editedName: '',
                editedQuantity: 0,
                editedPrice: 0,
                isAddingProduct: false,
                // deleteThrigger: true
            });
        },

        toggleIsEditing(productId) {
            this.set('id', productId)
        },

        cancelEdit() {
            this.set('id', '')
        },

        editProduct(productId) {
            let ename = this.editedName;
            let equantity = this.editedQuantity;
            let eprice = this.editedPrice;
            this.store.findRecord('product', productId).then((product) => {
                product.setProperties({
                    name: ename,
                    quantity: equantity,
                    price: eprice
                });
                product.save();
            });
            this.setProperties({
                editedName: '',
                editedQuantity: '',
                editedPrice: '',
                id: '',
            })
        },
        async deleteProduct(productId) {
            let temp = 0;
            await this.store.findRecord('product', productId).then(function(product) {
                temp = product.price * product.quantity;
                console.log(temp, "inner temp");
                product.deleteRecord();
                product.save();
            });
            this.setProperties({
                tempPrice: temp
            });
        }
    }
});