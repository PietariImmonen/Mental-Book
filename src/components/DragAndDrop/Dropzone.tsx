import React from 'react'
import './dropzone.css'

interface props {
    onDrop: (e: React.DragEvent) => void;
    onDragOver: (e: React.DragEvent) => void;
    feelings: string[]
}

const Dropzone: React.FC<props> = ({onDrop, onDragOver, feelings}) => {
    console.log(feelings)
  return (
    <div className='drop-container'>
        <div className='drop-zone' onDrop={onDrop} onDragOver={onDragOver}>
            {feelings.map((feeling, index) => {
                console.log(feeling)
                return (
                <div className='feeling-widget' key={index}>
                    {feeling}
                </div>
            )})}
        </div>
    </div>
  )
}

export default Dropzone