const events = [
    {
        "year":"....",
        "event":"lorem ipsum",
        "detail":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "url":"#link"
    },
    {
        "year":"....",
        "event":"lorem ipsum",
        "detail":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "url":"#link"
    },
    {
        "year":"....",
        "event":"lorem ipsum",
        "detail":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "url":"#link"
    },
    {
        "year":"....",
        "event":"lorem ipsum",
        "detail":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "url":"#link"
    },
    {
        "year":"....",
        "event":"lorem ipsum",
        "detail":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "url":"#link"
    },
];
const figures = [
    {
        "name":"Name1",
        "birth":"dateA",
        "death":"dateB",
        "bio":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "portraits":[
            "png1.png",
        ],
        "online":"link"
    },
    {
        "name":"Name2",
        "birth":"dateA",
        "death":"dateB",
        "bio":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "portraits":[
            "p1.jpg",
        ],
        "online":"link"
    },
    {
        "name":"Name3",
        "birth":"dateA",
        "death":"dateB",
        "bio":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "portraits":[
            "p1.jpg",
        ],
        "online":"link"
    },
    {
        "name":"Name4",
        "birth":"dateA",
        "death":"dateB",
        "bio":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "portraits":[
            "p1.jpg",
        ],
        "online":"link"
    },
    {
        "name":"Name5",
        "birth":"dateA",
        "death":"dateB",
        "bio":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias nam fugit aperiam incidunt nisi veritatis consequatur amet odio reprehenderit ea quibusdam sed, optio unde, suscipit veniam quisquam, reiciendis excepturi.",
        "portraits":[
            "p1.jpg",
        ],
        "online":"link"
    },
];
$(function(){

    events.forEach((event) => {
        $("#uvod tbody").append(`<tr>
        <td class="event-year">${event.year}</td>
        <td>
          <p class="event-name"><i class="fas fa-chevron-down" aria-hidden="true">X</i>
          <a href="">${event.event}</a></p>
          <p class="event-detail">${event.detail}</p>
        </td>
      </tr>`);
     });

    $(".event-detail").hide();
    $(".event-name i").on("click", function(){
        $(".event-detail").hide(100);
        $(this).parent().next().show(100);   
     });

     figures.forEach((figures) => {
         $("#figures .list-group").append(`<li class="list-group-item list-group-item-action" data-toggle="list">${figures.name}</li>`);
        // $("#figure-info").html(`<h4>${figures.name} nar.:${figures.birth} úmr.:${figures.death}</h4>`);
        // $("#figure-info .name").html(`<h5>I Tried</h5>`);
     });

     function fillFigure(person){
         let figure = figures.find(item => {return item.name === person});
         console.log(figure);
         $("#figure-info .name").html(`<h5>${figure.name} nar.:${figure.birth} úmr.:${figure.death}</h5>`);
         $("#figure-info .info").text(`${figure.bio}`);
         $("#figure-info .foot").html(`<a href="${figure.online}">${figure.online}</a>`);

         figure.portraits.forEach(portrait => {
            $(".png").html(`<img src="./images/${portrait}" alt="${figure.name}" class="img-fluid"></img>`);// <figcaption>${figure.name}</figcaption>
         });
       
     }
     $("#figures .list-group li").on("click", function(){
        fillFigure($(this).text());
     });

});
