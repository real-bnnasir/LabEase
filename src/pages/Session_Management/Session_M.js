import React, { useState, useEffect } from "react";
import { Box, Typography,} from "@mui/material";
import { Row, Col, } from "reactstrap";
import Session from "./Session/Session";
import Announcement from "./Announcement/Announcement"

const Session_M = () => {

  return (
    <Box>
      <div className="d-flex justify-content-center align-items-center">
        Session_Management is not ready
      </div>
      <Typography variant="h5" textAlign="center" fontWeight="600">
        Lab Session / Annouuncement Managemen
      </Typography>
      <Row>
        <Col md={6}>
          <Session />
        </Col>

        {/* ================================================Announcements================================== */}

        <Col md={6}>
          <Announcement />
        </Col>
      </Row>
    </Box>
  );
};

export default Session_M;
