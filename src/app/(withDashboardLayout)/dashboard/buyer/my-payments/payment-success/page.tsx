// "use client";
// import { Box, Button, Typography } from '@mui/material';
// import React from 'react';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const SuccessPage = () => {
//       const { width, height } = useWindowSize();
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const tran_id = searchParams.get("tran_id");
//     const amount = searchParams.get("amount");
//     return (
//         <Box sx={{ height: 'calc(100vh - 104px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
//               <Confetti width={width} height={height} />
//             <CheckBoxIcon sx={{ color: 'green', fontSize: '100px' }} />
//             <Typography sx={{ fontSize: { xs: "19px", sm: "21px", md: "24px", lg: "28px", marginBottom: '15px' }, fontWeight: "bold", }} >
//                 Your payment was successful 🎉
//             </Typography>

//             <Typography sx={{ fontSize: '14px' }}>Transaction Id: <span style={{ fontWeight: 'bold' }}>{tran_id || ''}</span></Typography>
//             <Typography sx={{ fontSize: '14px' }}>Amount: <span style={{ fontWeight: 'bold' }}>{amount || ''} TK</span></Typography>
//             <Typography sx={{ maxWidth: '380px', textAlign: 'center', marginTop: '15px' }}>Thank you for your payment. we will be in contact with more details shortly</Typography>
//             <Button onClick={()=> router.push(`/dashboard/buyer/my-payments`)} sx={{ marginTop: '10px' }} variant='outlined' size='small' color='success'>View Payment</Button>
//         </Box>
//     );
// };

// export default SuccessPage;


"use client";
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useRouter, useSearchParams } from 'next/navigation';
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const router = useRouter();
  const searchParams = useSearchParams();
  const tran_id = searchParams.get("tran_id");
  const amount = searchParams.get("amount");

  // window size detect
  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Box
      sx={{
        height: 'calc(100vh - 104px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🎉 Full screen Confetti effect */}
      <Confetti
        width={size.width}
        height={size.height}
        numberOfPieces={400}      // কতগুলো কনফেটি পড়বে
        gravity={0.2}             // পড়ার স্পিড / গ্র্যাভিটি
        recycle={false}           // একবারই পড়বে
      />

      <CheckBoxIcon sx={{ color: 'green', fontSize: '100px' }} />
      <Typography
        sx={{
          fontSize: { xs: "19px", sm: "21px", md: "24px", lg: "28px" },
          marginBottom: '15px',
          fontWeight: "bold",
        }}
      >
        Your payment was successful 🎉
      </Typography>

      <Typography sx={{ fontSize: '14px' }}>
        Transaction Id: <span style={{ fontWeight: 'bold' }}>{tran_id || ''}</span>
      </Typography>
      <Typography sx={{ fontSize: '14px' }}>
        Amount: <span style={{ fontWeight: 'bold' }}>{amount || ''} TK</span>
      </Typography>
      <Typography
        sx={{ maxWidth: '380px', textAlign: 'center', marginTop: '15px' }}
      >
        Thank you for your payment. We will be in contact with more details shortly.
      </Typography>

      <Button
        onClick={() => router.push(`/dashboard/buyer/my-payments`)}
        sx={{ marginTop: '10px' }}
        variant='outlined'
        size='small'
        color='success'
      >
        View Payment
      </Button>
    </Box>
  );
};

export default SuccessPage;
