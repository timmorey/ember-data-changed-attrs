# ember-data-changed-attrs

This repo provides a repro case for an ember-data regression in the behavior of Model.changedAttributes().

This project defines a single model, and configures an application REST adapter/serializer.  ember-cli-mirage provides the endpoints to support the model.  We have also defined a single acceptance test that reproduces the issue.  The test will fail when it hits the regression, and pass otherwise.

To see the issue, run

```
npm install && npm run test
```

See test code in https://github.com/timmorey/ember-data-changed-attrs/blob/main/tests/acceptance/model-changed-attributes-test.js.
