import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let profile=[

      {
        name:'Irish National Bank',
        submissionDate:'Mar 19 2015',
        isDeclined:true,
      },
      {
        name:'Bird Building Society',
        submissionDate:'Feb 24 2015',
        isDeclined:false,

      },
      {
        name:'St Luke Bank',
        submissionDate:'April 23 2015',
        isDeclined:true,
      },
      {
        name:'Royal Reserve',
        submissionDate:'Aug 5 2015',
        isDeclined:false,
      },
    ];
  return profile;
  }
});