import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-data-changed-attrs/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | model changed attributes', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Model.changedAttributes should be cleared after save', async function (assert) {
    this.server.createList('thing', 10);
    const store = this.owner.lookup('service:store');
    const thing = await store.findRecord('thing', '1');
    assert.deepEqual(
      thing.changedAttributes(),
      {},
      'changedAttributes initially empty'
    );
    thing.name = 'new name';
    assert.deepEqual(
      Object.keys(thing.changedAttributes()),
      ['name'],
      'changedAttributes contains name key'
    );
    await thing.save();
    assert.deepEqual(
      thing.changedAttributes(),
      {},
      'changedAttributes should be empty after save'
    );
    thing.description = 'its a thing';
    assert.deepEqual(
      Object.keys(thing.changedAttributes()),
      ['description'],
      'only description should be in changedAttributes'
    );
    await thing.save();
    assert.deepEqual(
      thing.changedAttributes(),
      {},
      'changedAttributes should be empty after save'
    );
  });
});
