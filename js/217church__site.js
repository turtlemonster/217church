$(function() {


    //detect mouse movement to test if we should load hover styles
    var hoverListener = function () {
        document.removeEventListener('mousemove', hoverListener, false);
        
        var cssId = 'hoverStyles';
        if (!document.getElementById(cssId)) {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/217church__hover.css';
            link.media = 'screen';
            head.appendChild(link);
        }
    };

    document.addEventListener('mousemove', hoverListener, false);


    //dock nav to top on scroll
    var $mainNav            = $('.mainNav__group'),
        $intro              = $('.introSection'),
        triggerHeight       = $('.campusLinks__group').height();

    $(document).scroll( function() {
        if( $('body').scrollTop() > triggerHeight ) {
            $mainNav.addClass('mainNav__group--docked');
            $intro.addClass('introSection--navDocked');
        } else {
            $mainNav.removeClass('mainNav__group--docked');
            $intro.removeClass('introSection--navDocked');
        }
    });


});