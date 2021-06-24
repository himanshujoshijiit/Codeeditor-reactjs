import React,{ useState,useEffect }  from "react";
import Editor from "./Editor";
function App() {
 
  const  [html,setHtml] = useState('')
  const  [css,setCss] = useState('')
  const  [js,setJs] = useState('')

  const [srcDoc,setSrcDoc] = useState('')
  useEffect(()=>{
     const timeout = setTimeout(()=>{
       setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    
    </html>
    `
       )
     },250)

     return () => clearTimeout(timeout)
  },[html,css,js])    

   
  return (
    <>
    <div className="pane top-pane">
    HTML
     <Editor
     language='xml'
     displayName='Html'
     value={html}
     onChange={setHtml}/> 
      Css
     <Editor
     language='css'
     displayName='CSS'
     value={css}
     onChange={setCss}/>
        javascript
     <Editor
     language='javascript'
     displayName='jS'
     value={js}
     onChange={setJs}/>
     
    </div>
    <div className="pane">
      <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"/>

    </div>
    </>
     
  );
}

export default App;
