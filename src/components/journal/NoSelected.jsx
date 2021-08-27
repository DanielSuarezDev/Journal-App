import React from 'react'
import note from '../../assets/icons/note.svg'

export const NoSelected = () => {
    return (
        <div className='noSelected__main-content'>
            <img src={note} alt="image note" />
            <p>
                Crea tu primera nota
            </p>
        </div>
    )
}
