import React , {useContext} from "react";
import BodyPart from "./BodyPart";
import { Stack, Typography , Box } from '@mui/material';
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';

 

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};      

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = ({ data , setBodyPart , bodyPart , bodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            <BodyPart item={item} data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
