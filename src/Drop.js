let relatives = ["Pyaar","Achhe","Sahi","Kaleshi","Mar Kyu Nahi Jate"];

const onDragStart = (e, id) => {
    e.dataTransfer.setData("id",id)
    console.log("this is e dataTransfer",e.dataTransfer)
}

const onDragOver = (e) => {
    e.preventDefault();
}
const onDrop = (e, typ, final,setFinal) => {
    let id = e.dataTransfer.getData("id");
    let types = final.filter((ty)=>{
        if(ty.name == id) ty.type = typ;
        return ty;
    });
    setFinal(types);
}
const Drop = (props) =>{
    return(
        relatives.map((cat)=>
            <div className="listt" key={cat} onDrop={(e)=>onDrop(e,cat,props.final,props.setFinal)} onDragOver={(e)=>onDragOver(e)}>
                <div className={"typesOfRel "+ cat} >{cat}</div>
                {props.final.map((vi)=> vi.type===cat ? <div className="list" key={vi.name} draggable onDragStart={(e)=> onDragStart(e,vi.name)}>{vi.name}</div>: "")}
            </div>
        )
    )
}
export default Drop;