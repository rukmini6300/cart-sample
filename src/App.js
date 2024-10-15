  import './App.css';
  import img2 from './components/images/img2.jpeg';
  import img3 from './components/images/img3.jpeg';
  import { useState,useEffect } from 'react';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  import StreetviewIcon from '@mui/icons-material/Streetview';
  import AdsClickIcon from '@mui/icons-material/AdsClick';
  import AccountTreeIcon from '@mui/icons-material/AccountTree';
  import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
  import AccordionActions from '@mui/material/AccordionActions';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import { Box, Typography, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
  import Accordian from './components/Accordian';
import Student from './components/Student';
  const tabItems = [
    {summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse dolor sit amet, consectetur.",content:"sometime project switching",label: 'Project View', img: img2 ,icon:<StreetviewIcon />},
    { summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse dolor sit amet, consectetur.",content:"sprint status and health",label: 'Scrum View', img: img3 ,icon: <AdsClickIcon />},
    { summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse dolor sit amet, consectetur.",content:"Project status with Respect To Time",label: 'Timeline view', img: img2 ,icon:<AccountTreeIcon />},
    { summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse dolor sit amet, consectetur.",content:"sometime project switching",label: ' Agile View', img:img3,icon:<SettingsInputAntennaIcon /> },
  ];
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  function App() {
    const [value, setValue] = useState(0);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        if(counter > 2 ){
          setCounter((counter) => 0);
        }else {
          setCounter((counter) => counter + 1);
        }
        
      }, 3000);
    });

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }; 
    return (
      <section className='silver-tab_head'>
        {/* <h1>Master agile management, unleash your potential</h1>
        <p>Finibus Bonorum by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section</p> */}
        {/* <div className='tab_main'>
        <Box className="sliver_tab_main container">
     <div className='silver-right-tab-accordian'>
     <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        // className={value === index ? 'tab-open' : 'tab-closed'}
      >
        {tabItems.map((tab, index) => (
              <Tab key={index}  label={
                <Accordion expanded={index == counter}>
                  <AccordionSummary
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`} 
                  > 
                    <Typography className="sliver-icon">{tab.icon}</Typography>
                    <Typography className='sliver-label'>{tab.label}</Typography>
                    <ArrowForwardIcon className='arrow_icon' />
                  </AccordionSummary>
                  <AccordionDetails >
                    <Typography className='tab_contents-heads'> {tab.content} </Typography>
                    <Typography className='tabs_summary'> {tab.summary} </Typography>
                  </AccordionDetails>
                </Accordion>
                
              } {...a11yProps(index)}  className={tab.label.split(" ").join("")+"-cls expanded-icon"}  >
              </Tab>
            ))}
      </Tabs>
     </div>
      <div className='silver-left-tab-image'>
      {tabItems.map((tab, index) => (
        <TabPanel key={index} value={value} index={index} >
          <img src={tab.img} alt={tab.label} style={{ maxWidth: '100%', maxHeight: '100%' }} className={tab.label.split(" ").join("")+"-img"}/>
        </TabPanel>
      ))}
      </div>
    </Box>
      
        </div> */}
        <Accordian />
        <Student />
      </section>
      
    );
  }

  export default App;
