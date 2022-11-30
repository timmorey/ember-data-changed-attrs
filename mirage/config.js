export default function () {
  this.namespace = 'api';

  this.get('/things/:id', (schema, request) => {
    return schema.things.find(request.params.id);
  });

  this.put('/things/:id', (schema, request) => {
    const thing = schema.things.find(request.params.id);
    thing.update(JSON.parse(request.requestBody));
    return thing;
  });
}
