import Head from 'next/head';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="So, you want to travel to SPACE ?" />
      </Head>
      <Stack component="main"
        justifyContent="space-between"
        sx={{
          backgroundImage: {
            xs: 'url(/assets/home/background-home-mobile.jpg)',
            sm: 'url(/assets/home/background-home-tablet.jpg)',
            md: 'url(/assets/home/background-home-desktop.jpg)',
          },
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '100vh',
        }}>
        <Navbar currentPage='home' />
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 8, sm: 18, md: 10 }}
          justifyContent="space-between"
          alignItems="center"
          mr={{ sm: 0, md: 22 }}
          mb={{ xs: 6, sm: 10, md: 17 }}
          mt={{ sm: 0, md: 13 }}
        >
          <Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }}
            sx={{
              ml: { sm: 0, md: 20 },
            }}>
            <Typography component='p' variant='h5' color='secondary' textTransform="uppercase">
              So, you want to travel to
            </Typography>
            <Typography variant='h1' color='primary' textTransform="uppercase" sx={{
              mt: '1 !important',
            }}>
              Space
            </Typography>
            <Typography component='p' variant='body1' color='secondary'
              textAlign={{ xs: "center", md: "left" }}
              sx={{
                maxWidth: { xs: '39ch', sm: '49ch', md: '46ch' },
                lineHeight: '32px',
                mt: '0 !important',
              }}
            >
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </Typography>
          </Stack>
          <Stack justifyContent="center" alignItems="center" sx={{
            width: { xs: '150px', sm: '242px', md: '274px' },
            height: { xs: '150px', sm: '242px', md: '274px' },
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            "&:hover": {
              cursor: 'pointer',
              boxShadow: "0px 0px 0px 6vw rgba(255, 255, 255, 0.1)",
            }
          }}
          >
            <Link href='/destination'>
              <Typography variant='h4' color='dark' textTransform="uppercase">
                Explore
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack >
    </>
  )
}
