$(document).ready(function(){
  var content = $("#content");
  var items = [];
  let firstText = "";
  var firtsItems = JSON.parse(localStorage.getItem("listItem"));
  
  if(firtsItems != null) {
    firtsItems.forEach(function(e){firstText += "<li>" + e + "</li>";});
    content.html(firstText);
    $("li").addClass("listItem");
  }

  $("#button").click(function(){
    let text = "";
    let item = $("input").val();
    if(item != ""){
      items.push(item);

      localStorage.setItem("listItem",JSON.stringify(items));
      parseItem = JSON.parse(localStorage.getItem("listItem"));
  
      parseItem.forEach(function(element) {
        text += "<li>" + element + "</li>";
      });
      content.html(text);
      $("li").addClass("listItem");
    }
    
  });
  
  $(document).on('dblclick','.listItem', function(){
    let indexOfItem = $(".listItem").index(this);
    console.log(indexOfItem);
    items.splice(indexOfItem, 1);
    localStorage.setItem("newList", JSON.stringify(items)); 
    $(this).css("text-decoration","line-through").fadeOut('slow');
  })
})