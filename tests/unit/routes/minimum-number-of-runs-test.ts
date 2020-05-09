import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | minimum-calc-stuff', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:minimum-calc-stuff');
    assert.ok(route);
  });
});
