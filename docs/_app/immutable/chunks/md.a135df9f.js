function o(t,s=null){const e=Object.keys(t).map(async n=>{const a=n.replace("/+page.md","").replace("./",s?`/${s}/`:"/"),{metadata:c}=await t[n]();return{slug:a,metadata:c}});return Promise.all(e)}function r(t,s,e=null){return Object.keys(t).filter(a=>a.includes(s)).map(async a=>{const c=`${e?`/${e}/`:"/"}${s}`,{metadata:l}=await t[a]();return{slug:c,metadata:l}})[0]}export{r as a,o as l};
