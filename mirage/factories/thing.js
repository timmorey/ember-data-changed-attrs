import { Factory } from 'miragejs';

export default Factory.extend({
  description: '',
  name(i) {
    return `Thing ${i}`;
  },
});
