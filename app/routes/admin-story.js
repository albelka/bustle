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
  update3(story, params) {
    debugger;
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        story.set(key,params[key]);
      }
    });
    story.save();
    this.transitionTo('admin');
  },

  // delete(story) {
  //   if (confirm('Are you sure you want to delete this story?')) {
  //     this.sendAction('destroyStory', story);
  //   }
  }
});
