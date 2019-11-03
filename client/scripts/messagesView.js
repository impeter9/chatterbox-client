var MessagesView = {
  storage: [],

  $chats: $('#chats'),

  initialize: function() {
    App.fetch((data) => {
      for (var i = 0; i < data.results.length; i++) {
        if ((data.results[i].username) && (data.results[i].text) && (data.results[i].roomname)) {
          MessagesView.renderMessage(data.results[i]);
          MessagesView.storage.push(data.results[i].createdAt);
        }
      }
    });

    $('div').on('click', '.username', function () {
      console.log('something');
      var user = '.' + $(this).attr('class').split(' ')[1];
      $(user).addClass('friend');

    });

  },

  render: function() {
    App.fetch((data) => {
      for (var i = data.results.length - 1; i > -1; i--) {
        if ((data.results[i].username) && (data.results[i].text) && (data.results[i].roomname) && (new Date(data.results[i].createdAt) > new Date(MessagesView.storage[0]))) {
          MessagesView.renderNewMessage(data.results[i]);
        }
      }
    });
  },
  // ((!data.results[i].roomname) || (data.results[i].roomname === 'Home'))

  renderNewMessage: function(message) {
    var compiled = _.template(
      // '<div class="message ' + message.roomname.split(' ').join('') + '">' +
      '<div class="message ' + message.roomname.split(' ').join('') + '">' +
        '<div class="username ' + message.username.split(' ').join('') + '">' +
          '<%- username %>' +
        '</div>' +
        '<div class="text">' +
          '<%- text %>' +
        '</div>' +
      '</div>'
    );

    var html = compiled(message);
    $('#chats').prepend(html);
  },

  renderMessage: function(message) {
    var compiled = _.template(
      '<div class="message ' + message.roomname.split(' ').join('') + '">' +
        '<div class="username ' + message.username.split(' ').join('') + '">' +
          '<%- username %>' +
        '</div>' +
        '<div class="text">' +
          '<%- text %>' +
        '</div>' +
      '</div>'
    );

    var html = compiled(message);
    $('#chats').append(html);
  },
};