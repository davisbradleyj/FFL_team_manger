// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("tacos running")
$(function() {
    $(".change-order").on("click", function(event) {
      console.log("Change Order Click")
      var id = $(this).data("id");
      var cost = $(this).data("cost");
      var newOrder = $(this).data("neworder");
  
      var newOrderState = {
        ordered: !newOrder
      };
      console.log(newOrder)
      // Send the PUT request.
      $.ajax("/api/tacos/" + id, {
        type: "PUT",
        data: newOrderState
      }).then(
        function() {
          console.log("changed status to ", newOrder);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("Create new filling click")
      var newTaco = {
        filling: $("#ta").val().trim(),
        cost: $("#co").val().trim(),
        order: $("[name=order]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
      }).then(
        function() {
          console.log("added a new filling");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-taco").on("click", function(event) {
      console.log("delete taco click")
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/tacos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted taco", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  