!function(x,d,u){if(!x)return d.write('Error: No XMLHTTP support');x=new x("Microsoft.XMLHTTP");function f(t,r,p){for(x=0;t[x];d[0][0]=='S'?d[1]?(p=d[1].split(/-|\./g),r[d[0]].a>p[0]&&(r[d[0]].a=+p[0],r[d[0]].A=u+d),r[d[0]].b>p[1]&&(r[d[0]].b=+p[1],r[d[0]].B=u+d),r[d[0]].c>p[2]&&(r[d[0]].c=+p[2],r[d[0]].C=u+d)):(r[d[0]]={a:1/0,b:1/0,c:1/0,A:'#',B:'#',C:'#'}):0)d=t[x++].path.split('/');p='<table border="1"><tr><th>Level</th><th>Min cost</th><th>Min power</th><th>Min code</th></tr>';for(t in r)p+='<tr><td>'+t+'</td><td><a href="'+r[t].A+'">'+r[t].a+'</a></td><td><a href="'+r[t].B+'">'+r[t].b+'</a></td><td><a href="'+r[t].C+'">'+r[t].c+'</a></td></tr>';return p+'</table>'}x.onreadystatechange=function(){x.readyState-4||(d.write(x=x.status-200?'Error: '+x.status:(f((JSON?JSON.parse:eval)(x.responseText).tree,{}))))};x.open("GET","https://api.github.com/repos/837951602/Shenzhen-i-o-solutions/git/trees/master?recursive=1",true);x.setRequestHeader("If-Modified-Since",0);x.send()}(XMLHttpRequest||ActiveXObject,document,"https://github.com/837951602/Shenzhen-i-o-solutions/blob/master/")
