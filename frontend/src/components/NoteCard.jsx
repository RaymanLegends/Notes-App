import { Trash2Icon } from 'lucide-react';
import {PenSquareIcon} from 'lucide-react';
import React from 'react'
import {Link} from "react-router";
import {formatDate} from "../lib/utils.js"

const NoteCard = ({note}) => {
  return (
    <Link to ={`/note/${note._id}`} 
    className = "card bg-base-300 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-base-300">
        <div className='card-body aspect-square p-4'>
            <h3 className='card-title text-base-content/70'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'> {note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-small text-base-content/60'>
                    {formatDate(new Date(note.createdAt))}
                </span>
                <div className = 'flex items-center gap-1'>
                    <button>
                    <PenSquareIcon className='size-4 text-neutral-content' />
                    </button>
                    <button className = 'btn btn-ghost btn-xs text-error'>
                        <Trash2Icon className = 'size-4' />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
};

export default NoteCard
