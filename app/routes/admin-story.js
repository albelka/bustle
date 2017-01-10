import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('story', params.story_id);
  },
  actions: {
  destroyStory(story) {
    story.destroyRecord();
    this.transitionTo('admin');
  },

  // delete(story) {
  //   if (confirm('Are you sure you want to delete this story?')) {
  //     this.sendAction('destroyStory', story);
  //   }
  }
});
