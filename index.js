if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Something is happening";
  };

  Template.hello.color = function() {
    return Session.get('color') || 'white';
  };

  Template.hello.events({
    'change input.color-picker': function(event) {
      var value = event.srcElement.value;
      // TODO allow for passing method to `color`
      var color = Color(value);
      Session.set('color', value);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
