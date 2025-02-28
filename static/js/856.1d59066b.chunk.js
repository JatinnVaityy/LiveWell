"use strict";(self.webpackChunklivewell=self.webpackChunklivewell||[]).push([[856],{7399:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var i=n(5043),o=n(3216),r=n(5475),s=n(217),l=n(774),a=n(184),d=n(2115);n(2342);const c=n.p+"static/media/sign.9aca5896ab41646a4242.avif";var p=n(579);const u={container:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f5f5f5"},content:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"40px",maxWidth:"900px",backgroundColor:"white",padding:"30px",borderRadius:"10px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)"},formContainer:{maxWidth:"300px",textAlign:"center"},title:{fontSize:"24px",marginBottom:"10px"},subtitle:{fontSize:"14px",color:"#666"},error:{color:"red",fontSize:"14px",marginBottom:"10px"},form:{display:"flex",flexDirection:"column",alignItems:"center"},label:{alignSelf:"flex-start",marginBottom:"5px",fontWeight:"bold"},input:{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"5px",border:"1px solid #ccc"},button:{width:"100%",padding:"10px",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px"},orText:{textAlign:"center",fontWeight:"bold",margin:"10px 0"},googleButton:{width:"100%",padding:"10px",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"center"},googleIcon:{marginRight:"10px"},signupText:{marginTop:"10px",fontSize:"14px",color:"#333"},link:{color:"#1890ff",fontWeight:"bold",textDecoration:"none"},imageContainer:{display:"flex",justifyContent:"center"},image:{maxWidth:"100%",borderRadius:"5px"}},g=()=>{const[e,t]=(0,i.useState)(""),[n,g]=(0,i.useState)(!1),[x,f]=(0,i.useState)(window.innerWidth<768),m=(0,o.Zp)();(0,i.useEffect)((()=>{const e=()=>f(window.innerWidth<768);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);return(0,p.jsx)("div",{style:u.container,children:(0,p.jsxs)("div",{style:u.content,children:[(0,p.jsxs)("div",{style:u.formContainer,children:[(0,p.jsx)("h2",{style:u.title,children:"Sign In"}),(0,p.jsx)("p",{style:u.subtitle,children:"Enter your email and password to sign in"}),e&&(0,p.jsx)("p",{style:u.error,children:e}),(0,p.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),n)return;g(!0),t("");const i=e.target.email.value,o=e.target.password.value;try{const e=await(0,s.x9)(l.j2,i,o);localStorage.setItem("authToken",e.user.accessToken),d.oR.success("Signed in successfully!",{autoClose:2e3,position:"top-center"}),setTimeout((()=>m("/dashboard")),2e3)}catch(r){t(r.message),d.oR.error("Sign-in failed: "+r.message,{autoClose:3e3})}finally{g(!1)}},style:u.form,children:[(0,p.jsx)("label",{style:u.label,children:"Email"}),(0,p.jsx)("input",{type:"email",name:"email",placeholder:"Email",required:!0,style:u.input}),(0,p.jsx)("label",{style:u.label,children:"Password"}),(0,p.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0,style:u.input}),(0,p.jsx)("button",{type:"submit",style:{...u.button,backgroundColor:n?"#ccc":"#1890ff"},disabled:n,children:n?"Signing in...":"SIGN IN"})]}),(0,p.jsx)("div",{style:u.orText,children:"OR"}),(0,p.jsxs)("button",{onClick:async()=>{if(n)return;g(!0),t("");const e=new s.HF;try{const t=await(0,s.df)(l.j2,e);localStorage.setItem("authToken",t.user.accessToken),d.oR.success("Signed in with Google!",{autoClose:2e3,position:"top-center"}),setTimeout((()=>m("/dashboard")),2e3)}catch(i){t(i.message),d.oR.error("Google Sign-in failed: "+i.message,{autoClose:3e3})}finally{g(!1)}},style:{...u.googleButton,backgroundColor:n?"#ccc":"#dd4b39"},disabled:n,children:[(0,p.jsx)(a.DSS,{style:u.googleIcon})," ",n?"Signing in...":"SIGN IN WITH GOOGLE"]}),(0,p.jsxs)("p",{style:u.signupText,children:["Don't have an account? ",(0,p.jsx)(r.N_,{to:"/signup",style:u.link,children:"Sign Up"})]})]}),!x&&(0,p.jsx)("div",{style:u.imageContainer,children:(0,p.jsx)("img",{src:c,alt:"Sign In",style:u.image})})]})})}}}]);
//# sourceMappingURL=856.1d59066b.chunk.js.map