import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import comma_svg from "../../assets/img/dashboards/comma_svg.svg";

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
            bottom="10px"
            cursor='pointer'
            onClick={handleBotIconClick}
        >

            <Image
                src={comma_svg}
            />
        </Box>
    )
}

export default ChatBot