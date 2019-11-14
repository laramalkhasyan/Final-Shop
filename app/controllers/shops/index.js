import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingShop: false,
  newShopName: '',
  isEditing:false,
  editedName:'',
  id:'',
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
    toggleEdit(shopId){
      this.set('id',shopId);
      this.toggleProperty('isEditing');
    },
    editShop(shopId){
      let name=this.editedName;
      this.store.findRecord('shop', shopId).then((shop) => {
        shop.set("name",name);
        shop.save();
      });
      this.setProperties({
        editedName:'',
        id:'',
      })
    },
    deleteShop(shopId){
      this.store.findRecord('shop', shopId).then(function (shop){
        shop.deleteRecord();
        shop.get('isDeleted');
        shop.save();
      })
    }
  }
});
