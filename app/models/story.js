import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  fullParagraph: DS.attr(),
  paragraph: DS.attr(),
  timeAgo: DS.attr(),
  image: DS.attr()
});
