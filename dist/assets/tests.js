'use strict';

define("shop/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/products.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/shops/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/shops/index.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/shops/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/shops/products.js should pass ESLint\n\n');
  });
  QUnit.test('models/product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/product.js should pass ESLint\n\n');
  });
  QUnit.test('models/shop.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/shop.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/shops.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/shops.js should pass ESLint\n\n');
  });
  QUnit.test('routes/shops/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/shops/index.js should pass ESLint\n\n4:11 - \'params\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/shops/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/shops/products.js should pass ESLint\n\n');
  });
});
define("shop/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('shop/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shop/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shop/templates/components/products.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shop/templates/components/products.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shop/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shop/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shop/templates/shops.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shop/templates/shops.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shop/templates/shops/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shop/templates/shops/index.hbs should pass TemplateLint.\n\nshop/templates/shops/index.hbs\n  27:39  error  Interaction added to non-interactive element  no-invalid-interactive\n  16:10  error  Unexpected {{log}} usage.  no-log\n');
  });
  QUnit.test('shop/templates/shops/products.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shop/templates/shops/products.hbs should pass TemplateLint.\n\nshop/templates/shops/products.hbs\n  41:37  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:2  error  Tables must have a table group (thead, tbody or tfoot).  table-groups\n');
  });
});
define("shop/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/shops-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/shops-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/shops/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/shops/products-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/product-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/products-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/shop-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/shop-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/shops-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/shops-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/products-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/shop-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/shop-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/shops-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/shops-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/shops/shop-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/shops/shop-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/shops/shop/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/shops/shop/products-test.js should pass ESLint\n\n');
  });
});
define("shop/tests/test-helper", ["shop/app", "shop/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("shop/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("shop/tests/unit/controllers/shops-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | shops', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:shops');
      assert.ok(controller);
    });
  });
});
define("shop/tests/unit/controllers/shops/products-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | shops/products', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:shops/products');
      assert.ok(controller);
    });
  });
});
define("shop/tests/unit/models/product-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | product', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('product', {});
      assert.ok(model);
    });
  });
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
define("shop/tests/unit/models/shop-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | shop', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('shop', {});
      assert.ok(model);
    });
  });
});
define("shop/tests/unit/models/shops-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | shops', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('shops', {});
      assert.ok(model);
    });
  });
});
define("shop/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
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
define("shop/tests/unit/routes/shop-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | shop', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:shop');
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
define("shop/tests/unit/routes/shops/shop-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | shops/shop', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:shops/shop');
      assert.ok(route);
    });
  });
});
define("shop/tests/unit/routes/shops/shop/products-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | shops/shop/products', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:shops/shop/products');
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
