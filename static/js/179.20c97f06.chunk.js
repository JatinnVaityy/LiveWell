"use strict";(self.webpackChunklivewell=self.webpackChunklivewell||[]).push([[179],{4179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(5043),r=n(579);const i=()=>{const[e,t]=(0,a.useState)({firstName:"",lastName:"",dob:"",gender:"",phone:"",email:"",bloodType:"",height:"",weight:"",allergies:"",medications:"",chronicConditions:"",emergencyContactName:"",emergencyRelationship:"",emergencyPhone:"",preferredHospital:""}),[n,i]=(0,a.useState)(0),[l,o]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=localStorage.getItem("patientReport");e&&(t(JSON.parse(e)),c(!0))}),[]);const h=n=>{t({...e,[n.target.name]:n.target.value})};return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{children:"Patient Profile"}),s?(0,r.jsxs)("div",{className:"summary",children:[(0,r.jsx)("h3",{children:"Patient Summary"}),Object.entries(e).map((e=>{let[t,n]=e;return(0,r.jsxs)("p",{children:[(0,r.jsxs)("strong",{children:[t.replace(/([A-Z])/g," $1"),": "]})," ",n||"N/A"]},t)})),(0,r.jsx)("button",{onClick:()=>{c(!1)},children:"Edit Information"}),(0,r.jsx)("button",{onClick:()=>{localStorage.removeItem("patientReport"),c(!1)},children:"Logout"})]}):(0,r.jsxs)("form",{onSubmit:async t=>{if(t.preventDefault(),(()=>{const t=["firstName","lastName","dob","gender","phone","email","emergencyContactName","emergencyPhone"];for(let n of t)if(!e[n])return alert(`Please fill in the required field: ${n}`),!1;return!0})()){o(!0);try{const t=await fetch("http://192.168.0.107:5000/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();if(!t.ok)throw new Error(n.error||"Failed to save data");localStorage.setItem("patientReport",JSON.stringify(e)),c(!0),alert("Patient data submitted successfully!")}catch(n){console.error("Error sending data:",n),alert("Error submitting data.")}finally{o(!1)}}},children:[0===n&&(0,r.jsxs)("div",{className:"form-section",children:[(0,r.jsx)("h3",{children:"Patient Info"}),(0,r.jsx)("input",{type:"text",name:"firstName",value:e.firstName,onChange:h,placeholder:"First Name",required:!0}),(0,r.jsx)("input",{type:"text",name:"lastName",value:e.lastName,onChange:h,placeholder:"Last Name",required:!0}),(0,r.jsx)("input",{type:"date",name:"dob",value:e.dob,onChange:h,required:!0}),(0,r.jsxs)("select",{name:"gender",value:e.gender,onChange:h,required:!0,children:[(0,r.jsx)("option",{value:"",children:"Select Gender"}),(0,r.jsx)("option",{value:"Male",children:"Male"}),(0,r.jsx)("option",{value:"Female",children:"Female"})]}),(0,r.jsx)("input",{type:"text",name:"phone",value:e.phone,onChange:h,placeholder:"Phone Number",required:!0}),(0,r.jsx)("input",{type:"email",name:"email",value:e.email,onChange:h,placeholder:"Email",required:!0})]}),1===n&&(0,r.jsxs)("div",{className:"form-section",children:[(0,r.jsx)("h3",{children:"Health Info"}),(0,r.jsx)("input",{type:"text",name:"bloodType",value:e.bloodType,onChange:h,placeholder:"Blood Type"}),(0,r.jsx)("input",{type:"number",name:"height",value:e.height,onChange:h,placeholder:"Height (cm)"}),(0,r.jsx)("input",{type:"number",name:"weight",value:e.weight,onChange:h,placeholder:"Weight (kg)"}),(0,r.jsx)("textarea",{name:"allergies",value:e.allergies,onChange:h,placeholder:"List any allergies"}),(0,r.jsx)("textarea",{name:"medications",value:e.medications,onChange:h,placeholder:"Current Medications"}),(0,r.jsx)("textarea",{name:"chronicConditions",value:e.chronicConditions,onChange:h,placeholder:"Chronic Conditions"})]}),2===n&&(0,r.jsxs)("div",{className:"form-section",children:[(0,r.jsx)("h3",{children:"Emergency Contact"}),(0,r.jsx)("input",{type:"text",name:"emergencyContactName",value:e.emergencyContactName,onChange:h,placeholder:"Contact Name",required:!0}),(0,r.jsx)("input",{type:"text",name:"emergencyRelationship",value:e.emergencyRelationship,onChange:h,placeholder:"Relationship"}),(0,r.jsx)("input",{type:"text",name:"emergencyPhone",value:e.emergencyPhone,onChange:h,placeholder:"Emergency Phone",required:!0}),(0,r.jsx)("input",{type:"text",name:"preferredHospital",value:e.preferredHospital,onChange:h,placeholder:"Preferred Hospital"})]}),(0,r.jsxs)("div",{className:"button-group",children:[n>0&&(0,r.jsx)("button",{type:"button",className:"prev-btn",onClick:()=>i(n-1),children:"Previous"}),n<2?(0,r.jsx)("button",{type:"button",className:"next-btn",onClick:()=>i(n+1),children:"Next"}):(0,r.jsx)("button",{type:"submit",disabled:l,children:l?"Submitting...":"Submit"})]})]})]})}}}]);
//# sourceMappingURL=179.20c97f06.chunk.js.map