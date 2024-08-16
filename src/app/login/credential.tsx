// import React from 'react';

// const credential = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default credential;

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function AccordionUsage() {
    return (
        <div>
            <Typography sx={{ textAlign: 'center', marginBottom: 1, fontWeight: 'bold' }}>Demo Credential</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Buyer
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>saki@gamil.com</Typography>
                    <Typography>Password: 123456</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Seller
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Email: kamrul@gmail.com</Typography>
                    <Typography>Password: 123456</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
