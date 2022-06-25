import { Flex, Text, Heading, Divider } from "@chakra-ui/react"

function SectionHeader({ number, title}) {
  return (
    <Flex mt="200px" alignItems="center" mb="40px">
      <Text color="color1.500" mr="5px" mb="-6px">{number}</Text>
      <Heading as="h2" color="white" fontSize="22px" fontWeight="500">{title}</Heading>
      <Divider ml="10px" width={{base: "50%", lg: "80%"}} zIndex="-1" borderWidth="-20px" mt={1} />
    </Flex>
  )
}

export default SectionHeader