// import { Accordion, AccordionDetails, AccordionSummary, Alert, Snackbar, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Box, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

// const Credential = () => {
//         const [open, setOpen] = useState(false);
//     const [message, setMessage] = useState('');

//     const handleCopy = (text: string) => {
//         navigator.clipboard.writeText(text)
//             .then(() => {
//                 setMessage(`${text} copied to clipboard!`);
//                 setOpen(true); // Snackbar ওপেন করার জন্য
//             })
//             .catch(err => {
//                 console.error('Failed to copy text: ', err);
//             });
//     };

//     const handleClose = () => {
//         setOpen(false); // Snackbar বন্ধ করার জন্য
//     };

//     return (
//        <div>
//             <Typography sx={{ textAlign: 'center', marginBottom: 1, fontWeight: 'bold' }}>Demo Credential</Typography>

//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel3-content"
//                     id="panel3-header"
//                 >
//                     Buyer
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         Email: <span onClick={() => handleCopy('kamrul@gmail.com')} style={{ cursor: 'pointer', color: 'gray', textDecoration: 'none' }}>kamrul@gmail.com</span>
//                     </Typography>
//                     <Typography>
//                         Password: <span onClick={() => handleCopy('123456')} style={{ cursor: 'pointer', color: 'gray', textDecoration: 'none' }}>123456</span>
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>

//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel3-content"
//                     id="panel3-header"
//                 >
//                     Seller
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         Email: <span onClick={() => handleCopy('saki@gamil.com')} style={{ cursor: 'pointer', color: 'gray', textDecoration: 'none' }}>saki@gamil.com</span>
//                     </Typography>
//                     <Typography>
//                         Password: <span onClick={() => handleCopy('123456')} style={{ cursor: 'pointer', color: 'gray', textDecoration: 'none' }}>123456</span>
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>

//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel3-content"
//                     id="panel3-header"
//                 >
//                     Admin
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Typography>
//                         Email: <span onClick={() => handleCopy('abdullah@gmail.com')} style={{ cursor: 'pointer', color: 'gray', textDecoration: 'none' }}>abdullah@gmail.com</span>
//                     </Typography>
//                     <Typography>
//                         Password: <span onClick={() => handleCopy('123456')} style={{ cursor: 'pointer', color: 'gray', textDecoration: 'none' }}>123456</span>
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>


//             {/* Snackbar for showing toast message */}
//             <Snackbar open={open} autoHideDuration={700} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
//                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//                     {message}
//                 </Alert>
//             </Snackbar>
//         </div>
//     );
// };

// export default Credential;




export const CredentialButtons = () => {
    const { setValue } = useFormContext(); // এখান থেকে setValue পাওয়া যাবে

    const fillCredentials = (role: string) => {
        if (role === "buyer") {
            setValue("email", "kamrul@gmail.com");
            setValue("password", "123456");
        } else if (role === "seller") {
            setValue("email", "saki@gmail.com");
            setValue("password", "123456");
        } else if (role === "admin") {
            setValue("email", "abdullah@gmail.com");
            setValue("password", "123456");
        }
    };

    return (
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: 'center' }}>
            <Button variant="outlined" onClick={() => fillCredentials("buyer")}>Buyer</Button>
            <Button variant="outlined" onClick={() => fillCredentials("seller")}>Seller</Button>
            <Button variant="outlined" onClick={() => fillCredentials("admin")}>Admin</Button>
        </Box>
    );
};