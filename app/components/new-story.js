import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

    saveStory() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        title: this.get('title') ? this.get('title') : "",
        paragraph: this.get('paragraph') ? this.get('paragraph') : "",
        fullParagraph: this.get('fullParagraph') ? this.get('fullParagraph') : "",
        timeAgo: this.get('timeAgo') ? this.get('timeAgo') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      this.set('addNewStory', false);
      this.sendAction('saveStory', params);
    }
  }
});
