import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const SuccessPage = () => {
    return (
        <Box sx={{ height: 'calc(100vh - 104px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <CheckBoxIcon sx={{ color: 'green', fontSize: '100px' }} />
            <Typography sx={{ fontSize: '14px' }}>Transaction Id: <span style={{ fontWeight: 'bold' }}>TXMS7S2508162003</span></Typography>
            <Typography sx={{ fontSize: '14px' }}>Amount: <span style={{ fontWeight: 'bold' }}>550 TK</span></Typography>
            <Typography sx={{ maxWidth: '380px', textAlign: 'center', marginTop: '20px' }}>Thank you for your payment. we will be in contact with more details shortly</Typography>
            <Button sx={{ marginTop: '10px' }} variant='outlined' size='small' color='success'>Go Payment</Button>
        </Box>
    );
};

export default SuccessPage;