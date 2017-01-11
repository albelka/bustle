import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
    actions: {
      updateStoryForm() {
        this.set('updateStoryForm', true);
      },
      update1(story) {
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
        this.sendAction('update2', story, params);
      }
    }
  });
