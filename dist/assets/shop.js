'use strict';



;define("shop/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    namespace: '/api'
  });

  _exports.default = _default;
});
;define("shop/app", ["exports", "shop/resolver", "ember-load-initializers", "shop/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("shop/components/products", ["exports", "shop/templates/components/products"], function (_exports, _products) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _products.default
  });

  _exports.default = _default;
});
;define("shop/controllers/shops/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    isAddingShop: false,
    newShopName: '',
    isAddButtonDisabled: Ember.computed.empty('newShopName'),
    actions: {
      addShop() {
        this.set('isAddingShop', true);
      },

      cancelAddShop() {
        this.set('isAddingBand', false);
      },

      saveShop(event) {
        event.preventDefault();
        let newShop = this.store.createRecord('shop', {
          name: this.newShopName
        });
        newShop.save();
        this.setProperties({
          newShopName: '',
          isAddingShop: false
        }); // this.transitionToRoute('bands.band.songs', newBand.id);
      },

      editShop() {},

      deleteShop(shopId) {
        this.store.findRecord('shop', shopId).then(function (shop) {
          shop.deleteRecord();
          shop.get('isDeleted');
          shop.save();
        });
      }

    }
  });

  _exports.default = _default;
});
;define("shop/controllers/shops/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    isAddingProduct: false,
    newProductName: '',
    newProductQuantity: 0,
    newProductPrice: 0,
    isAddButtonDisabled: Ember.computed.empty('newProductName'),
    totalPrice: Ember.computed('newProductQuantity', 'newProductPrice', function () {
      let price = 0;
      this.model.products.forEach(product => {
        price += product.quantity * product.price;
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
          isAddingProduct: false
        }); // this.transitionToRoute('bands.band.songs', newBand.id);
      },

      editProduct() {},

      deleteProduct(productId) {
        this.store.findRecord('product', productId).then(function (product) {
          product.deleteRecord();
          product.get('isDeleted');
          product.save();
        });
      }

    }
  });

  _exports.default = _default;
});
;define("shop/helpers/app-version", ["exports", "shop/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("shop/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("shop/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("shop/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "shop/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("shop/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("shop/initializers/ember-cli-mirage", ["exports", "shop/config/environment", "shop/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("shop/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("shop/initializers/export-application-global", ["exports", "shop/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("shop/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("shop/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("shop/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    this.namespace = '/api';
    this.get('/shops');
    this.get('/shops/:id');
    this.delete('/shops/:id');
    this.post('shops');
    this.post('products');
    this.delete('/products/:id');
  }
});
;define("shop/mirage/models/product", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({
    shop: (0, _emberCliMirage.belongsTo)()
  });

  _exports.default = _default;
});
;define("shop/mirage/models/shop", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({
    products: (0, _emberCliMirage.hasMany)()
  });

  _exports.default = _default;
});
;define("shop/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(server) {
    var shop = server.schema.shops.create({
      'name': 'Zara'
    });
    var shop2 = server.schema.shops.create({
      'name': 'Bershka'
    });
    server.schema.products.create({
      name: 'Shoe 1',
      quantity: 2,
      price: 100,
      shop: shop
    });
    server.schema.products.create({
      name: 'Shoe 2',
      quantity: 10,
      price: 100,
      shop: shop
    });
  }
});
;define("shop/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({});

  _exports.default = _default;
});
;define("shop/mirage/serializers/shop", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({
    include: ['products']
  });

  _exports.default = _default;
});
;define("shop/models/product", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model,
    attr,
    belongsTo
  } = _emberData.default;

  var _default = Model.extend({
    name: attr('string'),
    quantity: attr('number'),
    price: attr('number'),
    shop: belongsTo()
  });

  _exports.default = _default;
});
;define("shop/models/shop", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model,
    attr,
    hasMany
  } = _emberData.default;

  var _default = Model.extend({
    name: attr(),
    products: hasMany()
  });

  _exports.default = _default;
});
;define("shop/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("shop/router", ["exports", "shop/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('shops', function () {
      this.route('products', {
        path: '/:shop_id'
      });
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("shop/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("shop/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    beforeModel() {
      this.transitionTo('shops');
    }

  });

  _exports.default = _default;
});
;define("shop/routes/shops", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("shop/routes/shops/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      return this.store.findAll('shop');
    }

  });

  _exports.default = _default;
});
;define("shop/routes/shops/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      return this.store.findRecord('shop', params.shop_id);
    }

  });

  _exports.default = _default;
});
;define("shop/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("shop/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "b/MndCHs",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "shop/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("shop/templates/components/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "domtMm0V",
    "block": "{\"symbols\":[\"product\",\"product\",\"product\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"products\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"name\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\"NAME\"],[9],[0,\"\\n    \"],[7,\"ul\",true],[10,\"class\",\"list\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\",\"products\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\",true],[8],[0,\"\\n          \"],[1,[23,3,[\"name\"]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"qty\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\"QTY\"],[9],[0,\"\\n    \"],[7,\"ul\",true],[10,\"class\",\"list\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\",\"products\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\",true],[8],[0,\"\\n          \"],[1,[23,2,[\"quantity\"]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"price\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\"PRICE\"],[9],[0,\"\\n    \"],[7,\"ul\",true],[10,\"class\",\"list\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\",\"products\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\",true],[8],[0,\"\\n          \"],[1,[23,1,[\"price\"]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "shop/templates/components/products.hbs"
    }
  });

  _exports.default = _default;
});
;define("shop/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ztbjmA3F",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "shop/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("shop/templates/shops", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ERp7Mr12",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "shop/templates/shops.hbs"
    }
  });

  _exports.default = _default;
});
;define("shop/templates/shops/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NtDIwRSh",
    "block": "{\"symbols\":[\"shop\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"inner-container\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[8],[0,\"SHOPS\"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"shops-container\"],[8],[0,\"\\n      \"],[7,\"ul\",true],[10,\"class\",\"list\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\",true],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\",\"model\"],[\"ll-shops\",\"shops.products\",[23,1,[\"id\"]]]],{\"statements\":[[0,\"              \"],[1,[23,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[7,\"div\",true],[10,\"class\",\"buttons\"],[8],[0,\"\\n              \"],[7,\"button\",true],[10,\"class\",\"btn edit\"],[10,\"type\",\"button\"],[8],[0,\"Edit\"],[9],[0,\"\\n              \"],[7,\"button\",true],[10,\"class\",\"btn delete\"],[11,\"onclick\",[28,\"action\",[[23,0,[]],\"deleteShop\",[23,1,[\"id\"]]],null]],[10,\"type\",\"button\"],[8],[0,\"Delete\"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[28,\"log\",[[23,1,[]]],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"add-shop\"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"isAddingShop\"]]],null,{\"statements\":[[0,\"        \"],[7,\"form\",true],[11,\"onsubmit\",[28,\"action\",[[23,0,[]],\"saveShop\"],null]],[8],[0,\"\\n          \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[24,[\"newShopName\"]],\"New Shop\"]]],false],[0,\"\\n          \"],[7,\"button\",true],[11,\"disabled\",[22,\"isAddButtonDisabled\"]],[10,\"type\",\"submit\"],[8],[0,\"\\n            Add\\n          \"],[9],[0,\"\\n          \"],[7,\"span\",true],[10,\"class\",\"rr-cancel-icon\"],[11,\"onclick\",[28,\"action\",[[23,0,[]],\"cancelAddShop\"],null]],[8],[0,\"\\n            \"],[7,\"i\",true],[10,\"class\",\"fa fa-times\"],[10,\"aria-hidden\",\"true\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"button\",true],[10,\"name\",\"button\"],[10,\"class\",\"add-btn\"],[11,\"onclick\",[28,\"action\",[[23,0,[]],\"addShop\"],null]],[10,\"type\",\"button\"],[8],[0,\"Add new shop\"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "shop/templates/shops/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("shop/templates/shops/products", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Srsz7XdG",
    "block": "{\"symbols\":[\"product\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"prod-container\"],[8],[0,\"\\n  \"],[7,\"table\",true],[10,\"class\",\"products\"],[8],[0,\"\\n    \"],[7,\"tr\",true],[8],[0,\"\\n      \"],[7,\"th\",true],[10,\"class\",\"header\"],[8],[0,\"\\n        \"],[7,\"h2\",true],[8],[0,\"NAME\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"th\",true],[10,\"class\",\"title right\"],[8],[0,\"\\n        \"],[7,\"h2\",true],[8],[0,\"QTY\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"th\",true],[10,\"class\",\"header right\"],[8],[0,\"\\n        \"],[7,\"h2\",true],[8],[0,\"PRICE\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"each\",[[24,[\"model\",\"products\"]]],null,{\"statements\":[[0,\"      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"th\",true],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"class\",\"prod\"],[8],[1,[23,1,[\"quantity\"]],false],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"class\",\"right\"],[8],[0,\"$\"],[1,[23,1,[\"price\"]],false],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[0,\"\\n          \"],[7,\"button\",true],[10,\"class\",\"btn edit\"],[10,\"type\",\"button\"],[8],[0,\"Edit\"],[9],[0,\"\\n          \"],[7,\"button\",true],[10,\"class\",\"btn delete\"],[11,\"onclick\",[28,\"action\",[[23,0,[]],\"deleteProduct\",[23,1,[\"id\"]]],null]],[10,\"type\",\"button\"],[8],[0,\"Delete\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[7,\"tr\",true],[8],[0,\"\\n      \"],[7,\"th\",true],[8],[9],[0,\"\\n      \"],[7,\"th\",true],[8],[9],[0,\"\\n      \"],[7,\"th\",true],[8],[0,\"Total Price $\"],[1,[22,\"totalPrice\"],false],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"add-product\"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"isAddingProduct\"]]],null,{\"statements\":[[0,\"      \"],[7,\"form\",true],[11,\"onsubmit\",[28,\"action\",[[23,0,[]],\"saveProduct\"],null]],[8],[0,\"\\n        \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[24,[\"newProductName\"]],\"New Product Name\"]]],false],[0,\"\\n        \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[24,[\"newProductQuantity\"]],\"New Product Quantity\"]]],false],[0,\"\\n        \"],[1,[28,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[24,[\"newProductPrice\"]],\"New Product Price\"]]],false],[0,\"\\n        \"],[7,\"button\",true],[11,\"disabled\",[22,\"isAddButtonDisabled\"]],[10,\"type\",\"submit\"],[8],[0,\"\\n          Add\\n        \"],[9],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"rr-cancel-icon\"],[11,\"onclick\",[28,\"action\",[[23,0,[]],\"cancelAddProduct\"],null]],[8],[0,\"\\n          \"],[7,\"i\",true],[10,\"class\",\"fa fa-times\"],[10,\"aria-hidden\",\"true\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"button\",true],[10,\"name\",\"button\"],[10,\"class\",\"add-btn\"],[11,\"onclick\",[28,\"action\",[[23,0,[]],\"addProduct\"],null]],[10,\"type\",\"button\"],[8],[0,\"Add new product\"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "shop/templates/shops/products.hbs"
    }
  });

  _exports.default = _default;
});
;define("shop/tests/mirage/mirage.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | mirage');
  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/models/product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/product.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/models/shop.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/shop.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/scenarios/default.js should pass ESLint\n\n3:7 - \'shop2\' is assigned a value but never used. (no-unused-vars)');
  });
  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/serializers/shop.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/serializers/shop.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
});
;

;define('shop/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("shop/app")["default"].create({"name":"shop","version":"0.0.0+db8fde2c"});
          }
        
//# sourceMappingURL=shop.map
