
$(function(){
    function eventsBlock(events){
        events.forEach((event) => {
        $("#uvod tbody").append(`<tr>
        <td class="event-year">${event.year}</td>
        <td>
          <h3 class="event-name" style="collor: black;"><i class="fas fa-chevron-down" aria-hidden="true"></i> 
          <a href="${event.url}">${event.event}</a></h3>
          <p class="event-detail">${event.detail}</p>
        </td>
      </tr>`);
     });
    $(".event-detail").hide();
    $(".event-name i").on("click", function(){
        $(".event-detail").hide(100);
        $(this).parent().next().show(100);   
     });
    }
    
    function figuresBlock(figures){  
     figures.forEach((figures) => {
         $("#figures .list-group").append(`<li class="list-group-item list-group-item-action" data-toggle="list">${figures.name}</li>`);
     });   
     $("#figures .list-group").append(`<div class="col-sm-12 mt-3 pb-3"></div>`);

     function fillFigure(person){
         let figure = figures.find(item => {return item.name === person});
         console.log(figure);
         $("#figure-info .name").html(`<h5>${figure.name} nar.:${figure.birth} úmr.:${figure.death}</h5><div>`);
         $("#figure-info .info").text(`${figure.bio}`);
         $("#figure-info .foot").html(`<br>Wiki:<a href="${figure.online}">${figure.online}</a>`);

         figure.portraits.forEach(portrait => {
            $(".png").html(`<img src="./images/${portrait}" alt="${figure.name}" class="img-fluid"></img>`);// <figcaption>${figure.name}</figcaption>
         });
     }
     
     $("#figures .list-group li").on("click", function(){
        let figure = $(this).text();
        $("#figure-info").slideUp(300, function(){
            fillFigure(figure);
        });
        $("#figure-info").slideDown(300);
     });
     $("#zpravodaj h5").on("click", function(){
        $(this).next().toggle(1000);
     });
    }
    function newsBlock(news){
        news.forEach((news) => {
         $("#zpravodaj").append(`<div class="col-sm-3 mt-3 pb-3 border-bottom">
         <article>
         <figure>
         <img src="./images/${news.picture}" alt="${news.title}" class="img-fluid"></img>
         </figure>
         </div>
         <div class="col-sm-9 mt-3 pb-3 border-top border-bottom">
         <h5><b>${news.title}</b></h5>
         <p>${news.text}</p>
         <p>autro: ${news.author}; link: <a href="${news.link}">${news.link}<a/></p>
         </div>
         </article>
        `);
     }); 
    }

        
     fetch('../data/events.json')
     .then(response => {
        console.log(response);
        return response.json()
     })
     .then(json => {
        console.log(json);
        eventsBlock(json);
     })
     .catch(function (error) {
        console.error('Chyba: \n', error);
     });

    fetch('../data/heroes.json')
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(json => {
        console.log(json);
        figuresBlock(json);
    })
    .catch(function (error) {
    console.error('Chyba: \n', error);
    });

    fetch('../data/news.json')
     .then(response => {
        console.log(response);
        return response.json()
     })
     .then(json => {
        console.log(json);
        newsBlock(json);
     })
     .catch(function (error) {
        console.error('Chyba: \n', error);
     });
     
});

