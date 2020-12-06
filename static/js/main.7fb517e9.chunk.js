(this["webpackJsonpcompletium-dapp-2048"]=this["webpackJsonpcompletium-dapp-2048"]||[]).push([[0],{116:function(e,t,n){},131:function(e,t){},212:function(e,t,n){},217:function(e,t,n){},223:function(e,t){},225:function(e,t){},288:function(e,t){},290:function(e,t){},300:function(e,t){},302:function(e,t){},327:function(e,t){},329:function(e,t){},330:function(e,t){},336:function(e,t){},338:function(e,t){},356:function(e,t){},358:function(e,t){},370:function(e,t){},373:function(e,t){},397:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),c=n.n(r),s=n(23),a=n.n(s),o=(n(116),n(19)),l=n.n(o),d=n(31),u=n(35),h=n(17),j=(n(212),n(189)),x=n.n(j),b=n(399),p=n(400),f=n(426),g=function(e){return Object(i.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{height:150},children:[Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(b.a,{style:{paddingLeft:12,paddingRight:12},children:Object(i.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{style:{fontFamily:"Clear Sans, Helvetica Neue, Arial, sans-serif",fontWeight:700},children:"SCORE"})}),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{variant:"h4",style:{fontFamily:"Clear Sans, Helvetica Neue, Arial, sans-serif",fontWeight:700},children:e.score.score})})]})})}),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsxs)(p.a,{variant:"h6",style:{fontFamily:"Clear Sans, Helvetica Neue, Arial, sans-serif",fontWeight:700,visibility:e.score.delta>0?"visible":"hidden"},children:["+",e.score.delta]})})]})},m=n(428),O=n(429),y=(n(217),n(75)),v=0;function w(e,t){this.size=t,this.startTiles=2,this.setup(e)}function S(e,t){this.rng=e,this.size=t,this.cells=[],this.build()}function k(e,t,n){this.x=e.x,this.y=e.y,this.value=t||2,this.id=n,this.previousPosition=null,this.mergedFrom=null}function C(e,t){return new w(e,t)}w.prototype.setup=function(e){this.rng=new y.a(e),this.grid=new S(this.rng,this.size),this.score=0,this.over=!1,this.won=!1,this.addStartTiles()},w.prototype.addStartTiles=function(){for(var e=0;e<this.startTiles;e++)this.addRandomTile()},w.prototype.addRandomTile=function(){if(this.grid.cellsAvailable()){var e=this.rng.next()<.9?2:4,t=new k(this.grid.randomAvailableCell(),e,v++);this.grid.insertTile(t)}},w.prototype.prepareTiles=function(){this.grid.eachCell((function(e,t,n){n&&(n.mergedFrom=null,n.savePosition())}))},w.prototype.moveTile=function(e,t){this.grid.cells[e.x][e.y]=null,this.grid.cells[t.x][t.y]=e,e.updatePosition(t)},w.prototype.move=function(e){var t=this;if(!this.over&&!this.won){var n,i,r=this.getVector(e),c=this.buildTraversals(r),s=!1;this.prepareTiles(),c.x.forEach((function(e){c.y.forEach((function(c){if(n={x:e,y:c},i=t.grid.cellContent(n)){var a=t.findFarthestPosition(n,r),o=t.grid.cellContent(a.next);if(o&&o.value===i.value&&!o.mergedFrom){var l=new k(a.next,2*i.value,v++);l.mergedFrom=[i,o],t.grid.insertTile(l),t.grid.removeTile(i),i.updatePosition(a.next),t.score+=l.value,2048===l.value&&(t.won=!0)}else t.moveTile(i,a.farthest);t.positionsEqual(n,i)||(s=!0)}}))})),s&&(this.addRandomTile(),this.movesAvailable()||(this.over=!0))}},w.prototype.getVector=function(e){return{0:{x:0,y:-1},1:{x:1,y:0},2:{x:0,y:1},3:{x:-1,y:0}}[e]},w.prototype.buildTraversals=function(e){for(var t={x:[],y:[]},n=0;n<this.size;n++)t.x.push(n),t.y.push(n);return 1===e.x&&(t.x=t.x.reverse()),1===e.y&&(t.y=t.y.reverse()),t},w.prototype.findFarthestPosition=function(e,t){var n;do{e={x:(n=e).x+t.x,y:n.y+t.y}}while(this.grid.withinBounds(e)&&this.grid.cellAvailable(e));return{farthest:n,next:e}},w.prototype.movesAvailable=function(){return this.grid.cellsAvailable()||this.tileMatchesAvailable()},w.prototype.tileMatchesAvailable=function(){for(var e,t=0;t<this.size;t++)for(var n=0;n<this.size;n++)if(e=this.grid.cellContent({x:t,y:n}))for(var i=0;i<4;i++){var r=this.getVector(i),c={x:t+r.x,y:n+r.y},s=this.grid.cellContent(c);if(s&&s.value===e.value)return!0}return!1},w.prototype.positionsEqual=function(e,t){return e.x===t.x&&e.y===t.y},S.prototype.build=function(){for(var e=0;e<this.size;e++)for(var t=this.cells[e]=[],n=0;n<this.size;n++)t.push(null)},S.prototype.randomAvailableCell=function(){var e=this.availableCells();if(e.length)return e[Math.floor(this.rng.next()*e.length)]},S.prototype.availableCells=function(){var e=[];return this.eachCell((function(t,n,i){i||e.push({x:t,y:n})})),e},S.prototype.eachCell=function(e){for(var t=0;t<this.size;t++)for(var n=0;n<this.size;n++)e(t,n,this.cells[t][n])},S.prototype.cellsAvailable=function(){return!!this.availableCells().length},S.prototype.cellAvailable=function(e){return!this.cellOccupied(e)},S.prototype.cellOccupied=function(e){return!!this.cellContent(e)},S.prototype.cellContent=function(e){return this.withinBounds(e)?this.cells[e.x][e.y]:null},S.prototype.insertTile=function(e){this.cells[e.x][e.y]=e},S.prototype.removeTile=function(e){this.cells[e.x][e.y]=null},S.prototype.withinBounds=function(e){return e.x>=0&&e.x<this.size&&e.y>=0&&e.y<this.size},k.prototype.savePosition=function(){this.previousPosition={x:this.x,y:this.y}},k.prototype.updatePosition=function(e){this.x=e.x,this.y=e.y};var T=function(){return Object(i.jsxs)("div",{class:"grid-container",children:[Object(i.jsxs)("div",{class:"grid-row",children:[Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"})]}),Object(i.jsxs)("div",{class:"grid-row",children:[Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"})]}),Object(i.jsxs)("div",{class:"grid-row",children:[Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"}),Object(i.jsx)(F,{className:"grid-cell"})]}),Object(i.jsxs)("div",{class:"grid-row",children:[Object(i.jsx)("div",{class:"grid-cell"}),Object(i.jsx)("div",{class:"grid-cell"}),Object(i.jsx)("div",{class:"grid-cell"}),Object(i.jsx)("div",{class:"grid-cell"})]})]})},A=function(e){return"tile-position-"+(e=function(e){return{x:e.x+1,y:e.y+1}}(e)).x+"-"+e.y},F=function(e){return Object(i.jsx)("div",{className:e.className})},z=function e(t,n){var i=n.previousPosition||{x:n.x,y:n.y},r=A(i),c=["tile","tile-"+n.value,r];n.previousPosition?c[2]=A({x:n.x,y:n.y}):n.mergedFrom?(c.push("tile-merged"),n.mergedFrom.forEach((function(n){e(t,n)}))):c.push("tile-new"),t.push({classes:c.join(" "),value:n.value,id:n.id})},P={up:0,down:2,right:1,left:3},E=function(e){var t=[];return e.grid.cells.forEach((function(e){e.forEach((function(e){e&&z(t,e)}))})),t},N=function(e){var t=Object(r.useRef)(C(Math.random(),e.size)),n=Object(r.useState)(E(t.current)),c=Object(h.a)(n,2),s=c[0],a=c[1],o=Object(r.useState)(null),l=Object(h.a)(o,2),d=l[0],u=l[1];return Object(i.jsxs)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{width:"494px"},children:[Object(i.jsxs)(f.a,{item:!0,xs:9,children:[Object(i.jsx)(p.a,{variant:"h2",style:{fontFamily:"Clear Sans, Helvetica Neue, Arial, sans-serif",fontWeight:700},children:"2048"}),Object(i.jsxs)(p.a,{style:{fontFamily:"Clear Sans, Helvetica Neue, Arial, sans-serif"},children:[" Join the numbers and get to the ",Object(i.jsx)("b",{children:"2048 tile"}),"!"]})]}),Object(i.jsx)(f.a,{item:!0,xs:3,children:Object(i.jsx)(g,{score:e.score})}),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsxs)(b.a,{style:{width:"494px",height:"494px",padding:12},children:[Object(i.jsx)(x.a,{handleKeys:["up","down","left","right"],onKeyEvent:function(n,i){return function(n){var i=P[n],r=t.current.score;t.current.move(i);var c=t.current.score,s=c-r;a(E(t.current)),e.setScore({score:c,delta:s}),t.current.over?u("Game Over"):t.current.won?u("You Win!"):e.handleKey(n)}(n)}}),Object(i.jsx)(T,{}),Object(i.jsxs)("div",{class:"tile-container",children:[" ",s.map((function(e){return Object(i.jsx)("div",{className:e.classes,style:{color:e.value>4?"white":"#776E65"},children:e.value},e.id)}))," "]})]})}),Object(i.jsx)(f.a,{style:{marginTop:"12px"},children:Object(i.jsx)(m.a,{color:"secondary",onClick:function(){t.current=C(Math.random(),e.size),a(E(t.current)),e.setScore({score:0,delta:0}),u(null),e.handleKey(""),e.newSession(),e.setSigned(null)},children:"restart"})}),null===d?Object(i.jsx)("div",{}):Object(i.jsx)(f.a,{item:!0,style:{height:0},children:Object(i.jsx)(b.a,{style:{width:"494px",height:"494px",padding:12,position:"relative",top:"-542px",opacity:.8,zIndex:100},children:Object(i.jsx)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{height:"370px"},children:Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{variant:"h5",style:{fontFamily:"Clear Sans, Helvetica Neue, Arial, sans-serif",fontWeight:700},children:d})})})})}),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsxs)(p.a,{style:{fontFamily:"Clear Sans, Helvetica Neue, Arial, sans-serif"},children:[Object(i.jsx)("b",{children:"HOW TO PLAY"}),": Use your ",Object(i.jsx)("b",{children:"arrow keys"})," to move the tiles. When two tiles with the same number touch, they ",Object(i.jsx)("b",{children:"merge into one!"})]})}),Object(i.jsx)(f.a,{item:!0,xs:12,style:{paddingTop:"20px",paddingBottom:"20px"},children:Object(i.jsx)(O.a,{})}),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{style:{fontFamily:"Clear Sans, Helvetica Neue, Arial, sans-serif"},children:"Created by Gabriele Cirulli. Based on 1024 by Veewo Studio and conceptually similar to Threes by Asher Vollmer."})})]})},I="KT1JYjQhtL2Q4rzJsyYAMsLT2mEhFmA1rhY1",W=n(431),R=n(432),L=n(430),M=n(433),B=n(193),H=n(111),K=Object(B.a)((function(e){var t=e.appName,n=c.a.useState((function(){return{wallet:null,tezos:null,accountPkh:null}})),i=Object(h.a)(n,2),r=i[0],s=r.wallet,a=r.tezos,o=r.accountPkh,u=i[1],j=Boolean(a);c.a.useEffect((function(){return H.a.onAvailabilityChange((function(e){u({wallet:e?new H.a(t):null,tezos:null,accountPkh:null})}))}),[u,t]);var x=c.a.useCallback(function(){var e=Object(d.a)(l.a.mark((function e(t,n){var i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s){e.next=3;break}throw new Error("Thanos Wallet not available");case 3:return e.next=5,s.connect(t,n);case 5:return i=s.toTezos(),e.next=8,i.wallet.pkh();case 8:r=e.sent,u({wallet:s,tezos:i,accountPkh:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Failed to connect ThanosWallet: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),[u,s]);return{wallet:s,tezos:a,accountPkh:o,ready:j,connect:x}}),(function(e){return e.wallet}),(function(e){return e.tezos}),(function(e){return e.accountPkh}),(function(e){return e.ready}),(function(e){return e.connect})),J=Object(h.a)(K,6),V=J[0],Y=J[1],G=J[2],D=J[3],q=J[4],U=J[5];var _=function(e){var t=q(),n=Y(),r=Object(L.a)("(min-width:600px)")?"visible":"hidden",c="dark"===e.theme.palette.type;return Object(i.jsx)(W.a,{position:"static",color:c?"default":"secondary",style:{boxShadow:"none",opacity:1},children:Object(i.jsxs)(R.a,{children:[Object(i.jsx)(p.a,{variant:"h6",style:{color:"white",position:"absolute",fontFamily:"Alegreya Sans SC, sans-serif"},children:"Completium"}),Object(i.jsx)(f.a,{container:!0,justify:"center",alignItems:"center",children:Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{variant:"h6",style:{visibility:r,textAlign:"center",color:"white"},children:e.appTitle})})}),t?Object(i.jsx)("div",{}):n?Object(i.jsx)(m.a,{variant:"contained",color:"secondary",disableElevation:!0,size:"small",style:{position:"absolute",right:"1%"},onClick:e.handleConnect,children:"connect to wallet"}):Object(i.jsx)(M.a,{href:"https://thanoswallet.com/",rel:"noopener",underline:"none",style:{position:"absolute",right:"1%"},children:Object(i.jsx)(m.a,{variant:"contained",size:"small",disableElevation:!0,style:{backgroundColor:"#ed8936",color:"white",fontWeight:"bold"},children:"Install Thanos"})})]})})},Q=n(199),X=n(435),Z=n(436),$=n(13),ee=n(434),te=n(77),ne=n(26),ie=n(194),re=n.n(ie),ce=n(195),se=n.n(ce),ae=n(196),oe=n.n(ae),le=n(197),de=n.n(le),ue={up:Object(i.jsx)(re.a,{color:"disabled"}),down:Object(i.jsx)(se.a,{color:"disabled"}),left:Object(i.jsx)(oe.a,{color:"disabled"}),right:Object(i.jsx)(de.a,{color:"disabled"})},he=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(f.a,{container:!0,wrap:"nowrap",direction:"row-reverse",justify:"flex-end",alignItems:"center",style:{height:55,paddingLeft:5},children:e.arrows.map((function(e){return Object(i.jsxs)(f.a,{item:!0,style:{marginTop:10,marginLeft:5},children:[" ",ue[e]," "]})}))})})};function je(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var xe=function(e){var t=q(),n=G(),r=D();return null===e.signed.value?Object(i.jsx)(f.a,{item:!0,style:{marginTop:30,marginBottom:30},children:Object(i.jsx)(m.a,{variant:"contained",color:"secondary",disableElevation:!0,onClick:function(){var t=new te.a("edsk3eFocAKYDy2GfkFXFnj19ocDFwJ4M4cvrPURgaeyWp19LFzvHE"),n=new Uint8Array(8);window.crypto.getRandomValues(n),console.log("score: ".concat(e.score.score)),ne.a.setProvider({rpc:"https://testnet-tezos.giganode.io/"}),ne.a.rpc.packData({data:{prim:"Pair",args:[{string:r},{int:e.score.score.toString()}]},type:{prim:"pair",args:[{prim:"address"},{prim:"nat"}]}}).then((function(n){var i=n.packed;t.sign(i).then((function(t){console.log("score: ".concat(e.score.score.toString(16))),console.log("signed: ".concat(t.sbytes)),console.log("sig: ".concat(t.sig)),console.log("prefix: ".concat(t.prefixSig)),e.setSigned({packed:n.packed,value:t.prefixSig})}))}))},disabled:!t||e.score.score<16,children:"compute & encrypt score"})}):Object(i.jsx)(f.a,{item:!0,children:Object(i.jsxs)(f.a,{container:"column",justify:"center",alignItems:"center",children:[Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{style:{paddingTop:30,paddingBottom:6,fontFamily:"Courier Prime, monospace"},children:e.signed.value.substring(0,50)+"..."})}),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(m.a,{variant:"contained",color:"secondary",disableElevation:!0,disabled:!t||0===e.status,onClick:function(){n.wallet.at(I).then((function(t){t.methods.submit(e.signed.packed,e.signed.value).send().then((function(t){e.openSnack(),t.receipt().then((function(){e.closeSnack(),e.loadRecords()}))})).catch((function(e){return console.log(e)}))}))},children:"submit"})})]})})},be=function(e){return Object(i.jsxs)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{height:e.height,overflow:"scroll"},children:[Object(i.jsx)(f.a,{item:!0,xs:2,style:{paddingLeft:20,fontWeight:700,textAlign:"center"},children:Object(i.jsx)(p.a,{color:"textSecondary",children:"Rank"})}),Object(i.jsx)(f.a,{item:!0,xs:2,style:{paddingLeft:10,fontWeight:700},children:Object(i.jsx)(p.a,{color:"textSecondary",children:"Score"})}),Object(i.jsx)(f.a,{item:!0,xs:8,style:{paddingLeft:10,fontWeight:700,textAlign:"center"},children:Object(i.jsx)(p.a,{color:"textSecondary",children:"Account"})}),Object(i.jsxs)(f.a,{item:!0,xs:12,children:[" ",e.records.map((function(e){return Object(i.jsxs)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{padding:12,paddingLeft:0,paddingRight:0},children:[Object(i.jsx)(f.a,{item:!0,xs:2,children:Object(i.jsxs)(p.a,{style:{textAlign:"center"},children:["#",e.rank]})}),Object(i.jsx)(f.a,{item:!0,xs:2,children:Object(i.jsx)(p.a,{style:{marginRight:10},children:e.score})}),Object(i.jsx)(f.a,{item:!0,xs:8,children:Object(i.jsx)(p.a,{style:{fontFamily:"Courier Prime, monospace"},children:e.account})}),Object(i.jsx)(f.a,{item:!0,xs:12,children:Object(i.jsx)(O.a,{})})]})}))]})]})},pe=function(e){var t,n=q(),c=D(),s=function(){var e=Object(r.useState)(je()),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){function e(){i(je())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),a=s.height,o=s.width,l=a-550+"px",d=Math.floor(.3*o)+"px";return Object(i.jsxs)(b.a,{elevation:"0",square:!0,style:{paddingTop:10},children:[Object(i.jsxs)(f.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2,style:{paddingLeft:15,paddingTop:15,overflow:"scroll"},children:[Object(i.jsx)(f.a,{item:!0,xs:3,style:{padding:10},children:Object(i.jsx)(p.a,{color:"textSecondary",children:"Account:"})}),Object(i.jsx)(f.a,{item:!0,xs:9,children:n?Object(i.jsx)(p.a,{style:{fontFamily:"Courier Prime, monospace"},children:c}):Object(i.jsx)("div",{})}),Object(i.jsx)(f.a,{item:!0,xs:3,style:{padding:10},children:Object(i.jsx)(p.a,{color:"textSecondary",children:"Session id:"})}),Object(i.jsx)(f.a,{item:!0,xs:9,children:Object(i.jsx)(p.a,{style:{fontFamily:"Courier Prime, monospace"},children:e.session})})]}),Object(i.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{marginTop:20,backgroundImage:"url(/completium-dapp-2048/podium.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"right 50% top 220px"},children:[Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{color:"textSecondary",style:{fontWeight:700,padding:10},children:"Session actions"})}),Object(i.jsx)(f.a,{item:!0,style:{width:"100%"},children:Object(i.jsx)(O.a,{})}),Object(i.jsx)(f.a,{item:!0,style:{width:"100%",overflow:"hidden"},children:Object(i.jsx)(he,{arrows:e.arrows})}),Object(i.jsx)(f.a,{item:!0,style:{width:"100%"},children:Object(i.jsx)(O.a,{})}),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{color:"textSecondary",children:e.arrows.length})}),Object(i.jsx)(xe,(t={signed:e.signed,setSigned:e.setSigned,score:e.score},Object($.a)(t,"signed",e.signed),Object($.a)(t,"openSnack",e.openSnack),Object($.a)(t,"closeSnack",e.closeSnack),Object($.a)(t,"loadRecords",e.loadRecords),Object($.a)(t,"status",e.status),t)),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(p.a,{color:"textSecondary",style:{fontWeight:700,marginTop:30,marginBottom:80},children:"Leader Board"})}),Object(i.jsx)(f.a,{item:!0,xs:12,children:null===e.records?Object(i.jsx)("div",{style:{marginTop:40,height:40,width:d},children:Object(i.jsx)(ee.a,{color:"secondary"})}):Object(i.jsx)(be,{height:l,records:e.records})})]})]})};function fe(){this.seeds=new Object,this.rngs=new Object}fe.prototype.newSession=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),this.seeds[t]=Math.random(),this.rngs[t]=new y.a(this.seeds[t]),e.abrupt("return",new Promise((function(e){e(t)})));case 4:case"end":return e.stop()}}),e,this)}))),fe.prototype.next=function(){var e=Object(d.a)(l.a.mark((function e(t){var n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){e(n.rngs[t].next())})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ge=n(198),me=n(437),Oe=n(438);function ye(e){return Object(i.jsx)(Oe.a,Object(ge.a)({elevation:6,variant:"filled"},e))}var ve=function(e){return Object(i.jsx)(me.a,{open:e.open,children:Object(i.jsx)(ye,{severity:"info",style:{backgroundColor:e.theme.palette.secondary.main},children:"Waiting for operation confirmation ..."})})};function we(e){return e.sort((function(e,t){return t.score-e.score})),e.map((function(e,t){return{rank:t+1,score:e.score,account:e.account}}))}var Se=function(e){var t=U(),n=Object(L.a)("(prefers-color-scheme: dark)"),s=Object(r.useState)([]),a=Object(h.a)(s,2),o=a[0],j=a[1],x=Object(r.useState)(null),b=Object(h.a)(x,2),p=b[0],g=b[1],m=Object(r.useState)(null),O=Object(h.a)(m,2),y=O[0],v=O[1],w=Object(r.useState)(0),S=Object(h.a)(w,2),k=S[0],C=S[1],T=Object(r.useState)({packed:null,value:null}),A=Object(h.a)(T,2),F=A[0],z=A[1],P=Object(r.useState)({score:0,delta:0}),E=Object(h.a)(P,2),W=E[0],R=E[1],M=c.a.useState(!1),B=Object(h.a)(M,2),H=B[0],K=B[1],J=Object(r.useRef)(new fe),V=c.a.useMemo((function(){return Object(Q.a)({palette:{type:n?"dark":"light",secondary:{light:"#968a7e",main:"#776E65",dark:"#544d47",contrastText:"#fff"}}})}),[n]),Y=c.a.useCallback(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("carthagenet");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),[t]);function G(){return D.apply(this,arguments)}function D(){return(D=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.current.newSession();case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return $.apply(this,arguments)}function $(){return($=Object(d.a)(l.a.mark((function e(){var t,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ne.a.setProvider({rpc:"https://testnet-tezos.giganode.io/"}),console.log(I),e.next=5,ne.a.contract.at(I);case 5:return t=e.sent,e.next=8,t.storage();case 8:n=e.sent,i=[],n.submission.forEach((function(e,t,n){i.push({score:parseInt("0"+e.score),account:t})})),v(we(i)),C(parseInt("0"+n._state)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Error: ".concat(e.t0));case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}null===p&&G(),null===y&&q();return Object(i.jsxs)(X.a,{theme:V,children:[Object(i.jsx)(Z.a,{}),Object(i.jsx)(_,{appTitle:"Win the 2048 competition!",handleConnect:Y,theme:V}),Object(i.jsxs)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",style:{width:"99%"},children:[Object(i.jsx)(f.a,{item:!0,xs:8,children:Object(i.jsx)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(i.jsx)(f.a,{item:!0,children:Object(i.jsx)(N,{size:4,handleKey:function(e){var t=Object(u.a)(o);""===e?t=[]:t.push(e),j(t)},newSession:G,next:J.current.next,setSigned:z,setScore:R,score:W,signed:F,loadRecords:q})})})}),Object(i.jsx)(f.a,{item:!0,xs:4,children:Object(i.jsx)(pe,{arrows:o,session:p,records:y,signed:F,setSigned:z,score:W,openSnack:function(){K(!0)},closeSnack:function(){K(!1)},loadRecords:q,status:k})})]}),Object(i.jsx)(ve,{open:H,theme:V})]})},ke=function(){return Object(i.jsx)(V,{appName:"GameCorp.",children:Object(i.jsx)(c.a.Suspense,{fallback:null,children:Object(i.jsx)(Se,{})})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,439)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(ke,{})}),document.getElementById("root")),Ce()}},[[397,1,2]]]);
//# sourceMappingURL=main.7fb517e9.chunk.js.map