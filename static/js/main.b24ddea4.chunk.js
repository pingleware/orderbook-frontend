(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a.p+"static/media/logo-temp.7253b346.svg"},128:function(e,t,a){e.exports=a.p+"static/media/baseline-chevron_left-24px.1547086b.svg"},129:function(e,t,a){e.exports=a.p+"static/media/baseline-menu-24px.a50ff341.svg"},131:function(e,t,a){e.exports=a.p+"static/media/baseline-chevron_right-24px.d78234fa.svg"},132:function(e,t,a){e.exports=a.p+"static/media/custom_icon_remove.9e214224.svg"},133:function(e,t,a){e.exports=a.p+"static/media/404.0228c16b.svg"},215:function(e,t,a){e.exports=a(375)},220:function(e,t,a){},32:function(e,t,a){e.exports={footer:"styles_footer__-wWGG",bill:"styles_bill__3xw5Z",next:"styles_next__1oUJx",row:"styles_row__UoifR"}},375:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"CART_REMOVE_MENU",function(){return f}),a.d(n,"CART_ADD_MENU",function(){return b}),a.d(n,"removeCartMenu",function(){return x}),a.d(n,"addCartMenu",function(){return y}),a.d(n,"default",function(){return v});var o={};a.r(o),a.d(o,"changeSelectedCategory",function(){return S}),a.d(o,"clickManu",function(){return j}),a.d(o,"clickOption",function(){return k}),a.d(o,"clickClose",function(){return _}),a.d(o,"addToOrder",function(){return w}),a.d(o,"categoryChange",function(){return I}),a.d(o,"default",function(){return R});var c={};a.r(c),a.d(c,"Cart",function(){return v}),a.d(c,"menu",function(){return R});var r,i=a(0),l=a.n(i),s=a(34),m=a.n(s),u=(a(220),a(26)),p=a(31),d=a(123),g=a(124),h=a(27),f="cart/REMOVE_MENU",b="cart/ADD_MENU",x=function(e){var t=e.itemKey;return{type:f,payload:{itemKey:t}}},y=function(e){return{type:b,payload:{menu:e}}},E={totalPrice:0,identity:[{storeId:0,seatId:0}],menus:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=e.menus.slice(),n=e.totalPrice,o=function(e,t){return e.map(function(e){n+=e.unitPrice*t;var a=e.options;a&&a.map(function(e){return n+=e.unitPrice*t})}),n};switch(t.type){case f:return o(a.splice(t.payload.itemKey,1),-1),Object(h.a)({},e,{totalPrice:n,menus:a});case b:return a.push(t.payload.menu),o(t.payload.menu,1),Object(h.a)({},e,{totalPrice:n,menus:a});default:return e}},C=a(10),N=a(382),O=a(378),S=Object(N.a)("menu/CHANGE_SELECTED_CATEGORY",function(e){return e}),j=Object(N.a)("menu/CLICK_MENU",function(e){return e}),k=Object(N.a)("menu/CLICK_OPTION",function(e){return e}),_=Object(N.a)("menu/CLICK_CLOSE",function(e){return e}),w=Object(N.a)("menu/ADD_TO_ORDER",function(e){return e}),I=Object(N.a)("menu/CATEGORY_CHANGE",function(e){return e}),R=Object(O.a)((r={},Object(C.a)(r,"menu/CHANGE_SELECTED_CATEGORY",function(e,t){return Object(h.a)({},e,{selectedCategory:t.payload})}),Object(C.a)(r,"menu/CATEGORY_CHANGE",function(e,t){return Object(h.a)({},e,{selectedCategory:t.payload})}),Object(C.a)(r,"menu/CLICK_MENU",function(e,t){return Object(h.a)({},e,{openDig:!0,selectedMenu:e.products.filter(function(e){return e.productId===t.payload})[0]})}),Object(C.a)(r,"menu/CLICK_OPTION",function(e,t){return Object(h.a)({},e,{selectedOption:e.selectedOption.concat(t.payload)})}),Object(C.a)(r,"menu/CLICK_CLOSE",function(e){return Object(h.a)({},e,{openDig:!1})}),Object(C.a)(r,"menu/ADD_TO_ORDER",function(e,t){return console.log(t.payload),Object(h.a)({},e,{cart:t.payload,openDig:!1})}),r),{openDig:!1,selectedCategory:0,categories:[{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274"},{categoryId:1,categoryName:"\uc0ac\uc774\ub4dc"},{categoryId:2,categoryName:"\uc74c\ub8cc\uc218"},{categoryId:3,categoryName:"\uc138\ud2b8\uba54\ub274"}],products:[{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:1,productName:"\ubc14\uc2a4\ubc84\uac70",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:5800,options:[{menuId:1,optionId:1,optionName:"\ud398\ud2f0\uc640 \uce58\uce20 \ucd94\uac00",optionPrice:1e3},{menuId:1,optionId:2,optionName:"\uacc4\ub780\ud504\ub9ac\uc774\uc5b4 \ucd94\uac00",optionPrice:900}]},{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:2,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:11200},{categoryId:0,categoryName:"\ubc84\uac70\uba54\ub274",productId:3,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:11200},{categoryId:1,categoryName:"\uba54\ub2741",productId:4,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:11200},{categoryId:1,categoryName:"\uba54\ub2741",productId:5,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:11200},{categoryId:2,categoryName:"\uba54\ub2742",productId:6,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:11200},{categoryId:2,categoryName:"\uba54\ub2742",productId:7,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:11200},{categoryId:3,categoryName:"\uba54\ub2743",productId:8,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:11200},{categoryId:3,categoryName:"\uba54\ub2743",productId:9,productName:"\ub354\ube14 \ubca0\uc774\ucee8 \uce58\uc988 \ubc84\uac70 \uc138\ud2b8",productImage:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",productPrice:11200}],selectedMenu:[null],selectedOption:[null],totalPrice:null,cart:null}),T=a(379),P=a(380),A=a(377),M=a(14),F=a(15),H=a(17),D=a(16),z=a(18),L=a(3),W=a.n(L),B=a(25),G=a(125),K=a.n(G),U=W()(function(e){return{root:Object(C.a)({position:"absolute",width:"100%",bottom:"100px",display:"flex",flexFlow:"column",padding:"0 2rem"},"@media screen and (max-width: 360px) and  (orientation: portrait)",{width:"360px"}),"Take-a-picture-of-QR":{height:"72px",display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",fontFamily:"Roboto",fontSize:"16px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.5",letterSpacing:"0.2px",textAlign:"center",color:"rgba(0, 0, 0, 0.6)"},"Rectangle-13":{marginTop:"12px",width:"100%",height:"48px",color:"white",backgroundColor:"#ff4a5b","&:hover":{backgroundColor:"#ff4a5b"},"&:active":{backgroundColor:"#ff4a5b"}}}})(function(e){var t=e.classes,a=e.handleClick;return l.a.createElement(B.b,{in:!0,timeout:1500},l.a.createElement(B.c,{container:!0,className:t.root},l.a.createElement(B.c,{className:t["Take-a-picture-of-QR"]},l.a.createElement(B.d,null,"Take a picture of"),l.a.createElement(B.d,null,"QR code by your"),l.a.createElement(B.d,null,"table to start.")),l.a.createElement(B.a,{classes:{root:t["Rectangle-13"]},onClick:a},"SCAN QR CODE")))}),J=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(H.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).state={loaded:!1},a}return Object(z.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({loaded:!0})},1500)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.handleClick,n=this.state.loaded;return l.a.createElement("div",{className:t.root},l.a.createElement(B.b,{in:!0,timeout:{enter:1e3}},l.a.createElement("img",{src:"".concat(K.a),alt:"",className:t[n?"movelogo":"logo"]})),n&&l.a.createElement(U,{handleClick:a}))}}]),t}(l.a.Component),Q=W()(function(e){return{root:Object(C.a)({height:"calc(100vh - 136px - ".concat(/mobile/i.test(navigator.userAgent)?75:0,"px)"),width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},"@media screen and (max-width: 360px) and  (orientation: portrait)",{width:"360px"}),logo:{},"@keyframes moveUp":{from:{top:"0px"},to:{top:"-5rem"}},movelogo:{top:"-5rem",position:"relative",animationName:"moveUp",animationDuration:"0.5s"}}})(J),Y=a(381),V=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(H.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(e){a.props.history.push("/basic")},a}return Object(z.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.handleClick;return l.a.createElement(Q,{handleClick:e})}}]),t}(l.a.Component),Z=Object(Y.a)(V),$=a(74),q=a.n($),X=a(128),ee=a.n(X),te=a(129),ae=a.n(te),ne=function(e){var t=e.title;return l.a.createElement("header",{className:q.a.header},l.a.createElement("div",{className:q.a.backBtn},l.a.createElement("img",{src:ee.a,alt:"\ub4a4\ub85c \uac00\uae30"})),l.a.createElement("div",{className:q.a.title},t),l.a.createElement("div",{className:"menu"},l.a.createElement("img",{src:ae.a,alt:"\uba54\ub274"})))};ne.defaultProps={title:"Menu"};var oe=ne,ce=a(90),re=a(13),ie=a(66),le=a.n(ie),se=a(65),me=a.n(se),ue=a(49),pe=a.n(ue),de=Object(re.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,zIndex:2},tabs:{backgroundColor:"#3eafa2"},tabsColor:{color:"#3eafa2"},tabBtn:{minWidth:120,width:120,height:48}}},{withTheme:!0})(function(e){var t=e.classes,a=(e.theme,e.categories),n=e.onClick,o=e.value,c=e.style,r=a.map(function(e){return l.a.createElement(me.a,{className:t.tabBtn,component:"a",key:e.categoryId,label:e.categoryName,href:"#tab_".concat(e.categoryId),onClick:function(t){t.preventDefault(),n(e.categoryId)},classes:{selected:t.tabsColor}})});return l.a.createElement("div",{className:t.root,style:c},l.a.createElement(pe.a,null,l.a.createElement(le.a,{classes:{indicator:t.tabs},value:o,fullWidth:!0,scrollable:!0,scrollButtons:"off"},r)))}),ge=a(36),he=a.n(ge),fe=a(69),be=a.n(fe),xe=a(29),ye=a.n(xe),Ee=a(30),ve=a.n(Ee),Ce=a(6),Ne=a.n(Ce),Oe=a(68),Se=a.n(Oe),je=a(67),ke=a.n(je),_e=function(e){return l.a.createElement(ye.a,Object.assign({button:!0,component:"a"},e))},we=Object(re.withStyles)(function(e){return{ListItemLink:{padding:0,height:88},avatar:{borderRadius:0,width:64,height:64,marginRight:16,marginLeft:16,marginTop:12,marginBottom:12},listTextArea:{margin:0,padding:0},firstTextLine:{display:"flex",width:"100%"},productName:{margin:0,padding:0,flex:3,width:160,height:24,fontFamily:"Roboto",lineHeight:1.5,letterSpacing:.2,color:"rgba(0, 0, 0, 0.87)"},price:{margin:0,padding:0,flex:1,textAlign:"right",width:80,height:16,fontSize:12,fontFamily:"Roboto",lineHeight:1.33,letterSpacing:.4,color:"rgba(0,0,0,0.87)",marginTop:5,marginBottom:3},secondTextLine:{display:"inline-block",width:"100%",margin:0,padding:0},menuComment:{margin:0,padding:0}}},{withTheme:!0})(function(e){var t=e.product,a=e.classes,n=e.onClick,o=t.productName,c=t.productPrice,r=(t.categoryId,t.productId),i=t.productImage;t.menuComment;return l.a.createElement(_e,{className:a.ListItemLink,onClick:function(){return n(r)}},l.a.createElement(ke.a,null,l.a.createElement(Se.a,{className:a.avatar,alt:"Remy Sharp",src:i})),l.a.createElement(ve.a,{className:a.listTextArea,primary:l.a.createElement("span",{className:a.firstTextLine},l.a.createElement("p",{className:a.productName},o),l.a.createElement("p",{className:a.price},"".concat(c," won"))),secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(Ne.a,{component:"span",className:a.secondTextLine},l.a.createElement("span",{className:a.menuComment},"\uba54\ub274\uc124\uba85")))}))}),Ie=Object(re.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,overflow:"auto",height:"100%"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0,textAlign:"left"},ListSubheader:{height:48},subheaderText:{marginTop:12,marginBottom:12,fontSize:16,lineHeight:1.5,letterSpacing:.2,color:"rgba(0, 0, 0, 0.87)"}}},{withTheme:!0})(function(e){var t=e.classes,a=e.products,n=e.categories,o=e.onScroll,c=e.onClick;return l.a.createElement(he.a,{className:t.root,subheader:l.a.createElement("li",null),dense:!0,onScroll:function(e){return o(e)}},n.map(function(e){return l.a.createElement("li",{key:e.categoryId,className:t.listSection,id:"tab_".concat(e.categoryId)},l.a.createElement("ul",{className:t.ul},l.a.createElement(be.a,{className:t.ListSubheader,disableSticky:!0},l.a.createElement("span",{className:t.subheaderText},e.categoryName)),a.filter(function(t){return t.categoryId===e.categoryId}).map(function(e){return l.a.createElement(we,{product:e,key:e.productId,onClick:c})})))}))}),Re=/(\d)(?=(\d{3})+(?!\d))/g,Te=function(e){return String(e).replace(Re,"$1,")},Pe=a(70),Ae=a.n(Pe),Me=a(50),Fe=a.n(Me),He=a(51),De=a.n(He),ze=a(64),Le=a.n(ze),We=a(130),Be=a.n(We),Ge=a(39),Ke=a.n(Ge),Ue=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(H.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).state={optionState:[]},a}return Object(z.a)(t,e),Object(F.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.options,t=this.state.optionState,a=[];void 0!==e&&(e.map(function(e){return e.check=!1,a.push(e)}),this.setState({optionState:t.concat(a)}))}},{key:"handleChange",value:function(e){var t=this.state.optionState,a=t.slice();a[e].check=!t[e].check,this.setState({optionState:a})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.options,o=this.state.optionState;return void 0!==n?n.map(function(t,n){return l.a.createElement(ye.a,{className:a.optionList},l.a.createElement(Ke.a,{className:a.checkbox,checked:o[n].check,value:t,onChange:function(){return e.handleChange(n)}}),l.a.createElement(ve.a,{className:a.options,primary:l.a.createElement(Ne.a,{className:a.optionTitleText,variant:"subtitle1"},t.optionName)}),l.a.createElement(ve.a,{className:a.options,primary:l.a.createElement(Ne.a,{className:a.optionPriceeText,variant:"caption"},"".concat(Te(t.optionPrice)," won"))}))}):l.a.createElement(ye.a,null)}}]),t}(i.Component),Je=Object(re.withStyles)({optionList:{paddingTop:"0px",paddingBottom:"0px"},checkbox:{padding:"12px 16px 12px 0px"},options:{padding:0},optionTitleText:{fontFamily:"Roboto",fontSize:"16px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:1.5,letterSpacing:"0.2px",color:"rgba(0, 0, 0, 0.87)"},optionPriceeText:{fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:1.33,letterSpacing:"0.4px",textAlign:"end",color:"rgba(0, 0, 0, 0.87)"}})(Ue),Qe=Object(re.withStyles)({closeBtn:{position:"absolute",top:"12px",left:"12px",padding:0},image:{width:"338px",height:"183px"},list:{paddingTop:"2px",paddingBottom:"2px",overflow:"auto",maxHeight:"173px"},menu:{display:"flex",alignItems:"baseline"},menuDescription:{width:"220px"},menuTitle:{fontFamily:"Roboto",fontSize:"20px",fontWeight:500,fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.87)"},menuDetail:{fontFamily:"Roboto",fontSize:"14px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:1.43,letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.6)"},menuPrice:{width:"70px",padding:0,float:"right"},menuPriceText:{fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:1.33,letterSpacing:"0.4px",textAlign:"end",color:"rgba(0, 0, 0, 0.6)"},footer:{display:"flex",justifyContent:"flex-end",backgroundColor:"#ffffff"},footerText:{fontFamily:"Roboto",fontSize:"16px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:1.5,letterSpacing:"0.2px",textAlign:"end",color:"#3eafa2",width:"110px"},button:{backgroundColor:"#3eafa2",color:"#ffffff"}})(function(e){var t=e.classes,a=e.onOpen,n=e.onClose,o=e.onOrder,c=e.Menu;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ae.a,{open:a,style:{backgroundColor:"none"}},l.a.createElement(Fe.a,{className:t.closeBtn,onClick:n},l.a.createElement(Be.a,null)),l.a.createElement("img",{className:t.image,src:c.productImage,alt:"menu"}),l.a.createElement(he.a,{className:t.list},l.a.createElement(ye.a,{className:t.menu},l.a.createElement(ve.a,{className:t.menuDescription,primary:l.a.createElement(Ne.a,{className:t.menuTitle,variant:"h6"},c.productName),secondary:l.a.createElement(Ne.a,{className:t.menuDetail,variant:"body2"},c.productName)}),l.a.createElement(ve.a,{className:t.menuPrice,primary:l.a.createElement(Ne.a,{className:t.menuPriceText,variant:"caption"},"".concat(Te(c.productPrice)," won"))}))),l.a.createElement(De.a,null),l.a.createElement(he.a,{className:t.list},l.a.createElement(Je,{options:c.options})),l.a.createElement(De.a,null),l.a.createElement(he.a,{className:t.list},l.a.createElement(ye.a,{className:t.footer},l.a.createElement(Ne.a,{className:t.footerText,variant:"subtitle1"},"Subtotal"),l.a.createElement(Ne.a,{className:t.footerText,variant:"subtitle1"},"".concat(Te(c.productPrice)," won")))),l.a.createElement(Le.a,{variant:"contained",className:t.button,onClick:function(){return o(c)}},"ADD TO ORDER")))}),Ye=a(89),Ve=a.n(Ye),Ze=a(52),$e=a.n(Ze),qe=Object(re.withStyles)({card:{display:"flex",flexDirection:"column",justifyContent:"spaceBetween",boxShadow:"none",marginLeft:"16px",marginRight:"16px"},imageCard:{display:"flex",justifyContent:"center",boxShadow:"none"},image:{width:"calc(100% - 16px)",minHeight:"150px",margin:"8px",maxHeight:"160px",maxWidth:"400px",background:"white"},table:{marginBottom:"8px",fontFamily:"Roboto",fontSize:"12px",fontWeight:500,fontStyle:"normal",fontStretch:"normal",lineHeight:1.33,letterSpacing:"2px",color:"rgba(0, 0, 0, 0.87)"},title:{marginBottom:"21px",fontFamily:"Roboto",fontSize:"20px",fontWeight:500,fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.87)"}})(function(e){var t=e.classes,a=e.Image,n=e.Table,o=e.Title;return l.a.createElement(l.a.Fragment,null,l.a.createElement($e.a,{className:t.imageCard},l.a.createElement("img",{className:t.image,src:a,alt:"storeProfile"})),l.a.createElement($e.a,{className:t.card},l.a.createElement(Ne.a,{className:t.table,variant:"overline"},n),l.a.createElement(Ne.a,{className:t.title,variant:"h6"},o)))}),Xe=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(H.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).handleClickCategory=function(e){a.props.MenuActions.changeSelectedCategory(e)},a.handleClickMenu=function(e){a.props.MenuActions.clickManu(e)},a.handleScroll=function(e){for(var t,n=e.target.childNodes,o=a.props,c=o.selectedCategory,r=o.MenuActions,i=0,l=0;i<n.length;i++)if(""!==n[i].id&&(l+=n[i].scrollHeight,e.target.scrollTop<l))return void((t=n[i].id.split("_")[1])!==c&&r.categoryChange(parseInt(t)))},a.handleClickClose=function(){a.props.MenuActions.clickClose()},a.handleAddToOrder=function(e){a.props.MenuActions.addToOrder(e)},a}return Object(z.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.openDig,n=t.categories,o=t.selectedCategory,c=t.products,r=t.selectedMenu;return l.a.createElement("div",{style:et},l.a.createElement(qe,{Image:Ve.a,Table:"TABLE 17",Title:"The Burgur Co"}),l.a.createElement(Qe,{Menu:r,onOpen:a,onClose:this.handleClickClose,onOrder:this.handleAddToOrder}),l.a.createElement(ce.StickyContainer,null,l.a.createElement(ce.Sticky,{topOffset:-76},function(t){var a=t.style,c=t.isSticky;return l.a.createElement(de,{style:Object(h.a)({},a,{marginTop:c?"76px":"0px"}),categories:n,value:o,onClick:e.handleClickCategory})}),l.a.createElement(Ie,{products:c,categories:n,onScroll:this.handleScroll,onClick:this.handleClickMenu})))}}]),t}(i.Component),et={height:window.screen.height,maxHeight:window.screen.height,overflow:"auto"},tt=Object(u.b)(function(e){var t=e.menu;return{openDig:t.openDig,selectedCategory:t.selectedCategory,categories:t.categories,products:t.products,selectedMenu:t.selectedMenu}},function(e){return{MenuActions:Object(p.b)(o,e)}})(Xe),at=a(32),nt=a.n(at),ot=a(131),ct=a.n(ot),rt=function(e){var t=e.totalPrice,a=e.totalCount;return l.a.createElement("div",{className:nt.a.bill},l.a.createElement("div",{className:nt.a.row},l.a.createElement("div",{className:nt.a.billTitle},"\uc8fc\ubb38\uba54\ub274"),l.a.createElement("div",{className:nt.a.billContent},a)),l.a.createElement("div",{className:nt.a.row},l.a.createElement("div",{className:nt.a.billTitle},"\ucd1d \uac00\uaca9"),l.a.createElement("div",{className:nt.a.billContent},t)))},it=function(e){var t=e.text;return l.a.createElement("footer",{className:nt.a.footer},l.a.createElement(rt,null),l.a.createElement("div",{className:nt.a.next},l.a.createElement("span",null,t,l.a.createElement("img",{src:ct.a,alt:"\ub2e4\uc74c"}))))};rt.defaultProps={totalCount:0,totalPrice:0},it.defaultProps={text:"\uc8fc\ubb38\ud558\uae30"};var lt=it,st=function(){return l.a.createElement("div",null,l.a.createElement(oe,null),l.a.createElement(tt,null),l.a.createElement(lt,null))},mt=a(11),ut=a.n(mt),pt=a(132),dt=a.n(pt),gt=W()(function(e){return{"Food-Option":{display:"flex",alignItems:"center",justifyContent:"center",height:"36px",objectFit:"contain"},"Subtitle-1":{width:"80%",height:"24px",fontFamily:"Roboto",fontSize:"16px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.5",letterSpacing:"0.2px",color:"rgba(0, 0, 0, 0.6)"},caption:{width:"20%",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"rgba(0, 0, 0, 0.6)"}}})(function(e){var t=e.classes,a=e.name,n=e.unitPrice;return l.a.createElement("div",{className:t["Food-Option"]},l.a.createElement(Ne.a,{component:"span",className:t["Subtitle-1"]},"+ ".concat(a)),l.a.createElement(Ne.a,{component:"span",className:t.caption},"".concat(Te(n)," won")))}),ht=W()(function(e){return{product:{padding:"0 16px"},Remove:{display:"flex",width:"100%",height:"48px",objectFit:"contain",alignItems:"right",justifyContent:"flex-end"},Times:{marginTop:"12px",color:"#3eafa2",cursor:"pointer",textAlign:"center",width:"20px",height:"20px"},RemoveCaption:{marginTop:"19px",paddingRight:"4px",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"#3eafa2"},"Rectangle-13":{height:"1px",opacity:"0.12",backgroundColor:"#000000"},"Food-Main":{display:"flex",alignItems:"center",justifyContent:"center",height:"36px",objectFit:"contain"},"Headline-6":{width:"80%",height:"24px",fontFamily:"Roboto",fontSize:"20px",fontWeight:"500",fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.87)"},caption:{width:"20%",height:"16px",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"rgba(0, 0, 0, 0.6)"},hidden:{visibility:"hidden",opacity:0,backgroundColor:"#ECEFF1",boxShadow:"0px 7px 3px #CFD8DC",transition:"visibility 0s 0.25s, opacity 0.25s linear"}}})(function(e){var t=e.classes,a=e.name,n=e.unitPrice,o=e.index,c=e.handleRemove,r=e.options,i=(void 0===r?[]:r).map(function(e,t){return l.a.createElement(gt,{name:e.name,unitPrice:e.unitPrice,key:t})});return l.a.createElement(ut.a,{id:"CartMenu".concat(o),key:o,component:"div",className:t.product},l.a.createElement(ut.a,{component:"div",className:t.Remove},l.a.createElement(Ne.a,{component:"span",className:t.RemoveCaption},"Remove this order"),l.a.createElement(Ne.a,{component:"span",variant:"h5",className:t.Times,onClick:function(){return function(e){var a=document.querySelector("#CartMenu".concat(e));a.classList.add(t.hidden),setTimeout(function(){c.call(e),a.classList.remove(t.hidden)},250)}("".concat(o))}},l.a.createElement("img",{src:"".concat(dt.a),alt:"Remove"}))),l.a.createElement("div",{className:t["Food-Main"],key:o},l.a.createElement(Ne.a,{component:"span",className:t["Headline-6"]},a),l.a.createElement(Ne.a,{component:"span",variant:"display4",className:t.caption},"".concat(Te(n)," won"))),i,l.a.createElement("div",{className:t["Rectangle-13"]}))}),ft=W()(function(e){var t;return{root:(t={flexGrow:1,display:"block",height:"calc(100vh - 136px - ".concat(/mobile/i.test(navigator.userAgent)?75:0,"px)")},Object(C.a)(t,"@media screen and (max-width: 360px) and  (orientation: portrait)",{width:"360px"}),Object(C.a)(t,"overflow","auto"),Object(C.a)(t,"-webkit-overflow-scrolling","touch"),t)}})(function(e){var t=e.classes,a=e.menus,n=e.handleRemove;return l.a.createElement(ut.a,{container:!0,className:t.root},a.map(function(e,t){var a=e.options,o=e.name,c=e.unitPrice;return l.a.createElement(ht,{name:o,unitPrice:c,options:a,key:t,index:t,handleRemove:n})}))}),bt=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(H.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).handleRemove=function(e){a.totalPrice=0,a.props.CartActions.removeCartMenu({itemKey:e})},a}return Object(z.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props.menus,t=this.handleRemove;return l.a.createElement("div",null,l.a.createElement(ft,{menus:e,handleRemove:t}))}}]),t}(i.Component),xt=Object(u.b)(function(e){return{menus:e.Cart.menus}},function(e){return{CartActions:Object(p.b)(n,e)}})(bt),yt=function(e){function t(){return Object(M.a)(this,t),Object(H.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props.totalPrice;return l.a.createElement(l.a.Fragment,null,l.a.createElement(oe,{title:"My Order"}),l.a.createElement(xt,null),l.a.createElement(lt,{totalPrice:e,text:"Place Order"}))}}]),t}(i.Component),Et=Object(u.b)(function(e){return{totalPrice:e.Cart.totalPrice}})(yt),vt=a(53),Ct=a.n(vt),Nt=function(e){function t(){return Object(M.a)(this,t),Object(H.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(ut.a,null,l.a.createElement(ut.a,{className:e["Rectangle-blank"]}),l.a.createElement(ut.a,{className:e["Rectangle-title"]},l.a.createElement(Ne.a,{className:e["Headline-6"]},"Existing Accounts")),l.a.createElement(ut.a,{className:e.Subtitle},l.a.createElement(Ct.a,{control:l.a.createElement(Ke.a,{classes:{checked:e.checked}}),label:"Visa Card",className:e.ExistCardName}),l.a.createElement(Ne.a,{className:e.caption},"3515")),l.a.createElement(ut.a,{className:e.Subtitle},l.a.createElement(Ct.a,{control:l.a.createElement(Ke.a,{classes:{checked:e.checked}}),label:"Master Card",className:e.ExistCardName}),l.a.createElement(Ne.a,{className:e.caption},"5152")),l.a.createElement("div",{className:e["Rectangle-line"]}))}}]),t}(i.Component),Ot=W()(function(e){return{"Rectangle-blank":{width:"100%",height:"48px"},"Rectangle-title":{width:"100%",height:"36px",display:"flex",alignItems:"center"},"Rectangle-line":{width:"100%",height:"1px",opacity:"0.12",backgroundColor:"#000000"},"Headline-6":{width:"240px",height:"24px",fontFamily:"Roboto",fontSize:"20px",fontWeight:"500",fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.87)"},Subtitle:{width:"100%",height:"48px",display:"flex"},ExistCardName:{width:"80%"},caption:{display:"inline-flex",alignItems:"center",justifyContent:"flex-end",width:"20%",fontFamily:"Roboto",fontSize:"12px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.33",letterSpacing:"0.4px",textAlign:"right",color:"rgba(0, 0, 0, 0.87)"},checked:{"&$checked":{color:"#757575"}}}})(Nt),St=a(75),jt=a.n(St),kt=W()(function(e){return{"Rectangle-blank":{width:"100%",height:"48px"},"Rectangle-title":{width:"100%",height:"36px",display:"flex",alignItems:"center"},"Rectangle-items":{width:"100%",height:"48px",display:"flex",alignItems:"center"},"Rectangle-line":{width:"100%",height:"1px",opacity:"0.12",backgroundColor:"#000000"},"Headline-6":{width:"240px",height:"24px",fontFamily:"Roboto",fontSize:"20px",fontWeight:"500",fontStyle:"normal",fontStretch:"normal",lineHeight:"normal",letterSpacing:"0.3px",color:"rgba(0, 0, 0, 0.87)"},"Subtitle-1":{width:"80%",height:"24px",fontFamily:"Roboto",fontSize:"16px",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",lineHeight:"1.5",letterSpacing:"0.2px",color:"rgba(0, 0, 0, 0.87)"},filled:{width:"20%",display:"inline-flex",justifyContent:"flex-end"}}})(function(e){var t=e.classes;return l.a.createElement(ut.a,null,l.a.createElement(ut.a,{className:t["Rectangle-blank"]}),l.a.createElement(ut.a,{className:t["Rectangle-title"]},l.a.createElement(Ne.a,{className:t["Headline-6"]},"Add New Account")),l.a.createElement(ut.a,{className:t["Rectangle-items"]},l.a.createElement(Ne.a,{className:t["Subtitle-1"]},"Credit Card"),l.a.createElement(ut.a,{className:t.filled},l.a.createElement("img",{src:"".concat(jt.a),alt:""}))),l.a.createElement(ut.a,{className:t["Rectangle-items"]},l.a.createElement(Ne.a,{className:t["Subtitle-1"]},"Kakao Pay"),l.a.createElement(ut.a,{className:t.filled},l.a.createElement("img",{src:"".concat(jt.a),alt:""}))),l.a.createElement(ut.a,{className:t["Rectangle-items"]},l.a.createElement(Ne.a,{className:t["Subtitle-1"]},"Mobile Phone"),l.a.createElement(ut.a,{className:t.filled},l.a.createElement("img",{src:"".concat(jt.a),alt:""}))),l.a.createElement("div",{className:t["Rectangle-line"]}))}),_t=W()(function(e){var t;return{root:(t={flexGrow:1,padding:"0 16px",display:"block",height:"calc(100vh - 136px - ".concat(/mobile/i.test(navigator.userAgent)?75:0,"px)")},Object(C.a)(t,"@media screen and (max-width: 360px) and  (orientation: portrait)",{width:"360px"}),Object(C.a)(t,"overflow","auto"),Object(C.a)(t,"-webkit-overflow-scrolling","touch"),t)}})(function(e){var t=e.classes;return l.a.createElement(ut.a,{container:!0,className:t.root},l.a.createElement(Ot,null),l.a.createElement(kt,null))}),wt=function(e){function t(){return Object(M.a)(this,t),Object(H.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){this.props.totalPrice;return l.a.createElement(_t,null)}}]),t}(i.Component),It=Object(u.b)(function(e){return{totalPrice:e.Cart.totalPrice}})(wt),Rt=Object(u.b)(function(e){return{totalPrice:e.Cart.totalPrice}})(function(e){var t=e.totalPrice;return l.a.createElement(l.a.Fragment,null,l.a.createElement(oe,{title:"Payment Methods"}),l.a.createElement(It,null),l.a.createElement(lt,{totalPrice:t,text:"Proceed to Transaction"}))}),Tt=a(133),Pt=a.n(Tt),At=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(H.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(e){a.props.history.push("/basic")},a}return Object(z.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props.error,a=t.code,n=t.title,o=t.desc,c=t.actionLabel,r=(t.actionClick,this.handleClick);return l.a.createElement(i.Fragment,null,l.a.createElement(B.c,{className:e.root},l.a.createElement("img",{src:Pt.a,alt:a,className:e.logo}),l.a.createElement(B.c,{className:e.text},l.a.createElement(B.d,{variant:"h3",align:"center",component:"h1",color:"inherit",gutterBottom:!0,className:e.title},n),l.a.createElement(B.d,{variant:"h5",component:"h2",color:"inherit",gutterBottom:!0,className:e.headline},o),l.a.createElement(B.a,{onClick:r,variant:"contained",color:"secondary",className:e.button},c))))}}]),t}(i.Component);At.defaultProps={error:{code:"404",title:"Page not found.",desc:"",actionLabel:"Go to home",actionClick:"./basic"}};var Mt,Ft=W()(function(e){var t;return{root:{flex:"1 0 100%"},text:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},title:(t={letterSpacing:".7rem",justifyContent:"center",alignItems:"center",textIndent:".7rem",fontWeight:e.typography.fontWeightLight},Object(C.a)(t,e.breakpoints.only("xs"),{fontSize:28}),Object(C.a)(t,"whiteSpace","nowrap"),t),headline:{paddingLeft:4*e.spacing.unit,paddingRight:4*e.spacing.unit,marginTop:e.spacing.unit,maxWidth:500,textAlign:"center"},content:Object(C.a)({paddingBottom:8*e.spacing.unit,paddingTop:8*e.spacing.unit},e.breakpoints.up("sm"),{paddingTop:12*e.spacing.unit}),button:{marginTop:3*e.spacing.unit,width:328},logo:{margin:"".concat(3*e.spacing.unit,"px 0 ").concat(4*e.spacing.unit,"px"),width:"100%",height:"35vw",maxHeight:200}}})(At),Ht=Object(p.c)(c),Dt=Object(p.d)(Ht,Mt,Object(p.a)(d.logger,g.a));m.a.render(l.a.createElement(u.a,{store:Dt},l.a.createElement(function(){return l.a.createElement(T.a,null,l.a.createElement(P.a,null,l.a.createElement(A.a,{exact:!0,path:"/",component:Z}),l.a.createElement(A.a,{path:"/basic",component:st}),l.a.createElement(A.a,{path:"/cart",component:Et}),l.a.createElement(A.a,{path:"/payment",component:Rt}),l.a.createElement(A.a,{path:"*",component:Ft})))},null)),document.getElementById("root"))},74:function(e,t,a){e.exports={header:"styles_header__1JcHh",backBtn:"styles_backBtn__3jUZG"}},75:function(e,t,a){e.exports=a.p+"static/media/filled.c63ac1b0.svg"},89:function(e,t,a){e.exports=a.p+"static/media/logostory.5850e49c.jpg"}},[[215,2,1]]]);
//# sourceMappingURL=main.b24ddea4.chunk.js.map