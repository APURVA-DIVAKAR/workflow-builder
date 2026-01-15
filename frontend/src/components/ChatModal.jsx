
import { api } from "../api";
import { useState } from "react";

export default function ChatModal(){
    const[ query, setQuery ] = useState("");
    const[ answer,setAnswer ] = useState("");

    const send = async () => {
        const res = await api.post("/chat",{ query,use_kb:true });
        setAnswer(res.data.answer);
    }

    return(
        <div>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={send}>Ask</button>
            <p>{answer}</p>
        </div>
    );
}