import React from 'react';
import { SideBar } from './SideBar';
import { NoSelected } from './NoSelected';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
export const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)

    return (
        <>
       <div className='journal__name-content'>

           <SideBar />
        <main>

            {
                (active) ? <NoteScreen /> : <NoSelected />
            }
            
        </main>
       </div>
    </>
    )
}
