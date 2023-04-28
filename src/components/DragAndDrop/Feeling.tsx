import React from 'react'
import './feeling.css'

interface props {
    handleDrag: (e: React.DragEvent, feelingType: string) => void;
    feeling: string;
    positive: Boolean;
}

const Feeling: React.FC<props> = ({handleDrag, feeling, positive}) => {
  return (
    <div
        className='feeling'
        draggable
        onDragStart={(e) => handleDrag(e, feeling)}
    >
        {feeling}
    </div>
  )
}

export default Feeling