import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Video } from "./index"
import { Book } from "./index"

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    bar: {
        background: `white`,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        color: `black`,
        border: 0,
        boxShadow: `None`,
    },
    main: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}))

export default function SimpleTabs() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className={classes.main}>
            <AppBar position="static" className={classes.bar}>
                <Tabs value={value} onChange={handleChange} variant="fullWidth" centered>
                    <Tab label="Talks" aria-label="talks" {...a11yProps(0)} />
                    <Tab label="Books" aria-label="books" {...a11yProps(1)} />
                    <Tab label="Podcasts" aria-label="podcasts" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Video
                    videoSrcURL="https://www.youtube.com/embed/fC9da6eqaqg"
                    videoTitle="Teach Girls Bravery"
                    author="Reshma Saujani"
                />
                <Video
                    videoSrcURL="https://www.youtube.com/embed/H14bBuluwB8"
                    videoTitle="Grit"
                    author="Angela Lee Duckworth"
                />
                <Video
                    videoSrcURL="https://www.youtube.com/embed/u4ZoJKF_VuA"
                    videoTitle="Start with Why"
                    author="Simon Sinek"
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Book
                    bookSrcURL="https://bookshop.org/books/untamed-9781984801258/9781984801258"
                    bookImage="images/untamed.jpg"
                    bookTitle="Untamed"
                    author="Glennon Doyle"
                />
                <Book
                    bookSrcURL="https://bookshop.org/books/the-moment-of-lift-how-empowering-women-changes-the-world/9781250313577"
                    bookImage="images/untamed.jpg"
                    bookTitle="The Moment of Lift"
                    author="Melinda Gates"
                />
                <Book
                    bookSrcURL="https://bookshop.org/books/dare-to-lead-brave-work-tough-conversations-whole-hearts/9780399592522"
                    bookImage="images/untamed.jpg"
                    bookTitle="Dare to Lead"
                    author="Brene Brown"
                />
                <Book
                    bookSrcURL="https://bookshop.org/books/invisible-women-data-bias-in-a-world-designed-for-men-9781419729072/9781419729072"
                    bookImage="images/untamed.jpg"
                    bookTitle="Invisible Women"
                    author="Caroline Criado Perez"
                />
                <Book
                    bookSrcURL="https://bookshop.org/books/the-new-jim-crow-mass-incarceration-in-the-age-of-colorblindness-anniversary/9781620971932"
                    bookImage="images/untamed.jpg"
                    bookTitle="The New Jim Crow"
                    author="Michelle Alexander"
                />
                <Book
                    bookSrcURL="https://bookshop.org/books/so-you-want-to-talk-about-race/9781580058827"
                    bookImage="images/untamed.jpg"
                    bookTitle="So You Want To Talk About Race"
                    author="Ijeoma Olou"
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Book
                    bookSrcURL="https://podcasts.apple.com/us/podcast/ladybug-podcast/id1469229625"
                    bookImage="images/untamed.jpg"
                    bookTitle="Ladybug"
                    author="Emma Bostian, Sidney Buckner, Kelly Vaughn, and Ali Spittel"
                />
                <Book
                    bookSrcURL="https://podcasts.apple.com/us/podcast/ceo-school/id1525261018"
                    bookImage="images/untamed.jpg"
                    bookTitle="CEO School"
                    author="Suneera Madhani & Shannan Monson"
                />
            </TabPanel>
        </div>
    )
}
