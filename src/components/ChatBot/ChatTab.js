import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Spinner, Text, Textarea } from '@chakra-ui/react';
import { IoSendOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
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
    if (chatContainerRef.current) {
        console.log(chatContainerRef.current.scrollHeight)
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
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
            className='chat-tab-container'
            ref={chatContainerRef} // Reference to scroll container
        >
            <Text className='mainText'>Hi,</Text>
            <Text className='subText'>How can i assist you today?</Text>
            {/* Suggested Questions */}
            <Box>
                {ChatMockData && ChatMockData.map((item, index) => (
                    <Text
                        key={index}
                        border='1px solid rgba(225,225,225,1)'
                        borderRadius='15px'
                        backgroundColor='rgba(245, 245, 245, 1)'
                        padding='5px'
                        fontSize='14px'
                        textAlign='left'
                        cursor='pointer'
                        marginTop='8px'
                        onClick={() => handleSuggestedText(item.question)}
                    >
                        {item?.question}

                    </Text>
                ))}
            </Box>
            {/* Chat History Container*/}
            {chatHistory.length ? <Box
                className="chat-history"
                marginBottom="1px"
                marginTop="20px"
                // maxHeight="200px"
                // overflowY="auto"
                padding="5px"
                border="1px solid rgba(225,225,225,1)"
                borderRadius="10px"
            >
                {chatHistory && chatHistory.map((chat, index) => (
                    <Box
                        key={index}
                        display='flex'
                        justifyContent={chat.type === "user" ? "right" : "left"}
                        textAlign={"left"}
                        marginBottom="8px"
                    >
                        <Text
                            display="inline-block"
                            padding="10px"
                            borderRadius="15px"
                            backgroundColor={
                                chat.type === "user" ? "blue.100" : "rgba(250, 250, 250, 1)"
                            }
                            color={chat.type === "user" ? "blue.800" : "gray.800"}
                            maxWidth="80%"
                            whiteSpace="pre-wrap"
                        >
                            {chat.text}
                        </Text>
                    </Box>
                ))}
                {isTyping && (
                    <Box textAlign="left" marginBottom="8px">
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

            {/* Input Box Container */}
            <Box className='inputBox'>
                <Textarea resize="none" placeholder="Type a message"
                    value={chatText}
                    onChange={(e) => setChatText(e.target.value)}
                />
                {/* <Button className='submitChatBtn'
                    onClick={handleChatSubmit}
                    colorScheme="blue"
                >
                    <IoSendOutline />
                </Button> */}
            </Box>
        </Box>
    )
}

export default ChatTab