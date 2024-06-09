import { ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'
import TButton from './core/TButton'


export default function SurveyListItem({ task, onDeleteClick }) {
    return ( 
        <div className='flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]'>
            <img
            src={task.image_url}
            alt={task.title}
            className='w-full h-48 object-cover'
            />

            <h4 className='mt-4 text-lg font-bold'>{task.title}</h4>
            <div
            dangerouslySetInnerHTML={{ __html: task.description}}
            className='overflow-hidden flex-1'
            
            >
 
            </div>
            <div className='flex justify-between items-center mt-3'>
                 <TButton to={`task/${task.id}`}>
                    <PencilIcon className='w-5 h-5 mr-2'/>
                     Edit
                 </TButton>
                 <div className='flex items-center'>
                    <TButton href={`/view/task/${task.slug}`} circle Link>
                      <ArrowTopRightOnSquareIcon className='w-5 h-5' />
                       
                    </TButton>

                    {task.id && (
                        <TButton onClick={onDeleteClick} circle Link color="red">
                            <TrashIcon className='w-5 h-5' />
                        </TButton>
                    )}

                 </div>
            </div>
        </div>   
    )
}