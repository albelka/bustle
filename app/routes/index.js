import Ember from 'ember';

// var stories = [{
//   id: 1,
//   author: "Caitlin Callegari",
//   title: "Carrie Fisher & Debbie Reynolds' Official Causes Of Death Have Been Revealed",
//   paragraph: "When something as tragic as a daughter passing away and then a mother being said to follow her after dying of a broken heart, there are always questions.",
//   timeAgo: 2,
//   image: "https://typeset-beta.imgix.net/2017%2F1%2F10%2F462202252.jpg?w=470&h=245&fit=crop&crop=faces&auto=format&q=70"
// }, {
//   id: 2,
//   author: "Bronwyn Isaac",
//   title: "Code Pink Heckles Jeff Sessions At His Confirmation Hearing & It's Their Passionate Last Attempt To Stop Him",
//   paragraph: "During the first hearing on Capitol Hill for a nominee from President-elect Donald Trump's cabinet, the Alabama Sen. Jeff Sessions faced protesters at his confirmation before the hearing even officially begun.",
//   timeAgo: 3,
//   image: "https://typeset-beta.imgix.net/2017%2F1%2F10%2F626417376.jpg?w=470&h=245&fit=crop&crop=faces&auto=format&q=70"
// }, {
//   id: 3,
//   author: "Nicole Pomarico",
//   title: "Angelina Jolie & Brad Pitt Release A Joint Statement On Their Divorce About Keeping The Details Private",
//   paragraph: "It's been nearly three months since the shocking news broke that Angelina Jolie and Brad Pitt are divorcing, and now, there's an update on their split that could make a very difficult process a little easier on their family from here on out.",
//   timeAgo: 4,
//   image: "https://typeset-beta.imgix.net/2017%2F1%2F10%2F521109886.jpg?w=470&h=245&fit=crop&crop=faces&auto=format&q=70"
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },
});