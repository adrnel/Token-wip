import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let profile=[
      {
        name:'St James Bank',
        active:'Sep 28 2015',
        modified:'Nov 06 2015',
        requestorID:'83658375836'
      },
      {
        name:'Russel Bank',
        active:'Jun 26 2015',
        modified:'Sep 8 2015',
        requestorID:'75950594325'
      },
      {
        name:'National Scottish Bank',
        active:'Feb 13 2015',
        modified:'Jul 7 2015',
        requestorID:'84629048574'
      },
      {
        name:'Federal Bank',
        active:'Mar 9 2015',
        modified:'Nov 11 2015',
        requestorID:'40315648265'
      },
      {
        name:'Bank of Jordan',
        active:'April 23 2015',
        modified:'Aug 22 2015',
        requestorID:'657482947385'
      },
      {
        name:'Kobe International Bank',
        active:'Jun 5 2015',
        modified:'Sep 13 2015',
        requestorID:'85463890432'
      },
      {
        name:'Canary Banking Plc',
        active:'Mar 28 2015',
        modified:'Mar 28 2015',
        requestorID:'47583964938'
      }
    ];
  return profile;
  }
});
