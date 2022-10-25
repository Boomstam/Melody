$(document).ready(function() {
  $(".menu-header").click(function() {
    console.log("menu-header " + " called.");
    console.log(this);
    const menuCat = this.nextElementSibling;
    console.log(menuCat);
    // toggleElement(menuCat);
  });

  $("#add_bar").click(function() {
    console.log("add_bar " + " called.");
    console.log(this);
    $("m-dialog").show();
  });

  $("m-dialog-close").click(function() {
    console.log("dialog close " + " called.");
    console.log(this);
    const dialog = this.parentElement;
    
    $(dialog).hide();
  });
});