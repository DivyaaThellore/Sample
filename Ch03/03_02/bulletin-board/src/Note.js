import React from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import Fafloppy from 'react-icons/lib/fa/floppy-o'
class Note extends React.Component{
    constructor(props){
        super(props)
        this.state={
            editing: false
        }
        this.edit=this.edit.bind(this)
        this.remove=this.remove.bind(this)
        this.renderDisplay=this.renderDisplay.bind(this)
        this.renderForm=this.renderForm.bind(this)

    }
    edit(){
        this.setState ({
            editing: true
        })
    }
    remove(){
        alert("removing  note")
    }

    save(){
        alert("saved!")
    }

    renderForm()
    {
        return(
            <div>
                <form>
                <textarea/>
                <button id="save" onClick={this.save}><Fafloppy />
                </button>
                </form>
            </div>
        )

    }
    renderDisplay(){
        return(
            <div class='note'>
                <p>This is a Note</p>
           
            <span>
                <button id="edit" onClick={this.edit}><FaPencil /></button>
                <button id="remove" onClick={this.remove}> <FaTrash /></button>
            </span>
            </div>
            
        )
    }

    render()
    {
       
        if(this.state.editing){
            return this.renderForm()
        }else{
            return this.renderDisplay()
        }
    
    }
}

export default Note