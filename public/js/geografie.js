$(function(){
    let cities = [];

    fetch('https://obscure-shore-78236.herokuapp.com/api/town')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(json => {
            cities = json;
        })
        .catch(function (error) {
            console.error('Chyba: \n', error);
        });

    //$('ellipse').hide(1000);
    $('path').css('position','relative');
    let pathFill = $('path').css('fill');
    $('path').on('click', function() {
        $('path').css('fill', pathFill);
        $(this).popover({
            'placement': 'top',
            'title': $(this).find('title').text(),
            'css': $(this).css('fill','green')
        });;       
    });

    let cityColor = $('#barva').attr('fill');

    

    $('ellipse, rect').on('click', function(){
        $('ellipse, rect').css({'fill':cityColor});
        console.log(this.id);
        $(this).css('fill','yellow');
        let id = $(this).attr('id');
        let city = cities.find(item => {return item.id === id});
        //console.log(cities);  
        $('#info').fadeOut(500, function(){$('#info').html(`
        <div class="container border mt-3 mb-3">
            <div class="row">
                <div class="col-10">
                <h3>${city.name}</h3> Počet obyvatel: ${new Intl.NumberFormat('cs-CS').format(city.population)}
                <p>${city.description}</p>
                </div>
                <div class="col-2">
                        <div class="card-body">${city.what}</div>
                        <img class="card-img-bottom" src="${city.coat_of_arms}" alt="Znak města není k dispozici">
                        
                </div>
            </div>
            <hr><a href="${city.link}">${city.link}</a>
        </div>`)});
        $('#info').fadeToggle(500);
    })
  
})