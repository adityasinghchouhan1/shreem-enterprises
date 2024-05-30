import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Faq.css'

export default function AccordionExpandIcon() {
  return (
    <div className='accordion_section'>
      <Accordion style={{backgroundColor:' #2F3369',color:'white'}} >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon style={{color:'white'}} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accordion_bg'
        >
          <Typography style={{fontSize:'18px',fontWeight:'bold'}}>What We Do For Printing Business</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:' #2F3369',color:'white'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon style={{color:'white'}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'bold'}}>How To Test A Design Concept For Effectiveness</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor:' #2F3369',color:'white'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon style={{color:'white'}} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'bold'}}>How To Run The Right Kind Of Research Study</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor:' #2F3369',color:'white'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon style={{color:'white'}} />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography style={{fontSize:'18px',fontWeight:'bold'}}>Mirage Deep Dive: Understanding Factories, Fixtures</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}