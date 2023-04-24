import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import jsPDF from "jspdf";

function Resume() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  function generatePdf() {
    const doc = new jsPDF();

    // Define the x and y position of the text
    let x = 20;
    let y = 20;

    // Add the resume details to the PDF
    doc.setFont("Times New Roman");
    doc.setFontSize(18);
    doc.text("Resume Details", x, y);
    y += 20;
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, x, y);
    y += 10;
    doc.text(`Email: ${email}`, x, y);
    y += 10;
    doc.text(`Phone: ${phone}`, x, y);
    y += 10;
    doc.text(`Summary: ${summary}`, x, y);
    y += 10;
    doc.text(`Experience: ${experience}`, x, y);
    y += 10;
    doc.text(`Education: ${education}`, x, y);

    // Save the PDF
    doc.save("resume.pdf");
  }

  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={10}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor={"blue.200"}
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading size="lg" fontWeight="semibold">
            Create your resume
          </Heading>
        </Box>

        <SimpleGrid columns={2} spacing={3} mt={5}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>

          <FormControl id="summary">
            <FormLabel>Summary</FormLabel>
            <Textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </FormControl>

          <FormControl id="experience">
            <FormLabel>Experience</FormLabel>
            <Textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </FormControl>

          <FormControl id="education">
            <FormLabel>Education</FormLabel>
            <Textarea
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </FormControl>
        </SimpleGrid>

        <Stack direction="row" spacing={4} mt={5}>
          <Button colorScheme="blue" onClick={generatePdf}>
            Generate PDF
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Resume;
