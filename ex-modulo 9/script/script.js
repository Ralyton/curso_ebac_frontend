$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault()
        
        let texto = $('#texto').val()
        $(`<li>${texto}</li>`).appendTo('ul')

        $('li').click(function() {
            $(this).css('text-decoration', 'line-through')
        })
    })
})

