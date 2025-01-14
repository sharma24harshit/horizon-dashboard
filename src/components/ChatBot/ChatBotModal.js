import React, { useState } from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Image, Button } from '@chakra-ui/react';
import insight_svg from "../../assets/img/dashboards/insight_svg.svg";
import chat_svg from "../../assets/img/dashboards/chat_svg.svg";
import ChatTab from './ChatTab';
import InsightTab from './InsightTab';
import "./style.css";

const ChatBotModal = ({ setIsOpen, isOpen }) => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <Box
            display={isOpen ? 'block' : 'none'}
            width='35vw'
            height='80vh'
            maxWidth='650px'
            maxHeight='955px'
            borderRadius='40px'
            border={'1px solid rgba(225,225,225,1)'}
            position="fixed"
            right='10px'
            bottom='110px'
            zIndex={10}
            backgroundColor='rgba(255,255,255,1)'
            overflow='hidden'
            className='chatBotModalContainer'
        >
            {/* <Tabs>
                <TabList justifyContent={'space-around'}
                className='tabs-Header'
                >
                    <Tab className='tab-text'>
                        <Image src={insight_svg} marginRight='5px' />
                        Insights</Tab>
                    <Tab className='tab-text'>
                        <Image src={chat_svg} marginRight='5px' />
                        Chat</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <InsightTab />
                    </TabPanel>
                    <TabPanel>
                        <ChatTab />
                    </TabPanel>
                </TabPanels>
            </Tabs> */}
           
                <Box className='tabs-Header'>
                  <button
                  onClick={()=>setActiveTab(1)}
                  style={activeTab ===1 ? {
                    borderBottom:"2px solid rgba(43, 54, 116, 1)",
                    color:"rgba(43, 54, 116, 1)"
                } : undefined}
                  className='tab-title'
                //   _hover={{backgroundColor:"none"}}
                  >
                  <Image src={insight_svg} 
                  className='tab_icon' 
                  />
                  Insights
                  </button>
                  <button
                   onClick={()=>setActiveTab(2)}
                   style={activeTab ===2 ? {
                    borderBottom:"2px solid rgba(43, 54, 116, 1)",
                    color:"rgba(43, 54, 116, 1)"
                } : undefined}
                   className='tab-title'
                  >
                  <Image src={chat_svg}  className='tab_icon'  />
                  Chat
                  </button>
                </Box>
               
                    {activeTab === 1 ?
                <InsightTab />:
                <ChatTab />}
                
           
        </Box>
    )
}

export default ChatBotModal