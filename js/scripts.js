(function($) {

    function List(name) {
        return "<li>" + name + "</li>";
    }

    var form = $("#form"),
        input = form.find("input[name='firstname']"),
        show = $("<div>").insertAfter(".form-field")
        list = $("<ul>").appendTo(show);

    form.on("submit", function(e) {

        e.preventDefault();

        var name = $.trim( input.val() );

        if (name === "") return;

        list.append( List(name) );

    });

})(jQuery);