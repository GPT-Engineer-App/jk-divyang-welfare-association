import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={RouterLink} to="/" color="white">
          Home
        </Link>
        <Link as={RouterLink} to="/about-us" color="white">
          About Us
        </Link>
        <Link as={RouterLink} to="/members" color="white">
          Members
        </Link>
        <Link as={RouterLink} to="/media-gallery" color="white">
          Media Gallery
        </Link>
        <Link as={RouterLink} to="/upcoming-projects" color="white">
          Upcoming Projects
        </Link>
        <Link as={RouterLink} to="/contact-us" color="white">
          Contact Us
        </Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
