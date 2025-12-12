import React, { createContext, useState } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [resultData, setResultData] = useState("");
    const [loading, setLoading] = useState(false);

    const onSent = async (prompt) => {
        setRecentPrompt(prompt);
        setResultData("");
        setLoading(true);

        const response = await runChat(prompt);

        setResultData(response);
        setLoading(false);
        setInput("");

        return response; 
    };

    window.onSent = onSent;

    const contextValue = {
        onSent,
        setRecentPrompt,
        recentPrompt,
        resultData,
        input,
        setInput,
        loading,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
