$(function(){
    //$('ellipse').hide(1000);
    $('path').css('position','relative');
    let pathFill = $('path').css('fill');
    $('path').on('click', function() {
        $('path').css('fill', pathFill);
        console.log(this.id);
        $(this).css('fill','green');
    });

    let cityColor = $('#barva').attr('fill');

    $('ellipse, rect').on('click', function(){
        $('ellipse, rect').css({'fill':cityColor});
        $(this).css('fill','yellow');  
    })
})