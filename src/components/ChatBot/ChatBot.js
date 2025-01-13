import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import comma_icon from "../../assets/img/dashboards/comma_icon.png";

const ChatBot = ({ handleBotIconClick }) => {

    return (
        <Box
            width='100px'
            height='100px'
            backgroundColor='rgba(67, 24, 255, 1)'
            borderRadius='50%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            position="fixed"
            right='10px'
            top='520px'
            cursor='pointer'
            onClick={handleBotIconClick}
        >
            <Box
                width='50px'
                height='50px'
                backgroundColor={'rgba(255, 255, 255, 1)'}
                borderRadius='50%'
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Image
                    width='24px'
                    height='24px'
                    fit
                    src={comma_icon}
                />
            </Box>
        </Box>


    )
}

export default ChatBot