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
           <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.8545 33.875C45.5679 30.2133 46.179 26.1322 45.6131 22.1293C45.0473 18.1263 43.329 14.3745 40.6678 11.3312C38.0066 8.28795 34.5174 6.08469 30.6257 4.99009C26.7339 3.89549 22.6078 3.95684 18.7503 5.16665C16.1221 5.97727 13.6825 7.30538 11.5752 9.07282C9.46787 10.8403 7.73533 13.0113 6.47951 15.4583C4.84326 18.6342 4.0512 22.1775 4.17944 25.7478C4.30768 29.3181 5.35191 32.7955 7.2118 35.8458C9.07169 38.8961 11.6847 41.4168 14.7999 43.1659C17.9151 44.9149 21.4277 45.8335 25.0003 45.8333C26.1526 45.8397 27.3031 45.7421 28.4378 45.5417C30.3204 45.2364 32.1508 44.6684 33.8753 43.8542L40.2503 45.1667C41.3309 45.3867 42.4547 45.1695 43.3753 44.5625C43.8334 44.2611 44.2274 43.8722 44.5349 43.4181C44.8423 42.9641 45.0572 42.4539 45.167 41.9167C45.292 41.3681 45.292 40.7985 45.167 40.25L43.8545 33.875Z" fill="white"/>
<path d="M24.9998 32H25.0098M21.2168 20.6969C21.7573 19.1275 23.2469 18 24.9998 18C27.2089 18 28.9998 19.7909 28.9998 22C28.9998 23.6565 27.9929 25.0778 26.5578 25.6852C25.817 25.9988 25.4466 26.1556 25.317 26.2767C25.1627 26.4209 25.1334 26.4651 25.0608 26.6634C24.9998 26.8299 24.9998 27.0866 24.9998 27.6V29" stroke="#4318FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            {/* <Box
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
                    src={comma_svg}
                />
            </Box> */}
            {/* <Image
                    width='24px'
                    height='24px'
                    fit
                    src={comma_svg}
                /> */}
        </Box>


    )
}

export default ChatBot