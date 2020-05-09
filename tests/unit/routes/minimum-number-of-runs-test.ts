import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | minimum-number-of-runs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:minimum-number-of-runs');
    assert.ok(route);
  });
});
