var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.fetch((data) => {
      for (var i = 0; i < data.results.length; i++) {
        if ((data.results[i].username) && (data.results[i].text) && ((!data.results[i].roomname) || (data.results[i].roomname === 'Home'))) {
          MessagesView.renderMessage(data.results[i]);
        }
      }
    });
  },

  render: function() {
  },

  renderMessage: function(message) {
    var compiled = _.template(
      '<div>' +
        '<div class="username">' +
          '<%- username %>' +
        '</div>' +
        '<div class="text">' +
          '<%- text %>' +
        '</div>' +
        '<div>----</div>' +
      '</div>'
    );

    var html = compiled(message);
    $('#chats').append(html);
  },
};