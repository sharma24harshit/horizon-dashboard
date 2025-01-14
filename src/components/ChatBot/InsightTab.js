import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Checkbox, Image, Spinner, Text, Textarea } from '@chakra-ui/react';
import {InsightMockData} from "./data";


const InsightTab = () => {
    const [data, setData] = useState([]);

useEffect(()=>{
  const initializedData = InsightMockData.map((el) => ({
    ...el,
    checked: false,
  }));
  setData(initializedData);
},[])

const handleCheckboxChange = (id) => {
  const updatedData = data.map((item) =>
    item.id === id ? { ...item, checked: true } : item
  );
  setData(updatedData);
  setTimeout(() => {
    const filteredData = updatedData.filter((item) => item.id !== id);
    setData(filteredData);
  }, 200);
};

    return (
      <Box className="chat-tab-container" padding="3px">
      <Box 
      padding="3px">
        {data && data.map((item, index) => (
          <Text key={item?.id} padding="5px"
           backgroundColor="gray.100" 
           borderRadius="5px" 
           marginBottom="8px"
           className='insight-text'
           >
            <Image src={item?.icon} width={'25px'} objectFit={'fit'}/>
            {item?.suggestion}
            <Checkbox 
            isChecked={item?.checked}
            onChange={() => handleCheckboxChange(item?.id)}
            />
          </Text>
        ))}
      </Box>
    </Box>
    )
}

export default InsightTab