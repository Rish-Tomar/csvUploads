function searchHandler(data){
    var select      =  document.getElementById('select_option');
    var inputText   =  document.getElementById('entered-text').value;
    var tableValues =  document.getElementById('table-body').value 
    var option = select.options[select.selectedIndex].value;
    // alert(option);
    console.log('hellow',option,inputText)
    console.log(typeof(data),data)

    var showRecords =[]

    $.ajax({
        type:'get',
        url:`/csvdetails/?fileid=${data}`,
        success: function(data){
            console.log("data is",data.data.filedata)
            //now call a function to display search data and render ir
            var newFileData =newFileDataDisplay(data.data.filedata,inputText,option)
            if(newFileData.length==0){
                newFileData=data.data.filedata
            }
            var renderResult = newRenderResult(newFileData)
            console.log('newfiledata',newFileData)
            //there is a space before delete-post
        },error: function(error){
            console.log(error.responseText);
        }
        
    })
}


function newFileDataDisplay(data,searchText,option){
    const keys     = Object.keys(data[0])
    console.log(keys)
    var resultvar = data.filter( (d) =>{
        if(d[option] == searchText){
            return d;
        }
    })    
    // if(resultvar.length==0){
    //     alert('Your entered record is not found')
    // }
    return resultvar
}

function newRenderResult(newFileData){
    const keys = Object.keys(newFileData[0])
    var table =document.getElementById('table-body')
    table.innerHTML=""     

        newFileData.forEach(element => {
            var tr =document.createElement('tr') 
            for (let i=0;i < keys.length;i++){
                var td =document.createElement('td')
                 td.innerHTML=`${element[keys[i]]}`
                 tr.appendChild(td)
               }
            table.appendChild(tr)                
        })  
    
}


$(document).ready(function() {
    $('#table').DataTable();
} );