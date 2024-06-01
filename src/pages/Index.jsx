import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, VStack, Text, HStack, Box, Image, Heading, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaUsers, FaImages, FaProjectDiagram, FaPhone } from "react-icons/fa";

const Vision = () => (
  <Container centerContent>
    <Heading>Vision</Heading>
    <Text>Our vision is to create an inclusive society where every individual, regardless of their abilities, can lead a dignified and fulfilling life.</Text>
  </Container>
);

const AboutUs = () => (
  <Container centerContent>
    <Heading>About Us</Heading>
    <Text>JK Divyang Welfare Association is dedicated to the empowerment and inclusion of differently-abled individuals through various initiatives and programs.</Text>
  </Container>
);

const Members = () => (
  <Container centerContent>
    <Heading>Members</Heading>
    <VStack spacing={4}>
      <Box>
        <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzI0NzkxOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Member 1" boxSize="150px" />
        <Text>Member 1</Text>
      </Box>
      <Box>
        <Image src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzI0NzkxOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Member 2" boxSize="150px" />
        <Text>Member 2</Text>
      </Box>
    </VStack>
  </Container>
);

const MediaGallery = () => (
  <Container centerContent>
    <Heading>Media Gallery</Heading>
    <VStack spacing={4}>
      <Image src="https://images.unsplash.com/photo-1658247274520-49b65d2717fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvfGVufDB8fHx8MTcxNzI0NzkyMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Event 1" boxSize="300px" />
      <Image src="https://images.unsplash.com/photo-1701088898186-922b25dad2ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxldmVudCUyMHBob3RvfGVufDB8fHx8MTcxNzI0NzkyMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Event 2" boxSize="300px" />
    </VStack>
  </Container>
);

const UpcomingProjects = () => (
  <Container centerContent>
    <Heading>Upcoming Projects</Heading>
    <Text>We have several exciting projects in the pipeline aimed at enhancing the lives of differently-abled individuals.</Text>
  </Container>
);

const ContactUs = () => (
  <Container centerContent>
    <Heading>Contact Us</Heading>
    <Text>Email: contact@jkdivyang.org</Text>
    <Text>Phone: +1234567890</Text>
  </Container>
);

const Navbar = () => (
  <HStack spacing={4} padding={4} bg="gray.100" width="100%" justifyContent="center">
    <Link to="/">
      <IconButton aria-label="Home" icon={<FaHome />} />
    </Link>
    <Link to="/about-us">
      <IconButton aria-label="About Us" icon={<FaInfoCircle />} />
    </Link>
    <Link to="/members">
      <IconButton aria-label="Members" icon={<FaUsers />} />
    </Link>
    <Link to="/media-gallery">
      <IconButton aria-label="Media Gallery" icon={<FaImages />} />
    </Link>
    <Link to="/upcoming-projects">
      <IconButton aria-label="Upcoming Projects" icon={<FaProjectDiagram />} />
    </Link>
    <Link to="/contact-us">
      <IconButton aria-label="Contact Us" icon={<FaPhone />} />
    </Link>
  </HStack>
);

const Index = () => {
  return (
    <Router>
      <Container maxW="container.md" centerContent>
        <Navbar />
        <Routes>
          <Route path="/" element={<Vision />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/media-gallery" element={<MediaGallery />} />
          <Route path="/upcoming-projects" element={<UpcomingProjects />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default Index;
