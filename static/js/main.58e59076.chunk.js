(this["webpackJsonpcs6447-site"]=this["webpackJsonpcs6447-site"]||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/demo.907b0cc0.gif"},13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),s=a(9),c=a(5),o=a(1),u=a(2),h=a(6),m=a(4),p=a(3),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flexRow "+(this.props.class||""),style:Object(c.a)(Object(c.a)({},{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",maxWidth:"100%",margin:"0 auto"}),this.props.style)},this.props.children)}}]),a}(r.a.Component),f=a(8),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).waveRef=r.a.createRef(),n.shipRef=r.a.createRef(),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e;Object(f.a)({targets:this.waveRef.current,d:"M0,499.7c94.74,75.65,185.15,40.55,221.52-12.52c6.81,18.42,36.91,45.39,97.17,38.73\n                c36.78-3.71,58.61-14.49,93.26-49.55c13.59,16.24,63.09,15.35,84.26,15.25c50.21-0.25,83.77-11.73,116.42-49.88\n                c11.61,14.7,99.71,6.31,107.37-8.16",duration:4e3,loop:!0,direction:"alternate",easing:"easeInOutSine"}),Object(f.a)({targets:this.shipRef.current,keyframes:[(e=function(e){return{rotate:e,translateX:-e}})(1),e(-1)],duration:8e3,direction:"alternate",easing:"linear",loop:!0})}},{key:"render",value:function(){var e={svg:{enableBackground:"new 0 0 720.01 565.87"},ship:{transformOrigin:"50% 50%",transformBox:"fill-box"},st1:{fill:"none",stroke:"#50667c",strokeMiterlimit:10},st2:{fill:"none",stroke:"#000000",strokeMiterlimit:10}};return r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 720.01 565.87",style:e.svg},r.a.createElement("g",{id:"Waves"},r.a.createElement("path",{style:e.st1,ref:this.waveRef,className:"st1",d:"M0,539.22c58.92,25.81,134.75,16.93,171.12-36.14c6.81,18.42,30.54,23.31,50.16,22.42 c49.24-2.24,97.36-23.63,132.01-58.69c13.59,16.24,36.62,21.01,57.79,20.91c50.21-0.25,99.86-23.26,132.51-61.41 c39.76,43.65,148.54-5.13,176.42-36.47"})),r.a.createElement("g",{id:"Ship",style:e.ship,ref:this.shipRef},r.a.createElement("path",{className:"st2",style:e.st2,d:"M253.28,512.72c-101-142-32-319-32-319s159,159,360,170c0,0,18.69,34.31,2,74"}),r.a.createElement("path",{className:"st2",style:e.st2,d:"M866.01,371.87"}),r.a.createElement("path",{className:"st2",style:e.st2,d:"M32.01,565.87"}),r.a.createElement("line",{className:"st2",style:e.st2,x1:"387.28",y1:"309.72",x2:"451.28",y2:"34.72"}),r.a.createElement("polyline",{className:"st2",style:e.st2,points:"427.28,139.72 582.28,172.72 451.28,34.72"})))}}]),a}(r.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},{width:"100%"}),this.props.style)},r.a.createElement(g,null))}}]),a}(r.a.Component),b=a(12),v={s:"s\u01a8S\u01a75$",e:"e\u0258E3",c:"cC",u:"uU",r:"rR\u042f\u0279",i:"iI1l!",t:"tT",a:"aA4",".":".,"},E="securitears.".split("").map((function(e){return v[e]}));function w(e){var t,a=e.split(""),n=Math.floor(Math.random()*a.length);return a[n]=(t=E[n])[Math.floor(Math.random()*t.length)],a.join("")}var j={minWidth:"300px",textAlign:"center",fontFamily:"monospace"},O=function(e){var t=Object(n.useState)("securitears."),a=Object(b.a)(t,2),i=a[0],l=a[1];return Object(n.useEffect)((function(){var e=setInterval((function(){l(w(i))}),75);return function(){return clearInterval(e)}})),r.a.createElement("span",{style:Object(c.a)(Object(c.a)({},j),e.style)},i)},x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).ref=r.a.createRef(),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e;Object(f.a)({targets:this.ref.current.querySelector("g"),keyframes:[(e=function(e){return{translateY:-e}})(1),e(-1)],duration:2e3,direction:"alternate",easing:"easeInSine",loop:!0})}},{key:"render",value:function(){return r.a.createElement("svg",{version:"1.1",viewBox:"0 0 32 32",ref:this.ref},r.a.createElement("g",null,r.a.createElement("path",{d:"M22.285,15.349L16,21.544l-6.285-6.196c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   l6.999,6.899c0.379,0.375,1.048,0.377,1.429,0l6.999-6.9c0.394-0.39,0.394-1.024,0-1.414   C23.319,14.958,22.679,14.958,22.285,15.349z",fill:"#121313"}),r.a.createElement("path",{d:"M15.286,16.662c0.379,0.375,1.048,0.377,1.429,0l6.999-6.899c0.394-0.391,0.394-1.024,0-1.414   c-0.394-0.391-1.034-0.391-1.428,0L16,14.544L9.715,8.349c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414   L15.286,16.662z",fill:"#121313"})))}}]),a}(r.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},{height:"100vh",width:"100%",display:"flex",justifyContent:"center"}),this.props.style)},this.props.children)}}]),a}(r.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).minHeight=50,n.initialHeight=200,n.state={shipStyle:{transformOrigin:"top left",transform:"scale(1) translateY(0px)"},textStyle:{margin:"0 50px",fontSize:"3em"},containerStyle:{userSelect:"none"}},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(d,{style:this.state.containerStyle},r.a.createElement(y,{style:this.state.shipStyle}),r.a.createElement(O,{style:this.state.textStyle})),r.a.createElement("span",{onClick:this.props.handleBtnAction,style:{position:"absolute",margin:"0 auto",width:"70px",opacity:.8,bottom:"8vh",cursor:"pointer"}},r.a.createElement(x,null)))}}]),a}(r.a.Component),z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flexRow",style:Object(c.a)({position:"fixed"},this.props.style)},this.props.children)}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={opacity:0},n.handleScroll=n.handleScroll.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=window.scrollY,a=window.innerHeight;this.setState({style:Object(c.a)(Object(c.a)({},this.state.style),{},{opacity:t/a})})}},{key:"render",value:function(){return r.a.createElement(z,{style:{bottom:0,right:0,width:"60vw",opacity:.1,zIndex:-1,transform:"translateY(3%) rotate(-8deg)"}},r.a.createElement(y,{style:this.state.style}))}}]),a}(r.a.Component);function R(e){return r.a.createElement(d,{class:"width80"},r.a.createElement("img",{style:{borderRadius:"5px",width:"100%"},src:e.src,alt:e.alt||""}))}var M=a(11),N=a.n(M),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"center"},"Welcome Aboard!"),r.a.createElement(R,{src:N.a,alt:"demo video"}),r.a.createElement("hr",null),r.a.createElement("h1",null,"How the Fuzzer works"),r.a.createElement("p",null,"The created fuzzer works both as a standalone module, which allows the user to fuzz a single program, as well as a library, which causes the fuzzer to run all the relevant strategies on their corresponding files."),r.a.createElement("h2",null,"Key Framework Components"),r.a.createElement("h3",null,"Strategies"),r.a.createElement("p",null,"Strategies describe the permutation of data which is fed into the binaries. Strategies are defined in the strategies directory and are categorised according to which input format they can be applied to. Strategies which do not rely on the data being a specific format are located in the strategy.commons directory. At their core, each strategy is a generator which produces a series of inputs."),r.a.createElement("h3",null,"Bootstraps"),r.a.createElement("p",null,"Bootstraps are modules which detect which input format the program needs to be fuzzed with. Having detected a valid input format, the bootstrap retrieves and executes strategies which are specific to that input format, in addition to some generic strategies which are agnostic to input format. Bootstrap contains the ",r.a.createElement("code",null,"fuzz()")," function which returns a crash string if the binary was fuzzed successfully, and None otherwise."),r.a.createElement("h3",null,"Harness"),r.a.createElement("p",null,"The Harness class implements the logic related to executing the binary and piping it data. The test function in the harness class determines whether the input has crashed the program. This test method is utilised in the ",r.a.createElement("code",null,"fuzz()")," function within ",r.a.createElement("code",null,"bootstrap.py"),"."),r.a.createElement("h3",null,"Console Progress Bars"),r.a.createElement("p",null,"Runtime visualisations provide a breakdown of each strategy, its iteration status and success for a particular binary. Successful strategies are highlighted for further analysis. A summary of results is also provided when the ",r.a.createElement("code",null,"runTest.py")," script is used."),r.a.createElement("hr",null),r.a.createElement("h3",null,"Future Improvements"),r.a.createElement("p",null,"Current strategies focus on causing segfaults by exploiting buffer overflows. Memory corruptions are also attempted by providing illegitimate values to the program, for example, a negative value for a length input."),r.a.createElement("p",null,"The fuzzer is capable of breaking programs, however, it is currently not capable of identifying the minimum condition for causing that breakage. We could implement dynamic strategies which respond to errors raised by the program and mutate themselves in order to find similar faults within the program."),r.a.createElement("p",null,"As an example, if the fuzzer finds that a binary segfaults when provided a string of 400 bytes, a dynamic strategy might incrementally decrease the size of the string until locating the minimum number of bytes required to cause that segfault."),r.a.createElement("p",null,"In order to facilitate this, a ",r.a.createElement("code",null,"communicate()")," function has been written in the ",r.a.createElement("code",null,"harness.py")," module which returns the response of the program, as opposed to the ",r.a.createElement("code",null,"test()")," function which only returns if the program broke."))}}]),a}(r.a.Component),B=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"profile-icon",style:this.props.style},r.a.createElement("img",{src:this.props.src,alt:"icon"}))}}]),a}(r.a.Component),P=function(e,t,a){var n={row:{height:"100px",display:"flex",marginBottom:"20px"},description:{marginLeft:"20px",height:"100px",width:"100%",whiteSpace:"pre"},img:{width:"100px"}};return r.a.createElement("article",null,r.a.createElement("div",null,r.a.createElement("h2",null,e)),r.a.createElement("div",{style:n.row},r.a.createElement(B,{src:t,style:n.img}),r.a.createElement("div",{style:n.description},a)))},A=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"center"},"Meet the Crew"),r.a.createElement("div",{className:"d-flex flex-column"},P("Captain - Eunike","https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png","Use her but don't abuse her"),P("Best Mate - Andrew","https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png","Spent arguably more time making this website than the actual fuzzer"),P("First Mate - Oscar","https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png","Squeals at the sight of XML vulnerabilities"),P("Cabin Boy - Roger","https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png","Sails the seas in search of RCEs"),P("Ship Rat - Theon","https://www.kindpng.com/picc/m/95-950368_girl-pirate-eye-patch-cartoon-hd-png-download.png","Gatekeeper of the README.md file")))}}]),a}(r.a.Component);function I(e){var t={container:{height:"100%",margin:"0 auto",backgroundColor:"#263238",padding:"5px",borderRadius:"5px"},code:{whiteSpace:"pre-wrap",color:"rgb(233,237,237)"}};return r.a.createElement("div",{style:t.container},r.a.createElement("code",{style:t.code},e.children))}var L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content usagePage"},r.a.createElement("h1",{className:"center"},"Installation"),r.a.createElement("h2",null,"Clone the ",r.a.createElement("a",{href:"https://github.com/featherbear/UNSW-COMP6447-ass"},"securitears")," repository"),"Do it. Then navigate into it",r.a.createElement("h2",null,"Install Python libraries"),r.a.createElement(I,null,"python3 -m pip install -r requirements.txt"),r.a.createElement("h1",{className:"center"},"Usage"),r.a.createElement("i",null,"Pro-tip: Make sure the binary you are trying to fuzz has executable permissions!"),r.a.createElement("h2",null,"Test Runner"),r.a.createElement(I,null,"python3 runTests.py"),r.a.createElement("p",null,"By default, each strategy is limited to ",r.a.createElement("code",null,"500")," executions.",r.a.createElement("br",null),"To change the limit, append a program argument containing the execution limit.",r.a.createElement("br",null),"Alternatively, append a ",r.a.createElement("code",null,"0")," to remove the execution limit."),r.a.createElement(I,null,"python3 runTests.py <limit>"),r.a.createElement("h2",null,"Module"),r.a.createElement(I,null,"usage: securitears [-h] [--input input] [--type {json,csv,xml,plain}] [--strategy STRATEGY] [--dest dest] [--limit limit] [--wait] [--verbose] program\n\nCOMP6447 Fuzzer Project\n\npositional arguments:\n  program               executable file to fuzz\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --input input, -i input\n                        input file\n  --type {json,csv,xml,plain}, -t {json,csv,xml,plain}\n                        fuzz input type\n  --strategy STRATEGY, -s STRATEGY\n                        select specific strategy\n  --dest dest, -d dest  destination crash data\n  --limit limit, -l limit\n                        execution limit per strategy (default: 500)\n  --wait, -w            wait for all strategies to finish\n  --verbose, -v         verbose\n\nDedicated to Adam Banana"),r.a.createElement("h3",null,"Example Uses"),r.a.createElement(I,null,"python3 -m securitears [program-name]"),r.a.createElement("p",null,"Fuzz a program using input data",r.a.createElement(I,null,"python3 -m securitears [program-name] -i [input-data-file]")),r.a.createElement("p",null,"Fuzz a program with a specific strategy",r.a.createElement(I,null,"python3 -m securitears [program-name] -s [strategy]")),r.a.createElement("p",null,"Limit the number of executions for each strategy:",r.a.createElement(I,null,"python3 -m securitears [program-name] -l [integer]")),r.a.createElement("p",null,"Visually appealing progress bars (if you run the fuzzer without a progress bar you don't get to see progress ",r.a.createElement("span",{role:"img","aria-label":"sad face"},"\ud83d\ude25"),")",r.a.createElement(I,null,"python3 -m securitears [program-name] -v")),r.a.createElement("p",null,"Fuzz the program using input data with a strategy execution limit of 1000, showing progress.",r.a.createElement("br",null),"If a crash was successfully performed, save the payload",r.a.createElement(I,null,"python3 -m securitears [program-name] -i [input-data-file] -l 1000 -v -d [payload-file]")))}}]),a}(r.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={page:null,pageCache:{},currentPage:null},n.homeRef=r.a.createRef(),n.navRef=r.a.createRef(),n.handlePageChange=n.handlePageChange.bind(Object(h.a)(n)),n.scrollToContent=n.scrollToContent.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handlePageChange",value:function(e,t){if(this.state.page!==e){if(null===e)return this.setState({page:e}),void l.a.findDOMNode(this.homeRef.current).scrollIntoView();if(e in this.state.pageCache)this.setState({page:e,currentPage:this.state.pageCache[e]});else{var a=function(){switch(e){case"home":return r.a.createElement(T,null);case"crew":return r.a.createElement(A,null);case"usage":return r.a.createElement(L,null);default:return null}}();if(null===a)return this.handlePageChange("home");this.setState({page:e,pageCache:Object(c.a)(Object(c.a)({},this.state.pageCache),{},Object(s.a)({},e,a)),currentPage:a})}t||this.scrollToContent()}}},{key:"scrollToContent",value:function(){l.a.findDOMNode(this.navRef.current).scrollIntoView()}},{key:"componentDidMount",value:function(){var e=this;this.handlePageChange(window.location.hash.substr(1).toLowerCase()||"home",!0),(window.onhashchange=function(){return e.handlePageChange(window.location.hash.substr(1).toLowerCase()||null)&&!1})()}},{key:"renderNavBtn",value:function(e,t){return r.a.createElement("h2",{className:this.state.page===t?"active-page":"",onClick:function(){return window.location.hash=t}},e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{background:"white"},ref:this.homeRef},r.a.createElement("div",{className:"container width80"},r.a.createElement(C,{handleBtnAction:this.scrollToContent}))),r.a.createElement("div",null,r.a.createElement("div",{className:"nav-bar-container"},r.a.createElement("div",{className:"nav-bar width80 no-select",ref:this.navRef},this.renderNavBtn("Home","home"),this.renderNavBtn("Usage","usage"),this.renderNavBtn("Crew","crew"))),r.a.createElement("div",{className:"container width80"},r.a.createElement(k,{style:{height:"100%",minHeight:"100vh",justifyContent:"start",flexDirection:"column"}},this.state.currentPage,r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("i",null,"Let's sail the seven seas and pillage the binaries of their precious memory corruptions! ",r.a.createElement("img",{style:{height:"1em"},src:"https://github.githubassets.com/images/icons/emoji/unicode/1f3f4-2620.png",alt:"pirate flag"})))),r.a.createElement(S,null))))}}]),a}(r.a.Component);a(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.58e59076.chunk.js.map