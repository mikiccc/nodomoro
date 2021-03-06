// https://github.com/WebReflection/wru
function wru(wru){
    var assert=wru.assert,async=wru.async;
    wru.test([
        {
            name: "it works!",
            setup: function () {

            },
            test: function () {
                var http = require("http");
                var url = require("url");
                
                
                function onRequest(request, response) {
                    response.writeHead(200, {
                        "Content-Type": "text/plain"
                    });
                    console.log(response.statusCode);
                    
                    response.write("Pomodoro registrato!!");
                    response.end();
                }
                
                http.createServer(onRequest).listen(8888);
                wru.async(function () { 
                    console.log("risposta arrivata");
                
                },50000);
                console.log("Server started");
            }
        }
    ]);
}

// wru related code
/*!
(C) Andrea Giammarchi, @WebReflection - Mit Style License
*/
var setTimeout=global.setTimeout,setInterval=global.setInterval,clearInterval=global.clearInterval,clearTimeout=global.clearTimeout;setTimeout||(function(h,c,g,a){setInterval=global.setInterval=function b(j,i){return e(j,i,g.call(arguments,2),1)};setTimeout=global.setTimeout=function d(j,i){return e(j,i,g.call(arguments,2))};clearInterval=global.clearInterval=clearTimeout=global.clearTimeout=function f(i){c[i].cancel();h.purge();delete c[i]};function e(l,k,j,i){var m=++a;c[m]=new JavaAdapter(java.util.TimerTask,{run:function(){l.apply(null,j)}});i?h.schedule(c[m],k,k):h.schedule(c[m],k);return m}})(new java.util.Timer(),{},[].slice,0);wru(function(S){function g(){v=E.call(i);if(v){k(X);k((ab(v,M)&&v[M])||(ab(v,e)&&v[e])||K);a=[];p=[];N=[];V={};b("setup");N[ac]||b("test");b("teardown");H||m()}else{o()}}function k(ae){try{require("sys").print(ae+"\n")}catch(ad){print(ae)}}function o(){k(f);k(X);switch(true){case !!Y:k(L+"   "+Y+" Errors");case !!y:k(I+f+y+" Failures");default:k(x+"      "+n+" Passes")}k(X);k(f);try{process.exit()}catch(ad){quit()}}function c(ad){for(var ae=0,af=ad[ac];ae<af;k("    "+(++ae)+". "+ad[ae-1])){}}function m(){n+=a[ac];y+=p[ac];Y+=N[ac];if(N[ac]){Q=L;c(N)}else{if(p[ac]){Q=I;c(p)}else{Q=x}}k(Q+" passes: "+a[ac]+", fails: "+p[ac]+", errors: "+N[ac]);G=0;Q=f;g()}function b(ad){if(ab(v,ad)){try{v[ad](V)}catch(ae){U.call(N,f+ae)}}}function ab(ae,ad){return l.call(ae,ad)}function r(){return A()<0.5?-1:1}var T={assert:function O(ae,ad){if(arguments[ac]==1){ad=ae;ae=K}u=C;U.call(ad?a:p,Q+ae);return ad},async:function P(ae,ah,af,ag){ag=++H;if(typeof ae=="function"){af=ah;ah=ae;ae="asynchronous test #"+ag}af=R(function(){ag=0;U.call(p,ae);--H||m()},F(af||t)||t);return function ad(){if(!ag){return}u=Z;Q=ae+": ";try{ah.apply(this,arguments)}catch(ai){u=C;U.call(N,Q+ai)}Q=f;if(u){B(af);--H||m()}}},test:function j(ad){i=D.apply(i,[ad]);T.random&&aa.call(i,r);H||g()}},C=true,Z=!C,t=100,f=" ",K="unknown",ac="length",M="name",e="description",z="<li>",d="</li>",h="\\|/-",l=T.hasOwnProperty,Q=f,W=Q.charAt,s=Q.slice,i=[],D=i.concat,q=i.join,U=i.push,E=i.shift,aa=i.sort,H=0,G=0,n=0,y=0,Y=0,L="\033[1;31mERROR\033[0m",I="\033[0;31mFAILURE\033[0m",x="\033[0;32mOK\033[0m",X="------------------------------",w,F,A,R,B,v,J,a,p,N,V,u;if(typeof global!="function"){S.wru=T;S=global}w=S.Math;F=w.abs;A=w.random;R=S.setTimeout;B=S.clearTimeout;S.setInterval(function(){H&&k(f+W.call(h,G++%4)+"\033[<1>A")},t);t*=t;T.random=Z;return T}(this));