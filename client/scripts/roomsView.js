var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('.joinRoom').click(function() {
      RoomsView.render();
    });

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
    var e = document.getElementById('roomName');
    var strUser = e.options[e.selectedIndex].value;
    var room = '.' + strUser.split(' ').join('');
    $('.message').hide();
    $(room).show();
    console.log(room);
  },

  renderRoom: function(room) {
    if (room !== 'Home') {
      var html = '<option class="room" value="' + room + '">' + room + '</option>';
      $('#rooms select').append(html);
    }
  },

};
