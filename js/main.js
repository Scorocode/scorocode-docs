/**
 * Created by juggle on 31.05.16.
 */

$(document).ready(function() {
    function getTemplate(name, cb) {
        var url = name.replace('#','');

        var ext = name.split(".").pop();
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                if (ext === 'md') {
                    data = marked(data);
                }
                $('#content').html(data);
            },
            error : function() {
                alert('Страница не найдена');
            }
        });
    }

    window.getTemplate = getTemplate;

    getTemplate('./templates/javascript.html');

    $('.navigation a').on('click', function() {
        if (!$(this).parent().hasClass('menu-main')) {
            return;
        }
        $('.navigation a').parent().removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.navigation a').on('click', function() {
        var hash = this.hash;
        if (!hash) {
            return;
        }

        getTemplate(hash);

    });

});