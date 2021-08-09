import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NoteAppBar = () => {
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)

    const hanldeFileChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            dispatch(startUploading(file))
        }
    }

    const handlePicture = () => {
        document.getElementById('fileSelector').click()
    }

    const handleSave = () => {
        dispatch(startSaveNote(active))
    }
    return (
        <div className='notes__appbar'>
            <span>28 de Agosto 2020</span>

            <input
            type="file"
            name='file'
            id='fileSelector'
            style={{display: 'none'}}
            onChange={hanldeFileChange}
            />

            <div>
                <button className='btn'
                onClick={handlePicture}
                >Picture</button>
                <button className='btn'
                onClick={handleSave}
                >Save</button>
            </div>
        </div>
    )
}
