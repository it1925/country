const events = [
    {
        "year":"....",
        "event":"e1",
        "detail":"d1",
        "url":"#link"
    },
    {
        "year":"....",
        "event":"e2",
        "detail":"d2",
        "url":"#link"
    },
    {
        "year":"....",
        "event":"e3",
        "detail":"d3",
        "url":"#link"
    },
    {
        "year":"....",
        "event":"e4",
        "detail":"d4",
        "url":"#link"
    },
    {
        "year":"....",
        "event":"e5",
        "detail":"d5",
        "url":"#link"
    },
];
const figures = [
    {
        "name":"Name1",
        "birth":"dateA",
        "death":"dateB",
        "bio":"life",
        "portraits":[
            "p1.jpg",
            "p2.jpg"
        ],
        "online":"link"
    },
    {
        "name":"Name2",
        "birth":"dateA",
        "death":"dateB",
        "bio":"life",
        "portraits":[
            "p1.jpg",
            "p2.jpg"
        ],
        "online":"link"
    },
    {
        "name":"Name3",
        "birth":"dateA",
        "death":"dateB",
        "bio":"life",
        "portraits":[
            "p1.jpg",
            "p2.jpg"
        ],
        "online":"link"
    },
    {
        "name":"Name4",
        "birth":"dateA",
        "death":"dateB",
        "bio":"life",
        "portraits":[
            "p1.jpg",
            "p2.jpg"
        ],
        "online":"link"
    },
    {
        "name":"Name5",
        "birth":"dateA",
        "death":"dateB",
        "bio":"life",
        "portraits":[
            "p1.jpg",
            "p2.jpg"
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
        console.log("XDDD");  
        $(".event-detail").hide(100);
        $(this).parent().next().show(100);   
     });

     figures.forEach((figures) => {
         $("#figures .list-group").append(`<li class="list-group-item list-group-item-action" data-toggle="list">${figures.name}</li>`);

     });
});
