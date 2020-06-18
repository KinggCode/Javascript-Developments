var content = $("#postcon .row");

$(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            datatype :'json',
            success : function(data){
                for(var i = 0; i< data.length; i++){
                    var posts = data[i];
                    // console.log(posts['userId']);
                    // console.log(posts['title']);
                    // console.log(posts['body']);

                    content.append('<div class="alert alert-success" role="alert">'+
                        '<span class="badge badge-danger">' + posts['userId'] +'</span>'+
                        '<h4 class="alert-heading">' + posts['title']+'</h4>'+
                        '<p>' +posts['body'] +'</p>'+
                                    '</div>');
                }
            }
        });
   
});


var container = $("#table_id tbody");
$(document).ready(function(){
    
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            datatype :'json',
            success : function(data){
                console.log(data);
                for(var i = 0; i< data.length; i++){
                    var users = data[i];
                    // console.log(users['id']);
                    // console.log(users['name']);
                    container.append('<tr>'+
                    '<td>' + users.id + '</td>'+
                    '<td>' + users.name + '</td>'+
                    '<td>' + users.username + '</td>'+
                    '<td>' + users.email + '</td>'+
                    '<td>' + users.phone + '</td>'+
                    '<td>' + users.website+ '</td>'+
                    '<td>' + users.company.name + '</td>'+
                    '</tr>');

                    

                }
                $('#table_id').DataTable();
            },error:function(e){

            }
        });
        
});


var gallery = $("#imagecon .row");

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
        datatype :'json',
        success : function(data){
            for(var i = 0; i< data.length; i++){
                var photos = data[i];
                // console.log(photos['albumId']);
                // console.log(photos['id']);
                // console.log(photos['title']);

                gallery.append('<div class="card " style="width: 18rem;">'+
                '<img src="'+photos["thumbnailUrl"]+'" class="card-img-top" alt="...">'+
                '<div class="card-body">'+
                '<p class="card-text">'+photos["title"]+'</p>'+
                '</div>'+
              '</div>');
            }
        }
    });

});

var db = $("#dbcon");
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "http://localhost/Blog/data.php",
        datatype :'json',
        success : function(data){
           
                var dbData = data;
                db.append(dbData);
                console.log(dbData);
                
            
        }
    });

});





