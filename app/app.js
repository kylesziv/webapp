import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
    modulePrefix: 'webapp',
    Resolver: Resolver
});

loadInitializers(App, 'webapp');

// Set default language for pluralization
window.CLDR.defaultLanguage = "en";

export default App;