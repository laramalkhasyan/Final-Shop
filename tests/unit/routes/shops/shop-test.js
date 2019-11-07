import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | shops/shop', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:shops/shop');
    assert.ok(route);
  });
});
