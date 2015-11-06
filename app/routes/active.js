import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    headerClicked: function () {
      alert('Header Clicked');
    }
  },
  model(){
    let profile=[
      {
        name:'St James Bank',
        active:'Sep 28 2015',
        modified:'Sep 28 2015',
        requestorID:'01200000001'
      },
      {
        name:'St James Bank',
        active:'Sep 28 2015',
        modified:'Sep 28 2015',
        requestorID:'01200000001'
      },
      {
        name:'St James Bank',
        active:'Sep 28 2015',
        modified:'Sep 28 2015',
        requestorID:'01200000001'
      },
      {
        name:'St James Bank',
        active:'Sep 28 2015',
        modified:'Sep 28 2015',
        requestorID:'01200000001'
      },
      {
        name:'St James Bank',
        active:'Sep 28 2015',
        modified:'Sep 28 2015',
        requestorID:'01200000001'
      },
      {
        name:'St James Bank',
        active:'Sep 28 2015',
        modified:'Sep 28 2015',
        requestorID:'01200000001'
      },
      {
        name:'Canary Banking Plc',
        active:'Sep 28 2015',
        modified:'Sep 28 2015',
        requestorID:'01200000001'
      }
    ];
  return profile;
  }
});
