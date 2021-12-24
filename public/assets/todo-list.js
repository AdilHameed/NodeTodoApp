$(document).ready(function () {
  let itemId = null;
  // todo editing function
  $(".editButton").on("click", function () {
    var id = this.id;
    const itemData = id.split(",")[1];
    itemId = id.split(",")[0];

    var item = $("form input");
    item.val(itemData);
  });

  //todo adding  function
  $("form").on("submit", function () {
    var item = $("form input");
    var todo = { item: item.val() };
    if (itemId != null) {
      $.ajax({
        type: "PUT",
        url: "/todo/" + itemId,
        data: todo,
        success: function (data) {
          //do something with the data via front-end framework
          location.reload();
        },
      });
      itemId = null;
    } else {
      $.ajax({
        type: "POST",
        url: "/todo",
        data: todo,
        success: function (data) {
          //do something with the data via front-end framework
          location.reload();
        },
      });
    }

    return false;
  });

  //todo deleting function
  $(".delButton").on("click", function () {
    var id = this.id;

    $.ajax({
      type: "DELETE",
      url: "/todo/" + id,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });

  // todo selecting mark unmark function
  $(".selectButton").on("click", function () {
    var id = this.id;

    $.ajax({
      type: "PATCH",
      url: "/todo/" + id,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });
});
