'use strict';

define("shop/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/products.js should pass ESLint\n\n');
  });
  QUnit.test('models/shops.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/shops.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/products.js should pass ESLint\n\n');
  });
  QUnit.test('routes/shops.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/shops.js should pass ESLint\n\n');
  });
});
define("shop/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('shop/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shop/templates/application.hbs should pass TemplateLint.\n\nshop/templates/application.hbs\n  3:6  error  Incorrect indentation for `<h2>` beginning at L3:C6. Expected `<h2>` to be at an indentation of 4 but was found at 6.  block-indentation\n  4:6  error  Incorrect indentation for `<div>` beginning at L4:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n');
  });
  QUnit.test('shop/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shop/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shop/templates/products.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shop/templates/products.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shop/templates/shops.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shop/templates/shops.hbs should pass TemplateLint.\n\nshop/templates/shops.hbs\n  6:11  error  Wrong linebreak used. Expected LF but found CRLF  linebreak-style\n  7:5  error  Wrong linebreak used. Expected LF but found CRLF  linebreak-style\n');
  });
});
define("shop/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/products-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/shops-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/models/shops-test.js should pass ESLint\n\n9:11 - \'visit\' is not defined. (no-undef)\n10:11 - \'fillIn\' is not defined. (no-undef)\n11:11 - \'click\' is not defined. (no-undef)');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/products-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/shops-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/shops-test.js should pass ESLint\n\n');
  });
});
define("shop/tests/test-helper", ["shop/app", "shop/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("shop/tests/unit/models/products-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | products', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('products', {});
      assert.ok(model);
    });
  });
});
define("shop/tests/unit/models/shops-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | shops', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('I can create a movie', async function (assert) {
      await visit('/shops/new');
      await fillIn('.name', 'Debenhams');
      await click('.submit');
      assert.dom('h2').includesText('New movie saved!');
      assert.equal(this.server.db.shops[0].name, 'Debenhams');
    });
  });
});
define("shop/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("shop/tests/unit/routes/products-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | products', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:products');
      assert.ok(route);
    });
  });
});
define("shop/tests/unit/routes/shops-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | shops', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:shops');
      assert.ok(route);
    });
  });
});
define('shop/config/environment', [], function() {
  var prefix = 'shop';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('shop/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
