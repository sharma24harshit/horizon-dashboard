import React, { useEffect, useState, useRef } from 'react';
import { Box, Checkbox, Image, Text } from '@chakra-ui/react';
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
      <Box className="insight-tab-container" >
      <Box 
      >
        {data && data.map((item, index) => (
          <Text key={item?.id}
           borderRadius="10px" 
           className='insight-text'
           >
            <Image src={item?.icon}  objectFit={'fit'}/>
            {item?.suggestion}
            <Checkbox 
            isChecked={item?.checked}
            onChange={() => handleCheckboxChange(item?.id)}
            marginLeft='auto'
            />
          </Text>
        ))}
      </Box>
    </Box>
    )
}

export default InsightTab