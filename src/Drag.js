const onDragStart = (e, id) => {
    e.dataTransfer.setData("id",id)
    console.log("this is e.datatransfer",e.dataTransfer)
}
const Drag = (props) =>{
    return(
        <div className="container1">{
            props.final.map((vi)=>
                vi.type == "" ? <div className="list" key={vi.name} draggable onDragStart={(e)=> onDragStart(e,vi.name)}>{vi.name}</div>: ""
            )}
        </div>
    )
}

export default Drag;