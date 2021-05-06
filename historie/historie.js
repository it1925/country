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

const news = [
    {
    "title":"title1",
    "text":"text1",
    "date":"date",
    "author":"author",
    "picture":"png1.png",
    "link":"link"
    },
    {
    "title":"title1",
    "text":"text1",
    "date":"date",
    "author":"author",
    "picture":"png1.png",
    "link":"link"
    }
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
     });   
     $("#figures .list-group").append(`<div class="col mt-3 pb-3"></div>`);

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
   
     news.forEach((news) => {
         $("#zpravodaj").append(`<div class="col-sm-3 mt-3 pb-3 border-bottom">
         <article>
         <figure>
         <img src="./images/${news.picture}" alt="${news.title}" class="img-fluid"></img>
         </figure>
         </div>
         <div class="col-sm-9 mt-3 pb-3 border-top border-bottom">
         <h5>${news.title}</h5>
         <p>${news.text}</p>
         <p>autro:${news.author} link:<a href="${news.link}">${news.link}<a/></p>
         </div>
         </article>
        `);
     });
        
     
     $("#figures .list-group li").on("click", function(){
        fillFigure($(this).text());
     });
});
