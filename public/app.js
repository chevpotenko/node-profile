$(function() {
    $('#btnSubmit').on('click', function(e) {
        let data = $("#item").val();
        addItem(data);
    });

    $('li').on('click', function(e) {
        let data = $(this).text().replace(/ /g, '-');
        deleteItem(data);
    });

    function addItem(data) {        
        $.ajax({
            method: "POST",
            url: "/todo",
            data: { item: data},
            success: function(data) {
                location.reload()
            }
        });
        return false;
    }
    
    function deleteItem(data) {
        $.ajax({
            method: "DELETE",
            url: "/todo/" + data,            
            success: function(data) {
                location.reload();
            }
        });
    }
});