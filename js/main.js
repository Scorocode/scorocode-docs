/**
 * Created by juggle on 31.05.16.
 */

$(document).ready(function() {

    function getTemplate(name, cb) {
        var url = './templates/' + name + '.html';
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                cb(data);
            },
            error : function() {
                cb();
            }
        });
    }

    getTemplate('index', function (data){
        if (!data) {
            alert('Страница не найдена');
        } else {
            $('#content').html(data);
        }
    });

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

        var name = hash.replace('#','');
        getTemplate(name, function (data){
            if (!data) {
                alert('Страница не найдена');
            } else {
                $('#content').html(data);
            }
        });

    });

});