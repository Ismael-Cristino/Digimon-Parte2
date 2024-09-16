import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/digimon/'

const EditDigimon = () => {

    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            name: name,
            level: level,
            type: type,
            color: color,
        })
        navigate('/')
    }

    useEffect( () =>{

        const getDigimonsById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLevel(response.data.level)
            setType(response.data.type)
            setColor(response.data.color)
        }
        getDigimonsById()
    }, [])
  return (
    <div>
        <h2>Edit Digimons</h2>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={name} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Level</label>
                <input 
                    value={level} 
                    onChange={ (e)=> setLevel(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Type</label>
                <input 
                    value={type} 
                    onChange={ (e)=> setType(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Color</label>
                <input 
                    value={color} 
                    onChange={ (e)=> setColor(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default EditDigimon