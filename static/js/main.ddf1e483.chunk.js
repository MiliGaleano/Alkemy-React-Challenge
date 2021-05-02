(this["webpackJsonpalkemy-challenge"]=this["webpackJsonpalkemy-challenge"]||[]).push([[0],{143:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,s,l,d,p,b,h,u,j,x,g,f,O,m,A,y,w,v,E,k,I,C,S,Q,B,F,P,L,R,z,G,K,T,J,Y,q,N,U,Z=t(1),D=t(52),X=t.n(D),H=t(14),V=t(5),M=t(7),W=t(2),$=t(3),_=t(0),nn=$.b.header(r||(r=Object(W.a)(["\n    width: 100%;\n    background-color: #1c36af;\n    display: flex;\n    justify-content: flex-end;\n"]))),en=$.b.nav(i||(i=Object(W.a)(["\n\n    & ul {\n        display: flex;\n        flex-direction: row;\n        list-style: none;\n    }\n"]))),tn=$.b.li(c||(c=Object(W.a)(["\n        padding: 12px;\n        font-size: 1rem;\n        color: ",";\n        cursor: pointer;\n\n        &:hover {\n            color: yellow;\n        }\n"])),(function(n){return n.navcolor})),rn=function(){var n=Object(Z.useState)("/"),e=Object(M.a)(n,2),t=e[0],r=e[1],i=Object(V.f)();Object(Z.useEffect)((function(){r(i.pathname)}),[i]);var c=Object(V.e)();return Object(_.jsx)(nn,{children:Object(_.jsx)(en,{children:Object(_.jsxs)("ul",{children:[Object(_.jsx)(H.b,{to:"/",children:Object(_.jsx)(tn,{navcolor:"/"===t?"yellow":"orange",children:"Team"})}),Object(_.jsx)(H.b,{to:"/search",children:Object(_.jsx)(tn,{navcolor:"/search"===t?"yellow":"orange",children:"Search"})}),Object(_.jsx)(tn,{onClick:function(){localStorage.removeItem("token"),c.push("/login")},navcolor:"orange",children:"Log out"})]})})})},cn=t(25),an=t(8),on=$.b.div(a||(a=Object(W.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0;\n"]))),sn=$.b.div(o||(o=Object(W.a)(["\n    width: 15%;\n    font-size: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: ",";\n"])),(function(n){return n.vertical?"1.2rem":"2rem"}),(function(n){return n.vertical?"rotate(90deg)":"none"})),ln=$.b.div(s||(s=Object(W.a)(["\n    position: relative;\n    width: 80%;\n    height: ",";\n    box-shadow: ",";\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 6px;\n\n    & h1{\n        position: relative;\n        z-index: 1;\n        font-size: ",";\n\n    }\n"])),(function(n){return n.vertical?"20px":"30px"}),(function(n){return n.percentage&&"inset 0px 0px 0px 1px hsl(".concat(n.percentage," 100% 40%)")}),(function(n){return n.vertical?"0.8rem":"1rem"})),dn=$.b.aside(l||(l=Object(W.a)(["\n    position: absolute;\n    width: ","%;\n    height: 100%;\n    background: ",";\n    z-index: 0;\n    left: 0;\n    bottom: 0;\n    border-radius: 6px;\n"])),(function(n){return n.percentage}),(function(n){return"100"!==n.percentage?"linear-gradient(90deg, hsl(".concat(n.percentage," 100% 40%) 80%, transparent)"):"hsl(".concat(n.percentage," 100% 40%)")})),pn=function(n){var e=n.percentage,t=n.powerstats,r=n.vertical;return Object(_.jsxs)(on,{vertical:r,children:[Object(_.jsx)(sn,{vertical:r,children:Object(_.jsx)(cn.a,{icon:"speed"===t?an.f:"strength"===t?an.c:"combat"===t?an.d:"power"===t?an.a:"durability"===t?an.e:an.b})}),Object(_.jsxs)(ln,{percentage:"null"!==e?e:0,vertical:r,children:[Object(_.jsx)("h1",{children:"".concat(t," ").concat("null"!==e?e:0,"%")}),Object(_.jsx)(dn,{percentage:"null"!==e?e:0})]})]})},bn=t(56),hn=$.b.div(d||(d=Object(W.a)(["\n    margin: 50px 0;\n"]))),un=$.b.h1(p||(p=Object(W.a)(["\n     background-color: #eeeeee;\n     font-size: 2.8rem;\n     font-family: Prompt;\n     letter-spacing: 0em;\n     color: #1c36af;\n     position: relative;\n     font-weight: 800;\n     text-align: center;\n     width: 280px;\n     margin: 0 auto;\n     top: 2rem;\n     z-index: 1;\n     cursor: pointer;\n"]))),jn=Object($.b)(un)(b||(b=Object(W.a)(["\n    background-color: orange;\n    padding: 5px;\n    border-radius: 6px;\n    top: 0;\n    margin-top: 2rem;\n    z-index: 0;\n    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),xn=$.b.div(h||(h=Object(W.a)(["\n    position: relative;\n    width: 90%;\n    margin-left: 5%;\n    display: flex;\n    flex-direction: column;\n    border-radius: 12px;\n    border-color: #1c36af;\n    border-width: 1px;\n    border-style: solid;\n    padding: 3rem 10px 20px 10px;\n    z-index: 0;\n"]))),gn=$.b.div(u||(u=Object(W.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-top: 16px;\n\n    & div {\n        width: 40%;\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n    }\n\n    & div h1 {\n        font-size: 3rem;\n    }\n\n    & div h1 span{\n        font-size: 1.5rem;\n    }\n\n    & div h2 {\n        font-size: 1rem;\n    }\n"]))),fn=function(n){var e=n.myTeam,t=Object(Z.useState)(!1),r=Object(M.a)(t,2),i=r[0],c=r[1],a={intelligence:e.reduce((function(n,e){return n+parseInt(e.powerstats.intelligence)}),0)/e.length,speed:e.reduce((function(n,e){return n+parseInt(e.powerstats.speed)}),0)/e.length,strength:e.reduce((function(n,e){return n+parseInt(e.powerstats.strength)}),0)/e.length,combat:e.reduce((function(n,e){return n+parseInt(e.powerstats.combat)}),0)/e.length,power:e.reduce((function(n,e){return n+parseInt(e.powerstats.power)}),0)/e.length,durability:e.reduce((function(n,e){return n+parseInt(e.powerstats.durability)}),0)/e.length};return Object(_.jsxs)(hn,{children:[!i&&Object(_.jsx)(jn,{onClick:function(){return c(!i)},children:"TEAM STATS"}),i&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(un,{onClick:function(){return c(!i)},children:"TEAM STATS"}),Object(_.jsx)(bn.Animated,{animationIn:"fadeInDown",animationOut:"fadeOutUp",animationInDuration:800,animationOutDuration:800,isVisible:!!i,children:Object(_.jsxs)(xn,{children:[Object.keys(a).sort((function(n,e){return a[e]-a[n]})).map((function(n,e){return Object(_.jsx)(pn,{percentage:a[n].toFixed(0),powerstats:n},n)})),Object(_.jsxs)(gn,{children:[Object(_.jsxs)("div",{children:[Object(_.jsxs)("h1",{children:[(e.reduce((function(n,e){return n+parseInt(e.appearance.weight[1].split(" ")[0])}),0)/e.length).toFixed(0),Object(_.jsx)("span",{children:"kg"})]}),Object(_.jsx)("h2",{children:"weight"})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("h1",{children:[(e.reduce((function(n,e){return n+parseInt(e.appearance.height[1].split(" ")[0])}),0)/e.length).toFixed(0),Object(_.jsx)("span",{children:"cm"})]}),Object(_.jsx)("h2",{children:"height"})]})]})]})})]})]})},On=t.p+"static/media/heroimg-01.683f289b.png",mn=$.b.div(j||(j=Object(W.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #1c36af;\n    width: 280px;\n    height: 505px;\n    padding: 16px 0;\n    margin: 20px auto;\n    border-radius: 6px;\n    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n"]))),An=$.b.img(x||(x=Object(W.a)(["\n    width: 90%;\n    max-height: 336px;\n    border-radius: 6px;\n    margin-bottom: 10px;\n"]))),yn=$.b.div(g||(g=Object(W.a)(["\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n"]))),wn=$.b.h1(f||(f=Object(W.a)(["\n    text-align: center;\n    font-size: 2rem;\n     font-family: Prompt;\n     letter-spacing: 0em;\n     color: #1c36af;\n     background-color: orange;\n     font-weight: 700;\n     border-radius: 6px;\n\n     &:hover{\n         color: #eeeeee;\n     }\n"]))),vn=$.b.div(O||(O=Object(W.a)(["\n    border-radius: 6px;\n    padding: 5px 0;\n    font-family: Prompt;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n"]))),En=$.b.div(m||(m=Object(W.a)(["\n    width: 30%;\n    background-color: #eeeeee;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    border-radius: 6px;\n    padding: 3px;\n    margin-top: 10px;\n\n    & svg {\n       font-size: 1.5rem;\n       align-self: center;\n    }\n"]))),kn=function(n){var e=n.handleClick,t=n.hero;return Object(_.jsxs)(mn,{onClick:function(){return e()},children:[Object(_.jsx)(An,{src:t.img?t.img:On,onError:function(n){return n.target.onerror=null,n.target.src=On}}),Object(_.jsxs)(yn,{children:[Object(_.jsx)(wn,{children:t.name}),Object(_.jsx)(vn,{children:Object.keys(t.powerstats).map((function(n,e){return Object(_.jsxs)(En,{children:[Object(_.jsx)(cn.a,{icon:"speed"===n?an.f:"strength"===n?an.c:"combat"===n?an.d:"power"===n?an.a:"durability"===n?an.e:an.b}),Object(_.jsx)("h2",{children:"null"!==t.powerstats[n]?t.powerstats[n]:0})]},n)}))})]})]})},In=$.b.div(A||(A=Object(W.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #1c36af;\n    width: 280px;\n    height: 505px;\n    padding: 16px 0;\n    margin: 20px auto;\n    border-radius: 6px;\n    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n"]))),Cn=$.b.div(y||(y=Object(W.a)(["\n    position: relative;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    border-radius: 12px;\n    border-color: #1c36af;\n    border-width: 1px;\n    border-style: solid;\n    padding: 0 10px;\n    z-index: 0;\n"]))),Sn=$.b.div(w||(w=Object(W.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n\n    & div {\n        width: 42%;\n        color: orange;\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n        padding: 5px;\n        border-radius: 6px;\n        margin-top: 5px;\n    }\n\n    & div h1 {\n        font-size: 2rem;\n    }\n\n    & div h1 span{\n        font-size: 1rem;\n    }\n\n    & div h2 {\n        font-size: 0.8rem;\n    }\n"]))),Qn=$.b.div(v||(v=Object(W.a)(["\n    width: 90%;\n    background-color: #eeeeee;\n    border-radius: 6px;\n    padding: 5px 10px;\n    font-family: Prompt;\n\n    & h2 {\n    font-size: 0.85rem;\n     font-family: Prompt;\n     color: #1c36af;\n     font-weight: 600;\n     margin-bottom: 2px;\n    }\n\n    & h2 span{\n        font-weight: 400;\n    }\n"]))),Bn=$.b.div(E||(E=Object(W.a)(["\n    transform: rotate(270deg);\n"]))),Fn=function(n){var e=n.handleClick,t=n.hero;return Object(_.jsxs)(In,{onClick:function(){return e()},children:[Object(_.jsxs)(Cn,{children:[Object(_.jsx)(Bn,{children:Object.keys(t.powerstats).sort((function(n,e){return t.powerstats[e]-t.powerstats[n]})).map((function(n,e){return Object(_.jsx)(pn,{percentage:t.powerstats[n],powerstats:n,vertical:!0},n)}))}),Object(_.jsxs)(Sn,{children:[Object(_.jsxs)("div",{children:[Object(_.jsxs)("h1",{children:[t.appearance.weight[1].split(" ")[0],Object(_.jsx)("span",{children:"kg"})]}),Object(_.jsx)("h2",{children:"weight"})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("h1",{children:[t.appearance.height[1].split(" ")[0],Object(_.jsx)("span",{children:"cm"})]}),Object(_.jsx)("h2",{children:"height"})]})]})]}),Object(_.jsxs)(Qn,{children:[Object(_.jsxs)("h2",{children:["Name: ",Object(_.jsx)("span",{children:t.biography["full-name"]})]}),Object(_.jsxs)("h2",{children:["Alias: ",Object(_.jsx)("span",{children:t.biography.aliases.slice(0,4).join(" - ")})]}),Object(_.jsxs)("h2",{children:["Base: ",Object(_.jsx)("span",{children:t.base})]}),Object(_.jsxs)("h2",{children:["Eyes: ",Object(_.jsxs)("span",{children:[t.appearance["eye-color"]," /"]})," Hair: ",Object(_.jsx)("span",{children:t.appearance["hair-color"]})]})]})]})},Pn=t(57),Ln=t.n(Pn),Rn=$.b.div(k||(k=Object(W.a)(["\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]))),zn=$.b.button(I||(I=Object(W.a)(["\n    background-color: orange;\n    color: #1c36af;\n    border-radius: 6px;\n    padding: 10px;\n    width: fit-content;\n    margin: 0 auto;\n    border: none;\n    outline: none;\n    font-size: 1.2rem;\n    font-weight: bolder;\n    cursor: pointer;\n    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);\n\n    &:hover{\n        background-color: #1c36af;\n        color: orange;\n    }\n"]))),Gn=function(n){var e=n.hero,t=n.handleDelete,r=n.handleAdd,i=Object(Z.useState)(!1),c=Object(M.a)(i,2),a=c[0],o=c[1],s=function(){o(!a)};return Object(_.jsxs)(Rn,{children:[Object(_.jsxs)(Ln.a,{isFlipped:a,children:[Object(_.jsx)(kn,{handleClick:s,hero:e}),Object(_.jsx)(Fn,{handleClick:s,hero:e})]}),r?Object(_.jsx)(zn,{onClick:function(){return r(e)},children:"Add to my team"}):Object(_.jsx)(zn,{onClick:function(){return t(e)},children:"delete"})]})},Kn=t(19),Tn=t.n(Kn),Jn="https://www.superheroapi.com/api.php/",Yn="1895113727309795/",qn=function(n){return Tn()({method:"get",url:Jn+Yn+n}).then((function(n){return n.data})).then((function(n){var e={img:n.image.url,name:n.name,id:n.id,powerstats:n.powerstats,appearance:n.appearance,biography:n.biography,base:n.work.base},t=JSON.parse(localStorage.getItem("myTeam"));if(t){var r=t.concat(e);localStorage.setItem("myTeam",JSON.stringify(r))}else{var i=[];i.push(e),localStorage.setItem("myTeam",JSON.stringify(i))}})).catch((function(n){return n}))},Nn=$.b.div(C||(C=Object(W.a)(["\n    width: 100%;\n    height: 100vh;\n    background-color: #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),Un=Object($.c)(S||(S=Object(W.a)(["\n  from {\n    right: 100px;\n    top: 100px;\n  }\n\n  to {\n    right: -100px;\n    top: -100px;\n  }\n"]))),Zn=$.b.img(Q||(Q=Object(W.a)(["\n    position: relative;\n    width: 50px;\n    animation: "," 2s linear infinite;\n"])),Un),Dn=function(){return Object(_.jsx)(Nn,{children:Object(_.jsx)(Zn,{src:"data:image/png;base64,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"})})},Xn=$.b.h1(B||(B=Object(W.a)(["\n     font-size: 2.4rem;\n     font-family: Prompt;\n     letter-spacing: 0em;\n     color: #1c36af;\n     font-weight: 800;\n     text-align: center;\n     width: 100%;\n     margin-top: 24px;\n\n     & span {\n        font-size: 1rem;\n        font-weight: 600;\n     }\n"]))),Hn=$.b.div(F||(F=Object(W.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    padding: 0 40px;\n    margin-bottom: 50px;\n"]))),Vn=function(){var n=Object(Z.useState)(!0),e=Object(M.a)(n,2),t=e[0],r=e[1],i=Object(Z.useState)(!1),c=Object(M.a)(i,2),a=c[0],o=c[1],s=Object(Z.useState)(JSON.parse(localStorage.getItem("myTeam"))),l=Object(M.a)(s,2),d=l[0],p=l[1],b=localStorage.getItem("token"),h=Object(V.e)();Object(Z.useEffect)((function(){b||h.push("/login")}),[]);var u=[524,638,517,579,174];Object(Z.useEffect)((function(){p(JSON.parse(localStorage.getItem("myTeam")))}),[a]),Object(Z.useEffect)((function(){d?r(!1):qn(u[0]).then((function(){return qn(u[1])})).then((function(){return qn(u[2])})).then((function(){return qn(u[3])})).then((function(){return qn(u[4])})).then((function(){return r(!1)}))}),[]);var j=function(n){if(1===d.length)alert("You can't have an empty team!");else{var e=d.filter((function(e){return e.name!==n.name}));localStorage.setItem("myTeam",JSON.stringify(e)),o(!a)}};return t?Object(_.jsx)(Dn,{}):(d.sort((function(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())})),Object(_.jsxs)("div",{children:[Object(_.jsx)(rn,{}),Object(_.jsxs)(Xn,{children:["My Team ",Object(_.jsx)("span",{children:"".concat(d.length,"/6")})]}),Object(_.jsx)(Hn,{children:d.map((function(n){return Object(_.jsx)(Gn,{hero:n,handleDelete:j},n.name)}))}),Object(_.jsx)(fn,{myTeam:d})]}))},Mn=$.b.div(P||(P=Object(W.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),Wn=$.b.section(L||(L=Object(W.a)(["\n    width: 120px;\n    height: 120px;\n    background-color: orange;\n    border-radius: 50%;\n    position: relative;\n    top:60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);\n\n    img{\n        width: 60%;\n        margin-left: 10%;\n    }\n"]))),$n=$.b.form(R||(R=Object(W.a)(["\n    width: 80%;\n    max-width: 800px;\n    background-color: #1c36af;\n    border-radius: 6px;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 80px 10px 20px;\n    margin-bottom:60px;\n    box-shadow: 4px 5px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),_n=$.b.label(z||(z=Object(W.a)(["\n    font-size: 1.2rem;\n    color: orange;\n    text-align: left;\n    width: 80%;\n    margin-bottom: 10px;\n"]))),ne=$.b.input(G||(G=Object(W.a)(["\n    width: 80%;\n    background-color: #eeeeee;\n    border: none;\n    outline: none;\n    border-radius: 6px;\n    padding: 5px;\n    margin-bottom: 20px;\n"]))),ee=$.b.input(K||(K=Object(W.a)(["\n    background-color: orange;\n    color: #1c36af;\n    border-radius: 6px;\n    width: 40%;\n    padding: 5px;\n    border: none;\n    outline: none;\n    font-size: 1.2rem;\n    font-weight: bolder;\n    margin: 20px;\n    cursor: pointer;\n    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);\n\n    &:hover{\n       opacity: 0.9;\n       color: #eeeeee;\n    }\n"]))),te=Object($.b)(_n)(T||(T=Object(W.a)(["\n    text-align: center;\n    color: #eeeeee;\n    margin:10px;\n"]))),re=Object($.b)(Mn)(J||(J=Object(W.a)(["\n    position: absolute;\n    background-color: #eeeeee;\n    left: 0;\n    top: 0;\n    z-index: 5;\n\n    & div {\n        width: 250px;\n        height: 250px;\n        background-color: orange;\n        color: #1c36af;\n        text-align: center;\n        font-size: 1.5rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 6px;\n        box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);\n    }\n"]))),ie=function(){var n=Object(Z.useState)(),e=Object(M.a)(n,2),t=e[0],r=e[1],i=Object(Z.useState)(),c=Object(M.a)(i,2),a=c[0],o=c[1],s=Object(Z.useState)(!1),l=Object(M.a)(s,2),d=l[0],p=l[1],b=Object(Z.useState)(!1),h=Object(M.a)(b,2),u=h[0],j=h[1],x=Object(V.e)();return Object(_.jsxs)(Mn,{children:[u&&Object(_.jsx)(re,{onClick:function(){return j(!1)},children:Object(_.jsx)("div",{children:"Access denied, please try again."})}),Object(_.jsx)(Wn,{children:Object(_.jsx)("img",{src:"data:image/png;base64,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",alt:"Superheroe icon"})}),Object(_.jsxs)($n,{onSubmit:function(n){(n.preventDefault(),t&&a)?function(n){return Tn()({method:"post",url:"http://challenge-react.alkemy.org",data:n}).then((function(n){return n.data.token})).then((function(n){return localStorage.setItem("token",n),"ok"})).catch((function(n){return n}))}({email:t,password:a}).then((function(n){"ok"===n?x.push("/"):j(!0)})).catch((function(n){return console.log(n)})):p(!0)},children:[Object(_.jsx)(_n,{children:"Email:"}),Object(_.jsx)(ne,{type:"email",onChange:function(n){r(n.target.value)}}),Object(_.jsx)(_n,{children:"Password:"}),Object(_.jsx)(ne,{type:"password",onChange:function(n){o(n.target.value)}}),d&&Object(_.jsx)(te,{children:"Please complete all fields!"}),Object(_.jsx)(ee,{type:"submit",value:"Log in"})]})]})},ce=function(){return Object(_.jsx)(ie,{})},ae=$.b.form(Y||(Y=Object(W.a)(["\n    width: 100%;\n    max-width: 350px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-content: space-around;\n    margin: 20px auto;\n"]))),oe=$.b.input(q||(q=Object(W.a)(["\n    width: 70%;\n    background-color: #eeeeee;\n    border: 2px solid orange;\n    outline: none;\n    border-radius: 6px;\n    padding: 5px;\n"]))),se=$.b.input(N||(N=Object(W.a)(["\n    width: 15%;\n    background-color: orange;\n    color: #1c36af;\n    border-radius: 6px;\n    padding: 5px;\n    font-weight: bolder;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    text-align: center;\n    margin-left: 10px;\n\n    &:hover{\n        background-color: #1c36af;\n        color: orange;\n    }\n"]))),le=function(){var n=Object(Z.useState)(),e=Object(M.a)(n,2),t=e[0],r=e[1],i=Object(Z.useState)(),c=Object(M.a)(i,2),a=c[0],o=c[1],s=localStorage.getItem("token"),l=Object(V.e)();Object(Z.useEffect)((function(){s||l.push("/login")}),[]);var d=function(n){var e=JSON.parse(localStorage.getItem("myTeam"));if(e.length>5)alert("Your team is complete!");else if(0!==e.filter((function(e){return e.id===n.id})).length)alert("".concat(n.name," is already part of your team!"));else if(e.filter((function(e){return e.biography.alignment===n.biography.alignment})).length>2)alert("Your ".concat(n.biography.alignment," side is complete"));else{var t=e.concat(n);localStorage.setItem("myTeam",JSON.stringify(t));var r=a.filter((function(e){return e.id!==n.id}));o(r)}};return Object(_.jsxs)("div",{children:[Object(_.jsx)(rn,{}),Object(_.jsx)(Xn,{children:"Search a hero"}),Object(_.jsxs)(ae,{onSubmit:function(n){n.preventDefault(),t?function(n){var e=[];return Tn()({method:"get",url:Jn+Yn+"search/"+n}).then((function(n){return n.data})).then((function(n){return n.results.map((function(n){var t={img:n.image.url,name:n.name,id:n.id,powerstats:n.powerstats,appearance:n.appearance,biography:n.biography,base:n.work.base};e.push(t)})),e})).catch((function(){return"err"}))}(t).then((function(n){"err"!==n?o(n):alert("Something went wrong, please try again")})).catch((function(){alert("Something went wrong, please try again")})):alert("Complete the search field!")},children:[Object(_.jsx)(oe,{type:"text",onChange:function(n){r(n.target.value)},placeholder:"search"}),Object(_.jsx)(se,{value:"GO",type:"submit"})]}),Object(_.jsx)(Hn,{children:a&&a.slice(0,6).map((function(n){return Object(_.jsx)(Gn,{hero:n,handleAdd:d},n.id)}))})]})},de=Object($.a)(U||(U=Object(W.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        font-family: monospace;\n        letter-spacing: 0.1em;\n        box-sizing: border-box;\n        overflow-x: hidden;\n        transition: 0.6s;\n    }\n\n    a{\n        text-decoration: none;\n    }\n\n    body{\n        width: 100%;\n        min-height: 100vh;\n        background-color: #eeeeee;\n    }\n"])));var pe=function(){return Object(_.jsxs)(H.a,{basename:"/Alkemy-React-Challenge",children:[Object(_.jsx)(de,{}),Object(_.jsx)(V.a,{path:"/login",exact:!0,children:Object(_.jsx)(ce,{})}),Object(_.jsx)(V.a,{path:"/",exact:!0,children:Object(_.jsx)(Vn,{})}),Object(_.jsx)(V.a,{path:"/search",exact:!0,children:Object(_.jsx)(le,{})})]})};X.a.render(Object(_.jsx)(pe,{}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.ddf1e483.chunk.js.map