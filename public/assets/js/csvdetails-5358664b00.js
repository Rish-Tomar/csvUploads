function searchHandler(e){var t=document.getElementById("select_option"),l=document.getElementById("entered-text").value,n=(document.getElementById("table-body").value,t.options[t.selectedIndex].value);if(console.log("hellow",n,l),console.log(typeof e,e),"default"!=n){$.ajax({type:"get",url:`/csvdetails/?fileid=${e}`,success:function(e){console.log("data is",e.data.filedata);var t=newFileDataDisplay(e.data.filedata,l,n);0==t.length&&(t=e.data.filedata);newRenderResult(t);console.log("newfiledata",t)},error:function(e){console.log(e.responseText)}})}else alert("select Attribute ")}function newFileDataDisplay(e,t,l){Object.keys(e[0]);var n=e.filter((e=>{if(e[l]==t)return e}));return console.log("resultCar from newfiledatafilter",n),n}function newRenderResult(e){const t=Object.keys(e[0]);var l=document.getElementById("table-body");l.innerHTML="",e.forEach((e=>{var n=document.createElement("tr");for(let l=0;l<t.length;l++){var a=document.createElement("td");a.innerHTML=`${e[t[l]]}`,n.appendChild(a)}l.appendChild(n)}))}