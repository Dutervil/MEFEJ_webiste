$(document).ready(function () {
    $("#phpcontactform").submit(function (e) {
        e.preventDefault();
           var name = $("#name");
           var email = $("#email");
           var mobile = $("#mobile"); 
           var msg = $("#message"); 
           var flag = false; 
           if (name.val() == "") {
             name.closest(".form-group").addClass("has-error"); name.focus(); flag = false; return false; } else { name.closest(".form-group").removeClass("has-error").addClass("has-success"); } if (email.val() == "") { email.closest(".form-group").addClass("has-error"); email.focus(); flag = false; return false; } else { email.closest(".form-group").removeClass("has-error").addClass("has-success"); } if (msg.val() == "") { msg.closest(".form-group").addClass("has-error"); msg.focus(); flag = false; return false; } else { msg.closest(".form-group").removeClass("has-error").addClass("has-success"); flag = true; $('input[type="submit"]').attr('disabled', 'disabled'); }
        var dataString = "name=" + name.val() + "&email=" + email.val() + "&mobile=" + mobile.val() + "&msg=" + msg.val(); $(".loading").fadeIn("slow").html("Loading..."); $.ajax({
            type: "POST", data: dataString, url: "contact.php", cache: false, success: function (d) {
                $(".form-group").removeClass("has-success"); if (d == 'success')
                    $('.loading').fadeIn('slow').html('<font color="green">Mail sent Successfully.</font>').delay(3000).fadeOut('slow'); else
                    $('.loading').fadeIn('slow').html('<font color="red">Mail not sent.</font>').delay(3000).fadeOut('slow');
            }
        }); return false;
    }); $("#reset").click(function () { $(".form-group").removeClass("has-success").removeClass("has-error"); });
})