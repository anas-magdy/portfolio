import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
    <VStack style={{backgroundColor:"white",color:"black",borderRadius:"10px"}}>
    <Image src={imageSrc} style={{borderRadius:"10px"}}></Image>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"start",paddingLeft:"10px",paddingBottom:"10px"}}>
        <Text fontSize={17} fontWeight={"bold"} m={"5px"}>{title}</Text>
        <Text m={"5px"}>{description}</Text>
        <span m={"5px"}>See More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
      </div>
      

    </VStack>
    
    
    </>
  );
};

export default Card;
