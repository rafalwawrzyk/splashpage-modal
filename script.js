$(function () {


    var checkOut = $('.action-message');
    var closeBtn = $('.close-btn');
    var modal = $('.modal');


    checkOut.on({
        click: function () {
            openModal();
        }
    })

    closeBtn.on({
        click: function () {
            closeModal();
        }
    })

    modal.on({
        click: function (event) {
            if (event.target == this) {
                closeModal();
            }
        }
    })



    function openModal() {
        modal.css({
            visibility: "visible",
            opacity: 0.0
        }).animate({
            opacity: 1.0
        }, 500);
    };

    function closeModal() {
        modal.css({
            visibility: "hidden",
            opacity: 0.0
        }).animate({
            opacity: 0.0
        })
    }








});
