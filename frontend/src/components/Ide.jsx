import React, { useContext, useEffect, useState } from 'react'
import PostRequestContext from '../context/postman/CreatePostContext';
import './css/Ide.css'
import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { dracula } from '@uiw/codemirror-themes-all';
import Output from './output';
import Top from './top'

export default function Ide({choice,setBottomData}) {

  const context = useContext(PostRequestContext)
  const {data} = context
  const [runCount,setrunCount] = useState(1)
  const[extension,setExtension] = useState()
  const [value, setValue] = useState("console.log('hello world!');");
  const [language,setLanguage] = useState("nodejs")
  const [res,setRes] = useState('')

  useEffect(()=>{
    if (data.output){
      setRes(data.output)
    }
    else{
      setRes(data.errorMessage)
    }
    setBottomData(data)
    console.log(data)
  })

  
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);


}, []);

useEffect(()=>{
  if (choice === "javascript"){
    // extension=[langs.javascript]
    setExtension(langs.javascript)
    setValue("console.log('hello world!');")
    setLanguage("nodejs")
  }
  else if(choice === "python") {
    setExtension(langs.javascript)
    setValue("print('Hello World')")
    setLanguage("python")
  }
},[choice])


  return (
    <>
      <Top value={value} runCount={runCount} setrunCount={setrunCount} language={language}/>
      <div className='container1'>
        <div className='codemirror'>
          <CodeMirror style={{textAlign:'left'}}
            value={value}
            height="86vh"
            width='100%'
            theme={dracula}
            extensions={extension}
            onChange={onChange}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              indentOnInput: false,
            }}
          />
        </div>
        <div className='output'>
          <Output result={res}/>
        </div>
      </div>
    </>
  );
}
