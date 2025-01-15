import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Image, Spinner, Text, Textarea } from '@chakra-ui/react';
import { IoSend  } from "react-icons/io5";
import active_send_btn from "../../assets/img/dashboards/send_btn_active.svg";
import disable_send_btn from "../../assets/img/dashboards/send_btn_disabled.svg";
import {ChatMockData} from "./data";

const ChatTab = () => {
    const [chatText, setChatText] = useState("");
    const [chatHistory, setChatHistory] = useState([]); // To hold chat messages
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef(null); // Ref for scrolling

    useEffect(() => {
        setChatHistory([]);
    }, [])

    // Scroll to bottom when chat history updates
  useEffect(() => {
    if(chatHistory.length > 0){
        if (chatContainerRef.current) {
            //console.log(chatContainerRef.current.scrollHeight)
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }
  }, [chatHistory]);

    const handleChatSubmit = () => {
        if (!chatText.trim()) return; // Prevent empty submissions
        // Add user message to chat history
        const userMessage = { type: "user", text: chatText };
        setChatHistory((prev) => [...prev, userMessage]);
        setChatText(""); // Clear input
        // Simulate bot thinking and responding
        setIsTyping(true);
        setTimeout(() => {
            // Find the matching question
            const matchedQA = ChatMockData.find(
                (item) =>
                    item.question.toLowerCase() === chatText.trim().toLowerCase()
            );
            // Add bot response
            const botMessage = {
                type: "bot",
                text: matchedQA
                    ? matchedQA.answer
                    : "Sorry, I don't have an answer for that.",
            };
            setChatHistory((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500); // 1.5-second delay for typing effect
    };

    const handleSuggestedText = (value) => {
        // Automatically respond to suggested questions
        const userMessage = { type: "user", text: value };
        setChatHistory((prev) => [...prev, userMessage]);

        // Simulate bot thinking and responding
        setIsTyping(true);
        setTimeout(() => {
            const matchedQA = ChatMockData.find((item) => item.question === value);
            const botMessage = {
                type: "bot",
                text: matchedQA
                    ? matchedQA.answer
                    : "Sorry, I don't have an answer for that.",
            };
            setChatHistory((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <Box
            className={chatHistory.length ? 
                'chat-tab-container':
            'chat-tab-container-with-flex'}
        >
            {/* Suggested Questions */}
            <Box 
            className='main-chat-box'
            height={
                { base: chatHistory.length ? '74%' : '55%',
                sm:chatHistory.length ? '74%' : '55%',
                 md: chatHistory.length ? '74%' : '55%',
                  lg: chatHistory.length ? '80%' : '55%' }
            }
            marginBottom={{ base: "10px", sm: "10px", md: "5px", lg: "0px" }}
            // border={'1px solid red'}
            ref={chatContainerRef} // Reference to scroll container
            >

            <Box className='chatTab-top-container'>
            <Text className='mainText'>Hi,</Text>
            <Text className='subText'>How can i assist you today?</Text>
            <Box className='suggestion-container'>
            {ChatMockData && ChatMockData.map((item, index) => (
                    <Text
                        key={index}
                        className='suggestion-text'
                        onClick={() => handleSuggestedText(item.question)}
                    >
                        {item?.question}

                    </Text>
                ))}
            </Box>
            </Box>
            {/* Chat History Container*/}
            {chatHistory.length ? <Box
                className="chat-history"
                marginBottom="1px"
                marginTop="7px"
                // maxHeight="200px"
                // overflowY="auto"
            >
                {chatHistory && chatHistory.map((chat, index) => (
                    <Box
                        key={index}
                        display='flex'
                        justifyContent={chat.type === "user" ? "right" : "left"}
                        textAlign={"left"}
                        marginBottom="5px"

                    >
                        <Text
                            display="inline-block"
                            padding="10px"
                            borderRadius="15px"
                            fontSize='14px'
                            lineHeight='24px'
                            backgroundColor={
                                chat.type === "user" ? "rgba(245, 245, 245, 1)" : ""
                            }
                            color={chat.type === "user" ? "rgba(51, 51, 51, 1)" : "rgba(51, 51, 51, 1)"}
                            maxWidth="80%"
                            whiteSpace="pre-wrap"
                        >
                            {chat.text}
                        </Text>
                    </Box>
                ))}
                {isTyping && (
                    <Box textAlign="left" marginBottom="5px">
                        <Text
                            display="inline-block"
                            padding="10px"
                            borderRadius="15px"
                            backgroundColor="gray.100"
                            color="gray.800"
                            maxWidth="70%"
                        >
                            <Spinner size="sm" marginRight="8px" /> Typing...
                        </Text>
                    </Box>
                )}
            </Box> : ""}
            </Box>
            {/* Input Box Container */}
            <Box className='inputBox'>
                <Box className='submitChatBtnDiv'
                onClick={handleChatSubmit}
                >
                    <Image
                    width='25px'
                    height='25px'
                    fit
                    src={ chatText?.length ? active_send_btn : disable_send_btn }
                />
                </Box>
                <Textarea resize="none" placeholder="Type a message"
                className='Chat-textField'
                borderRadius='30px'
                // _placeholder={{
                    padding= "20px"
                //   }}
                height='100px'
                    value={chatText}
                    onChange={(e) => setChatText(e.target.value)}
                />
            </Box>
        </Box>
    )
}

export default ChatTab