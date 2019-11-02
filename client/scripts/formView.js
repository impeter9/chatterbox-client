var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var e = document.getElementById('roomName');
    var strUser = e.options[e.selectedIndex].value;
    var roomName = strUser.split(' ').join('');

    var message = {
      username: App.username,
      text: document.getElementById('message').value,
      roomname: roomName,
    };
    Parse.create(message);
    setTimeout(MessagesView.render, 100);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};