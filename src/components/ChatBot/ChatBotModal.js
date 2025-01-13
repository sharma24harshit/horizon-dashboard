import React, { useState } from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Image } from '@chakra-ui/react';
import Insight_icon from "../../assets/img/dashboards/Insight_icon.png";
import chat_icon from "../../assets/img/dashboards/chat_icon.png";
import ChatTab from './ChatTab';
import InsightTab from './InsightTab';
import "./style.css";

const ChatBotModal = ({ setIsOpen, isOpen }) => {
    return (
        <Box
            display={isOpen ? 'block' : 'none'}
            width='490px'
            height='510px'
            borderRadius='40px'
            border={'1px solid rgba(225,225,225,1)'}
            position="fixed"
            right='10px'
            top='10px'
            zIndex={10}
            backgroundColor='rgba(255,255,255,1)'
            overflow='hidden'
            className='chatBotModalContainer'
        >
            <Tabs>
                <TabList justifyContent={'space-around'}
                className='tabs-Header'
                >
                    <Tab>
                        <Image src={Insight_icon} marginRight='5px' />
                        Insights</Tab>
                    <Tab>
                        <Image src={chat_icon} marginRight='5px' />
                        Chat</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <InsightTab isOpen={isOpen}/>
                    </TabPanel>
                    <TabPanel>
                        <ChatTab />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default ChatBotModal