import React, { useState } from 'react'
import Dropzone from './Dropzone'
import Feeling from './Feeling'

const DragDrop = () => {
    const [feelings, setFeelings] = useState<string[]>([])

    const handleOnDrag = (e: React.DragEvent, feelingType: string) => {
        e.dataTransfer.setData("feelingType", feelingType)
        console.log("drag")
    }

    const handleOnDrop = (e: React.DragEvent) => {
        const feelingType = e.dataTransfer.getData("feelingType") as string
        console.log(feelingType)
        setFeelings([...feelings, feelingType])
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }
  return (
    <div className='drag-drop-container'>
        <div className='feelings-container'>
            <Feeling handleDrag={handleOnDrag} feeling='sad'/>
            <Feeling handleDrag={handleOnDrag} feeling='mad'/>
            <Feeling handleDrag={handleOnDrag} feeling='happy'/>
        </div>

        <div className='dropper'>
            <Dropzone onDrop={handleOnDrop} onDragOver={handleDragOver} feelings={feelings}/>
        </div>
    </div>
  )
}

export default DragDrop