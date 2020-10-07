import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col, Container, Form, Button, Alert } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

import axios from "axios";
export const FooterComponentTemplate = ({ contactInfo }) => {
  const [formData, updateFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(process.env.SERVER_URL);
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      axios
        .post(`${process.env.SERVER_URL}/newsletter`, {
          values: formData,
        })
        .then((res) => {
          setSubmitted(true);
        });
    }
  };
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="d-flex flex-row justify-content-center ">
          <Col className="text-center">
            Made with <FaHeart style={{ color: "red" }} /> by Alex Johnson
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const FooterComponent = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { templateKey: { eq: "footer-component" } }) {
            frontmatter {
              contactInfo
            }
          }
        }
      `}
      render={({ markdownRemark }) => {
        const { frontmatter } = markdownRemark;
        return <FooterComponentTemplate contactInfo={frontmatter.contactInfo} {...props} />;
      }}
    />
  );
};

export default FooterComponent;
