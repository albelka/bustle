import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(story) {
      if (confirm('Are you sure you want to delete this story?')) {
        this.sendAction('destroyStory', story);
      }
    },
    update(story) {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        title: this.get('title') ? this.get('title') : "",
        paragraph: this.get('paragraph') ? this.get('paragraph') : "",
        fullParagraph: this.get('fullParagraph') ? this.get('fullParagraph') : "",
        timeAgo: this.get('timeAgo') ? this.get('timeAgo') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      debugger;
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
