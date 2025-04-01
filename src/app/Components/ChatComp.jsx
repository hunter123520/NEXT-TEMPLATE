'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ChatComp.css';
import { Avatar, TextField, Button, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import APIService from '../Api/APIService';
import Image from 'next/image';
import resg from '../Images/res1.jpg';
import user from '../Images/user.png';
import { useTranslation } from 'react-i18next';

function ChatComp(){
    const { t, i18n } = useTranslation();
    const [text,setText] = useState(t("How can i recycle a plastic bag"))
    const [output, setoutput] = useState("");
    const [waiting, setWaiting] = useState(false);
    const [answer, setAnswer] = useState([]);
    const [questions,setquestions] = useState([]);
    const handleSubmit = (question) => {
        setWaiting(true);

        console.log(question)

        APIService.chat({question})
          .then((response) => {
            setoutput(response["output"]);
            setWaiting(false);
            setAnswer([...answer,response["output"]])
          })
          .catch((error) => console.log("error", error));
    };

    return(
        <div style={{width:"100%"}}>
            <div className='descotitle' style={{textAlign:"center"}}>
            {t("Recycling Garbage")}  <span style={{color: "#578a25"}}>{t("Assistant")} </span>
                    </div>
                    <div style={{height:50}}>

                    </div>
            <div className="Scrollerbox">
            <div className='w-100'>
                {
                    questions.map((element,i) => {
               
                        return (<>
                        <div className='SendMessageContainer' key={"send"+i}>
                            <div className='ChatImageHolder'>
                            <Avatar >
                                <Image src={user}/>
                            </Avatar>
                            </div>
                            <div className='SendContentHolder'>
                            {element}
                            </div>
                        </div>
                        <div className='ReceiverMessageContainer' key={"recieve"+i}>
                        <div className='ChatImageHolder'>
                            <Avatar >
                                 <Image src={resg}/>
                            </Avatar>
                            </div>
                            <div className='ReceiverContentHolder'>
                            {output === "" && !waiting ? (
                                <></>
                            ) : (
                                <>
                                
                                {waiting && i==questions.length-1? (
                                    <div
                                    className="d-flex flex-column justify-content-center align-items-center p-4"
                                    style={{ gap: "15px" }}
                                >
                                    <CircularProgress />
                                    {/* <span>This may take some time, please be patient</span> */}
                                </div>
                                ) : (
                                    answer[i]
                                )}
                                </>
                            )}
                            </div>
                        </div>
                                    </>)
                                })
                            }
            </div>
            </div>
            <div style={{height:50}}>

                    </div>
            <div className="d-flex flex-row justify-content-center align-center">
                <TextField className="BJOSS" id="filled-basic" label="Your Question" variant="filled" value={text} onChange={(target)=>{
                    setText(target.target.value)
                }}/>
                <Button className="" variant="contained" endIcon={<SendIcon />} onClick={() => {
                            if(text != ""){
                                setquestions([...questions,text])
                                handleSubmit(text);
                                setText("")
                            }
                        
                    }}>
                    {t("Send")}
                </Button>
            </div>
        </div>
    );
}

export default ChatComp;

// import "bootstrap/dist/css/bootstrap.min.css";
// import '../Styles/ChatComp.css';
// import { Avatar } from "@mui/material";
// import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
// import TextField from '@mui/material/TextField';
// import { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
// import SendIcon from '@mui/icons-material/Send';
// import APIService from "../Api/APIService";
// import { CircularProgress } from "@mui/material";
// import resg from "../Images/res1.jpg";
// import user from "../Images/user.png";
// import { useTranslation } from "react-i18next";
// import Image from "next/image";
// function ChatComp(){
//     const { t, i18n } = useTranslation();
//     const [text,setText] = useState(t("How can i recycle a plastic bag"))
//     const [output, setoutput] = useState("");
//     const [waiting, setWaiting] = useState(false);
//     const [answer, setAnswer] = useState([]);
//     const [questions,setquestions] = useState([]);
//     const handleSubmit = (question) => {
//         setWaiting(true);

//         console.log(question)

//         APIService.chat({question})
//           .then((response) => {
//             setoutput(response["output"]);
//             setWaiting(false);
//             setAnswer([...answer,response["output"]])
//           })
//           .catch((error) => console.log("error", error));
//     };

//     return(
//         <div style={{width:"100%"}}>
//             <div className='descotitle' style={{textAlign:"center"}}>
//             {t("Recycling Garbage")}  <span style={{color: "#578a25"}}>{t("Assistant")} </span>
//                     </div>
//                     <div style={{height:50}}>

//                     </div>
//             <div className="Scrollerbox">
//             <ChatBox>
//                 {
//                     questions.map((element,i) => {
               
//                         return (<>
//                         <SenderMessage avatar={
//                             <Avatar >
//                                 <Image src={user}/>
//                             </Avatar>} 
//                             key={"send"+i}>
//                             {element}
//                         </SenderMessage>
//                         <ReceiverMessage avatar={<Avatar >
//                             <Image src={resg}/>
//                         </Avatar>} key={"recieve"+i}>
//                         {output === "" && !waiting ? (
//                                 <></>
//                             ) : (
//                                 <>
                                
//                                 {waiting && i==questions.length-1? (
//                                     <div
//                                     className="d-flex flex-column justify-content-center align-items-center p-4"
//                                     style={{ gap: "15px" }}
//                                 >
//                                     <CircularProgress />
//                                     {/* <span>This may take some time, please be patient</span> */}
//                                 </div>
//                                 ) : (
//                                     answer[i]
//                                 )}
//                                 </>
//                             )}
//                                     </ReceiverMessage>
//                                     </>)
//                                 })
//                             }
//             </ChatBox>
//             </div>
            // <div style={{height:50}}>

            //         </div>
            // <div className="d-flex flex-row justify-content-center align-center">
            //     <TextField className="BJOSS" id="filled-basic" label="Your Question" variant="filled" value={text} onChange={(target)=>{
            //         setText(target.target.value)
            //     }}/>
            //     <Button className="Buttonqsd" variant="contained" endIcon={<SendIcon />} onClick={() => {
            //                 if(text != ""){
            //                     setquestions([...questions,text])
            //                     handleSubmit(text);
            //                     setText("")
            //                 }
                        
            //         }}>
            //         {t("Send")}
            //     </Button>
            // </div>
//         </div>
//     );
// }

// export default ChatComp;