import React from "react";
import ResponsiveMenu from "react-responsive-navbar";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { MdFace,MdToday } from "react-icons/md";
import { JournalEntries } from "./JournalEntries";
import {useDispatch, useSelector} from 'react-redux'
import { startLogout} from "../../actions/auth";
import { startNewNote } from "../../actions/notes";

export const SideBar = () => {
  const dispatch = useDispatch()

  const {name} = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(startLogout())
  }

  const handleAddNote = () => {
    dispatch(startNewNote())
  }

  return (
    <aside className="journal__sidebar">
      <ResponsiveMenu
        menuOpenButton={<IoIosArrowDroprightCircle />}
        menuCloseButton={<IoIosArrowDropleftCircle />}
        changeMenuOn="700px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <>
            <div className='container-nav'>
              <div className="user">
                <MdFace />
                <p>{name}</p>
              </div>
              <button
             className='btn'
             onClick={handleLogout}
             >Logout</button>
              <div className="user" onClick={handleAddNote}>
                <MdToday />
                  <p>Add Note</p>
              </div> 

              <JournalEntries />
            </div>
          </>
        }
      />
    </aside>
  );
};
