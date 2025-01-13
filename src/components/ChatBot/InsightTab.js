import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Image, Spinner, Text, Textarea } from '@chakra-ui/react';
import {InsightMockData} from "./data";
import icon1 from "../../assets/img/dashboards/icon1.png";

const InsightTab = ({isOpen}) => {
    const [data, setData] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentResponse, setCurrentResponse] = useState("");

// useEffect(()=>{
//   if(isOpen){
//     AppendData()
//   }
// },[isOpen])

const AppendData = async () => {
  setData([]); // Clear existing data
  for (const item of InsightMockData) {
    await simulateTyping(item?.suggestion); // Type out each response
  }
};

const simulateTyping = (text) => {
  return new Promise((resolve) => {
    setIsTyping(true);
    setCurrentResponse(""); // Clear current response

    let index = 0;
    const interval = setInterval(() => {
      setCurrentResponse((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setIsTyping(false);
        setData((prev) => [...prev, text]); // Add completed response to data
        resolve(); // Resolve the promise when typing is done
      }
    }, 30); // Adjust typing speed (milliseconds per character)
  });
};

    // const AppendData = () => {
    //   setData([]); // Clear existing data
    //   setIsTyping(true);
    //   InsightMockData && InsightMockData.forEach((item, index) => {
    //     setTimeout(() => {
    //       setData((prev) => [...prev, item]);
    //       if (index === InsightMockData.length - 1) {
    //         setIsTyping(false); // Stop typing indicator when done
    //       }
    //     }, 1500 * (index + 1)); // Delay increases for each item
    //   });
    // };

    return (
      <Box className="chat-tab-container" padding="3px">
      <Box 
      padding="3px">
        {InsightMockData && InsightMockData.map((item, index) => (
          <Text key={index} padding="5px"
           backgroundColor="gray.100" 
           borderRadius="5px" 
           marginBottom="5px"
           className='insight-text'
           >
            <Image src={icon1} width={'25px'} objectFit={'fit'}/>
            {item?.suggestion}
          </Text>
        ))}
        {/* {isTyping && (
          <Box display="flex" alignItems="center" marginTop="10px">
            <Text
              padding="5px"
              backgroundColor="gray.100" 
              borderRadius="5px"
              display="inline-block"
              color="blue.800"
              marginRight="5px"
              maxWidth="80%"
              whiteSpace="pre-wrap"
            >
              {currentResponse}
            </Text>
            <Spinner size="sm" color="blue.800" />
          </Box>
        )} */}
        {/* {isTyping && (
          <Box display="flex" alignItems="center" marginTop="10px">
            <Spinner size="sm" marginRight="5px" />
            <Text>Bot is typing...</Text>
          </Box>
        )} */}
      </Box>
    </Box>
    )
}

export default InsightTab