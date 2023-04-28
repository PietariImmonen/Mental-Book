import React, { useState } from 'react'
import Dropzone from './Dropzone'
import Feeling from './Feeling'

import { useMutation } from '@apollo/client'
import { ADD_FEELING } from '../../queries/query'

interface props {
    token: string | null;
}

interface feeling {
    name: string;
    positive: boolean
}

const DragDrop: React.FC<props> = ({token}) => {
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

    const [ feeling, result ] = useMutation(ADD_FEELING, {
        onError: (error) => {
          console.log(error.graphQLErrors[0].message)
        }
      })
    
      const submit = async (event: any) => {
        console.log('called')
        const mappedFeelings = feelings.map(i => ({name: i, positive: true}))
        console.log(mappedFeelings)
        mappedFeelings.map(i => feeling({variables: i}))
        console.log(result, 'result')
      }


  return (
    <div className='drag-drop-container'>
        <div className='feelings-container'>
            <Feeling handleDrag={handleOnDrag} feeling='sad' positive={false}/>
            <Feeling handleDrag={handleOnDrag} feeling='mad' positive={false}/>
            <Feeling handleDrag={handleOnDrag} feeling='happy' positive={true}/>
        </div>

        <div className='dropper'>
            <Dropzone onDrop={handleOnDrop} onDragOver={handleDragOver} feelings={feelings}/>
        </div>

        <div className='submit-button' onClick={submit}>Submit feeling</div>

    </div>
  )
}

export default DragDrop