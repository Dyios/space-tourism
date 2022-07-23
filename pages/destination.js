import { useState, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import destinationsData from '../data/destinationsData.json'
import Navbar from '../components/Navbar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';

const destinations = ["moon", "mars", "europa", "titan"]

export default function Destination() {
    const theme = useTheme()
    const desktop = useMediaQuery(theme.breakpoints.up("md"))
    const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [destination, setDestination] = useState('moon');

    return (
        <>
            <Head>
                <title>Destination</title>
            </Head>
            <Stack component="main"
                sx={{
                    backgroundImage: {
                        xs: 'url(/assets/destination/background-destination-mobile.jpg)',
                        sm: 'url(/assets/destination/background-destination-tablet.jpg)',
                        md: 'url(/assets/destination/background-destination-desktop.jpg)',
                    },
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    minHeight: '100vh',
                }}>
                <Navbar currentPage='destination' />
                <Stack direction="column" mx={{ xs: 0, md: 0 }} mt={{ sm: 1, md: 4.5 }}
                    mb={{ sm: 3, md: 5 }}
                    alignItems={{ xs: "center", sm: "normal" }}
                >
                    <Stack direction="row" spacing={{ xs: 2, sm: 3 }} ml={{ sm: 5, md: 20 }}>
                        <Typography component="h1" variant="h5"
                            color="primary" sx={{ opacity: 0.25 }}
                        >
                            01
                        </Typography>
                        <Typography component="h1" variant="h5" textTransform="uppercase"
                            color="primary"
                        >
                            Pick your destination
                        </Typography>
                    </Stack>
                    <Stack direction={{ xs: "column", md: "row" }} mt={{ xs: 4, sm: 8, md: 10 }}
                        justifyContent="center"
                        spacing={{ xs: 8, md: 20 }}
                        alignItems="center"
                        sx={{
                            '& > *:first-child': {
                                ml: { md: 7 },
                            }
                        }}
                    >
                        <img src={`/assets/destination/image-${destination}.webp`}
                            alt={destination}
                            width={desktop ? 445 : tablet ? 300 : mobile ? 170 : 100}
                            height={desktop ? 445 : tablet ? 300 : mobile ? 170 : 100}
                        />
                        <Stack spacing={1}
                            mt={{ xs: '26px !important', sm: '53px !important', md: '0px !important' }}
                        >
                            <Stack direction="row" spacing={4}
                                justifyContent={{ xs: "center", md: "flex-start" }}
                            >
                                {
                                    destinations.map((dest) => (
                                        <Box key={dest} pb={1.5} sx={{
                                            position: 'relative',
                                            '&:hover': {
                                                cursor: 'pointer',
                                            },
                                            '&:hover > hr:not(.active)': {
                                                backgroundColor: 'primary.main',
                                                opacity: '0.5',
                                            }
                                        }}>
                                            <Typography component="p" variant="nav"
                                                color={dest === destination ? 'primary' : 'secondary'}
                                                textTransform="uppercase"
                                                onClick={() => setDestination(dest)}
                                            >
                                                {dest}
                                            </Typography>
                                            <Divider className={destination === dest ? 'active' : ''}
                                                sx={{
                                                    position: 'absolute',
                                                    height: '3px',
                                                    width: '100%',
                                                    backgroundColor: destination === dest ? 'primary.main' : 'transparent',
                                                    bottom: "0px",
                                                    left: '0px',
                                                    marginLeft: '0px !important',
                                                }}
                                            />
                                        </Box>
                                    ))
                                }
                            </Stack>
                            <Typography component="h2" variant="h2" textTransform="uppercase"
                                color="primary"
                                mt={{ xs: '20px !important', sm: '32px !important', md: '52px !important' }}
                                textAlign={{ xs: "center", md: "left" }}
                            >
                                {destination}
                            </Typography>
                            <Typography component="p" variant="body1" color="secondary"
                                maxWidth={{ xs: '38.5ch', sm: '63.3ch', md: '44ch' }}
                                textAlign={{ xs: "center", md: "left" }}
                            >
                                {destinationsData[destination].description}
                            </Typography>
                            <Divider color='#383B4B' sx={{
                                mt: { xs: '32px !important', sm: '49px !important', md: '54px !important' }
                            }}
                            />
                            <Stack direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 4, sm: 10 }}
                                mt="28px !important"
                                justifyContent={{ xs: "center", md: "flex-start" }}
                            >
                                <Stack direction="column">
                                    <Typography component="h3" variant="subtitle2" color="secondary"
                                        textTransform="uppercase"
                                        textAlign={{ xs: "center", md: "left" }}
                                    >
                                        Avg. distance
                                    </Typography>
                                    <Typography component="p" variant="subtitle1" color="primary"
                                        textTransform="uppercase"
                                        textAlign={{ xs: "center", md: "left" }}
                                    >
                                        {destinationsData[destination].distance}
                                    </Typography>
                                </Stack>
                                <Stack direction="column">
                                    <Typography component="h3" variant="subtitle2" color="secondary"
                                        textTransform="uppercase"
                                        textAlign={{ xs: "center", md: "left" }}
                                    >
                                        Est. travel time
                                    </Typography>
                                    <Typography component="p" variant="subtitle1" color="primary"
                                        textTransform="uppercase"
                                        textAlign={{ xs: "center", md: "left" }}
                                    >
                                        {destinationsData[destination].travel}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}