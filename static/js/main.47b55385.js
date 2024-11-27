/*! For license information please see main.47b55385.js.LICENSE.txt */
(()=>{var A={76240:(A,e,t)=>{"use strict";t.r(e),t.d(e,{Failure:()=>u,Success:()=>l});var r=t(1529),i=t(75413),a=t(46038),n=t(70579);const o=r.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95vw;

    @media(max-width: 600px){
        gap: 1rem;
    }
`,s=r.Ay.img`
    width: 20rem;

    @media(max-width: 900px){  
        width: 15rem; 
    }

    @media(max-width: 600px){  
        width: 10rem; 
    }
`,c=r.Ay.p`
    font-size: 2rem;
    color: red;
    font-weight: 500;
    text-align: center;

    @media(max-width: 600px){
        font-size: 1.6rem;
    }
`,l=()=>(0,n.jsxs)(o,{children:[(0,n.jsx)(c,{style:{color:"green"},children:"Payment Successful !"}),(0,n.jsx)(s,{src:i,alt:"Success"})]}),u=()=>(0,n.jsxs)(o,{children:[(0,n.jsx)(c,{children:"Payment Failed ! Please try again later"}),(0,n.jsx)(s,{src:a,alt:"Failure"})]})},44873:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c});var r=t(65043),i=t(75017),a=t(1529),n=t(77440),o=t(70579);const s=a.Ay.div.withConfig({shouldForwardProp:A=>"colour"!==A})`
    position: fixed;
    box-sizing: border-box;
    top: 1.5px;
    margin: 0 0.3rem;
    width: calc(100% - 0.6rem);
    z-index: 10000;
    border: 2px solid black;
    // border-radius: 0.5rem;
    text-align: center;
    background-color: ${A=>A.colour};
    color: white;
    padding: 0.5rem;

    &:hover {
        transform: scale(1.003);        
    }
`,c=()=>{const{alert:A,setalert:e}=(0,r.useContext)(i.y),[t,a]=(0,r.useState)(null);(0,r.useEffect)((()=>{if(""!==A.colour){const A=setTimeout((()=>{e({colour:"",message:""})}),2e3);a(A)}else clearTimeout(t),a(null)}),[A]);return""!==A.colour?(0,o.jsxs)(s,{colour:A.colour,onMouseEnter:()=>{null!==t&&clearTimeout(t)},onMouseLeave:()=>{const A=setTimeout((()=>{e({colour:"",message:""})}),2e3);a(A)},children:[(0,o.jsx)("p",{style:{fontSize:"1.1rem",fontWeight:"600",fontStyle:"italic",color:A.fontcolor?A.fontcolor:"white"},children:A.message}),(0,o.jsx)("img",{onClick:()=>{clearTimeout(t),e({colour:"",message:""}),a(null)},src:n,alt:"Close alert",style:{height:"70%",position:"absolute",top:"50%",transform:"translateY(-50%)",right:"5px",cursor:"pointer"}})]}):null}},52286:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(75303),s=t(92476),c=t(52067),l=t(98569),u=t(70579);const d=a.Ay.div`
    background-color: '';    
    box-sizing: border-box;
    display: flex;
    margin: 0.1rem 0.1rem;
    padding: 0;
    gap: 2rem;
    justify-content: center;    

    @media (max-width: 950px) {
        flex-direction: column;
        align-items: center;
    }
`,p=a.Ay.div`
    position: sticky;
    top: 15%;

    @media (max-width: 950px) {
        position: static;
        margin-top: 2rem;
    }
`,g=()=>{const A=(0,n.wA)(),e=(0,n.d4)((A=>A.product)),{highRes:t,isLoading:a}=e,{productdetail:g}=(0,r.useContext)(i.y),[m,h]=(0,r.useState)(null);return(0,r.useEffect)((()=>{t&&(h(t),A((0,o.gG)(["HIGH_RES_RESET"])))}),[t]),(0,r.useEffect)((()=>{A((0,o.dv)(g._id))}),[]),(0,u.jsxs)(u.Fragment,{children:[a&&(0,u.jsx)("img",{src:s,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),m&&(0,u.jsxs)(d,{children:[(0,u.jsx)("div",{children:(0,u.jsx)(p,{children:(0,u.jsx)(c.default,{images_arr:m})})}),(0,u.jsx)(l.default,{})]})]})}},64383:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(88504),s=t(92476),c=t(70579);const l=a.Ay.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    width: 9rem;
    
    &:hover {
        transform: scale(1.05);
        cursor: pointer; 
    }

    @media(max-width:1000px){
        width: 8rem;  
        padding: 0.9rem 0;           
    }

    @media(max-width:500px){
        width: 6rem;
        padding: 0.3rem 0.2rem;
        font-size: 0.9rem;
    }

    @media(max-width:320px){
        width: 5rem;
        padding: 0.3rem 0.1rem;
        font-size: 0.8rem;
    }
`,u=()=>{const A=(0,n.wA)(),e=(0,n.d4)((A=>A.user)),{userInfo:t,isLoading:a}=e,{setalert:u,productdetail:d}=(0,r.useContext)(i.y);return(0,c.jsxs)(c.Fragment,{children:[a&&(0,c.jsx)("img",{src:s,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,c.jsx)(l,{onClick:()=>{null===t?u({colour:"#ffa500",message:"Login to access Cart !",fontcolor:"black"}):A((0,o.Tf)(t._id,d._id,1))},style:{backgroundColor:"#0a2ef7"},children:"ADD TO CART"})]})}},41211:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(88504),s=(t(92476),t(85359)),c=t(70579);const l=a.Ay.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    width: 9rem;
    
    &:hover {
        transform: scale(1.05);
        cursor: pointer; 
    }

    @media(max-width:1000px){
        width: 8rem;  
        padding: 0.9rem 0;           
    }

    @media(max-width:500px){
        width: 6rem;
        padding: 0.3rem 0.2rem;
        font-size: 0.9rem;
    }

    @media(max-width:320px){
        width: 5rem;
        padding: 0.3rem 0.1rem;
        font-size: 0.8rem;
    }
`,u=()=>{const A=(0,n.wA)(),e=(0,n.d4)((A=>A.user)),{userInfo:t,isLoading:a}=e,{productdetail:u,loggedin:d,setalert:p}=(0,r.useContext)(i.y);return(0,c.jsx)(l,{onClick:async()=>{if(null===t)p({colour:"#ffa500",message:"Please Login to continue buying !",fontcolor:"black"});else{let e={name:t.name,amount:u.price.cost,number:t.phone,MID:"MID"+Date.now(),transactionId:"T"+Date.now()},r=await(0,s.X)(e);if(!r||200!==r.status)return void p({colour:"#f71505",message:"Payment server not responding ! Please try again later"});{const e=new Date;e.setDate(e.getDate()+u.delivery_time);const i=e.toISOString();A((0,o.cp)(t._id,u._id,1,u.price.cost,u.delivery_charges,i,!1)),window.location.href=r.data.data.instrumentResponse.redirectInfo.url}}},style:{backgroundColor:"#e60b92"},children:"BUY NOW"})}},52067:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>f});var r=t(65043),i=t(1529),a=t(779),n=t(95796),o=t(64383),s=t(41211),c=t(70579);const l=i.Ay.div`
    display: flex;   
    gap: 2rem;
    margin: 1rem 1rem;

    @media(max-width:600px){
        flex-direction:column;        
    }
`,u=i.Ay.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    gap:0.5rem;

    @media(max-width:600px){
       flex-direction:row;
       justify-content: center; 
       gap:0rem;
    }
`,d=i.Ay.div`    
    max-height: 21.3rem;
    overflow: hidden;
    padding: 0.2rem 0.5rem;

    @media(max-width:1000px){ 
        max-height: 18rem;    
    }

    @media(max-width:600px){
       max-width: 18rem;
    }

    @media(max-width:500px){        
        max-width: 15rem;
    }

    @media(max-width:370px){
        max-width: 11rem;
    }

    @media(max-width:300px){
        max-width: 9rem;
    }
`,p=i.Ay.div`    
    gap: 0.9rem;
    display: flex;
    flex-direction:column;        
    transition: transform 0.38s ease-in-out;
    align-items:center;
    justify-content:flex-start;

    @media(max-width:600px){
       flex-direction:row;
       align-items:center;
       justify-content:flex-start;
       
    }
`,g=i.Ay.img.withConfig({shouldForwardProp:A=>"isselected"!==A})`
    width: 4rem;
    height: 4rem;
    box-sizing: border-box;
    border: ${A=>A.isselected?"3px solid red":"1px solid black"};

    &:hover {
        transform: scale(1.1);
        cursor: pointer; 
    }

    @media(max-width:1000px){
        width: 3rem;
        height: 3rem;
        border: ${A=>A.isselected?"2px solid red":"1px solid black"};
    }

    @media(max-width:600px){
        width: 3rem;
        height: 3rem;
        border: ${A=>A.isselected?"2px solid red":"1px solid black"};
    }

    @media(max-width:300px){
        width: 2rem;
        height: 2rem;
        border: ${A=>A.isselected?"2px solid red":"1px solid black"};
    }    
`,m=i.Ay.img`
    width: 22rem;    
    height: 27.2rem;
    border: 2px solid #1f6e08;
    border-radius: 5px;
    box-sizing: border-box;

   @media(max-width:1000px){
        width: 20rem;    
        height: 24rem;    
    }    

    @media(max-width:400px){        
         width: 18rem;    
        height: 22rem;   
    }

    @media(max-width:320px){        
         width: 16rem;    
        height: 20rem;   
    }

    @media(max-width:300px){
        width: 12rem;
        height: 16rem;       
    }
`,h=i.Ay.div`
    display: flex;
    justify-content: space-between;
    width: 22rem;

    @media(max-width:1000px){
        width: 20rem;       
    }    

    @media(max-width:400px){        
         width: 18rem;    
    }

    @media(max-width:320px){        
         width: 16rem;     
    }

    @media(max-width:300px){
        width: 12rem;    
    }
`,x=i.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.05rem;
    width: 3rem;
    background-color: #e0dede;
    border: 2px solid #807d7d;
    border-radius: 3px;
    cursor: pointer;

    @media(max-width:600px){
       transform: rotate(270deg);
    }
`,E=i.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.05rem;
    width: 3rem;
    background-color: #e0dede;
    opacity: 0.4;
    border: 2px solid #807d7d;
    cursor: not-allowed;

    @media(max-width:600px){
       transform: rotate(270deg);
    }
`,f=A=>{let{images_arr:e}=A;const[i,f]=(0,r.useState)(null),[I,B]=(0,r.useState)(null),[Q,k]=(0,r.useState)(null),[j,y]=(0,r.useState)(null),[w,S]=(0,r.useState)(0),[C,U]=(0,r.useState)(0),R=(0,r.useRef)(null),b=(0,r.useRef)(null),G=(0,r.useRef)(null),D=document.documentElement;(0,r.useEffect)((()=>{const A=()=>{const A=parseFloat(getComputedStyle(D).fontSize),t=null===Q?0:Math.round(Q/j);let r=null,i=null;if(R.current&&(r=R.current.clientHeight+.9*A),b.current&&(i=window.innerWidth<=600?b.current.clientWidth:b.current.clientHeight),null!==r&&null!==i){f(r),B(i);const A=r*e.length+10;y(A);const a=Math.max(i,t*A);k(a);const n=-(a-i);F(0,n),S(n)}};return null===i&&A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}}),[Q,i]);const F=(A,e)=>{G.current&&(window.innerWidth<=600?G.current.style.transform=`translateX(${e+A}px)`:G.current.style.transform=`translateY(${e+A}px)`)};return(0,c.jsxs)(l,{children:[(0,c.jsxs)(u,{children:[Q>I?(0,c.jsx)(x,{onClick:()=>{if(Q>I){const A=I/i,e=Math.round(.6*A),t=Math.min(e*i,Q-I);F(w,t),S(w+t),k(Q-t)}},children:(0,c.jsx)("img",{src:a,alt:"View previous",style:{width:"1.2rem"}})}):(0,c.jsx)(E,{children:(0,c.jsx)("img",{src:a,alt:"View previous",style:{width:"1.2rem"}})}),(0,c.jsx)("div",{style:{backgroundColor:"#f2f0fc",padding:"0.6rem 0.3rem",borderRadius:"5px",border:"2px solid #747378"},children:(0,c.jsx)(d,{ref:b,children:(0,c.jsx)(p,{ref:G,children:e.map(((A,e)=>(0,c.jsx)(g,{isselected:C===e,ref:R,onClick:()=>{U(e)},src:t(99261)(`./${A}`),alt:`Image ${e}`},e)))})})}),Q<j?(0,c.jsx)(x,{onClick:()=>{if(Q<j){const A=I/i,e=Math.round(.6*A),t=-Math.min(e*i,j-Q);F(w,t),S(w+t),k(Q-t)}},children:(0,c.jsx)("img",{src:n,alt:"View next",style:{width:"1.2rem"}})}):(0,c.jsx)(E,{children:(0,c.jsx)("img",{src:n,alt:"View next",style:{width:"1.2rem"}})})]}),(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[(0,c.jsx)(m,{src:t(99261)(`./${e[C]}`),alt:"Selected"}),(0,c.jsxs)(h,{children:[(0,c.jsx)(s.default,{}),(0,c.jsx)(o.default,{})]})]})]})}},54539:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var r=t(67709),i=t(65043),a=(t(75017),t(1529)),n=t(42024),o=t(31563),s=t(27407),c=t(70579);const l=a.Ay.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.3rem;
    margin-top: 0.5rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.02)
    };

    @media(max-width: 500px){
        margin-top: 0.3rem;
    }

    @media(max-width: 400px){
        margin-top: 0.2rem;
    }
`,u=a.Ay.div`
    flex: 1 1 0;
    background-color: #ebeef0;
    border-radius: 7px;
    padding: 0.5rem 0.5rem;
    border: 0px solid black;
    font-size: 0.92rem;

    @media(max-width: 500px){
        flex: 0 0 150px;
        font-size: 0.85rem;
    }

    @media(max-width: 400px){
        flex: 0 0 100px;
        font-size: 0.8rem;
    }
`,d=a.Ay.p`
    color: blue;
    display: inline-block;
    margin-left: 0.4rem;
    font-weight: 600; 

    &:hover{
        cursor:pointer;
        transform: scale(1.07);
    }
`,p=A=>{let{category:e,category_offers_arr:t,category_index:a}=A;const[u,p]=(0,i.useState)(null),[g,m]=(0,i.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{style:{textAlign:"center",margin:"0.1rem 0 1rem 0"},children:e}),(0,c.jsx)("div",{style:{border:"0px solid #b5b7ba",padding:"0 0 0.8rem 1.3rem"},children:(0,c.jsxs)("ul",{style:{listStylePosition:"outside"},children:[t.slice(0,1).map(((A,t)=>(0,c.jsxs)("li",{style:{},children:[A,(0,c.jsx)(d,{onClick:()=>(A=>{const e=r.H[a],t=Object.values(e)[0][A];p(t)})(t),children:"T&C"})]},`${e}+ ${t}`))),t.length>1?(0,c.jsxs)(l,{children:[(0,c.jsx)("img",{src:s,alt:"Expand",style:{width:"0.8rem",marginTop:"4.5px"}}),(0,c.jsxs)("p",{onClick:()=>{m(!0)},style:{fontWeight:500,color:"red",cursor:"pointer"},children:["View ",t.length-1," more offers"]})]}):null]})}),g?(0,c.jsx)(o.default,{category:e,category_offers_arr:t,category_index:a,showalloffers:g,setshowalloffers:m,setjsondata:p}):null,(0,c.jsx)(n.default,{showalloffers:g,setshowalloffers:m,jsondata:u,setjsondata:p})]})},g=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{style:{margin:"1rem 0 0 0",fontSize:"1.4rem",fontWeight:600},children:"Available Offers"}),(0,c.jsx)("hr",{style:{margin:"0.2rem 0 1rem 0",border:"1px solid silver"}}),(0,c.jsx)("div",{style:{display:"flex",gap:"1rem",justifyContent:"space-evenly",alignItems:"stretch",flexWrap:"wrap"},children:r.O.map(((A,e)=>(0,c.jsx)(u,{children:(0,c.jsx)(p,{category:Object.keys(A)[0],category_offers_arr:Object.values(A)[0],category_index:e},e)},e)))})]})},31563:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>l});var r=t(65043),i=t(67709),a=t(1529),n=t(17037),o=t(70579);const s=a.Ay.p`
    color: blue;
    display: inline-block;
    margin-left: 0.4rem;
    font-weight: 600; 

    &:hover{
        cursor:pointer;
        transform: scale(1.07);
    }
`,c=A=>{let{category:e,category_offers_arr:t,category_index:r,setjsondata:a}=A;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{border:"0px solid #b5b7ba",marginBottom:"2rem",backgroundColor:""},children:[(0,o.jsx)("h3",{style:{textAlign:" center",margin:"0.2rem 0 1rem 0",fontSize:"1.8rem"},children:e}),(0,o.jsx)("ol",{style:{listStylePosition:"outside",marginLeft:"1.5rem"},children:t.map(((A,t)=>(0,o.jsxs)("li",{style:{marginBottom:"0.7rem"},children:[A,(0,o.jsx)(s,{onClick:()=>((A,e)=>{const t=i.H[A],r=Object.values(t)[0][e];a(r)})(r,t),children:"T&C"})]},`${e}+ ${t}`)))})]})})},l=A=>{let{category:e,category_offers_arr:t,category_index:i,showalloffers:a,setshowalloffers:s,setjsondata:l}=A;const u=(0,r.useRef)(null);return(0,r.useEffect)((()=>{var A;const e=A=>{const e=document.getElementById("Terms_Conditions_Component");!u.current||u.current.contains(A.target)||null!==e&&e.contains(A.target)||s(!1)},t=A=>{A.stopPropagation()};return document.addEventListener("mousedown",e),null===(A=u.current)||void 0===A||A.addEventListener("mousedown",t),()=>{var A;document.removeEventListener("mousedown",e),null===(A=u.current)||void 0===A||A.removeEventListener("mousedown",t)}}),[u]),(0,r.useEffect)((()=>(document.body.style.overflow=a?"hidden":"",()=>{document.body.style.overflow=""})),[a]),(0,o.jsx)("div",{style:{position:"fixed",zIndex:5,top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,o.jsxs)("div",{ref:u,style:{padding:"0.2rem 1rem",backgroundColor:"white",border:"5px double #525151",position:"fixed",width:"50vw",height:"100vh",boxSizing:"border-box",overflowY:"auto",overflowX:"auto",top:"0",right:"0"},children:[(0,o.jsx)("img",{onClick:()=>{s(!1)},src:n,alt:"Close",style:{width:"1.5rem",position:"absolute",top:"0.3rem",left:"0.3rem",cursor:"pointer"}}),(0,o.jsx)(c,{category:e,category_offers_arr:t,category_index:i,showalloffers:a,setshowalloffers:s,setjsondata:l})]})})}},8699:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>n});var r=t(1529),i=t(70579);const a=r.Ay.li`
   font-size: 1rem;

    @media(max-width: 400px){
        font-size: 0.95rem;
    }
    @media(max-width: 370px){
        font-size: 0.92rem;
    }
`,n=A=>{let{title:e,arr:t}=A;return(0,i.jsxs)("div",{style:{border:"0px solid #b5b7ba",marginBottom:"2rem"},children:[(0,i.jsx)("h2",{style:{margin:"1rem 0 0 0",fontSize:"1.4rem",fontWeight:600},children:e}),(0,i.jsx)("hr",{style:{margin:"0.2rem 0 0.8rem 0",border:"1px solid silver"}}),(0,i.jsx)("ul",{style:{listStylePosition:"outside",marginLeft:"1.5rem"},children:t.map(((A,t)=>(0,i.jsx)(a,{children:A},`${e}+${t}`)))})]})}},6933:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>l});var r=t(65043),i=t(1529),a=t(75017),n=t(70579);const o=i.Ay.div`
    width: 40vw;
    padding: 20px;
    margin: 20px auto;
    background-color: #f9f9f9;
    border: 1px solid silver;
    border-radius: 8px;

    @media(max-width: 700px){
        width: 50vw;
    }

    @media(max-width: 500px){
        width: 60vw;
    }
`,s=i.Ay.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    resize: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: normal;

    @media(max-width: 500px){
        font-size: 0.9rem;
    }

    @media(max-width: 400px){
        font-size: 0.8rem;
    }
`,c=i.Ay.button`
    padding: 1rem 1.2rem;
    background-color: #4CAF50;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin: auto;

    &:hover {
        background-color: #45a049;
    }

    @media(max-width: 500px){
        font-size: 0.9rem;
        padding: 0.5rem 0.7rem;
    }

    @media(max-width: 400px){
        font-size: 0.8rem;        
    }
`,l=()=>{const{setalert:A}=(0,r.useContext)(a.y),[e,t]=(0,r.useState)(""),[i,l]=(0,r.useState)("");return(0,n.jsx)(o,{children:(0,n.jsxs)("form",{onSubmit:e=>{A({colour:"green",message:"Question submitted to the seller !"}),e.preventDefault(),t(""),l("")},children:[(0,n.jsx)(s,{type:"text",placeholder:"Have a Question ? Ask here",value:e,onChange:A=>t(A.target.value),required:!0}),(0,n.jsx)(c,{type:"submit",children:"Submit"})]})})}},60428:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var r=t(1529),i=t(65043),a=t(35475),n=t(75017),o=t(22373),s=t(33823),c=t(92476),l=t(58677),u=t(70579);const d=r.Ay.h2`
    padding: 0 0 1rem 0;
    font-size: 1.6rem;
    text-align: center;
    border-bottom: 2px solid silver;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`,p=r.Ay.button`
    text-align: center;
    font-size: 1.1rem;
    color: blue;
    font-weight: 500;
    display: block;
    margin: auto;
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.43rem 0.5rem;
    background-color: blue;
    color: white;

    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`,g=()=>{const A=(0,o.wA)(),e=(0,o.d4)((A=>A.question)),{questions:t,isLoading:r}=e,{productdetail:d}=(0,i.useContext)(n.y),[g,m]=(0,i.useState)(null);return(0,i.useEffect)((()=>{A((0,s.Ox)(d._id,0,2,"most-helpful"))}),[]),(0,i.useEffect)((()=>{t&&(m(t),A((0,s.no)(["QUESTIONS_RESET"])))}),[t]),(0,u.jsxs)("div",{children:[r&&(0,u.jsx)("img",{src:c,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,u.jsx)("div",{style:{maxHeight:"28rem",overflow:"hidden",marginBottom:"1rem"},children:g&&g.map(((A,e)=>(0,u.jsx)(l.default,{obj:A},A._id)))}),d.total_questions>2?(0,u.jsx)("div",{style:{marginTop:"0rem"},children:(0,u.jsx)(a.N_,{to:`/product/${d._id}/questions/1`,style:{textDecoration:"none"},children:(0,u.jsx)(p,{children:"See all"})})}):null]})},m=()=>(0,u.jsxs)("div",{style:{border:"2px solid #b5b7ba",marginTop:"2.5rem",padding:"1rem 0rem"},children:[(0,u.jsx)(d,{children:"Questions and Answers"}),(0,u.jsx)(g,{})]})},3599:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>f});var r=t(65043),i=t(35475),a=t(73216),n=t(75017),o=t(1529),s=t(58677),c=t(6933),l=t(92476),u=t(22373),d=t(33823),p=t(70579);const g=o.Ay.div`   
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`,m=o.Ay.select`
    padding: 0 0 0 0.1rem;
    height: 2.5rem;
    font-size: 1rem;
    border: 2px solid silver;
    border-radius: 5px;
    background-color: white;
    color: #333;
    outline: none;
    cursor: pointer;    

    &:focus {
        border-color: #007BFF;
    }

    &:hover {
        border-color: #007BFF;
    }

    option {
        background: #fff;
        color: #333;
        padding: 10rem;
    }
`,h=o.Ay.h2`
    margin: 1rem 0;
    font-size: 1.8rem;
    text-align: center;    
    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`,x=o.Ay.div`
    width: 80vw;
    border: 2px solid silver;
    border-bottom: none;

    @media(max-width: 800px){
        width: auto;
    }
`,E=(0,o.Ay)(i.N_)`
    color: ${A=>"true"===A.curr_page?"white":"blue"};
    background-color: ${A=>"true"===A.curr_page?"blue":"none"};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 50%;

    &:hover {
        color: ${A=>"true"===A.curr_page?"white":"red"};
    }
`,f=()=>{const A=(0,a.Zp)(),e=(0,u.wA)(),t=(0,u.d4)((A=>A.question)),{questions:i,isLoading:o}=t,{id:f,page:I}=(0,a.g)(),B=parseInt(I,10),[Q,k]=(0,r.useState)("most-helpful"),[j,y]=(0,r.useState)([]),[w,S]=(0,r.useState)(null),{productdetail:C}=(0,r.useContext)(n.y);(0,r.useEffect)((()=>{const A=Math.ceil(C.total_questions/5);S(A)}),[]),(0,r.useEffect)((()=>{const A=5*(B-1);A>C.total_questions||e((0,d.Ox)(C._id,A,5,Q))}),[B,Q]),(0,r.useEffect)((()=>{i&&(y(i),window.scrollTo(0,0),e((0,d.no)(["QUESTIONS_RESET"])))}),[i]);return(0,p.jsxs)(p.Fragment,{children:[o&&(0,p.jsx)("img",{src:l,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,p.jsx)("div",{style:{padding:"0 0.1rem 0 0.1rem"},children:(0,p.jsxs)(g,{children:[(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem"},children:[(0,p.jsx)(h,{children:"Questions and Answers"}),(0,p.jsxs)(m,{value:Q,onChange:e=>{k(e.target.value),y([]),A(`/product/${C._id}/questions/1`)},children:[(0,p.jsx)("option",{value:"most-helpful",children:"Most Helpful"}),(0,p.jsx)("option",{value:"most-recent",children:"Most Recent"}),(0,p.jsx)("option",{value:"least-recent",children:"Least Recent"})]})]}),(0,p.jsx)(c.default,{}),(0,p.jsx)(x,{children:j.map(((A,e)=>(0,p.jsx)(s.default,{obj:A},A._id)))}),(0,p.jsxs)("nav",{style:{display:"flex",fontSize:"1.2rem",margin:"0.5rem 0",gap:"1.5rem",justifyContent:"center"},children:[Array.from({length:3},((A,e)=>3-e-1)).map((A=>B-A-1<=0?null:(0,p.jsx)(E,{to:`/product/${C._id}/questions/${B-A-1}`,children:B-A-1},A))),(0,p.jsx)(E,{curr_page:"true",to:`/product/${C._id}/questions/${B}`,children:B}),Array.from({length:3},((A,e)=>B+e+1>w?null:(0,p.jsx)(E,{to:`/product/${C._id}/questions/${B+e+1}`,children:B+e+1},e)))]})]})})]})}},58677:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(33823),s=t(88504),c=t(65834),l=t(37683),u=t(70579);const d=a.Ay.div`
    display: grid;
    grid-template-columns: 80% auto;    
    gap: 2rem;
    justify-items: stretch;
    
    @media(max-width: 800px){
        grid-template-columns: 75% auto;
    }

    @media(max-width: 800px){
        grid-template-columns: 65% auto;
    }

    @media(max-width: 400px){
        grid-template-columns: auto;
    }
`,p=a.Ay.p`
    font-size: 1rem;
    font-weight: 500;

    @media(max-width: 600px){
        width: 1rem;
        font-size: 0.8rem;
    }
`,g=a.Ay.img`
    width: 1.3rem;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 600px){
        width: 1rem;
    }
`,m=a.Ay.img`
    width: 1.3rem;
    transform: rotate(180deg);

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 600px){
        width: 1rem;
    }
`,h=A=>{let{obj:e}=A;const t=(0,n.wA)(),a=(0,n.d4)((A=>A.user)),{userInfo:h}=a,{setalert:x,productdetail:E}=(0,r.useContext)(i.y),[f,I]=(0,r.useState)(e),[B,Q]=(0,r.useState)(0),[k,j]=(0,r.useState)(0),y=(0,r.useRef)(0),w=(0,r.useRef)(0);(0,r.useEffect)((()=>{if(h){const A=h.QaAction.find((A=>A.question_id===e._id));"liked"===(null===A||void 0===A?void 0:A.action)?(y.current=1,Q(1),I((A=>({...A,likes:A.likes-1})))):"disliked"===(null===A||void 0===A?void 0:A.action)&&(w.current=1,j(1),I((A=>({...A,dislikes:A.dislikes-1}))))}}),[]),(0,r.useEffect)((()=>()=>{if(h){const A=h.QaAction.find((A=>A.question_id===e._id));void 0===A?1===y.current?(t((0,s.X$)(h._id,E._id,e._id,"liked")),t((0,o.H6)(e._id,1,0))):1===w.current&&(t((0,s.X$)(h._id,E._id,e._id,"disliked")),t((0,o.H6)(e._id,0,1))):"liked"===A.action?1===w.current?(t((0,s.X$)(h._id,E._id,e._id,"disliked")),t((0,o.H6)(e._id,-1,1))):0===w.current&&0===y.current&&(t((0,s.X$)(h._id,E._id,e._id,"remove")),t((0,o.H6)(e._id,-1,0))):"disliked"===A.action&&(1===y.current?(t((0,s.X$)(h._id,E._id,e._id,"liked")),t((0,o.H6)(e._id,1,-1))):0===w.current&&0===y.current&&(t((0,s.X$)(h._id,E._id,e._id,"remove")),t((0,o.H6)(e._id,0,-1))))}}),[]);return(0,u.jsxs)("div",{style:{padding:"0.8rem",borderBottom:"2px solid #b5b7ba"},children:[(0,u.jsxs)("p",{style:{fontWeight:500},children:["Q: ",f.question]}),(0,u.jsxs)(d,{children:[(0,u.jsxs)("p",{style:{fontWeight:400,marginTop:"0.2rem",padding:"0.4rem 0 0 0",color:"#3d3d3d"},children:["A: ",f.answer]}),(0,u.jsxs)("div",{style:{display:"flex",gap:"1.5rem",alignItems:"end",justifyContent:"end",fontSize:"1rem"},children:[(0,u.jsxs)("div",{style:{display:"flex",gap:"0.3rem",alignItems:"end"},children:[(0,u.jsx)(g,{onClick:()=>{h?0===B?(y.current=1,w.current=0,Q(1),j(0)):(y.current=0,w.current=0,Q(0),j(0)):x({colour:"#f78f0f",message:"Please Login first !",fontcolor:"black"})},src:1===B?l:c,alt:"Likes"}),(0,u.jsx)(p,{style:{fontWeight:500},children:(f.likes+B).toLocaleString()})]}),(0,u.jsxs)("div",{style:{display:"flex",gap:"0.3rem",alignItems:"end"},children:[(0,u.jsx)(m,{onClick:()=>{h?0===k?(y.current=0,w.current=1,Q(0),j(1)):(y.current=0,w.current=0,Q(0),j(0)):x({colour:"#f78f0f",message:"Please Login first !",fontcolor:"black"})},src:1===k?l:c,alt:"Dislikes"}),(0,u.jsx)(p,{children:(f.dislikes+k).toLocaleString()})]})]})]})]})}},51862:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>f});var r=t(1529),i=t(65043),a=t(75017),n=t(83239),o=t(92476),s=t(22373),c=t(7969);const l=[{user_id:"1",images_arr:["home/images/products/1_high.webp","home/images/products/appliances.jfif","home/images/products/beauty.jfif","home/images/products/electronics.jfif","home/images/products/fashion.jfif","home/images/products/grocery.jfif","home/images/products/smartphones.jfif","home/images/products/top_offers.jfif"]},{user_id:"2",images_arr:["home/images/products/1_low.webp","home/images/products/toys.jfif","home/images/products/travel.jfif","home/images/products/1_high.webp","home/images/products/appliances.jfif"]},{user_id:"3",images_arr:["home/images/products/toys.jfif","home/images/products/travel.jfif","home/images/products/grocery.jfif","home/images/products/smartphones.jfif","home/images/products/top_offers.jfif"]},{user_id:"4",images_arr:["home/images/products/1_high.webp","home/images/products/appliances.jfif","home/images/products/beauty.jfif","home/images/products/electronics.jfif","home/images/products/fashion.jfif","home/images/products/grocery.jfif","home/images/products/smartphones.jfif","home/images/products/top_offers.jfif"]},{user_id:"5",images_arr:["home/images/products/toys.jfif","home/images/products/travel.jfif","home/images/products/grocery.jfif","home/images/products/smartphones.jfif","home/images/products/top_offers.jfif"]}];var u=t(70579);const d={1:"#f72a2a",2:"#f28511",3:"#14cce0",4:"#166af2",5:"#04b559"},p=r.Ay.div`
    display: flex;
    padding: 1rem 1rem 0 1rem;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`,g=r.Ay.img`
    width: 5rem;
    height: 5rem; 
    border: 2px solid #020266;    

    &:hover {
        transform: scale(1.04);
        cursor: pointer; 
    }

    @media(max-width:600px){
        width: 4rem;
        height: 4rem;
    }

    @media(max-width:300px){
        width: 3rem;
        height: 3rem;
    }
`,m=r.Ay.div`
    font-weight: 500;
    font-size: 1.1rem;
    width: 100%;
    text-align: center; 
    position: absolute; 
    bottom: 42%;
    left: 0%; 
    color: white;

    @media(max-width:600px){
        font-size: 0.9rem;
    }

    @media(max-width:300px){
        font-size: 0.7rem;
    }
`,h=()=>{const{productdetail:A}=(0,i.useContext)(a.y);return(0,u.jsx)("div",{children:Object.entries(A.stars).map(((e,t)=>{let[r,i]=e;const a=i/A.total_ratings*100,o=d[r];return(0,u.jsxs)("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",justifyContent:"start"},children:[(0,u.jsx)("p",{style:{fontWeight:500},children:r}),(0,u.jsx)("img",{src:n,alt:"Stars",style:{width:"0.7rem"}}),(0,u.jsx)("span",{style:{width:"11rem",height:"5px",backgroundColor:"#e3e3e3",display:"inline-block",borderRadius:"4px",position:"relative"},children:(0,u.jsx)("span",{style:{width:`${a}%`,height:"100%",backgroundColor:o,borderRadius:"4px",display:"inline-block",position:"absolute",top:0,left:0}})}),(0,u.jsx)("p",{style:{color:"#575757",fontStyle:"italic"},children:i.toLocaleString()})]},t)}))})},x=()=>{const{productdetail:A}=(0,i.useContext)(a.y);return Object.keys(A.other_ratings).length>0?(0,u.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"2rem",flexWrap:"wrap",justifyContent:"start"},children:Object.entries(A.other_ratings).map(((A,e)=>{let[t,r]=A;const i=r/5*100,a=100-i,n=Math.floor(r),o=d[n];return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.2rem",flexWrap:"wrap"},children:[(0,u.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 36 36",children:[(0,u.jsx)("circle",{cx:"18",cy:"18",r:"15.9155",fill:"transparent",stroke:"#edf0f5",strokeWidth:"3",strokeDasharray:"100, 0"}),(0,u.jsx)("circle",{cx:"18",cy:"18",r:"15.9155",fill:"transparent",stroke:o,strokeWidth:"3",strokeDasharray:`${i}, ${a}`,strokeDashoffset:"25",strokeLinecap:"round"}),(0,u.jsx)("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fontSize:"10",fill:"black",fontWeight:"500",children:r.toFixed(1)})]}),(0,u.jsx)("p",{style:{fontWeight:500},children:t})]},e)}))}):null},E=()=>{const A=(0,s.wA)(),e=(0,s.d4)((A=>A.review)),{reviews_imgs_modal:r,isLoading:n}=e,{productdetail:d,setshowallimagesgrid:p}=(0,i.useContext)(a.y),[h,x]=(0,i.useState)(null),E=()=>{p(l)},[f,I]=(0,i.useState)(window.innerWidth),B=()=>{I(window.innerWidth)};(0,i.useEffect)((()=>(window.addEventListener("resize",B),A((0,c.iR)(d._id,0,50,"most-helpful")),()=>window.removeEventListener("resize",B))),[]),(0,i.useEffect)((()=>{r&&(x(r),A((0,c.pr)(["REVIEWS_IMGS_RESET"])))}),[r]);let Q,k=0;return Q=f>=1400?8:f>=1250?5:f>950?4:f>650?6:f>400?4:3,(0,u.jsxs)(u.Fragment,{children:[n&&(0,u.jsx)("img",{src:o,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,u.jsx)("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:null===h||void 0===h?void 0:h.map(((A,e)=>A.review_images.map(((A,r)=>{if(k++,k>Q)return null;if(k===Q){const i=d.total_review_images-Q+1;return(0,u.jsxs)("div",{onClick:E,style:{position:"relative",cursor:"pointer"},children:[(0,u.jsx)(g,{src:t(99261)(`./${A}`),alt:"Product image",style:{filter:"brightness(0.3)"}}),(0,u.jsxs)(m,{children:["+",i.toLocaleString()]})]},`${e}_${r}`)}return(0,u.jsx)(g,{onClick:E,src:t(99261)(`./${A}`),alt:"Product image"},`${e}_${r}`)}))))})]})},f=()=>{const{productdetail:A}=(0,i.useContext)(a.y);return(0,u.jsx)("div",{style:{marginBottom:"2rem"},children:(0,u.jsxs)(p,{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.2rem",justifyContent:"center"},children:[(0,u.jsx)("p",{style:{fontSize:"1.7rem",fontWeight:500},children:A.average_stars.toFixed(1)}),(0,u.jsx)("img",{src:n,alt:"Stars",style:{width:"1.5rem"}})]}),(0,u.jsxs)("p",{style:{color:"#787777",textAlign:"center",fontWeight:500},children:[A.total_ratings.toLocaleString()," Ratings & ",A.total_reviews.toLocaleString()," Reviews"]})]}),(0,u.jsx)(h,{}),(0,u.jsx)(x,{}),(0,u.jsx)(E,{})]})})}},83111:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var r=t(65043),i=t(75017),a=t(1529),n=t(12232),o=t(70579);const s=a.Ay.div` 
    width: 50vw;    
    position: fixed;
    padding: 1rem 0rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    background-color: white;

    @media(max-width: 850px){
        width: 65vw;           
    }

    @media(max-width: 700px){
        width: 70vw;           
    }

    @media(max-width: 600px){
        width: 80vw;             
    }

    @media(max-width: 450px){
        width: 85vw;             
    }
`,c=a.Ay.div`
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 2rem;

    @media(max-width: 600px){
        gap: 1rem;      
    }
`,l=a.Ay.img`
    width: 70%;
    height: 25rem;      

    @media(max-width: 1100px){
        width: 65%;
        height: 25rem;
    }

    @media(max-width: 1100px){
        width: 65%;
        height: 22rem;
    }

    @media(max-width: 850px){
        width: 70%;
        height: 22rem;
    }

    @media(max-width: 700px){
        width: 70%;
        height: 22rem;
    }

    @media(max-width: 550px){
        height: 18rem;
    }

    @media(max-width: 450px){
        height: 18rem;
    }

    @media(max-width: 400px){
        height: 15rem;
    }

    @media(max-width: 340px){
        height: 12rem;
    }

   
`,u=a.Ay.img.withConfig({shouldForwardProp:A=>"arrow"!==A})`
    width: 2.5rem;
    height: 2.5rem;
    opacity: ${A=>"true"===A.end?.5:1};
    transform: ${A=>"left"===A.arrow?"rotate(180deg)":""};

    &:hover{
        cursor: ${A=>"true"!==A.end?"pointer":"not-allowed"};
        transform: ${A=>"left"===A.arrow?"rotate(180deg) scale(1.04)":"scale(1.04)"};
    }

    @media(max-width: 800px){
        width: 2rem;
        height: 2rem;
    }

    @media(max-width: 450px){
        width: 1.8rem;
        height: 1.8rem;
    }
`,d=a.Ay.div`
    overflow: hidden;
`,p=a.Ay.div`
    transition: transform 0.5s ease-in-out;    
    display: flex;
    align-items: center;
    justify-content:start;
    gap: 0.9rem;
    position: relative;
    left: 50%;
    padding: 0.3rem 0; 
`,g=a.Ay.img.withConfig({shouldForwardProp:A=>"isSelected"!==A})`
    width: 4rem;
    height: 4rem;
    border: ${A=>A.isSelected?"2px solid red":"2px solid black"};
    box-sizing: border-box;

    &:hover{
        cursor:pointer;
        transform: scale(1.04);
    }

    @media(max-width: 1000px){
        width: 3.5rem;
        height: 3.5rem;
    }

    @media(max-width: 500px){
        width: 3rem;
        height: 3rem;
    }

    @media(max-width: 400px){
        width: 2.5rem;
        height: 2.5rem;
    }
`,m=()=>{const{imgmodalInfo:A,setImgmodalInfo:e}=(0,r.useContext)(i.y),[a,m]=(0,r.useState)(null),[h,x]=(0,r.useState)(A.img_index),E=(0,r.useRef)(null),f=(0,r.useRef)(null),I=(0,r.useRef)(null),B=(A,e)=>{if(I.current){const t=-(A*(e+.9*parseFloat(getComputedStyle(document.documentElement).fontSize))+e/2);I.current.style.transform=`translateX(${t}px)`}};(0,r.useEffect)((()=>{const A=()=>{const A=null===h?0:h;let e=null;if(f.current){e=f.current.getBoundingClientRect().width}null!==e&&(m(e),x(A),B(A,e))};return null===a&&A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}}),[a,h]),(0,r.useEffect)((()=>{const A=A=>{E.current&&!E.current.contains(A.target)&&e(null)};return document.body.style.overflow="hidden",window.addEventListener("mousedown",A),()=>{document.body.style.overflow="auto",window.removeEventListener("mousedown",A)}}),[E]);return(0,o.jsx)("div",{style:{position:"fixed",zIndex:5,top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,o.jsxs)(s,{ref:E,children:[(0,o.jsxs)(c,{children:[(0,o.jsx)(u,{title:"Previous image",arrow:"left",src:n,onClick:()=>{h>0&&(B(h-1,a),x(h-1))},end:0===h?"true":"false"}),(0,o.jsx)(l,{src:t(99261)(`./${A.images_arr[h]}`),alt:"Scaled Image"}),(0,o.jsx)(u,{title:"Next image",arrow:"right",src:n,onClick:()=>{h<A.images_arr.length-1&&(B(h+1,a),x(h+1))},end:h===A.images_arr.length-1?"true":"false"})]}),(0,o.jsx)(d,{children:(0,o.jsx)(p,{ref:I,children:A.images_arr.map(((A,e)=>(0,o.jsx)(g,{onClick:()=>(A=>{x(A),B(A,a)})(e),ref:f,isSelected:e===h,src:t(99261)(`./${A}`),alt:"Scaled Image"},e)))})})]})})}},20155:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>E});var r=t(1529),i=t(65043),a=t(35475),n=t(75017),o=t(22373),s=t(7969),c=t(92476),l=t(51862),u=t(58972),d=t(83111),p=t(16413),g=t(70579);const m=r.Ay.h2`
    // margin: 1rem 0;
    font-size: 1.6rem;
    text-align: center;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`,h=r.Ay.button`
    text-align: center;
    font-size: 1.1rem;
    color: blue;
    font-weight: 500;
    display: block;
    margin: auto;
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.43rem 0.5rem;
    background-color: blue;
    color: white;

    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`,x=()=>{const A=(0,o.wA)(),e=(0,o.d4)((A=>A.review)),{reviews:t,isLoading:r}=e,[l,d]=(0,i.useState)(null),{productdetail:p}=(0,i.useContext)(n.y);return(0,i.useEffect)((()=>{A((0,s.U8)(p._id,0,2,"most-helpful"))}),[]),(0,i.useEffect)((()=>{t&&(d(t),A((0,s.pr)(["REVIEWS_RESET"])))}),[t]),(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)("img",{src:c,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{style:{maxHeight:"28rem",overflow:"hidden",opacity:.7},children:null===l||void 0===l?void 0:l.map(((A,e)=>(0,g.jsx)(u.default,{obj:A},e)))}),p.total_reviews>2?(0,g.jsx)("div",{style:{marginTop:"1rem"},children:(0,g.jsx)(a.N_,{to:`/product/${p._id}/reviews/1`,style:{textDecoration:"none"},children:(0,g.jsxs)(h,{children:["See all ",p.total_reviews," Reviews"]})})}):null]})]})},E=()=>{const{productdetail:A,imgmodalInfo:e,showallimagesgrid:t}=(0,i.useContext)(n.y);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{style:{border:"2px solid #b5b7ba",marginTop:"2.5rem",padding:"1rem 0rem"},children:[(0,g.jsx)(m,{children:"Ratings & Reviews"}),(0,g.jsx)("hr",{style:{margin:"1rem 0 0.8rem 0",border:"1px solid silver"}}),(0,g.jsx)(l.default,{}),(0,g.jsx)(x,{}),t&&(0,g.jsx)(p.default,{total_images:A.total_review_images}),null!==e&&(0,g.jsx)(d.default,{})]})})}},16413:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>f});var r=t(65043),i=t(75017),a=t(1529),n=t(92476),o=t(22373),s=t(7969),c=t(17037),l=t(13419),u=t(15172),d=t(70579);const p=a.Ay.div.withConfig({shouldForwardProp:A=>"showscroll"!==A})`
    position: fixed;
    height: 75vh;
    width: 65vw;        
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-right: 0rem;
    background-color: white;
    border: 3px solid black;     
    overflow-y: ${A=>"true"===A.showscroll?"auto":"hidden"};

    @media(max-width: 1000px){  
        width: 75vw;     
        height: 70vh;        
    }

    @media(max-width: 700px){   
        width: 85vw;    
        height: 75vh;        
    }

    @media(max-width: 600px){   
        height: 70vh;        
    }

    @media(max-width: 500px){      
        height: 60vh;           
    }
`,g=a.Ay.p`
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    padding: 0 2rem;

    // @media(max-width: 750px){      
    //     font-size: 1.7rem;       
    // }

    // @media(max-width: 500px){      
    //     font-size: 1.5rem;       
    // }
`,m=a.Ay.img`
    // position: sticky;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    width: 1.8rem;

    &:hover{
        cursor:pointer;
        transform: scale(1.04);
    }

    @media(max-width: 500px){
        width: 1.5rem;       
    }   
`,h=a.Ay.div`
    display: flex; 
    height: 100%;
    width: 100%; 
    gap: 0rem;

    @media(max-width: 800px){
        display: block;
        overflow-y: auto;        
    }
`,x=a.Ay.div`
    padding: 1.5rem 1.2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(7,auto);     

     @media(max-width: 1300px){
        grid-template-columns: repeat(6,auto);
        gap: 1.5rem;
    }

    @media(max-width: 1100px){
        grid-template-columns: repeat(5,auto);
    }

    @media(max-width: 800px){
        grid-template-columns: repeat(4,auto);
        gap: 1.2rem;
    }

    @media(max-width: 650px){
        grid-template-columns: repeat(4,auto); 
    }

    @media(max-width: 450px){
        grid-template-columns: repeat(3,auto);     
        gap: 0.7rem;
    }

    @media(max-width: 280px){
        grid-template-columns: repeat(2,auto);     
        gap: 0.7rem;
    }
`,E=a.Ay.img`
    width: 6rem;
    height: 6rem;   
    border: 2px solid black;

    &:hover{
        cursor: pointer;
        transform: scale(1.04)
    }

    @media(max-width: 600px){
        width: 4.5rem;
        height: 4.5rem;   
    }

    @media(max-width: 350px){
        width: 3.5rem;
        height: 3.5rem;   
    }
`,f=A=>{let{total_images:e}=A;const a=(0,o.wA)(),f=(0,o.d4)((A=>A.review)),{reviews_imgs_modal:I,isLoading:B}=f,{setcurrspotimgind:Q,currspotimgind:k,setcurrarrimgind:j,currarrimgind:y,setshowallimagesgrid:w,productdetail:S,reviews_arr:C,setreviews_arr:U}=(0,r.useContext)(i.y),{setuserreview:R}=(0,r.useContext)(i.y),b=(0,r.useRef)(0),G=(0,r.useRef)(null);(0,r.useEffect)((()=>{-1!==b.current&&y&&C.length-y<=2&&D()}),[C,y]);(0,r.useEffect)((()=>{if(!I){const A=G.current;if(A&&A.scrollHeight>A.clientHeight)return;if(-1===b.current)return;D()}}),[I]),(0,r.useEffect)((()=>{I&&(I.length<100?b.current=-1:b.current+=I.length,U((A=>[...A,...I])),a((0,s.pr)(["REVIEWS_IMGS_RESET"])))}),[I]);const D=()=>{-1!==b.current&&a((0,s.iR)(S._id,b.current,100,"most-helpful"))},F=()=>{w(!1),U([]),Q(null),j(null)};return(0,r.useEffect)((()=>{const A=A=>{G.current&&!G.current.contains(A.target)&&F()},e=()=>{if(G.current){const{scrollTop:A,scrollHeight:e,clientHeight:t}=G.current;A+t>=e-15&&D()}};var t;(document.body.style.overflow="hidden",null===k)&&(null===(t=G.current)||void 0===t||t.addEventListener("scroll",e));return window.addEventListener("mousedown",A),()=>{var t;document.body.style.overflow="auto",window.removeEventListener("mousedown",A),null===(t=G.current)||void 0===t||t.removeEventListener("scroll",e)}}),[G,k]),(0,d.jsxs)(d.Fragment,{children:[B&&(0,d.jsx)("img",{src:n,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,d.jsx)("div",{style:{position:"fixed",zIndex:5,top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,d.jsx)(p,{showscroll:null===k?"true":"false",ref:G,children:null!==k?(0,d.jsxs)(h,{children:[(0,d.jsx)(l.default,{}),(0,d.jsx)(u.default,{})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{style:{position:"sticky",top:0,zIndex:5,backgroundColor:"white",padding:"0.8rem 0",borderBottom:"2px solid black",backgroundColor:"#e6e6eb"},children:[(0,d.jsxs)(g,{children:["User Collection (",e," Images)"]}),(0,d.jsx)(m,{onClick:F,src:c,alt:"Close",title:"Close"})]}),(0,d.jsx)(x,{children:C.length>0&&C.map(((A,e)=>A.review_images.map(((A,r)=>(0,d.jsx)(E,{onClick:()=>((A,e)=>{Q(e),j(A),R(C[A])})(e,r),src:t(99261)(`./${A}`),alt:"Product"},`${e}_${r}`)))))})]})})})]})}},13419:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>E});var r=t(65043),i=t(75017),a=t(1529),n=t(18680),o=t(54135),s=t(12232),c=t(70579);const l=a.Ay.div`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65%;
    height: 100%;
    padding: 0rem 0.1rem;
    box-sizing: border-box;
    position: relative;

    @media(max-width: 800px){
        width: 100%;
        height: 89%;
    }

    @media(max-width: 400px){
        height: 80%;
    }

    @media(max-width: 350px){
        height: 70%;
    }
`,u=a.Ay.img`
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    width: 1.8rem;
    height: 1.5rem;   

    &:hover{
        cursor:pointer;
        transform: scale(1.04);
    }

    @media(max-width: 500px){
        width: 1.5rem;
        height: 1.3rem;
    }

    @media(max-width: 400px){
        width: 1.2rem;
        height: 1rem;
    }
`,d=a.Ay.div`
    box-sizing: border-box;
    padding: 0.2rem 1rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 1rem;
    height: 82%;

    @media(max-width: 1150px){
        gap: 0.8rem;
    }

    @media(max-width: 1000px){
        gap: 0.5rem;      
    }

    @media(max-width: 800px){
        gap: 1.5rem;    
    }

    @media(max-width: 450px){
        gap: 0.5rem;    
    }
`,p=a.Ay.img`
    width: 75%;
    height: 90%;
    // border: 2px solid black;

    @media(max-width: 1150px){
        width: 85%;       
    }

    @media(max-width: 800px){
        width: 70%;       
    }

    @media(max-width: 550px){
       width: 75%
    }

    @media(max-width: 450px){
       width: 80%
    }

    @media(max-width: 400px){
        width: 80%
    }

    @media(max-width: 350px){
        width: 85%
    }
`,g=a.Ay.img.withConfig({shouldForwardProp:A=>"arrow"!==A})`
    width: 2rem;
    opacity: ${A=>"true"===A.end?.5:1};
    transform: ${A=>"left"===A.arrow?"rotate(180deg)":""};

    &:hover{
        cursor: ${A=>"true"!==A.end?"pointer":"not-allowed"};
        transform: ${A=>"left"===A.arrow?"rotate(180deg) scale(1.04)":"scale(1.04)"};
    }

    @media(max-width: 800px){
        width: 1.9rem;
    }

    @media(max-width: 450px){
        width: 1.8rem;       
    }

    @media(max-width: 350px){
        width: 1.5rem;
    }
`,m=a.Ay.div`
    overflow: hidden;  
    margin-bottom: 1rem;        
`,h=a.Ay.div`
    transition: transform 0.5s ease-in-out;    
    display: flex;
    align-items: center;
    justify-content:start;
    gap: 0.9rem;
    position: relative;
    left: 50%;
    padding: 0.3rem;
`,x=a.Ay.img.withConfig({shouldForwardProp:A=>"isSelected"!==A})`
    width: 4rem;
    height: 4rem;
    border: ${A=>A.isSelected?"2px solid red":"2px solid black"};
    box-sizing: border-box;

    &:hover{
        cursor:pointer;
        transform: scale(1.04);
    }

    @media(max-width: 1000px){
        width: 3.5rem;
        height: 3.5rem;
    }

    @media(max-width: 500px){
        width: 3rem;
        height: 3rem;
    }

    @media(max-width: 400px){
        width: 2.5rem;
        height: 2.5rem;
    }
`,E=()=>{const{reviews_arr:A}=(0,r.useContext)(i.y),{currspotimgind:e,setcurrspotimgind:a,setuserreview:E}=(0,r.useContext)(i.y),{currarrimgind:f,setcurrarrimgind:I}=(0,r.useContext)(i.y),[B,Q]=(0,r.useState)(null),k=(0,r.useRef)(null),j=(0,r.useRef)(null),y=(A,e)=>{if(j.current){const t=-(A*(e+.9*parseFloat(getComputedStyle(document.documentElement).fontSize))+e/2);j.current.style.transform=`translateX(${t}px)`}},w=()=>{e<A[f].review_images.length-1?(y(e+1,B),a(e+1)):f<A.length-1&&(a(0),I(f+1),E(A[f+1]),y(0,B))},S=()=>{e>0?(y(e-1,B),a(e-1)):f>0&&(a(0),I(f-1),E(A[f-1]),y(0,B))};(0,r.useEffect)((()=>{const A=()=>{const A=null===e?0:e;let t=null;if(k.current){t=k.current.getBoundingClientRect().width}null!==t&&(Q(t),a(A),y(A,t))};return null===B&&A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}}),[B,e]);return(0,c.jsxs)(l,{children:[(0,c.jsx)(u,{onClick:()=>{a(null),I(null)},src:n,alt:"Go Back",title:"Go Back"}),(0,c.jsxs)(d,{children:[0===e?(0,c.jsx)(g,{title:"View previous review",arrow:"left",src:o,onClick:S,end:0===f?"true":"false"}):(0,c.jsx)(g,{title:"Previous image",arrow:"left",src:s,onClick:S,end:"false"}),(0,c.jsx)(p,{src:t(99261)(`./${A[f].review_images[e]}`),alt:"Spotlight"}),e===A[f].review_images.length-1?(0,c.jsx)(g,{title:"View next review",arrow:"right",src:o,onClick:w,end:f===A.length-1?"true":"false"}):(0,c.jsx)(g,{title:"Next image",arrow:"right",src:s,onClick:w,end:"false"})]}),(0,c.jsx)(m,{children:(0,c.jsx)(h,{ref:j,children:A[f].review_images.map(((A,r)=>(0,c.jsx)(x,{onClick:()=>(A=>{a(A),y(A,B)})(r),ref:k,isSelected:r===e,src:t(99261)(`./${A}`),alt:"Others"},r)))})})]})}},15172:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>B});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(7969),s=t(88504),c=t(65834),l=t(37683),u=t(39180),d=t(88351),p=t(47611),g=t(70579);const m=a.Ay.div`
    overflow-y: auto;
    height: 100%;
    border-left: 2px solid #b5b7ba;
    font-size: 0.85rem;
    background-color: #edebeb;

    @media(max-width: 800px){
        overflow-y: hidden;
        border-left: none;
        height: auto;
    }
`,h=a.Ay.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; align-items: center;
    justify-content: space-between;
    font-weight: 600; background-color: #dcf3f5;
    border-bottom: 2px solid #b5b7ba;
    padding: 0.8rem 0.5rem;

    @media(max-width: 800px){
        border-top: 2px solid #b5b7ba;
    }
`,x=a.Ay.div`
    background-color: #1e8543;
    padding: 0.03rem 0.18rem 0.1rem 0.18rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    font-size: 80%;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`,E=a.Ay.img`
    height: 0.5rem; 
    background-color: #1e8543;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`,f=a.Ay.img`
    width: 0.9rem;

    &:hover{
        cursor: pointer;
    }
`,I=a.Ay.img`
    width: 0.9rem;
    transform: rotate(180deg);

    &:hover{
        cursor: pointer;
    }
`,B=()=>{const A=(0,n.wA)(),e=(0,n.d4)((A=>A.user)),{userInfo:t}=e,{userreview:a,setalert:B}=(0,r.useContext)(i.y),[Q,k]=(0,r.useState)(a),[j,y]=(0,r.useState)(0),[w,S]=(0,r.useState)(0),C=(0,r.useRef)(0),U=(0,r.useRef)(0);(0,r.useEffect)((()=>{if(k(a),t){const A=t.reviewsaction.find((A=>A.review_id===a._id));"liked"===(null===A||void 0===A?void 0:A.action)?(C.current=1,y(1),k((A=>({...A,likes:A.likes-1})))):"disliked"===(null===A||void 0===A?void 0:A.action)&&(U.current=1,S(1),k((A=>({...A,dislikes:A.dislikes-1}))))}}),[a]),(0,r.useEffect)((()=>()=>{if(t){const e=t.reviewsaction.find((A=>A.review_id===a._id));console.log("=========.> hasmatching = ",e),void 0===e?1===C.current?(console.log("==========> inside 1,1"),A((0,s.pj)(t._id,a._id,"liked")),A((0,o.bg)(a._id,1,0))):1===U.current&&(console.log("==========> inside 1,2"),A((0,s.pj)(t._id,a._id,"disliked")),A((0,o.bg)(a._id,0,1))):"liked"===e.action?1===U.current?(console.log("==========> inside 2,1"),A((0,s.pj)(t._id,a._id,"disliked")),A((0,o.bg)(a._id,-1,1))):0===U.current&&0===C.current&&(console.log("==========> inside 2,2"),A((0,s.pj)(t._id,a._id,"remove")),A((0,o.bg)(a._id,-1,0))):"disliked"===e.action&&(1===C.current?(console.log("==========> inside 3,1"),A((0,s.pj)(t._id,a._id,"liked")),A((0,o.bg)(a._id,1,-1))):0===U.current&&0===C.current&&(console.log("==========> inside 3,2"),A((0,s.pj)(t._id,a._id,"remove")),A((0,o.bg)(a._id,0,-1))))}}),[]);const R=new Date(a.date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});return(0,g.jsxs)(m,{children:[(0,g.jsx)(h,{children:(0,g.jsxs)("div",{style:{display:"flex",gap:"0.9rem",alignItems:"center",flexWrap:"wrap"},children:[(0,g.jsx)("img",{src:u,alt:"User",style:{width:"1.4rem",height:"1.2rem"}}),(0,g.jsx)("p",{style:{fontStyle:"italic",color:"black"},children:a.name}),(0,g.jsxs)(x,{children:[(0,g.jsx)("p",{style:{color:"white",fontWeight:600},children:a.rating.toFixed(1)}),(0,g.jsx)(E,{src:p,alt:"Stars"})]}),(0,g.jsx)("p",{style:{fontWeight:600,fontSize:"105%"},children:a.title}),(0,g.jsxs)("div",{style:{display:"flex",gap:"0.3rem",alignItems:"center"},children:[(0,g.jsx)("img",{src:d,alt:"Date Posted",style:{width:"1rem",height:"1rem"}}),(0,g.jsx)("p",{style:{fontSize:"90%",color:"#666666",fontWeight:500},children:R})]}),(0,g.jsxs)("div",{style:{display:"flex",gap:"0.5rem",alignItems:"end"},children:[(0,g.jsxs)("div",{style:{display:"flex",gap:"0.2rem",alignItems:"end"},children:[(0,g.jsx)(f,{onClick:()=>{t?0===j?(C.current=1,U.current=0,y(1),S(0)):(C.current=0,U.current=0,y(0),S(0)):B({colour:"#f78f0f",message:"Please Login first !",fontcolor:"black"})},src:1===j?l:c,alt:"Likes"}),(0,g.jsx)("p",{style:{fontWeight:500,fontSize:"90%"},children:(Q.likes+ +j).toLocaleString()})]}),(0,g.jsxs)("div",{style:{display:"flex",gap:"0.3rem",alignItems:"end"},children:[(0,g.jsx)(I,{onClick:()=>{t?0===w?(C.current=0,U.current=1,y(0),S(1)):(C.current=0,U.current=0,y(0),S(0)):B({colour:"#f78f0f",message:"Please Login first !",fontcolor:"black"})},src:1===w?l:c,alt:"Dislikes"}),(0,g.jsx)("p",{style:{fontWeight:500,fontSize:"90%"},children:(Q.dislikes+w).toLocaleString()})]})]})]})}),(0,g.jsx)("div",{style:{padding:"0.2rem 1rem 1rem 1rem"},children:(0,g.jsx)("p",{children:Q.message})})]})}},58972:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>I});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(7969),s=t(88504),c=t(65834),l=t(37683),u=t(39180),d=t(88351),p=t(47611),g=t(70579);const m=a.Ay.div`
    background-color: #1e8543;
    padding: 0.15rem 0.3rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    // font-size: 0.77rem;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`,h=a.Ay.img`
    height: 0.65rem; 
    background-color: #1e8543;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`,x=a.Ay.img`
    width: 4.5rem;
    height: 4.5rem;
    box-sizing: border-box;
    background-color: #403e3f;
    padding:0.05rem;

    &:hover {
        transform: scale(1.04);
        cursor: pointer; 
    }

    @media(max-width:600px){
        width: 3rem;
        height: 3rem;
    }

    @media(max-width:300px){
        width: 2rem;
        height: 2rem;
    }    
`,E=a.Ay.img`
    width: 1.3rem;

    &:hover{
        cursor: pointer;
    }
`,f=a.Ay.img`
    width: 1.3rem;
    transform: rotate(180deg);

    &:hover{
        cursor: pointer;
    }
`;const I=A=>{let{obj:e}=A;const a=(0,n.wA)(),I=(0,n.d4)((A=>A.user)),{userInfo:B}=I,[Q,k]=(0,r.useState)(e),[j,y]=(0,r.useState)(0),[w,S]=(0,r.useState)(0),C=(0,r.useRef)(0),U=(0,r.useRef)(0);(0,r.useEffect)((()=>{if(B){const A=B.reviewsaction.find((A=>A.review_id===e._id));"liked"===(null===A||void 0===A?void 0:A.action)?(C.current=1,y(1),k((A=>({...A,likes:A.likes-1})))):"disliked"===(null===A||void 0===A?void 0:A.action)&&(U.current=1,S(1),k((A=>({...A,dislikes:A.dislikes-1}))))}}),[]),(0,r.useEffect)((()=>()=>{if(B){const A=B.reviewsaction.find((A=>A.review_id===e._id));void 0===A?1===C.current?(a((0,s.pj)(B._id,e._id,"liked")),a((0,o.bg)(e._id,1,0))):1===U.current&&(a((0,s.pj)(B._id,e._id,"disliked")),a((0,o.bg)(e._id,0,1))):"liked"===A.action?1===U.current?(a((0,s.pj)(B._id,e._id,"disliked")),a((0,o.bg)(e._id,-1,1))):0===U.current&&0===C.current&&(a((0,s.pj)(B._id,e._id,"remove")),a((0,o.bg)(e._id,-1,0))):"disliked"===A.action&&(1===C.current?(a((0,s.pj)(B._id,e._id,"liked")),a((0,o.bg)(e._id,1,-1))):0===U.current&&0===C.current&&(a((0,s.pj)(B._id,e._id,"remove")),a((0,o.bg)(e._id,0,-1))))}}),[]);const{setImgmodalInfo:R,setalert:b,loggedin:G}=(0,r.useContext)(i.y),D=new Date(Q.date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{style:{padding:"0rem"},children:[(0,g.jsxs)("div",{style:{margin:"0rem 0 1rem 0",display:"flex",flexWrap:"wrap",gap:"2rem",alignItems:"center",justifyContent:"space-between",fontWeight:600,fontSize:"1.0rem",backgroundColor:"#dcf3f5",padding:"1rem",border:"2px solid #b5b7ba",borderLeft:"none",borderRight:"none"},children:[(0,g.jsxs)("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center"},children:[(0,g.jsxs)("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[(0,g.jsx)("img",{src:u,alt:"User",style:{width:"1.4rem",height:"1.4rem"}}),(0,g.jsx)("p",{style:{fontStyle:"italic",color:"black"},children:Q.name})]}),(0,g.jsxs)(m,{children:[(0,g.jsx)("p",{style:{color:"white",fontWeight:600,fontSize:"0.9rem"},children:Q.rating.toFixed(1)}),(0,g.jsx)(h,{src:p,alt:"Stars"})]}),(0,g.jsx)("p",{style:{fontWeight:600,fontSize:"110%"},children:Q.title})]}),(0,g.jsx)("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center",fontSize:"1rem"},children:(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:"2rem"},children:[(0,g.jsxs)("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[(0,g.jsx)("img",{src:d,alt:"Date Posted",style:{width:"1.4rem",height:"1.4rem"}}),(0,g.jsx)("p",{style:{fontSize:"90%",color:"#666666",fontWeight:500},children:D})]}),(0,g.jsxs)("div",{style:{display:"flex",gap:"0.3rem",alignItems:"end"},children:[(0,g.jsx)(E,{onClick:()=>{B?0===j?(C.current=1,U.current=0,y(1),S(0)):(C.current=0,U.current=0,y(0),S(0)):b({colour:"#f78f0f",message:"Please Login first !",fontcolor:"black"})},src:1===j?l:c,alt:"Likes"}),(0,g.jsx)("p",{style:{fontWeight:500},children:(Q.likes+j).toLocaleString()})]}),(0,g.jsxs)("div",{style:{display:"flex",gap:"0.3rem",alignItems:"end"},children:[(0,g.jsx)(f,{onClick:()=>{B?0===w?(C.current=0,U.current=1,y(0),S(1)):(C.current=0,U.current=0,y(0),S(0)):b({colour:"#f78f0f",message:"Please Login first !",fontcolor:"black"})},src:1===w?l:c,alt:"Dislikes"}),(0,g.jsx)("p",{style:{fontWeight:500},children:(Q.dislikes+w).toLocaleString()})]})]})})]}),(0,g.jsxs)("div",{style:{padding:"0rem 1rem 1.2rem 1rem"},children:[(0,g.jsx)("div",{style:{display:"flex",gap:"0.9rem",marginBottom:"1rem",flexWrap:"wrap"},children:Q.images.map(((A,e)=>(0,g.jsx)(x,{onClick:()=>(A=>{R({images_arr:Q.images,img_index:A,all_images_arr:null,all_img_index:null})})(e),src:t(99261)(`./${A}`),alt:"product"},e)))}),(0,g.jsx)("p",{dangerouslySetInnerHTML:{__html:(F=Q.message,F.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\n/g,"<br>"))}})]})]})});var F}},28223:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>Q});var r=t(65043),i=t(35475),a=t(73216),n=t(75017),o=t(1529),s=t(51862),c=t(58972),l=t(83111),u=t(16413),d=t(22373),p=t(7969),g=t(92476),m=t(70579);const h=o.Ay.div`
    display: flex;
    margin-bottom: 0.5rem;
    box-sizing: border-box; 
`,x=o.Ay.div.withConfig({shouldForwardProp:A=>"stickyTop"!==A})`
    flex-shrink: 0;
    height: 87.9vh;
    width: 30%;
    position: sticky;
    top: ${A=>A.stickyTop}px;
    box-sizing: border-box; 
    border: 2px solid silver;
    border-right: none;
    background-color: #f6f7f5;
    overflow-y: auto; 
    overflow-x: hidden;

    @media(max-width: 900px){
        display: none;
    }
`,E=o.Ay.div`
    flex-shrink: 0;
    box-sizing: border-box;
    border: 2px solid silver;
    width: 70%;

    @media(max-width: 900px){
        width: 100%;        
    }
`,f=o.Ay.h2`
    margin: 1rem 0;
    font-size: 1.6rem;
    text-align: center;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`,I=o.Ay.select`
    padding: 0 0 0 0.1rem;
    height: 2.5rem;
    font-size: 1rem;
    border: 2px solid silver;
    border-radius: 5px;
    background-color: white;
    color: #333;
    outline: none;
    cursor: pointer;    

    &:focus {
        border-color: #007BFF;
    }

    &:hover {
        border-color: #007BFF;
    }

    option {
        background: #fff;
        color: #333;
        padding: 10rem;
    }
`,B=(0,o.Ay)(i.N_)`
    color: ${A=>"true"===A.curr_page?"white":"blue"};
    background-color: ${A=>"true"===A.curr_page?"blue":"none"};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 50%;

    &:hover {
        color: ${A=>"true"===A.curr_page?"white":"red"};
    }
`,Q=()=>{const A=(0,d.wA)(),e=(0,d.d4)((A=>A.review)),{reviews:t,isLoading:i}=e,o=(0,a.Zp)(),{id:Q,page:k}=(0,a.g)(),j=parseInt(k,10),[y,w]=(0,r.useState)(0),[S,C]=(0,r.useState)([]),[U,R]=(0,r.useState)("most-helpful"),[b,G]=(0,r.useState)(null),{imgmodalInfo:D,showallimagesgrid:F,productdetail:M,setproductdetail:H}=(0,r.useContext)(n.y),K=(0,r.useRef)(null);(0,r.useEffect)((()=>{const A=Math.ceil(M.total_reviews/5);G(A)}),[]),(0,r.useEffect)((()=>{const e=5*(j-1);e>M.total_reviews||A((0,p.U8)(M._id,e,5,U))}),[j,U]),(0,r.useEffect)((()=>{t&&(C(t),window.scrollTo(0,0),A((0,p.pr)(["REVIEWS_RESET"])))}),[t]);return(0,r.useEffect)((()=>{const A=()=>{const A=document.getElementById("header");if(A){const e=A.offsetHeight;w(e)}};return A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}}),[]),(0,m.jsxs)(m.Fragment,{children:[i&&(0,m.jsx)("img",{src:g,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,m.jsxs)("div",{style:{padding:"0 0.1rem 0 0.1rem"},children:[(0,m.jsxs)(h,{children:[(0,m.jsx)(x,{stickyTop:y,ref:K,children:null!==M&&(0,m.jsx)(s.default,{})}),(0,m.jsxs)(E,{children:[(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem"},children:[(0,m.jsx)(f,{children:"Ratings & Reviews"}),(0,m.jsxs)(I,{value:U,onChange:A=>{R(A.target.value),C([]),o(`/product/${M._id}/reviews/1`)},children:[(0,m.jsx)("option",{value:"most-helpful",children:"Most Helpful"}),(0,m.jsx)("option",{value:"most-recent",children:"Most Recent"}),(0,m.jsx)("option",{value:"least-recent",children:"Least Recent"}),(0,m.jsx)("option",{value:"positive-first",children:"Positive First"}),(0,m.jsx)("option",{value:"negative-first",children:"Negative First"})]})]}),S.map(((A,e)=>(0,m.jsx)(c.default,{obj:A},e))),(0,m.jsx)("hr",{style:{border:"1px solid silver"}}),(0,m.jsxs)("nav",{style:{display:"flex",fontSize:"1.2rem",margin:"0.5rem 0",gap:"1.5rem",justifyContent:"center"},children:[Array.from({length:3},((A,e)=>3-e-1)).map((A=>j-A-1<=0?null:(0,m.jsx)(B,{to:`/product/${Q}/reviews/${j-A-1}`,children:j-A-1},A))),(0,m.jsx)(B,{curr_page:"true",to:`/product/${Q}/reviews/${j}`,children:j}),Array.from({length:3},((A,e)=>j+e+1>b?null:(0,m.jsx)(B,{to:`/product/${Q}/reviews/${j+e+1}`,children:j+e+1},e)))]})]})]}),F&&(0,m.jsx)(u.default,{total_images:M.total_review_images}),null!==D&&(0,m.jsx)(l.default,{})]})]})}},98569:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>D});var r=t(65043),i=t(75017),a=t(22373),n=t(75303),o=t(1484),s=t(8699),c=t(54539),l=t(99990),u=t(1529),d=t(20155),p=t(60428),g=t(90546),m=t(47611),h=t(92476),x=t(70579);const E=u.Ay.h2`
    margin: 0rem 0 0 0;
    font-size: 1.8rem;
    font-weight: 600;

    @media(max-width: 300px){
        font-size: 1.5rem;
    }
    @media(max-width: 400px){
        font-size: 1.6rem;
    }
`,f=u.Ay.p`
   font-size: 1rem;

    @media(max-width: 400px){
        font-size: 0.95rem;
    }
    @media(max-width: 370px){
        font-size: 0.92rem;
    }
`,I=u.Ay.div`
    display: flex;
    gap: 0.7rem;
    align-items: center;
    margin: 0.3rem 0 0.2rem 0; 

    @media(max-width: 450px){
        // gap: 0.4rem;
        font-size: 0.95rem;
    }
    @media(max-width: 370px){
        font-size: 0.92rem;
    }
`,B=u.Ay.div`
    display: flex;
    gap: 1.4rem;
    align-items: center;
    margin: 0.1rem 0 0.1rem 0;

    @media(max-width: 450px){
        flex-direction: column;
        align-items: start;
        gap: 0;
    }
`,Q=u.Ay.div`
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;

    @media(max-width: 500px){       
        font-size: 0.9rem;    
        display: block;        
    }
    @media(max-width: 400px){       
        font-size: 0.85rem;    
        display: block;   
        margin-bottom: 0.8rem; 
    }
`,k=u.Ay.div`
    display: flex; 
    justify-content: flex-start; 
    align-items: center;    
    margin: 0.5rem 0 1rem 0;
    flex-wrap: wrap;
    font-size: 0.8rem;
    gap: 1rem;
    

    @media(max-width: 400px){
        gap: 0.7rem;
    }
    @media(max-width: 370px){
        gap: 0.3rem;
    }
`,j=u.Ay.img`
    width: 1.5rem;

    @media(max-width: 400px){
        width: 1.42rem;
    }
    @media(max-width: 370px){
        width: 1.3rem;
    }
`,y=u.Ay.div`
    background-color: #1e8543;
    padding: 0.15rem 0.3rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    // font-size: 0.77rem;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`,w=u.Ay.img`
    height: 0.65rem; 
    background-color: #1e8543;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`,S=u.Ay.div`
    background-color: #8112c9;
    padding: 0.06rem 0.25rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.15rem;
    font-size: 0.77rem;

    @media(max-width: 500px){
        padding: 0.1rem 0.22rem;
        font-size: 0.75rem;
    }
    @media(max-width: 370px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;
        
    }
`,C=u.Ay.img`
    height: 0.55rem; 
    background-color: #8112c9;

    @media(max-width: 600px){
        height: 0.58rem; 
    }
    @media(max-width: 500px){
        height: 0.55rem; 
    }
    @media(max-width: 370px){
        height: 0.5rem; 
    }
`,U=()=>{const{productdetail:A}=(0,r.useContext)(i.y);return(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",gap:"1rem",alignItems:"center",margin:"0.3rem 0"},children:[(0,x.jsxs)(y,{children:[(0,x.jsx)("p",{style:{color:"white",fontWeight:600,fontSize:"0.9rem"},children:A.average_stars}),(0,x.jsx)(w,{src:m,alt:"star"})]}),(0,x.jsxs)("p",{style:{color:"grey",fontSize:"0.99rem",fontWeight:600,textAlign:"center"},children:[A.total_ratings," Ratings & ",A.total_reviews," Reviews"]})]})},R=()=>{const{productdetail:A}=(0,r.useContext)(i.y);return(0,x.jsxs)(B,{children:[(0,x.jsxs)(I,{children:[(0,x.jsxs)("p",{style:{fontSize:"1.7rem",fontWeight:600},children:["\u20b9",A.price.cost]}),(0,x.jsxs)("p",{style:{fontSize:"1.2rem",fontWeight:600,textDecoration:"line-through",color:"grey"},children:["\u20b9",A.price.mrp]}),(0,x.jsxs)("p",{style:{fontSize:"1rem",fontWeight:600,color:"green"},children:[A.price.discount," off"]})]}),A.quantity<=10?(0,x.jsxs)("p",{style:{display:"block",fontSize:"1rem",fontWeight:600,color:"red",margin:"0rem 0"},children:["(Hurry, only ",A.quantity," unit left !)"]}):null]})},b=()=>{const{productdetail:A}=(0,r.useContext)(i.y),e=new Date((new Date).getTime()+24*`${A.delivery_time}`*60*60*1e3);return(0,x.jsxs)(Q,{children:[(0,x.jsx)("p",{style:{fontWeight:600,color:"blue"},children:0===A.delivery_charges?"Free Delivery !":`Delivery Charges: \u20b9${A.delivery_charges}`}),null!==A.free_delivery_over&&(0,x.jsxs)("p",{style:{fontWeight:600,color:"green"},children:["(Free delivery for orders above \u20b9",A.free_delivery_over,")"]}),(0,x.jsxs)("p",{style:{fontWeight:600,color:"grey"},children:["(Expected Delivery: ",e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),")"]})]})},G=()=>{const{productdetail:A}=(0,r.useContext)(i.y),e=(0,a.wA)(),t=(0,a.d4)((A=>A.product)),{sellerDetail:o,isLoading:s}=t,[c,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{A&&e((0,n.zm)(A.seller_id))}),[A]),(0,r.useEffect)((()=>{o&&(l(o),e((0,n.gG)(["SELLER_DETAIL_RESET"])))}),[o]),(0,x.jsxs)(x.Fragment,{children:[s&&(0,x.jsx)("img",{src:h,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),c&&(0,x.jsxs)(k,{children:[(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.4rem"},children:[(0,x.jsx)(j,{src:g,alt:"Seller"}),(0,x.jsxs)("p",{style:{fontWeight:600},children:["Seller: ",c.name]})]}),(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.4rem"},children:[(0,x.jsxs)(S,{children:[(0,x.jsx)("p",{style:{color:"white",fontWeight:600},children:c.rating.stars}),(0,x.jsx)(C,{src:m,alt:"star"})]}),(0,x.jsxs)("p",{style:{textAlign:"left",color:"grey",fontWeight:600},children:[c.rating.total," Ratings"]})]})]})]})},D=()=>{const{productdetail:A}=(0,r.useContext)(i.y);return(0,x.jsxs)("div",{style:{padding:"0.5rem 1rem 0.5rem 1rem"},children:[(0,x.jsx)(E,{children:A.title.longtitle}),(0,x.jsx)(U,{}),(0,x.jsx)(R,{}),(0,x.jsx)(b,{}),(0,x.jsx)(G,{}),(0,x.jsx)(l.default,{}),(0,x.jsx)(c.default,{}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{style:{margin:"1rem 0 0 0",fontSize:"1.4rem",fontWeight:600},children:"Description"}),(0,x.jsx)("hr",{style:{margin:"0.2rem 0 0.8rem 0",border:"1px solid silver"}}),(0,x.jsx)(f,{children:A.description})]}),(0,x.jsx)(s.default,{title:"Highlights",arr:A.highlights}),(0,x.jsx)(o.default,{specs:A.Specifications}),(0,x.jsx)(d.default,{}),(0,x.jsx)(p.default,{})]})}},99990:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var r=t(65043),i=t(75017),a=t(67597),n=t(54691),o=t(70881),s=t(30655),c=t(1529),l=t(70579);const u=c.Ay.div`
    display: flex;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.7rem;
    background-color: #86fccf;
    margin-bottom: 1rem;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 450px){
        flex-direction: column;
        align-items: start;
    }
`,d=c.Ay.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    opacity: opaque;
    max-width: 12rem;
`,p=c.Ay.p`
    display: inline;
    font-weight: 500;
    color: black;
    font-size: 0.9rem;

    @media(max-width: 500px){
        font-size: 0.85rem;
    }
    @media(max-width: 400px){
        font-size: 0.80rem;
    }
    @media(max-width: 370px){
        font-size: 0.75rem;
    }
`,g=c.Ay.img`
    width: 2rem;
    margin-right: 0.1rem;

    @media(max-width: 500px){
        width: 1.7rem;
    }
    @media(max-width: 400px){
        width: 1.5rem;
    }
    @media(max-width: 370px){
        width: 1.4rem;
    }
`,m=A=>{let e,{image_icon:t,field:r,text:i}=A;return e=void 0===r?.4:1,(0,l.jsxs)(d,{children:[(0,l.jsx)(g,{src:t,alt:"Cash on delivery"}),(0,l.jsx)(p,{children:i})]})},h=()=>{const{productdetail:A}=(0,r.useContext)(i.y);return(0,l.jsxs)(u,{children:[(0,l.jsx)(m,{image_icon:n,field:A.services.Warranty,text:void 0===A.services.Warranty?"No Warranty Coverage":`${A.services.Warranty} Warranty`}),(0,l.jsx)(m,{image_icon:o,field:A.services.Return,text:void 0===A.services.Return?"Non Returnable Item":`Returnable within ${A.services.Return} of delivery`}),(0,l.jsx)(m,{image_icon:s,field:A.services.Replacement,text:void 0===A.services.Replacement?"Non Replaceable Item":`Replaceable within ${A.services.Replacement} of delivery`}),(0,l.jsx)(m,{image_icon:a,field:A.services.Cash_On_Delivery,text:void 0===A.services.Cash_On_Delivery?"Cash on delivery not available":"Cash on delivery available"})]})}},1484:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var r=t(65043),i=t(1529),a=t(27407),n=t(70579);const o=i.Ay.h2`
    margin: 1rem 0;
    font-size: 1.6rem;
    text-align: center;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`,s=i.Ay.h3`
    text-transform: uppercase;
    margin: 0.5rem 0 1.3rem 0;
    font-size: 1.3rem;
    text-align: center;

    @media(max-width: 400px){
        font-size: 1.1rem;
    }
    @media(max-width: 300px){
        font-size: 1.07rem;
    }
`,c=i.Ay.div`
    display: grid;
    grid-template-columns: 24% 70%;
    gap: 0.5rem;
    margin: 0.3rem;
    padding: 0 0.5rem 0.6rem 0.5rem;

    @media(max-width: 400px){
        grid-template-columns: 30% 64%;
    }
    @media(max-width: 370px){
        grid-template-columns: 34% 60%;
    }
`,l=i.Ay.strong`
   font-size: 1rem;

    @media(max-width: 400px){
        font-size: 0.9rem;
    }
    @media(max-width: 370px){
        font-size: 0.85rem;
    }
`,u=i.Ay.p`
   font-size: 1rem;

    @media(max-width: 400px){
        font-size: 0.9rem;
    }
    @media(max-width: 370px){
        font-size: 0.85rem;
    }
`,d=i.Ay.div`
    height: ${A=>"hidden"===A.overflow?"250px":"auto"};
    overflow: ${A=>A.overflow};

    @media(max - width: 400px) {

    }
    @media(max - width: 370px) {

    }
`,p=i.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.35rem;
    font-size: 1.05rem;
    margin-top: 0.0rem;
    padding: 0.4rem 0.4rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.02)
    };

    @media(max-width: 500px){
        margin-top: 0.3rem;
    }

    @media(max-width: 400px){
        margin-top: 0.2rem;
        font-size: 0.9rem;
    }
`,g=i.Ay.img`
    width: 0.6rem;
    height: 1rem;
    margin-top: 2px;
    transform: ${A=>"visible"===A.overflow?"rotate(180deg)":"none"};

    @media(max-width: 450px){
        margin-top: 2.5px;
    }
`,m=A=>{let{specs:e}=A;const t=Object.entries(e),i=t.length-1,[m,h]=(0,r.useState)("visible"),[x,E]=(0,r.useState)(!1),f=(0,r.useRef)(null);(0,r.useEffect)((()=>{f.current&&f.current.scrollHeight>500&&(h("hidden"),E(!0))}),[]);const I=()=>{if(f.current){const{scrollTop:A}=document.documentElement;"hidden"===m?(requestAnimationFrame((()=>{document.documentElement.scrollTop=A})),h("visible")):(window.scrollTo({top:A-f.current.scrollHeight+250,behavior:"smooth"}),h("hidden"))}};return(0,n.jsxs)("div",{style:{border:"2px solid #b5b7ba",opacity:"visible"!==m&&x?.6:1},children:[(0,n.jsx)(o,{children:"Product Specifications"}),(0,n.jsx)("hr",{style:{border:"1px solid #b5b7ba",margin:"1rem 0 0.5rem 0"}}),(0,n.jsx)(d,{ref:f,overflow:m,children:t.map(((A,e)=>{let[t,a]=A;return(0,n.jsxs)("div",{style:{padding:"0rem 0rem",boxSizing:"border-box"},children:[(0,n.jsx)(s,{children:t}),(0,n.jsx)(c,{children:Object.entries(a).map((A=>{let[e,t]=A;return(0,n.jsxs)(r.Fragment,{children:[(0,n.jsxs)(l,{children:[e,":"]}),(0,n.jsx)(u,{children:t})]},e)}))}),e<i&&(0,n.jsx)("hr",{style:{border:"1px solid #b5b7ba",margin:"0.8rem 0"}})]},t)}))}),"hidden"===m&&x?(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",marginBottom:"0rem"},children:(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsxs)(p,{onClick:I,children:[(0,n.jsx)("p",{style:{fontWeight:500,color:"red",cursor:"pointer",textAlign:"center"},children:"Expand"}),(0,n.jsx)(g,{overflow:m,src:a,alt:"Expand"})]})})}):"visible"===m&&x?(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",marginBottom:"0rem"},children:(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsxs)(p,{onClick:I,children:[(0,n.jsx)("p",{style:{fontWeight:500,color:"red",cursor:"pointer",textAlign:"center"},children:"Collapse"}),(0,n.jsx)(g,{overflow:m,src:a,alt:"Expand"})]})})}):null]})}},42024:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var r=t(65043),i=t(7234),a=t(70579);const n=A=>{let{json_data:e,left_margin:t,bottom_margin:r}=A;return"string"===typeof e||"boolean"===typeof e||"number"===typeof e&&!isNaN(e)?(0,a.jsx)("p",{style:{display:"inline",fontSize:"1rem",fontWeight:400},children:e}):Array.isArray(e)?e.length<=1?e.map((A=>(0,a.jsx)(n,{json_data:A,left_margin:t,bottom_margin:r-.2}))):(0,a.jsx)("ul",{style:{marginLeft:`${t}rem`,marginBottom:`${r}rem`},children:e.map(((A,e)=>(0,a.jsx)("li",{style:{fontSize:"1rem",fontWeight:500,marginBottom:`${r}rem`},children:(0,a.jsx)(n,{json_data:A,left_margin:t,bottom_margin:r-.2})},e)))}):Object.keys(e).length<=1?Object.entries(e).map((A=>{let[e,i]=A;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{style:{display:"inline",fontWeight:500,marginRight:"0.2rem"},children:[e,": "]}),(0,a.jsx)(n,{json_data:i,left_margin:t+.4,bottom_margin:r-.2})]})})):(0,a.jsx)("ul",{style:{listStylePosition:"outside",marginLeft:`${t}rem`,marginBottom:`${r}rem`},children:Object.entries(e).map(((A,e)=>{let[i,o]=A;return(0,a.jsxs)("li",{style:{fontSize:"1rem",fontWeight:500,marginBottom:`${r}rem`},children:[(0,a.jsxs)("p",{style:{display:"inline",fontWeight:500,marginRight:"0.2rem"},children:[i,": "]}),(0,a.jsx)(n,{json_data:o,left_margin:t+.4,bottom_margin:r-.2})]},e)}))})},o=A=>{let{showalloffers:e,setshowalloffers:t,jsondata:o,setjsondata:s}=A;const c=(0,r.useRef)(null);(0,r.useEffect)((()=>(document.body.style.overflow=null!==o||!0===e?"hidden":"",()=>{document.body.style.overflow=""})),[o,e]);return(0,r.useEffect)((()=>{var A;const e=A=>{A.stopPropagation()};return null===(A=c.current)||void 0===A||A.addEventListener("mousedown",e),()=>{var A;null===(A=c.current)||void 0===A||A.removeEventListener("mousedown",e)}}),[c]),null!==o?(0,a.jsx)("div",{onClick:A=>{(A=>{var e;null!==(e=c.current)&&void 0!==e&&e.contains(A.target)||(s(null),t(!1))})(A)},style:{position:"fixed",zIndex:5,top:0,left:0,width:"100vw",height:"100vh",backgroundColor:""+(!0===e?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 0.3)")},children:(0,a.jsxs)("div",{id:"Terms_Conditions_Component",ref:c,style:{backgroundColor:"white",border:"5px double #525151",position:"absolute",top:"0",right:"0"},children:[(0,a.jsx)("div",{style:{position:"absolute",top:"0rem",left:"0rem",backgroundColor:"white",width:"100%"},children:(0,a.jsxs)("div",{onClick:()=>{s(null)},style:{backgroundColor:"silver",border:"2px solid #5d5e5e",borderRadius:"5px",marginTop:"0.3rem",marginLeft:"0.3rem",padding:"0.2rem",cursor:"pointer",display:"inline-block"},children:[(0,a.jsx)("img",{src:i,alt:"Go Back",style:{width:"1rem",marginRight:"0.5rem"}}),(0,a.jsx)("p",{style:{display:"inline",fontWeight:500,fontSize:"1rem"},children:"Go Back"})]})}),(0,a.jsxs)("div",{style:{padding:"2rem 1rem",width:"50vw",height:"98.6vh",overflowY:"auto",overflowX:"auto",boxSizing:"border-box"},children:[(0,a.jsx)("p",{style:{textAlign:"center",fontSize:"1.7rem",fontWeight:700,marginBottom:"1.2rem",color:"#eb1a1a",textDecoration:"underline"},children:"TERMS AND CONDITIONS"}),(0,a.jsx)(n,{json_data:o,left_margin:1.5,bottom_margin:1.5})]})]})}):null}},80250:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>k});var r=t(65043),i=t(75017),a=t(1529),n=t(35475),o=t(22373),s=t(75303),c=t(88504),l=t(21836),u=t(50048),d=t(92476),p=t(52408),g=t(84988),m=t(70579);const h=a.Ay.div`
    display: flex;    
    margin-top: 0.2rem;
    padding: 0rem 0.1rem 1rem 0.1rem;    
    justify-content: space-around;
    gap: 1rem;   

    @media(max-width: 950px){
        flex-direction: column;
        gap: 1.5rem;
    }
`,x=a.Ay.img`
    width: 2.15rem; 
`,E=a.Ay.img`
    width: 15rem;
    position: relative;
    left: -1.2rem;
`,f=a.Ay.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #055af7;
    font-size: 1rem;
    font-weight: 600;
    width: 9rem;
    
    &:hover {
        transform: scale(1.02);
        cursor: pointer; 
    }
`,I=a.Ay.h1`
    font-size: 2rem;
`,B=()=>(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid black",backgroundColor:"#e3e4e6",margin:"0.1rem 0.1rem",padding:"0.5rem 0",gap:"1rem"},children:[(0,m.jsx)(I,{children:"MY CART "}),(0,m.jsx)(x,{src:u,alt:"My Cart"})]}),Q=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(B,{}),(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",margin:"0.1rem",padding:"1.5rem 0",gap:"2rem"},children:[(0,m.jsx)(E,{src:l,alt:"Empty cart"}),(0,m.jsx)("p",{style:{fontWeight:500,fontSize:"1.5rem"},children:"Your Cart is empty !"}),(0,m.jsx)(n.N_,{to:"/",children:(0,m.jsx)(f,{children:"Shop Now"})})]})]}),k=()=>{const A=(0,o.wA)(),e=(0,o.d4)((A=>A.user)),{userInfo:t}=e,a=(0,o.d4)((A=>A.product)),{productDetail:n,sellerDetail:l,lowRes:u}=a,{cartproducts:x,setcartproducts:E,setproductsdataarr:f,productsdataarr:I,setsellerarr:k,sellerarr:j,setimagesarr:y,imagesarr:w,setcartpricing:S}=(0,r.useContext)(i.y),C=(0,r.useRef)(x);(0,r.useEffect)((()=>{C.current=x}),[x]);const[U,R]=(0,r.useState)(0);return(0,r.useEffect)((()=>{k([]),f([]),y([]),R(0),E(t.cart||[])}),[t.cart]),(0,r.useEffect)((()=>{if(t.cart&&U<t.cart.length){const e=t.cart[U].product_id;A((0,s.BW)(e)),A((0,s.J7)(e))}}),[U,t.cart]),(0,r.useEffect)((()=>{n&&A((0,s.zm)(n.seller_id))}),[n]),(0,r.useEffect)((()=>{n&&u&&l&&(y((A=>[...A,u])),k((A=>[...A,l])),f((A=>[...A,n])),A((0,s.gG)(["LOW_RES_RESET","PRODUCT_DETAIL_RESET","SELLER_DETAIL_RESET"])),R((A=>A+1)))}),[l,u,n]),(0,r.useEffect)((()=>{if(U===t.cart.length){let A=0,e=0,t=0;I.map(((A,r)=>{const i=x[r].quantity;e+=A.price.mrp*i,t+=(A.price.mrp-A.price.cost)*i})),I.forEach((r=>{0!==r.delivery_charges&&(null===r.free_delivery_over||r.free_delivery_over>=e-t)&&(A+=r.delivery_charges)})),S({mrp:e,discount:t,delivery_charges:A})}}),[U]),(0,r.useEffect)((()=>()=>{var e;const r=C.current;(null===(e=t.cart)||void 0===e?void 0:e.length)>0&&null!==r&&r!==t.cart&&A((0,c.oj)(t._id,r)),E(null)}),[]),null===t.cart||0===t.cart.length?(0,m.jsx)(Q,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(B,{}),(!x||U<x.length)&&(0,m.jsx)("img",{src:d,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(null===I||void 0===I?void 0:I.length)===(null===x||void 0===x?void 0:x.length)&&(null===j||void 0===j?void 0:j.length)===(null===x||void 0===x?void 0:x.length)&&(null===w||void 0===w?void 0:w.length)===(null===x||void 0===x?void 0:x.length)&&(0,m.jsxs)(h,{children:[(0,m.jsx)(p.default,{}),(0,m.jsx)(g.default,{})]})]})}},84735:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>l});var r=t(65043),i=t(75017),a=t(1529),n=t(70579);const o=a.Ay.img`   
    width: 6rem;
`,s=a.Ay.button.withConfig({shouldForwardProp:A=>"nomore"!==A})`
    border: 2px solid black;
    background-color: #ebe8e8;    
    border-radius: 50%;
    font-size: 1.2rem;
    width: 1.8rem;
    height: 1.8rem;
    font-weight: 700;
    color: #194df7;
    opacity: ${A=>"true"===A.nomore?.3:1};
    
    &:hover{
        cursor: ${A=>"true"===A.nomore?"not-allowed":"pointer"};
        
        transform: ${A=>"true"===A.nomore?"none":"scale(1.05)"};
    }
`,c=a.Ay.p`
font - size: 1.5rem;
`,l=A=>{let{cart_index:e}=A;const{setalert:a,cartproducts:l,setcartproducts:u,productsdataarr:d,imagesarr:p,cartpricing:g,setcartpricing:m}=(0,r.useContext)(i.y),h=l[e],x=A=>{if(-1===A&&1===h.quantity)return null;if(1===A&&h.quantity===d[e].max_quantity)return a({message:"Maximum quantity reached for this product !",colour:"#ffa500",fontcolor:"black"}),null;{u((t=>{const r=[...t];return r[e]={...r[e],quantity:r[e].quantity+A},r}));const t=g.mrp+A*d[e].price.mrp,r=g.discount+A*(d[e].price.mrp-d[e].price.cost),i=t-r;let a=0;d.map((A=>{0===A.delivery_charges||(null===A.free_delivery_over?a+=A.delivery_charges:A.free_delivery_over<i||(a+=A.delivery_charges))})),m({mrp:t,discount:r,delivery_charges:a})}};return(0,n.jsxs)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,n.jsx)(o,{src:t(99261)(`./${p[e]}`),alt:"Product"}),(0,n.jsxs)("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)(s,{nomore:1===h.quantity?"true":"false",onClick:()=>{x(-1)},children:"-"}),(0,n.jsx)(c,{children:h.quantity}),(0,n.jsx)(s,{nomore:h.quantity===d[e].max_quantity?"true":"false",onClick:()=>{x(1)},children:"+"})]})]})}},84988:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var r=t(65043),i=t(75017),a=t(1529),n=t(85359),o=t(70579);const s=a.Ay.div.withConfig({shouldForwardProp:A=>"stickyTop"!==A})`  
    position: sticky;      
    top: ${A=>A.stickyTop+2}px;
    border: 2px solid #747574;
    border-radius: 4px;
    margin-right: 0.1rem;
    padding: 1rem;
    background-color: #f5f5f5;

    @media(max-width: 950px){
        position: static;
        width: 70vw;
        margin: auto;
    }
`,c=a.Ay.h2`
    font-size: 1.5rem;
    text-align: center;
    margin: 0 0 1.5rem 0;

    // @media(max-width: 300px){
    //     font-size: 1.5rem;
    // }
    // @media(max-width: 400px){
    //     font-size: 1.5rem;
    // }
`,l=a.Ay.div`
    display: grid;
    grid-template-columns: 15rem 5rem;    
    gap: 2rem;

    & > :nth-child(odd) {
        justify-self: start;
    }

    & > :nth-child(even) {
        justify-self: end;
    }

    @media(max-width: 950px){
        grid-template-columns:  auto auto;
        gap: 1rem;        
    }
`,u=a.Ay.p`
    font-size: 1.4rem;    
`,d=a.Ay.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: #474a4d;
`,p=a.Ay.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #055af7;
    font-size: 1rem;
    font-weight: 600;
    width: 9rem;
    margin: 2rem auto 0 auto;
    display:block;
    
    &:hover {
        transform: scale(1.02);
        cursor: pointer; 
    }
`,g=()=>{const{cartpricing:A,userInfo:e,setalert:t}=(0,r.useContext)(i.y),[a,g]=(0,r.useState)(0);(0,r.useEffect)((()=>{const A=()=>{const A=document.getElementById("header");if(A){const e=A.offsetHeight;g(e)}};return A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}}),[]);return(0,o.jsx)("div",{children:(0,o.jsxs)(s,{stickyTop:a,children:[(0,o.jsx)(c,{children:"PRICE DETAILS"}),(0,o.jsxs)(l,{children:[(0,o.jsx)(u,{children:"Total MRP:"}),(0,o.jsxs)(d,{children:["\u20b9",A.mrp.toLocaleString("en-US")]}),(0,o.jsx)(u,{children:"Total Discount:"}),(0,o.jsxs)(d,{style:{color:"#f307f7"},children:["\u20b9",A.discount.toLocaleString("en-US")]}),(0,o.jsx)(u,{children:"Delivery Charges:"}),(0,o.jsxs)(d,{style:{color:"#f7072b"},children:["\u20b9",A.delivery_charges.toLocaleString("en-US")]}),(0,o.jsx)(u,{children:"Total Amount:"}),(0,o.jsxs)(d,{style:{color:"black"},children:["\u20b9",(A.mrp-A.discount+A.delivery_charges).toLocaleString("en-US")]})]}),(0,o.jsx)(p,{onClick:async()=>{let r={name:e.name,amount:A.mrp-A.discount+A.delivery_charges,number:e.phone,MID:"MID"+Date.now(),transactionId:"T"+Date.now()},i=await(0,n.X)(r);i&&200===i.status?window.location.href=i.data.data.instrumentResponse.redirectInfo.url:t({colour:"#f71505",message:"Payment server not responding ! Please try again later"})},children:"Place Order"})]})})}},47603:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>B});var r=t(1529),i=t(37635),a=t(37554),n=t(70579);const o=r.Ay.h2`
    font-size: 1.5rem;
    font-weight: 600;

    // @media(max-width: 300px){
    //     font-size: 1.5rem;
    // }
    // @media(max-width: 400px){
    //     font-size: 1.5rem;
    // }
`,s=r.Ay.div`
    display: flex;
    gap: 0.7rem;
    align-items: center;
    margin: 0.3rem 0 0.2rem 0; 

    // @media(max-width: 450px){
    //     // gap: 0.4rem;
    //     font-size: 0.95rem;
    // }
    // @media(max-width: 370px){
    //     font-size: 0.92rem;
    // }
`,c=r.Ay.div`
    display: flex;
    gap: 1.4rem;
    align-items: center;
    margin: 0.1rem 0 0.1rem 0;

    @media(max-width: 450px){
        flex-direction: column;
        align-items: start;
        gap: 0;
    }
`,l=r.Ay.div`
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;

    @media(max-width: 500px){       
        font-size: 0.9rem;    
        display: block;        
    }
    @media(max-width: 400px){       
        font-size: 0.85rem;    
        display: block;   
        margin-bottom: 0.8rem; 
    }
`,u=r.Ay.div`
    display: flex; 
    justify-content: flex-start; 
    align-items: center;    
    margin: 0.5rem 0 1rem 0;
    flex-wrap: wrap;
    font-size: 0.8rem;
    gap: 1rem;
    

    @media(max-width: 400px){
        gap: 0.7rem;
    }
    @media(max-width: 370px){
        gap: 0.3rem;
    }
`,d=r.Ay.img`
    width: 1.5rem;

    @media(max-width: 400px){
        width: 1.42rem;
    }
    @media(max-width: 370px){
        width: 1.3rem;
    }
`,p=r.Ay.div`
    background-color: #1e8543;
    padding: 0.15rem 0.3rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    // font-size: 0.77rem;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`,g=r.Ay.img`
    height: 0.65rem; 
    background-color: #1e8543;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`,m=r.Ay.div`
    background-color: #8112c9;
    padding: 0.06rem 0.25rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.15rem;
    font-size: 0.77rem;

    @media(max-width: 500px){
        padding: 0.1rem 0.22rem;
        font-size: 0.75rem;
    }
    @media(max-width: 370px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;
        
    }
`,h=r.Ay.img`
    height: 0.55rem; 
    background-color: #8112c9;

    @media(max-width: 600px){
        height: 0.58rem; 
    }
    @media(max-width: 500px){
        height: 0.55rem; 
    }
    @media(max-width: 370px){
        height: 0.5rem; 
    }
`,x=A=>{let{productdetail:e}=A;return(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",gap:"1rem",alignItems:"center",margin:"0.3rem 0"},children:[(0,n.jsxs)(p,{children:[(0,n.jsx)("p",{style:{color:"white",fontWeight:600,fontSize:"0.9rem"},children:e.average_stars}),(0,n.jsx)(g,{src:a,alt:"star"})]}),(0,n.jsxs)("p",{style:{color:"grey",fontSize:"0.99rem",fontWeight:600,textAlign:"center"},children:[e.total_ratings," Ratings & ",e.total_reviews," Reviews"]})]})},E=A=>{let{productdetail:e}=A;return(0,n.jsxs)(c,{children:[(0,n.jsxs)(s,{children:[(0,n.jsxs)("p",{style:{fontSize:"1.7rem",fontWeight:600},children:["\u20b9",e.price.cost.toLocaleString("en-US")]}),(0,n.jsxs)("p",{style:{fontSize:"1.2rem",fontWeight:600,textDecoration:"line-through",color:"grey"},children:["\u20b9",e.price.mrp.toLocaleString("en-US")]}),(0,n.jsxs)("p",{style:{fontSize:"1rem",fontWeight:600,color:"green"},children:[e.price.discount," off"]})]}),e.quantity<=10?(0,n.jsxs)("p",{style:{display:"block",fontSize:"1rem",fontWeight:600,color:"red",margin:"0rem 0"},children:["(Hurry, only ",e.quantity," unit left !)"]}):null]})},f=A=>{let{productdetail:e}=A;const t=new Date((new Date).getTime()+24*`${e.delivery_time}`*60*60*1e3);return(0,n.jsxs)(l,{children:[(0,n.jsx)("p",{style:{fontWeight:600,color:"blue"},children:0===e.delivery_charges?"Free Delivery !":`Delivery Charges: \u20b9${e.delivery_charges.toLocaleString("en-US")} `}),(0,n.jsxs)("p",{style:{fontWeight:600,color:"grey"},children:["(Expected Delivery: ",t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),")"]})]})},I=A=>{let{seller_data:e}=A;return(0,n.jsxs)(u,{children:[(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.4rem"},children:[(0,n.jsx)(d,{src:i,alt:"Seller"}),(0,n.jsxs)("p",{style:{fontWeight:600},children:["Seller: ",e.name]})]}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.4rem"},children:[(0,n.jsxs)(m,{children:[(0,n.jsx)("p",{style:{color:"white",fontWeight:600},children:e.rating.stars}),(0,n.jsx)(h,{src:a,alt:"star"})]}),(0,n.jsxs)("p",{style:{textAlign:"left",color:"grey",fontWeight:600},children:[e.rating.total," Ratings"]})]})]})},B=A=>{let{productdata:e,seller_data:t}=A;return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap"},children:[(0,n.jsx)(o,{children:e.title.longtitle}),(0,n.jsx)(x,{productdetail:e}),(0,n.jsx)(E,{productdetail:e}),(0,n.jsx)(f,{productdetail:e}),(0,n.jsx)(I,{seller_data:t})]})}},52408:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>d});var r=t(65043),i=t(75017),a=t(1529),n=t(84735),o=t(47603),s=t(70579);const c=a.Ay.div`
    display: flex;    
    gap: 1.5rem;
    padding: 1.5rem;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 500px){
        flex-wrap: wrap;
    }
`,l=a.Ay.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #fa0244;
    font-size: 1rem;
    font-weight: 600;
    
    &:hover {
        transform: scale(1.02);
        cursor: pointer; 
    }
`,u=A=>{let{cart_index:e}=A;const{setalert:t,cartproducts:a,setcartproducts:u,productsdataarr:d,setproductsdataarr:p,sellerarr:g,setsellerarr:m,imagesarr:h,setimagesarr:x,cartpricing:E,setcartpricing:f}=(0,r.useContext)(i.y);return(0,s.jsxs)(c,{children:[(0,s.jsx)("div",{style:{width:"20%"},children:(0,s.jsx)(n.default,{cart_index:e})}),(0,s.jsx)("div",{style:{width:"65%"},children:(0,s.jsx)(o.default,{productdata:d[e],seller_data:g[e]})}),(0,s.jsx)("div",{style:{width:"15%"},children:(0,s.jsx)(l,{onClick:()=>{const A=a.filter(((A,t)=>t!==e)),r=d.filter(((A,t)=>t!==e)),i=g.filter(((A,t)=>t!==e)),n=h.filter(((A,t)=>t!==e)),o=E.mrp-a[e].quantity*d[e].price.mrp,s=E.discount-a[e].quantity*(d[e].price.mrp-d[e].price.cost),c=o-s;let l=0;r.map((A=>{0===A.delivery_charges||(null===A.free_delivery_over?l+=A.delivery_charges:A.free_delivery_over<c||(l+=A.delivery_charges))})),u(A),p(r),m(i),x(n),f({mrp:o,discount:s,delivery_charges:l}),t({message:"Product Removed from Cart !",colour:"#1cba34"})},children:"Remove"})})]})},d=()=>{const{cartproducts:A}=(0,r.useContext)(i.y);if((null===A||void 0===A?void 0:A.length)>0)return(0,s.jsx)("div",{style:{},children:A.map(((e,t)=>(0,s.jsxs)("div",{style:{border:"2px solid #747574",borderBottom:"none",backgroundColor:"white"},children:[(0,s.jsx)(u,{cart_index:t}),t+1===A.length&&(0,s.jsx)("hr",{style:{border:"1px solid #747574"}})]},t)))})}},98824:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c});var r=t(1529),i=t(35475),a=t(50048),n=t(70579);const o=r.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem;
    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`,s=(0,r.Ay)(i.N_)`        
    text-decoration: none;
`,c=()=>(0,n.jsx)(o,{children:(0,n.jsxs)(s,{to:"/user/cart",children:[(0,n.jsx)("img",{src:a,alt:"Profile",style:{width:"1.5rem",height:"1.5rem",maxWidth:"100px",display:"block"}}),(0,n.jsx)("p",{style:{fontSize:"1rem",fontWeight:"600",color:"black",textAlign:"center",margin:"0.5rem 0",lineHeight:"1.2"},children:"Cart"})]})})},2191:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=(t(88504),t(88264)),s=t(76219),c=t(70579);const l=a.Ay.button`
    padding: 0.8rem 1rem;
    border: none;
    background-color: #181cf5;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
`,u=()=>{(0,n.d4)((A=>A.user));const{islogindialog:A,setalert:e}=(0,r.useContext)(i.y),[t,a]=(0,r.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{id:"login_button_id",onClick:()=>{a(!t)},children:"Login"}),t?(0,c.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:5},children:A?(0,c.jsx)(o.default,{setDialog:a}):(0,c.jsx)(s.default,{setDialog:a})}):null]})}},88264:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>I});var r=t(65043),i=t(73216),a=t(75017),n=t(1529),o=t(22373),s=t(88504),c=t(77391),l=t(22988),u=t(28767),d=t(70579);const p=n.Ay.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: white;
    gap: 2rem;
    border: 2px solid black;
    padding: 0rem 1rem 0.2rem 1rem;
    border-radius: 7px;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px){
        grid-template-columns: 55vw;
    }

    @media(max-width: 400px){
        grid-template-columns: 75vw;
    }
`,g=n.Ay.div`
    grid-column: 1;
    align-self: start;
    padding: 0.1rem;

    @media(max-width: 800px){
        display: none;
    }
`,m=n.Ay.p`
    text-align: center;
    font-size: 14px;
    color: red;
    font-weight: 600;    

    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`,h=n.Ay.img`
    display: block;
    width: 1rem;
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`,x=n.Ay.img`
    display: block;
    width: 1rem;
    height: 1.3rem;
    margin-left: 1rem;
    

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`,E=n.Ay.button`    
    height: 2.6rem;
    width: 11rem;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    margin: 2.5rem auto 2rem auto;
    display: block;
    background-color: #181cf5;
    border: none;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
`,f=A=>{let{type:e,placeholder:t,focus:r,setfocus:i,obj:a,fieldName:n,setobj:o}=A;return(0,d.jsxs)("div",{style:{marginBottom:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)("input",{type:e,value:a[n],placeholder:t,onFocus:()=>i(!0),onBlur:()=>i(!1),onChange:A=>{o({...a,[n]:A.target.value})},style:{display:"block",height:"2rem",width:"100%",outline:"none",padding:"0rem",border:"none",fontSize:"1rem",borderBottom:r?"2px solid red":"0.5px solid black"}}),(0,d.jsx)(x,{onClick:()=>o({...a,[n]:""}),title:"Clear field",src:u,alt:"clear text"})]})},I=A=>{let{setDialog:e}=A;(0,i.Zp)(),(0,i.zy)();const t=(0,o.wA)(),[n,u]=(0,r.useState)(!1),[x,I]=(0,r.useState)(!1),{loginInfo:B,setloginInfo:Q,setalert:k,islogindialog:j,setislogindialog:y,menuclicked:w}=(0,r.useContext)(a.y),S=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const A=A=>{"login_button_id"!==A.target.id&&S.current&&!S.current.contains(A.target)&&e(!1)};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}}),[]),(0,r.useEffect)((()=>(document.body.style.overflow="hidden",()=>{!1===w&&(document.body.style.overflow="auto")})),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(p,{ref:S,children:[(0,d.jsxs)(g,{children:[(0,d.jsx)("p",{style:{fontSize:"1.2rem",color:"black",fontWeight:500,margin:"0.7rem 1rem",lineHeight:"1.6rem"},children:"Login to get access to Orders, Cart and much more !"}),(0,d.jsx)("img",{src:c,alt:"signup",style:{width:"25vw",height:"45vh",padding:"0 1rem",boxSizing:"border-box"}})]}),(0,d.jsxs)("div",{style:{padding:"0rem 1rem 1rem 1rem"},children:[(0,d.jsx)(h,{onClick:()=>{e(!1)},src:l,alt:"Close",title:"Close"}),(0,d.jsx)("p",{style:{textAlign:"center",fontSize:"2rem",fontWeight:"600",padding:"0",margin:"0.2rem 0 1rem 0",color:"#078236"},children:"Login"}),(0,d.jsx)("p",{style:{fontSize:"1rem",fontWeight:"500",margin:"0rem 0 1.5rem 0",color:"#fa0cab"},children:"(To login as a guest user, use the following credentials: Email: 'abc' and Password: 'abc')"}),(0,d.jsx)(f,{type:"text",placeholder:"Enter your email",focus:n,setfocus:u,obj:B,fieldName:"email",setobj:Q}),(0,d.jsx)(f,{type:"text",placeholder:"Enter password",focus:x,setfocus:I,obj:B,fieldName:"password",setobj:Q}),(0,d.jsx)(E,{onClick:async()=>{const A=[];B.email||A.push("email"),B.password||A.push("password"),1!==A.length?A.length>1?k({colour:"#f71505",message:`Enter your ${A.join(", ")} !`}):t((0,s.gP)(B.email,B.password)):k({colour:"#f71505",message:`Enter your ${A[0]} !`})},children:"Login"}),(0,d.jsx)(m,{onClick:()=>{y(!j)},children:"New to Nexus ? Create account here."})]})]})})}},76219:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>f});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(88504),s=t(96930),c=t(22988),l=t(28767),u=t(70579);const d=a.Ay.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: white;
    gap: 2rem;
    border: 2px solid black;
    padding: 0rem 1rem 0.2rem 1rem;
    border-radius: 7px;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px){
        grid-template-columns: 55vw;
    }

    @media(max-width: 400px){
        grid-template-columns: 75vw;
    }
`,p=a.Ay.div`
    grid-column: 1;
    align-self: start;
    padding: 0.1rem;

    @media(max-width: 800px){
        display: none;
    }
`,g=a.Ay.p`
    text-align: center;
    font-size: 14px;
    color: red;
    font-weight: 600;    

    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`,m=a.Ay.img`
    display: block;
    width: 1rem;
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`,h=a.Ay.img`
    display: block;
    width: 1rem;
    height: 1.3rem;
    margin-left: 1rem;
    

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`,x=a.Ay.button`    
    height: 2.6rem;
    width: 11rem;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    margin: 2.5rem auto 2rem auto;
    display: block;
    background-color: #181cf5;
    border: none;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
`,E=A=>{let{type:e,placeholder:t,focus:r,setfocus:i,obj:a,fieldName:n,setobj:o}=A;return(0,u.jsxs)("div",{style:{marginBottom:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,u.jsx)("input",{type:e,value:a[n],placeholder:t,onFocus:()=>i(!0),onBlur:()=>i(!1),onChange:A=>{o({...a,[n]:A.target.value})},style:{display:"block",height:"2rem",width:"100%",outline:"none",padding:"0rem",border:"none",fontSize:"1rem",borderBottom:r?"2px solid red":"0.5px solid black"}}),(0,u.jsx)(h,{onClick:()=>o({...a,[n]:""}),title:"Clear field",src:l,alt:"clear text"})]})},f=A=>{let{setDialog:e}=A;const t=(0,n.wA)(),[a,l]=(0,r.useState)(!1),[h,f]=(0,r.useState)(!1),[I,B]=(0,r.useState)(!1),[Q,k]=(0,r.useState)(!1),{signupInfo:j,setsignupInfo:y,setloggedin:w,setuserInfo:S,setalert:C,islogindialog:U,setislogindialog:R}=(0,r.useContext)(i.y),b=(0,r.useRef)(null),G=A=>{"login_button_id"!==A.target.id&&b.current&&!b.current.contains(A.target)&&e(!1)};return(0,r.useEffect)((()=>(document.addEventListener("mousedown",G),()=>{document.removeEventListener("mousedown",G)})),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(d,{ref:b,children:[(0,u.jsxs)(p,{children:[(0,u.jsx)("p",{style:{fontSize:"1.2rem",color:"black",fontWeight:500,margin:"0.7rem 1rem",lineHeight:"1.6rem"},children:"Looks like you are a new user :)"}),(0,u.jsx)("img",{src:s,alt:"signup",style:{width:"25vw",height:"45vh",padding:"0 1rem",boxSizing:"border-box"}})]}),(0,u.jsxs)("div",{style:{padding:"0rem 1rem 1rem 1rem"},children:[(0,u.jsx)(m,{onClick:()=>{e(!1)},src:c,alt:"Close",title:"Close"}),(0,u.jsx)("p",{style:{textAlign:"start",fontSize:"2rem",fontWeight:600,padding:"0",margin:"0.2rem 0 2.5rem 0",color:"#078236"},children:"Signup"}),(0,u.jsx)(E,{type:"text",placeholder:"Enter your name",focus:a,setfocus:l,obj:j,fieldName:"name",setobj:y}),(0,u.jsx)(E,{type:"text",placeholder:"Enter your email",focus:h,setfocus:f,obj:j,fieldName:"email",setobj:y}),(0,u.jsx)(E,{type:"text",placeholder:"Enter your phone",focus:I,setfocus:B,obj:j,fieldName:"phone",setobj:y}),(0,u.jsx)(E,{type:"text",placeholder:"Create password",focus:Q,setfocus:k,obj:j,fieldName:"password",setobj:y}),(0,u.jsx)(x,{onClick:async()=>{const A=[];j.name||A.push("name"),j.email||A.push("email"),j.phone||A.push("phone"),j.password||A.push("password"),1!==A.length?A.length>1?C({colour:"#f71505",message:`Please fill your ${A.join(", ")} !`}):t((0,o.Vr)(j.name,j.email,j.phone,j.password)):C({colour:"#f71505",message:`Please fill your ${A[0]} !`})},children:"Submit"}),(0,u.jsx)(g,{onClick:()=>{R(!U)},children:"Already have an account ? Login here"})]})]})})}},28216:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});var r=t(1529),i=t(70579);const a=r.Ay.div`
    display: flex;
    gap: 0.5rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    align-items: center;
`,n=r.Ay.div`
    border-radius: 50%;
    background-color: #f7071f;
    width: 0.85rem;
    height: 0.85rem;
`,o=r.Ay.div`   
    border-radius: 50%;
    background-color: #05b305;
    width: 0.85rem;
    height: 0.85rem;
`,s=A=>{let{delivery_date:e,status:t}=A;const r=t?"Delivered on":"Expected Delivery";return(0,i.jsxs)(a,{children:[t?(0,i.jsx)(o,{}):(0,i.jsx)(n,{}),(0,i.jsxs)("p",{style:{fontWeight:600,color:"#505250",lineHeight:"1.2"},children:[r,": ",new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]})}},51605:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var r=t(65043),i=t(75017),a=t(1529),n=t(73216),o=t(39191),s=t(37554),c=t(70579);const l=a.Ay.div`
    background-color: #0532fc;
    padding: 0.15rem 0.2rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`,u=a.Ay.img`
    height: 0.65rem; 
    background-color: #0532fc;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`,d=a.Ay.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`,p=a.Ay.img`
    width: 1.1rem;
`,g=A=>{let{stars:e}=A;return(0,c.jsxs)(l,{children:[(0,c.jsx)("p",{style:{color:"white",fontWeight:600,fontSize:"0.8rem"},children:e}),(0,c.jsx)(u,{src:s,alt:"star"})]})},m=A=>{let{pid:e,review:t,review_images:a}=A;const s=(0,n.Zp)();a.length;const{setorderreview:l,setorderreviewimages:u}=(0,r.useContext)(i.y),m=()=>{""!==t?(l(t),u(a)):(l(null),u([])),s(`/product/${e}/write-review`)};return""!==t?(0,c.jsxs)(d,{children:[(0,c.jsx)(g,{stars:t.rating}),(0,c.jsx)("p",{onClick:m,style:{fontSize:"1rem",fontWeight:500,color:"#0532fc",cursor:"pointer"},children:"Edit review"})]}):(0,c.jsxs)(d,{children:[(0,c.jsx)(p,{src:o,alt:"feedback"}),(0,c.jsx)("p",{onClick:m,style:{fontSize:"1rem",fontWeight:500,color:"#056af7",cursor:"pointer"},children:"Rate and Review Product"})]})}},71735:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var r=t(1529),i=t(37635),a=t(37554),n=t(70579);const o=r.Ay.h2`
    font-size: 1.3rem;
    font-weight: 600;
    color: black;
`,s=r.Ay.div`
    display: flex; 
    justify-content: flex-start; 
    align-items: center;    
    margin: 0.5rem 0 1rem 0;
    flex-wrap: wrap;
    font-size: 0.8rem;
    gap: 1rem;
    

    @media(max-width: 400px){
        gap: 0.7rem;
    }
    @media(max-width: 370px){
        gap: 0.3rem;
    }
`,c=r.Ay.img`
    width: 1.4rem;

    @media(max-width: 400px){
        width: 1.32rem;
    }
    @media(max-width: 370px){
        width: 1.2rem;
    }
`,l=r.Ay.div`
    background-color: #1e8543;
    padding: 0.15rem 0.2rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    // font-size: 0.77rem;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`,u=r.Ay.img`
    height: 0.65rem; 
    background-color: #1e8543;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`,d=r.Ay.div`
    background-color: #8112c9;
    padding: 0.06rem 0.25rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.15rem;
    font-size: 0.77rem;

    @media(max-width: 500px){
        padding: 0.1rem 0.22rem;
        font-size: 0.75rem;
    }
    @media(max-width: 370px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;
        
    }
`,p=r.Ay.img`
    height: 0.55rem; 
    background-color: #8112c9;

    @media(max-width: 600px){
        height: 0.58rem; 
    }
    @media(max-width: 500px){
        height: 0.55rem; 
    }
    @media(max-width: 370px){
        height: 0.5rem; 
    }
`,g=A=>{let{productdetail:e}=A;return(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",gap:"1rem",alignItems:"center",margin:"0.3rem 0"},children:[(0,n.jsxs)(l,{children:[(0,n.jsx)("p",{style:{color:"white",fontWeight:600,fontSize:"0.8rem"},children:e.average_stars}),(0,n.jsx)(u,{src:a,alt:"star"})]}),(0,n.jsxs)("p",{style:{color:"grey",fontSize:"0.9rem",fontWeight:600,textAlign:"center"},children:[e.total_ratings," Ratings & ",e.total_reviews," Reviews"]})]})},m=A=>{let{seller_data:e}=A;return(0,n.jsxs)(s,{children:[(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.4rem"},children:[(0,n.jsx)(c,{src:i,alt:"Seller"}),(0,n.jsxs)("p",{style:{fontWeight:600,color:"black"},children:["Seller: ",e.name]})]}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.4rem"},children:[(0,n.jsxs)(d,{children:[(0,n.jsx)("p",{style:{color:"white",fontWeight:600},children:e.rating.stars}),(0,n.jsx)(p,{src:a,alt:"star"})]}),(0,n.jsxs)("p",{style:{textAlign:"left",color:"grey",fontWeight:600},children:[e.rating.total," Ratings"]})]})]})},h=A=>{let{productdata:e,seller_data:t}=A;return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,n.jsx)(o,{children:e.title.longtitle}),(0,n.jsx)(g,{productdetail:e}),(0,n.jsx)(m,{seller_data:t})]})}},29119:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c});var r=t(65043),i=t(75017),a=t(1529),n=t(70579);const o=a.Ay.img`   
    width: 6rem;
`,s=a.Ay.p`
    font-size: 1rem;
    font-weight: 500;
    color: black;
`,c=A=>{let{order_index:e}=A;const{myorders:a}=(0,r.useContext)(i.y),c=a[e];return(0,n.jsxs)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,n.jsx)(o,{src:t(99261)(`./${c.image}`),alt:"Product"}),(0,n.jsxs)(s,{children:["Quantity: ",c.quantity]})]})}},79569:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>B});var r=t(65043),i=t(75017),a=t(1529),n=t(35475),o=t(22373),s=t(88504),c=t(75303),l=t(7969),u=t(21395),d=t(70816),p=t(92476),g=t(66456),m=t(70579);const h=a.Ay.img`
    width: 2.15rem; 
`,x=a.Ay.img`
    width: 15rem;
    position: relative;
    left: -1.2rem;
`,E=a.Ay.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #055af7;
    font-size: 1rem;
    font-weight: 600;
    width: 9rem;
    
    &:hover {
        transform: scale(1.02);
        cursor: pointer; 
    }
`,f=a.Ay.h1`
    font-size: 2rem;   
`,I=a.Ay.select`
    padding: 0 0 0 0.1rem;
    height: 2.5rem;
    font-size: 1rem;
    border: 2px solid silver;
    border-radius: 5px;
    background-color: white;
    color: #333;
    outline: none;
    cursor: pointer;    

    &:focus {
        border-color: #007BFF;
    }

    &:hover {
        border-color: #007BFF;
    }

    option {
        background: #fff;
        color: #333;
        padding: 10rem;
    }
`,B=()=>{const A=(0,o.wA)(),e=(0,o.d4)((A=>A.user)),{userInfo:t,orders:a,isLoading:B}=e,Q=(0,o.d4)((A=>A.product)),{productDetail:k,sellerDetail:j,lowRes:y}=Q,w=(0,o.d4)((A=>A.review)),{user_imgs:S,user_review:C}=w,[U,R]=(0,r.useState)(0),b=(0,r.useRef)(0),G=(0,r.useRef)("most-recent"),{myorders:D,setmyorders:F}=(0,r.useContext)(i.y),M=()=>{-1===b.current||B||A((0,s.qQ)(t._id,G.current,b.current,10))};return(0,r.useEffect)((()=>()=>{F([])}),[]),(0,r.useEffect)((()=>{null!==a&&(10===a.length?b.current+=10:b.current=-1,a.length>0?R(0):A((0,s.e)(["MY_ORDERS_RESET"])))}),[a]),(0,r.useEffect)((()=>{if((null===a||void 0===a?void 0:a.length)>0&&U<a.length){const e=a[U].product_id;A((0,c.BW)(e)),A((0,c.J7)(e)),A((0,l.qI)(e,t._id)),A((0,l.aW)(e,t._id))}else U===(null===a||void 0===a?void 0:a.length)&&A((0,s.e)(["MY_ORDERS_RESET"]))}),[U,a]),(0,r.useEffect)((()=>{k&&A((0,c.zm)(k.seller_id))}),[k]),(0,r.useEffect)((()=>{if(k&&y&&j&&S&&null!==C){const e=a[U],t={productdata:k,sellerdata:j,image:y,quantity:e.quantity,price:e.price,delivery_charge:e.delivery_charge,delivery_date:e.delivery_date,delivered:e.delivered,review:C,review_images:S};F((A=>[...A,t])),A((0,c.gG)(["LOW_RES_RESET","PRODUCT_DETAIL_RESET","SELLER_DETAIL_RESET"])),A((0,l.pr)(["USER_REVIEW_RESET","USER_IMGS_RESET"])),R((A=>A+1))}}),[a,j,y,k,S,C]),(0,r.useEffect)((()=>{const A=()=>{const A=window.scrollY,e=document.documentElement.scrollHeight;A+window.innerHeight>=e-20&&M()};return M(),window.addEventListener("scroll",A),()=>{window.removeEventListener("scroll",A)}}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid black",backgroundColor:"#e3e4e6",margin:"0.1rem 0.1rem",padding:"0.5rem 0",gap:"1rem"},children:[(0,m.jsx)(f,{children:"MY ORDERS"}),(0,m.jsx)(h,{src:d,alt:"My Orders"}),(0,m.jsxs)(I,{value:G.current,onChange:e=>{A((0,s.e)(["MY_ORDERS_RESET"])),G.current=e.target.value,F([]),R(0),b.current=0,M()},children:[(0,m.jsx)("option",{value:"most-recent",children:"Most Recent"}),(0,m.jsx)("option",{value:"least-recent",children:"Least Recent"}),(0,m.jsx)("option",{value:"on-the-way",children:"On the way"}),(0,m.jsx)("option",{value:"delivered",children:"Delivered"})]})]}),null!==a&&(0,m.jsx)("img",{src:p,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),0===D.length&&-1===b.current&&null===a&&(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",margin:"0.1rem",padding:"1.5rem 0",gap:"2rem"},children:[(0,m.jsx)(x,{src:u,alt:"No Orders to display"}),(0,m.jsx)("p",{style:{fontWeight:500,fontSize:"1.5rem"},children:"No result found !"}),(0,m.jsx)(n.N_,{to:"/",children:(0,m.jsx)(E,{children:"Shop Now"})})]}),D.length>0&&(0,m.jsx)(g.default,{})]})}},56236:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});var r=t(1529),i=t(70579);const a=r.Ay.div`
    display: grid;
    grid-template-columns: auto auto;  
    gap: 0.7rem;   
    align-items: center;
    margin: 0.3rem 0 0.2rem 0;    
    
`,n=r.Ay.p`
    font-weight: 500;
    font-size: 1.1rem;
    color: #1307f5;
`,o=r.Ay.p`
    font-weight: 500;
    font-size: 1.1rem;
`,s=A=>{let{price:e,delivery_charge:t}=A;const r=0===t?"Free":"\u20b9"+t.toLocaleString("en-US");return(0,i.jsxs)(a,{children:[(0,i.jsx)(n,{children:"Cost: "}),(0,i.jsxs)(o,{children:["\u20b9",e.toLocaleString("en-US")]}),(0,i.jsx)(n,{children:"Delivery: "}),(0,i.jsx)(o,{children:r}),(0,i.jsx)(n,{children:"Total: "}),(0,i.jsxs)(o,{children:["\u20b9",(e+t).toLocaleString("en-US")]})]})}},66456:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var r=t(65043),i=t(75017),a=t(73216),n=t(1529),o=t(29119),s=t(71735),c=t(56236),l=t(28216),u=t(51605),d=t(70579);const p=n.Ay.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1.5rem;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;

    @media (max-width: 768px) {
        justify-content: center; /* Center children on smaller screens */
        gap: 1rem;
    }
`,g=n.Ay.div`
    flex: 0 0 auto;
    width: calc(50% - 1rem); /* Adjust width for smaller screens */
    min-width: 120px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100%; /* Full width on very small screens */
    }
`,m=A=>{let{order_index:e}=A;const t=(0,a.Zp)(),{myorders:n,setproductdetail:m}=(0,r.useContext)(i.y),h=()=>{m(n[e].productdata),t(`/product/${n[e].productdata._id}`)};return(0,d.jsxs)(p,{children:[(0,d.jsx)(g,{onClick:h,children:(0,d.jsx)(o.default,{order_index:e})}),(0,d.jsx)(g,{onClick:h,children:(0,d.jsx)(s.default,{productdata:n[e].productdata,seller_data:n[e].sellerdata})}),(0,d.jsx)(g,{children:(0,d.jsx)(c.default,{price:n[e].price,delivery_charge:n[e].delivery_charge})}),(0,d.jsx)(g,{children:(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,d.jsx)(l.default,{delivery_date:n[e].delivery_date,status:n[e].delivered}),(0,d.jsx)(u.default,{review:n[e].review,review_images:n[e].review_images,pid:n[e].productdata._id})]})})]})},h=()=>{const{myorders:A}=(0,r.useContext)(i.y);if(A.length>0)return(0,d.jsx)("div",{style:{margin:"0.1rem"},children:A.map(((e,t)=>(0,d.jsxs)("div",{style:{border:"2px solid #747574",borderBottom:"none",backgroundColor:"white"},children:[(0,d.jsx)(m,{order_index:t}),t+1===A.length&&(0,d.jsx)("hr",{style:{border:"1px solid #747574"}})]},t)))})}},78749:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>d});t(65043);var r=t(1529),i=t(70579);const a=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`,n=r.Ay.input`
  display: none;
`,o=r.Ay.label`
  padding: 0.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  background-color: #d4d4d6;
  border: 2px solid grey;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: inline-block;

  &:hover {
    background-color: silver;
  }
`,s=r.Ay.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`,c=r.Ay.div`
  position: relative;
  padding: 1rem 1rem 0 0;
`,l=r.Ay.img`
    width: 5rem;
    height: 5rem;
    border: 2px solid grey;
`,u=r.Ay.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #282829;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.2rem;
  font-size: 1.5rem;
  line-height: 0;
  width: 1.5rem;
  height: 1.5rem;
`,d=A=>{let{imagesArr:e,setImagesArr:r,uploadedimages:d,setuploadedimages:p,setdeleteImgsArr:g}=A;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a,{children:[(0,i.jsxs)("div",{style:{margin:"1rem 0 0.5rem 0"},children:[(0,i.jsx)(n,{type:"file",id:"fileUpload",multiple:!0,accept:"image/*",onChange:A=>{const e=Array.from(A.target.files);p((A=>[...A,...e]))}}),(0,i.jsx)(o,{htmlFor:"fileUpload",children:"Upload Images"})]}),(0,i.jsxs)(s,{children:[e.map(((A,a)=>(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{src:t(99261)(`./${A}`),alt:`Image ${a}`}),(0,i.jsx)(u,{onClick:()=>(A=>{g((t=>[...t,e[A]])),r((e=>e.filter(((e,t)=>t!==A))))})(a),children:"\xd7"})]},a))),d.map(((A,e)=>(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{src:URL.createObjectURL(A),alt:`Image ${e}`}),(0,i.jsx)(u,{onClick:()=>(A=>{p((e=>e.filter(((e,t)=>t!==A))))})(e),children:"\xd7"})]},e)))]})]})})}},45848:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>B});var r=t(65043),i=t(75017),a=t(73216),n=t(1529),o=t(22373),s=(t(75303),t(7969)),c=t(92476),l=t(78749),u=t(70579);const d=n.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 0.1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
`,p=n.Ay.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
`,g=n.Ay.div`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;

  .star {
    font-size: 2.2rem;
    color: #a405fa;
  }
`,m=n.Ay.p`
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 0;    
`,h=n.Ay.input`
  padding: 0.7rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: 2px solid silver;
  border-radius: 4px;
`,x=n.Ay.textarea`
  padding: 0.7rem;
  font-size: 15px;
  font-weight: 400;
  border: 2px solid silver;
  border-radius: 4px;
  resize: vertical;
  line-height: 1.4;

  @media(max-width: 1000px){
    font-size: 14px;
  }
`,E=n.Ay.button`
  padding: 1rem;
  font-size: 1.15rem;
  background-color: #05b305;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto;

  &:hover {
    background-color: #049a04;
  }
`,f={1:"#f72a2a",2:"#fc6603",3:"#04a0d4",4:"#0707f7",5:"#03993a"},I={1:"Very Bad",2:"Bad",3:"Good",4:"Very Good",5:"Excellent"},B=()=>{const A=(0,o.wA)(),e=(0,o.d4)((A=>A.user)),{userInfo:t}=e,n=(0,o.d4)((A=>A.review)),{isLoading:B,add_update_user_review:Q,uploaded_imgs_urls:k,add_update_user_imgs:j,delete_user_imgs:y}=n,{setalert:w,orderreview:S,setorderreview:C,orderreviewimages:U,setorderreviewimages:R}=(0,r.useContext)(i.y),{id:b}=(0,a.g)(),[G,D]=(0,r.useState)(0),[F,M]=(0,r.useState)(null===S?0:S.rating.toString()),[H,K]=(0,r.useState)(null===S?"":S.title),[O,T]=(0,r.useState)(null===S?"":S.message),[V,q]=(0,r.useState)(null===U?[]:U),[J,N]=(0,r.useState)([]),[v,Y]=(0,r.useState)([]),[W,P]=(0,r.useState)(null),[z,Z]=(0,r.useState)(null),[X,L]=(0,r.useState)(null),_=()=>{D(0)};(0,r.useEffect)((()=>{!1!==W&&!1===W!==null||!1!==z&&null!==z||!1!==X&&null!==X||(w({colour:"#1cba34",message:"Review Submitted !"}),P(null),Z(null),L(null))}),[W,z,X]),(0,r.useEffect)((()=>{null!==j&&(Z(!1),A((0,s.pr)(["ADD_UPDATE_USER_IMGS_RESET"])))}),[j]),(0,r.useEffect)((()=>{null!==y&&(L(!1),A((0,s.pr)(["DELETE_IMAGES_RESET"])))}),[y]),(0,r.useEffect)((()=>{Q&&(C((A=>({...A,title:H,rating:Number(F),message:O}))),P(!1),A((0,s.pr)(["ADD_UPDATE_USER_REVIEW_RESET"])))}),[Q,H,F,O]),(0,r.useEffect)((()=>{if(null!==k){const e=[...V,...k];A((0,s.GC)(b,t._id,e)),q(e),N([]),R(e),A((0,s.pr)(["UPLOAD_IMAGES_RESET"]))}}),[k,V]);const $=e=>{0!==F?(e.preventDefault(),J.length>0?(Z(!0),(()=>{const e=new FormData;J.forEach((A=>{e.append("images",A)})),A((0,s.RQ)(e))})()):V!==U&&(Z(!0),R(V),A((0,s.GC)(b,t._id,V))),(null===S||F===S.rating.toString()&&O===S.message&&H===S.title)&&(null!==S||0===F&&""===O&&""===H)||(P(!0),A((0,s.gb)(b,t._id,t.name,(new Date).toISOString(),Number(F),0,0,H,O))),v.length>0&&(Y([]),L(!0),A((0,s.sk)(v)))):w({colour:"#f71505",message:"Please rate the product !"})};return(0,u.jsxs)(u.Fragment,{children:[(null!==W||null!==z||null!==X)&&(0,u.jsx)("img",{src:c,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,u.jsxs)(d,{children:[(0,u.jsx)("h1",{style:{margin:"auto"},children:"Write a Review"}),(0,u.jsxs)(p,{children:[(0,u.jsx)("h2",{children:"Rating: "}),(0,u.jsx)(g,{children:[1,2,3,4,5].map((A=>(0,u.jsx)("span",{className:"star",onClick:()=>{M(A.toString())},onMouseEnter:()=>{D(A)},onMouseLeave:_,style:{color:G>=A?f[G]:f[F]},children:G>=A||Number(F)>=A?"\u2605":"\u2606"},A)))}),0!==F&&(0,u.jsx)(m,{style:{color:f[F]},children:I[F]})]}),(0,u.jsx)(h,{type:"text",placeholder:"Title of your review (optional)",value:H,onChange:A=>K(A.target.value)}),(0,u.jsx)(x,{rows:"15",placeholder:"Describe the product (optional)",value:O,onChange:A=>T(A.target.value)}),(0,u.jsx)(l.default,{imagesArr:V,setImagesArr:q,uploadedimages:J,setuploadedimages:N,setdeleteImgsArr:Y}),null===S?0!==F||""!==O||""!==H||V!==U||J.length>0?(0,u.jsx)(E,{onClick:$,children:"Submit"}):(0,u.jsx)(E,{style:{opacity:"0.7",backgroundColor:"grey",cursor:"not-allowed"},children:"Submit"}):F!==S.rating.toString()||O!==S.message||H!==S.title||V!==U||J.length>0?(0,u.jsx)(E,{onClick:$,children:"Submit"}):(0,u.jsx)(E,{style:{opacity:"0.7",backgroundColor:"grey",cursor:"not-allowed"},children:"Submit"})]})]})}},57107:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var r=t(1529),i=t(35475),a=t(70816),n=t(70579);const o=r.Ay.img`
    width: 1.9rem;
    height: 1.6rem;
    display: block;
    margin: auto;
`,s=r.Ay.p`
    font-size: 1rem;
    font-weight: 600;
    color: black;
    text-align: center;
    margin: 0.5rem 0;
    line-height: 1.2;
`,c=r.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem;
    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`,l=(0,r.Ay)(i.N_)`        
    text-decoration: none;
`,u=()=>(0,n.jsx)(c,{children:(0,n.jsxs)(l,{to:"/user/my-orders",children:[(0,n.jsx)(o,{src:a,alt:"Profile"}),(0,n.jsx)(s,{children:"My Orders"})]})})},22879:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>Q});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(88504),s=t(3917),c=t(68434),l=t(77440),u=t(12444),d=t(22988),p=t(70579);const g=a.Ay.img`
    display: block;
    width: 1rem;
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
    margin-left: auto;

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`,m=a.Ay.img`
    margin-left: auto;
    display: block;
    width: 1.6rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`,h=a.Ay.button`
    background-color: ${A=>!0===A.isSave?"#04943c":"grey"};  
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    padding: 1rem 1.6rem;
    border-radius: 8px;
    cursor: pointer;    
    display: block;
    &:hover{
        cursor: pointer;
        transform: scale(1.05)
    }

    @media(max-width: 400px){
        padding: 0.7rem 0.8rem;        
    }
`,x=a.Ay.button`
    background-color: ${A=>!0===A.isLogout?"blue":"red"};    
    color: white;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    // width: 7rem;
    border: none;
    padding: 0.9rem 0.9rem;
    border-radius: 8px;
    cursor: pointer;    
    display: block;
    &:hover{
        cursor: pointer;
        transform: scale(1.05)
    }

    @media(max-width: 400px){
        padding: 0.7rem 0.8rem;
    }
`,E=a.Ay.div`
    display: grid;                   
    align-items: center;
    margin: 1rem 0rem;                   
    padding: 0.7rem 0rem 0.7rem 1rem;
    background-color: none;                  
    position: relative;
    grid-template-columns: 5rem 20rem 5rem;
    gap: 1rem;    

    @media(max-width: 900px){
        grid-template-columns: 4rem 10rem 3rem;
        padding: 0.7rem 0rem 0.7rem 0rem;        
    }

    // @media(max-width: 300px){
    //     grid-template-columns: 4rem 5rem 3rem;           
    // }
`,f=A=>{let{title:e}=A;return(0,p.jsxs)("p",{style:{fontSize:"1rem",fontWeight:"600",textDecoration:"underline"},children:[e,":"]})},I=A=>{let{edit:e,field:t,userInfo:r,content:i,setcontent:a}=A;const n=A=>{console.log("================> changing content to : ",A.target.innerText);const{range:e,position:t}=(()=>{const A=window.getSelection();if(A.rangeCount>0){const e=A.getRangeAt(0);return{range:e,position:e.startOffset}}return null})(A.target);a(A.target.innerText),e&&null!=t&&setTimeout((()=>((A,e)=>{let{range:t,position:r}=e;const i=window.getSelection();if(i.removeAllRanges(),i.addRange(t),A.childNodes.length>0){const e=A.childNodes[0];t.setStart(e,Math.min(r,e.length)),t.collapse(!0)}})(A.target,{range:e,position:t})),0)};return"password"!==t?(0,p.jsx)("p",{id:`p_${t}`,contentEditable:e,onInput:n,style:{padding:"0.5rem",fontSize:"1rem",border:!0===e&&"email"!==t?"2px solid blue":"none",outline:"none"},children:"email"===t?r.email:i}):(0,p.jsx)("p",{id:"p_password",contentEditable:e,onInput:n,style:{padding:"0.5rem",fontSize:"1rem",border:!0===e&&"raj983567@gmail.com"!==r.email?"2px solid blue":"none",outline:"none"},children:!0===e?i:"\u2022".repeat(i.length)})},B=A=>{let{userInfo:e,edit:t,setedit:r,field:i,setcontent:a}=A;return"email"===i||"password"===i&&"raj983567@gmail.com"===e.email?t?(0,p.jsxs)("p",{style:{color:"red",fontSize:"0.8rem",fontWeight:"600",textAlign:"right",fontStyle:"italic"},children:[i," can't be changed !"]}):(0,p.jsx)("img",{src:u,onClick:()=>{r(!0),setTimeout((()=>{r(!1)}),2e3)},alt:"No edit",title:`${i} can't be changed !`,style:{width:"1rem",cursor:"pointer",marginLeft:"auto",opacity:"0.4"}}):(0,p.jsx)(m,{onClick:()=>(a(e[i]),void r(!t)),src:t?l:c,alt:"Edit field",title:t?"Cancel Editing":"Edit field"})},Q=A=>{let{setclickedprofile:e}=A;const t=(0,n.wA)(),a=(0,n.d4)((A=>A.user)),{userInfo:c}=a,[l,u]=(0,r.useState)(!1),[m,Q]=(0,r.useState)(!1),[k,j]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),[S,C]=(0,r.useState)(!1),{setloginInfo:U,setsignupInfo:R,setloggedin:b,setalert:G,menuclicked:D}=(0,r.useContext)(i.y),[F,M]=(0,r.useState)(c.name),[H,K]=(0,r.useState)(c.phone),[O,T]=(0,r.useState)(c.password),[V,q]=(0,r.useState)(c.address),J=(0,r.useRef)(null),N=A=>{"div_profile_icon"!==A.target.id&&"profile_icon_id"!==A.target.id&&"p_profile_icon_id"!==A.target.id&&J.current&&!J.current.contains(A.target)&&e(!1)};(0,r.useEffect)((()=>(document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)})),[]),(0,r.useEffect)((()=>(document.body.style.overflow="hidden",()=>{!1===D&&(document.body.style.overflow="auto")})),[]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{ref:J,style:{zIndex:"10000",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"2px solid black",margin:"auto auto",padding:"0.7rem 0.7rem 0.7rem 0.7rem",borderRadius:"9px"},children:[(0,p.jsx)(g,{src:d,onClick:()=>e(!1),alt:"Close",title:"Close"}),(0,p.jsx)("img",{src:s,alt:"My profile",style:{display:"block",width:"3rem",margin:"auto auto"}}),(0,p.jsx)("p",{style:{textAlign:"center",fontSize:"1.5rem",fontWeight:"600",marginTop:"0.3rem"},children:"My Account"}),(0,p.jsxs)(E,{children:[(0,p.jsx)(f,{title:"Name"}),(0,p.jsx)(I,{field:"name",edit:l,userInfo:c,content:F,setcontent:M}),(0,p.jsx)(B,{userInfo:c,field:"name",edit:l,setedit:u,setcontent:M}),(0,p.jsx)(f,{title:"Email"}),(0,p.jsx)(I,{field:"email",edit:m,userInfo:c,content:"null",setcontent:"null"}),(0,p.jsx)(B,{userInfo:c,field:"email",edit:m,setedit:Q,setcontent:"null"}),(0,p.jsx)(f,{title:"Password"}),(0,p.jsx)(I,{field:"password",edit:k,userInfo:c,content:O,setcontent:T}),(0,p.jsx)(B,{userInfo:c,field:"password",edit:k,setedit:j,setcontent:T}),(0,p.jsx)(f,{title:"Phone"}),(0,p.jsx)(I,{field:"phone",edit:y,userInfo:c,content:H,setcontent:K}),(0,p.jsx)(B,{userInfo:c,field:"phone",edit:y,setedit:w,setcontent:K}),(0,p.jsx)(f,{title:"Address"}),(0,p.jsx)(I,{field:"address",edit:S,userInfo:c,content:V,setcontent:q}),(0,p.jsx)(B,{userInfo:c,field:"address",edit:S,setedit:C,setcontent:q})]}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[(0,p.jsx)(x,{isLogout:!1,onClick:async()=>{if("raj983567@gmail.com"===c.email)return void G({colour:"#f71505",message:"Can not delete a guest account !!!"});e(!1);const A=c.email;t((0,o.N6)()),t((0,o.Hx)(A)),U({email:"",password:""}),R({email:"",password:"",phone:"",name:"",address:""})},children:"Delete Account"}),F!==c.name||H!==c.phone||V!==c.address||O!==c.password?(0,p.jsx)(h,{isSave:!0,onClick:async()=>{const A=[];if(F||A.push("name"),O||A.push("password"),H||A.push("phone"),1===A.length)return void G({colour:"#f71505",message:`Enter your ${A[0]} !`});if(A.length>1)return void G({colour:"#f71505",message:`Enter your ${A.join(", ")} !`});const e={name:F,phone:H,password:O,address:V,email:c.email};t((0,o.Vw)(e)),u(!1),Q(!1),j(!1),w(!1),C(!1)},children:"Save"}):(0,p.jsx)(h,{isSave:!1,onClick:()=>e(!1),children:"Close"}),(0,p.jsx)(x,{isLogout:!0,onClick:()=>{e(!1),t((0,o.N6)()),U({email:"",password:""}),R({email:"",password:"",phone:"",name:"",address:""}),window.location.reload()},children:"LogOut"})]})]})})}},9984:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>l});var r=t(65043),i=t(1529),a=t(22373),n=t(12027),o=t(22879),s=t(70579);const c=i.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem;
    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`,l=()=>{const A=(0,a.d4)((A=>A.user)),{userInfo:e}=A,[t,i]=(0,r.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c,{id:"div_profile_icon_id",onClick:()=>{i(!t)},children:[(0,s.jsx)("img",{id:"profile_icon_id",src:n,alt:"Profile",style:{width:"1.5rem",height:"1.5rem",maxWidth:"100px",display:"block"}}),(0,s.jsx)("p",{id:"p_profile_icon_id",style:{fontSize:"1rem",fontWeight:"600",color:"black",textAlign:"center",margin:"0.5rem 0",lineHeight:"1.2"},children:null===e||void 0===e?void 0:e.name.split(" ")[0]})]}),t?(0,s.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:5},children:(0,s.jsx)(o.default,{setclickedprofile:i})}):null]})}},10338:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>x});var r=t(65043),i=t(75017),a=t(1529),n=t(92476),o=t(22373),s=t(33177),c=t(23700),l=t(98824),u=t(57107),d=t(9984),p=t(2191),g=t(11588),m=t(70579);const h=a.Ay.div`
    display:flex;
    padding: 0px;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media(max-width:1000px){
        display: none;
    }
`,x=()=>{const{setalert:A}=(0,r.useContext)(i.y),e=(0,o.d4)((A=>A.user)),{userInfo:t,error:a,isLoading:x,message:E}=e;return(0,r.useEffect)((()=>{a?A({colour:"#f71505",message:`Error: ${a}`}):E&&A({colour:"#1cba34",message:E})}),[a,E]),(0,m.jsxs)(m.Fragment,{children:[x&&(0,m.jsx)("img",{src:n,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,m.jsxs)("div",{id:"header",style:{zIndex:5,position:"sticky",top:"0",display:"flex",backgroundColor:"#ebeb1e",boxSizing:"border-box",border:"0px solid black",padding:"0.5rem 1rem",margin:"0.1rem",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",gap:"1rem"},children:[(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem"},children:[(0,m.jsx)(c.default,{}),(0,m.jsx)(g.default,{})]}),(0,m.jsx)(s.default,{}),(0,m.jsx)(h,{children:null!==t?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.default,{}),(0,m.jsx)(u.default,{}),(0,m.jsx)(d.default,{})]}):(0,m.jsx)(p.default,{})})]})]})}},11588:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>l});var r=t(12675),i=t(35475),a=t(1529),n=t(70579);const o=a.Ay.p`
    font-size: 0.9rem;
    line-height: 1rem;
    margin: 0.5rem 1rem;
    font-style: italic;
    font-weight: 600;

    @media(max-width:700px){
        display: none
    }
`,s=a.Ay.p`
    font-size: 1.9rem; 
    line-height: 0rem; 
    margin: 1rem 1rem; 
    font-weight: 700; 
    font-style: italic;

    @media(max-width:480px){
        display: none
    }
`,c=a.Ay.img`
    width: 4.5rem;
    margin-right: 0.1rem;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`,l=()=>(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0rem"},children:[(0,n.jsx)(i.N_,{to:"/",style:{textDecoration:"none",color:"black"},children:(0,n.jsx)(c,{src:r,alt:"logo"})}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(s,{children:"Nexus"}),(0,n.jsx)(o,{children:"Where Affordability meets Reliability"})]})]})},23700:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var r=t(65043),i=t(75017),a=t(1529),n=t(22373),o=t(79315),s=t(77440),c=t(98824),l=t(57107),u=t(9984),d=t(2191),p=t(70579);const g=a.Ay.div`
    display: none;

    @media(max-width:1000px){
        display: flex;
        flexDirection: column;
    }

    &:hover{
        cursor:pointer;
        transform: scale(1.1);
    }
`,m=a.Ay.div`
    background-color: #fafafa;
    height: 100vh;
    width: 15vw; 
    position: fixed;
    left: 0;
    top: 0.05rem;
    z-index: 1001;
    border: 2px solid black;
    border-left: none;
    justify-content: start;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;

    @media(max-width:1000px){
        width: 25vw; 
    }

    @media(max-width:600px){
        width: 25vw; 
    }

    @media(max-width:400px){
        width: 35vw; 
    }
`,h=()=>{const A=(0,n.d4)((A=>A.user)),{userInfo:e}=A,{menuclicked:t,setmenuclicked:a,setalert:h}=(0,r.useContext)(i.y),x=(0,r.useRef)(null);return(0,r.useEffect)((()=>(x.current&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="auto"})),[t]),(0,r.useEffect)((()=>{const A=A=>{x.current&&!x.current.contains(A.target)&&a(!1)};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{children:(0,p.jsx)("img",{onClick:()=>{a(!t)},src:o,alt:"Menu",style:{width:"1.5rem"}})}),!0===t?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:5},children:(0,p.jsxs)(m,{ref:x,children:[(0,p.jsx)("img",{onClick:()=>{a(!1)},src:s,alt:"Close",style:{cursor:"pointer",width:"1.4rem",position:"absolute",right:"0.3rem",top:"0.2rem"}}),null!==e?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.default,{menu:!0}),(0,p.jsx)("hr",{style:{border:"1px solid #8d918d",width:"99%"}}),(0,p.jsx)(c.default,{menu:!0}),(0,p.jsx)("hr",{style:{border:"1px solid #8d918d",width:"99%"}})]}):null,null!==e?(0,p.jsx)(u.default,{menu:!0}):(0,p.jsx)(d.default,{})]})})}):null]})}},33177:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var r=t(65043),i=t(73216),a=t(35475),n=t(1529),o=t(1403),s=t(91220),c=t(22373),l=t(75303),u=t(70579);const d=n.Ay.div`
    width: 30%;    

    @media(max-width:1000px){
        width: 40%; 
    }

    @media(max-width:700px){
        width: 55%; 
    }

    @media(max-width:600px){
        width: 45%; 
    }

    @media(max-width:480px){
        width: 60%; 
    }

    @media(max-width:370px){
        width: 50%; 
    }

    @media(max-width:340px){
        width: 100%; 
    }
`,p=n.Ay.p`
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-weight: 600;    

    &:hover {
        background-color: #cbdbf5;
        cursor: pointer;             
    }
`,g=n.Ay.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    box-sizing: border-box;
    position: absolute;
    background-color: white;
    width: 100%;
    top: 2.9rem;
    right: 0rem;
    border-radius: 1px;
    padding: 0rem 0rem;
    z-index: 1002;
    border: 1.5px solid #8d918d;
    max-height: 80vh;    
    overflow-y: auto;
`,m=n.Ay.img`
    height: 1.3rem;
    cursor: pointer;
    margin-left: 0.0rem; 

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`,h=()=>{const A=(0,c.wA)(),e=(0,c.d4)((A=>A.product)),{titles:t}=e,n=(0,i.Zp)(),[h,x]=(0,r.useState)([]),[E,f]=(0,r.useState)(""),[I,B]=(0,r.useState)("none"),Q=(0,r.useRef)(null);(0,r.useEffect)((()=>{A((0,l.mN)())}),[]);return(0,u.jsx)(d,{children:(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",margin:"auto",justifyContent:"flex-start",gap:"0.7rem"},children:[(0,u.jsxs)("div",{style:{width:"90%",position:"relative"},children:[(0,u.jsx)("input",{type:"text",value:E,onChange:A=>{f(A.target.value)},placeholder:"Search for items, brands and more",onFocus:()=>{B("2px solid blue")},onBlur:A=>{Q.current&&Q.current.contains(A.relatedTarget)||B("none")},style:{padding:"0.8rem 0.4rem 0.8rem 0.4rem",boxSizing:"border-box",fontSize:"1rem",borderRadius:"5px",border:"none",outline:`${I}`,textOverflow:"ellipsis",width:"100%"}}),E&&"none"!==I&&(null===t||void 0===t?void 0:t.filter((A=>A.title.toLowerCase().includes(E.toLowerCase()))).length)>0&&(0,u.jsx)(g,{ref:Q,children:t.filter((A=>A.title.toLowerCase().includes(E.toLowerCase()))).slice(0,10).map(((A,e)=>(0,u.jsx)(a.N_,{onClick:()=>{f(A.title),B("none")},style:{textDecoration:"none",color:"black",fontSize:"0.95rem",textAlign:"start",display:"flex",flexWrap:"wrap"},to:`/product/${A.id}`,children:(0,u.jsxs)(p,{children:[(0,u.jsx)("img",{src:s,alt:"Search",style:{width:"1.5rem",height:"1.5rem"}}),A.title.length>30?`${A.title.slice(0,30)}...`:A.title]})},e)))})]}),(0,u.jsx)(m,{onClick:()=>{const A=E.trim();f(A),""!==A&&n(`/search/${A}`)},src:o,alt:"search icon"})]})})}},75810:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>x});var r=t(12488),i=t(73216),a=t(35475),n=t(1529),o=t(65043),s=t(75017),c=t(92476),l=t(22373),u=t(75303);const d=[{id:"1",navigate:"product",product_id:"670b90f849af9bf770efd3d6",image:"home/images/banners/boat.jpg"},{id:"2",navigate:"product",product_id:"670b90f849af9bf770efd3d7",image:"home/images/banners/borosil.jpg"},{id:"3",navigate:"category",category:"Fashion",image:"home/images/banners/clothing.jpg"},{id:"4",navigate:"category",category:"Groceries",product_id:"1",image:"home/images/banners/household.jpg"},{id:"5",navigate:"product",product_id:"670b90f849af9bf770efd3da",image:"home/images/banners/scooter.jpg"},{id:"6",navigate:"category",category:"Smartphones",image:"home/images/banners/smartphones.jpg"},{id:"7",navigate:"product",product_id:"670b90f849af9bf770efd3dc",image:"home/images/banners/watch.jpg"}];var p=t(70579);const g=(0,n.Ay)(r.default)`
  .react-multiple-carousel__arrow {
    z-index: 1; /* Lower the z-index for the arrows */
  }
`,m=n.Ay.img`
  width: 100%;
  height: 40vh;
  border: 0px solid black;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 30vh;   
  }

  @media (max-width: 480px) {
    height: 20vh;
  }
`,h={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},x=()=>{const A=(0,i.Zp)(),{setproductdetail:e}=(0,o.useContext)(s.y),r=(0,l.wA)(),n=(0,l.d4)((A=>A.product)),{productDetail:x,isLoading:E}=n;(0,o.useEffect)((()=>{x&&(e(x),r((0,u.gG)(["PRODUCT_DETAIL_RESET"])),A(`/product/${x._id}`))}),[x]);return(0,p.jsxs)(p.Fragment,{children:[E&&(0,p.jsx)("img",{src:c,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}),(0,p.jsx)(g,{responsive:h,swipeable:!1,draggable:!1,showDots:!0,renderDotsOutside:!1,autoPlay:!0,autoPlaySpeed:3e3,infinite:!0,keyBoardControl:!0,style:{zIndex:4},children:d.map(((A,e)=>"product"===A.navigate?(0,p.jsx)(m,{onClick:()=>{return e=A.product_id,void(!1===E&&r((0,u.BW)(e)));var e},src:t(99261)(`./${A.image}`),alt:"banner"},A.image):"category"===A.navigate?(0,p.jsx)(a.N_,{to:`category/${A.category}`,children:(0,p.jsx)(m,{src:t(99261)(`./${A.image}`),alt:"banner"},A.image)},e):void 0))})]})}},79026:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var r=t(96113),i=t(75810),a=t(64523),n=t(70579);const o=()=>(0,n.jsxs)("div",{style:{margin:"0.1rem",display:"flex",flexDirection:"column",gap:"0.1rem"},children:[(0,n.jsx)(r.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(a.default,{tagline:"Deal of the Day"}),(0,n.jsx)(a.default,{tagline:"Trending Offers"}),(0,n.jsx)(a.default,{tagline:"Season's Top Picks"}),(0,n.jsx)(a.default,{tagline:"Top Deals on Accessories"})]})},96113:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>h});var r=t(1529),i=t(35475),a=t(37997),n=t(60415),o=t(93768),s=t(2380),c=t(36995),l=t(19954),u=t(41998),d=t(70454),p=t(70579);const g=[{image:a,text:"Top Offers"},{image:n,text:"Groceries"},{image:o,text:"Smartphones"},{image:s,text:"Fashion"},{image:c,text:"Electronics"},{image:l,text:"Appliances"},{image:u,text:"Travel"},{image:d,text:"Beauty"}],m=r.Ay.div`
    text-align: center;
    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`,h=()=>(0,p.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"1rem",flexWrap:"wrap",gap:"2rem",backgroundColor:"#dcddde"},children:g.map((A=>(0,p.jsx)(m,{children:(0,p.jsxs)(i.N_,{style:{textDecoration:"none"},to:`category/${encodeURIComponent(A.text)}`,children:[(0,p.jsx)("img",{src:A.image,alt:A.text,style:{width:"5rem",height:"5rem",border:"1px solid black"}}),(0,p.jsx)("p",{style:{fontSize:"1rem",fontWeight:400,color:"black"},children:A.text})]})},A.text)))})},64523:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>M});var r=t(12488),i=t(65043),a=t(65173);function n(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function o(A,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(A,r.key,r)}}function s(A,e,t){return e&&o(A.prototype,e),t&&o(A,t),A}function c(A,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&u(A,e)}function l(A){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)},l(A)}function u(A,e){return u=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A},u(A,e)}function d(A,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(A):e}function p(A){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,r=l(A);if(e){var i=l(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return d(this,t)}}function g(A){return function(A){if(Array.isArray(A))return m(A)}(A)||function(A){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(A))return Array.from(A)}(A)||function(A,e){if(!A)return;if("string"===typeof A)return m(A,e);var t=Object.prototype.toString.call(A).slice(8,-1);"Object"===t&&A.constructor&&(t=A.constructor.name);if("Map"===t||"Set"===t)return Array.from(A);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(A,e)}(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(A,e){(null==e||e>A.length)&&(e=A.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=A[t];return r}function h(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=String(A);if(0===e)return t;var r=t.match(/(.*?)([0-9]+)(.*)/),i=r?r[1]:"",a=r?r[3]:"",n=r?r[2]:t,o=n.length>=e?n:(g(Array(e)).map((function(){return"0"})).join("")+n).slice(-1*e);return"".concat(i).concat(o).concat(a)}var x={daysInHours:!1,zeroPadTime:2};function E(A,e){var t=A.days,r=A.hours,i=A.minutes,a=A.seconds,n=Object.assign(Object.assign({},x),e),o=n.daysInHours,s=n.zeroPadTime,c=n.zeroPadDays,l=void 0===c?s:c,u=Math.min(2,s),d=o?h(r+24*t,s):h(r,u);return{days:o?"":h(t,l),hours:d,minutes:h(i,u),seconds:h(a,u)}}var f=function(A){c(t,A);var e=p(t);function t(){var A;return n(this,t),(A=e.apply(this,arguments)).state={count:A.props.count||3},A.startCountdown=function(){A.interval=window.setInterval((function(){0===A.state.count-1?(A.stopCountdown(),A.props.onComplete&&A.props.onComplete()):A.setState((function(A){return{count:A.count-1}}))}),1e3)},A.stopCountdown=function(){clearInterval(A.interval)},A.addTime=function(e){A.stopCountdown(),A.setState((function(A){return{count:A.count+e}}),A.startCountdown)},A}return s(t,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,i.cloneElement)(this.props.children,{count:this.state.count}):null}}]),t}(i.Component);f.propTypes={count:a.number,children:a.element,onComplete:a.func};var I=function(A){c(t,A);var e=p(t);function t(A){var r;if(n(this,t),(r=e.call(this,A)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=null,r.tick=function(){var A=r.calcTimeDelta(),e=A.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(A,void 0,e)},r.setLegacyCountdownRef=function(A){r.legacyCountdownRef=A},r.start=function(){if(!r.isStarted()){var A=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=A?r.calcOffsetStartTimestamp()-A:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},A.date){var i=r.calcTimeDelta();r.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return s(t,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(A){this.legacyMode||this.props.date!==A.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var A=this.props,e=A.date,t=A.now,r=A.precision,i=A.controlled,a=A.overtime;return function(A){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.now,i=void 0===r?Date.now:r,a=t.precision,n=void 0===a?0:a,o=t.controlled,s=t.offsetTime,c=void 0===s?0:s,l=t.overtime;e="string"===typeof A?new Date(A).getTime():A instanceof Date?A.getTime():A,o||(e+=c);var u=o?e:e-i(),d=Math.min(20,Math.max(0,n)),p=Math.round(1e3*parseFloat(((l?u:Math.max(0,u))/1e3).toFixed(d))),g=Math.abs(p)/1e3;return{total:p,days:Math.floor(g/86400),hours:Math.floor(g/3600%24),minutes:Math.floor(g/60%60),seconds:Math.floor(g%60),milliseconds:Number((g%1*1e3).toFixed()),completed:p<=0}}(e,{now:t,precision:r,controlled:i,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(A){this.legacyCountdownRef.addTime(A)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(A){return this.state.status===A}},{key:"setTimeDeltaState",value:function(A,e,t){var r=this;if(this.mounted){var i=A.completed&&!this.state.timeDelta.completed,a=A.completed&&"STARTED"===e;i&&!this.props.overtime&&this.clearTimer();return this.setState((function(t){var i=e||t.status;return A.completed&&!r.props.overtime?i="COMPLETED":e||"COMPLETED"!==i||(i="STOPPED"),{timeDelta:A,status:i}}),(function(){t&&t(r.state.timeDelta),r.props.onComplete&&(i||a)&&r.props.onComplete(A,a)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var A=this.props,e=A.daysInHours,t=A.zeroPadTime,r=A.zeroPadDays,i=this.state.timeDelta;return Object.assign(Object.assign({},i),{api:this.getApi(),props:this.props,formatted:E(i,{daysInHours:e,zeroPadTime:t,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var A=this.props,e=A.count,t=A.children,r=A.onComplete;return(0,i.createElement)(f,{ref:this.setLegacyCountdownRef,count:e,onComplete:r},t)}var a=this.props,n=a.className,o=a.overtime,s=a.children,c=a.renderer,l=this.getRenderProps();if(c)return c(l);if(s&&this.state.timeDelta.completed&&!o)return(0,i.cloneElement)(s,{countdown:l});var u=l.formatted,d=u.days,p=u.hours,g=u.minutes,m=u.seconds;return(0,i.createElement)("span",{className:n},l.total<0?"-":"",d,d?":":"",p,":",g,":",m)}}]),t}(i.Component);I.defaultProps=Object.assign(Object.assign({},x),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),I.propTypes={date:(0,a.oneOfType)([(0,a.instanceOf)(Date),a.string,a.number]),daysInHours:a.bool,zeroPadTime:a.number,zeroPadDays:a.number,controlled:a.bool,intervalDelay:a.number,precision:a.number,autoStart:a.bool,overtime:a.bool,className:a.string,children:a.element,renderer:a.func,now:a.func,onMount:a.func,onStart:a.func,onPause:a.func,onStop:a.func,onTick:a.func,onComplete:a.func};const B=I;var Q=t(1529),k=t(75017),j=t(73216),y=t(35475),w=t(22373),S=t(75303),C=t(92476),U=t(53195),R=t(70579);const b=(0,Q.Ay)(r.default)`
  .react-multiple-carousel__arrow {
    z-index: 1; /* Lower the z-index for the arrows */
  }
`,G=Q.Ay.button`
    background-color: blue;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;    
    padding: 0.3rem;
    height: 2rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.07)
    }
`,D=Q.Ay.div`
    text-align: center;
    margin-top: 2rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.07)
    }
`,F={desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:1}},M=A=>{let{tagline:e}=A;const r=(0,j.Zp)(),{setproductdetail:a}=(0,i.useContext)(k.y),n=(0,w.wA)(),o=(0,w.d4)((A=>A.product)),{slide_prdts:s,isLoading:c}=o,[l,u]=(0,i.useState)([]);(0,i.useEffect)((()=>{n((0,S.tz)(e,0,8,"most-bought"))}),[]),(0,i.useEffect)((()=>{s[e]&&(u(s[e]),n((0,S.oK)(e)))}),[s[e]]);const d=new Date,p=new Date(d.getFullYear(),d.getMonth(),d.getDate(),23,59,59,999)-new Date;return(0,R.jsx)(R.Fragment,{children:c?(0,R.jsx)("img",{src:C,style:{width:"5rem",height:"5rem",position:"fixed",top:"5px",left:"50%",zIndex:"6"}}):(0,R.jsxs)("div",{style:{backgroundColor:"white",marginBottom:"0.5rem"},children:[(0,R.jsx)("hr",{style:{border:"1px solid #ccc",margin:"1rem 0.1rem 0.5rem 0.1rem"}}),(0,R.jsxs)("div",{style:{padding:"0rem",display:"flex",margin:"0rem 0rem 0rem 0rem"},children:[(0,R.jsxs)("div",{style:{marginLeft:"auto"},children:[(0,R.jsx)("p",{style:{fontSize:"1.7rem",fontWeight:"600",padding:"0",textDecoration:"none",textUnderlineOffset:"0.5rem"},children:e}),"Deal of the Day"===e&&(0,R.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"0.4rem"},children:[(0,R.jsx)("img",{src:U,alt:"timer",style:{width:"1.5rem",margin:"0 0.5rem 0 0"}}),(0,R.jsx)(B,{date:Date.now()+p,renderer:A=>{let{hours:e,minutes:t,seconds:r,completed:i}=A;return i?null:(0,R.jsxs)("div",{style:{color:"red",fontWeight:"600"},children:[e,"hr ",t,"min ",r,"sec Left"]})}})]})]}),(0,R.jsx)(y.N_,{to:`tagline/${e}`,style:{textDecoration:"none",color:"white",margin:"0.3rem 0.5rem 0 auto"},children:(0,R.jsx)(G,{children:"View all"})})]}),(0,R.jsx)(b,{responsive:F,dotListClass:"custom-dot-list-style",swipeable:!0,draggable:!0,showDots:!1,centerMode:!0,slidesToSlide:1,autoPlay:!1,autoPlaySpeed:3e3,infinite:!1,keyBoardControl:!0,children:l.map(((A,e)=>(0,R.jsxs)(D,{onClick:()=>(A=>{a(A),r(`/product/${A._id}`)})(A),children:[(0,R.jsx)("img",{src:t(99261)(`./${A.lowRes}`),alt:"Product",style:{width:"4rem"}}),(0,R.jsx)("p",{style:{fontWeight:"600",color:"black"},children:A.title.shorttitle}),(0,R.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"0.2rem"},children:[(0,R.jsxs)("p",{style:{color:"grey",textDecoration:"line-through",fontSize:"1rem"},children:["\u20b9",A.price.mrp]}),(0,R.jsxs)("p",{style:{fontWeight:"600",color:"black",fontSize:"1rem"},children:["\xa0\u20b9",A.price.cost]})]}),(0,R.jsxs)("p",{style:{color:"green"},children:[A.price.discount," off"]})]},e)))})]})})}},63096:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>y});var r=t(65043),i=t(73216),a=t(75017),n=t(1529),o=t(22373),s=t(75303),c=t(92476),l=t(59324),u=t(55344),d=t(70579);const p=n.Ay.h2`
    margin: 0.8rem 0;
    font-size: 1.8rem;
    text-align: center;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`,g=n.Ay.select`
    padding: 0 0 0 0.1rem;
    height: 2.5rem;
    font-size: 1rem;
    border: 2px solid silver;
    border-radius: 5px;
    background-color: white;
    color: #333;
    outline: none;
    cursor: pointer;    

    &:focus {
        border-color: #007BFF;
    }

    &:hover {
        border-color: #007BFF;
    }

    option {
        background: #fff;
        color: #333;
        padding: 10rem;
    }
`,m=n.Ay.h3`   
    font-weight: 600;
    font-size: 1.4rem;
    color: black;

    @media(max-width: 300px){
        font-size: 1.1rem;
    }
    @media(max-width: 400px){
        font-size: 1.2rem;
    }
`,h=n.Ay.div`
    display: flex;
    gap: 0.7rem;
    align-items: center;

    @media(max-width: 450px){
        gap: 0.4rem;
        font-size: 0.95rem;
    }
    @media(max-width: 370px){
        font-size: 0.92rem;
    }
`,x=n.Ay.div`
    background-color: #1e8543;
    padding: 0.15rem 0.3rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    // font-size: 0.77rem;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`,E=n.Ay.img`
    height: 0.65rem; 
    background-color: #1e8543;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`,f=n.Ay.img`
    width: 10rem;
    margin-bottom: 0.5rem;
`,I=n.Ay.div`
    display: grid;    
    border-left: 2px solid silver;   
    grid-template-columns: auto auto auto auto;
    
    @media(max-width: 1200px){
        grid-template-columns: auto auto auto;       
    }

    @media(max-width: 750px){
        grid-template-columns: auto auto;
    }

    @media(max-width: 500px){
        grid-template-columns: auto;
    }
//# sourceMappingURL=main.47b55385.js.map