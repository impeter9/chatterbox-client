var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    App.fetch((data) => {
      var obj = {};
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname) {
          obj[data.results[i].roomname] = data.results[i].roomname;
        }
      }
      for (var key in obj) {
        RoomsView.renderRoom(key);
      }
    });
  },

  render: function() {
  },

  renderRoom: function(room) {
    // var compiled = _.template(
    //   '<option class="<%- room %>">' +
    //     '<div class="username">' +
    //       '<%- username %>' +
    //     '</div>' +
    //     '<div class="text">' +
    //       '<%- text %>' +
    //     '</div>' +
    //     '<div>----</div>' +
    //   '</div>'
    // );
    var html = '<option class="room" value="' + room + '">' + room + '</option>';

    $('#rooms select').append(html);
  },

};
