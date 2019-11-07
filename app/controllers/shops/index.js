import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingShop: false,
  newShopName: '',

  isAddButtonDisabled: empty('newShopName'),

  actions: {
    addShop() {
      this.set('isAddingShop', true);
    },

    cancelAddShop() {
      this.set('isAddingBand', false);
    },
    saveShop(event) {
      event.preventDefault();
      let newShop = this.store.createRecord('shop', { name:this.newShopName });
      newShop.save();
      this.setProperties({
        newShopName: '',
        isAddingShop: false
      });
      // this.transitionToRoute('bands.band.songs', newBand.id);
    },
    editShop(){

    },
    deleteShop(shopId){
      this.store.findRecord('shop',shopId).then(function (shops) {
        shops.destroyRecord(); // => DELETE to /posts/2
      });

    }
  }
});
