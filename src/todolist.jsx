import { useState } from "react";
import "/src/todo.css"
function Todolist() {
    const [tododata, setTododata] = useState([]);
    const getdata = (e) => {
        e.preventDefault();
        let data = e.target.data.value;
        if (!tododata.includes(data)) {
            let finaldata = [...tododata, data];
            setTododata(finaldata);
            // alert(data)
            // console.log(data)
        } else {
            alert("Todo is already available")
        }
    }
    let list = tododata.map((value, index) => {
        return (
            <Todolistitem value={value} key={index} uniqueindex={index} tododata={tododata} setTododata={setTododata} />
        )
    })

    return (
        <>
            <div className="w-75 mainform container mt-5">
                <h1 className="h1tag m-auto">Todo list</h1>
                <div>
                    <form class="d-flex m-auto w-75 gap-2 mt-3" onSubmit={getdata}>
                        <input className="" type="text" name="data" class="form-control" placeholder="Enter task..." required />
                        <button class="btn w-25 btn-success">Submit</button>
                    </form></div>
                <div class="lists mt-4">
                    <ul class="listdata">
                        {list}
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Todolist;

function Todolistitem({ value, uniqueindex, tododata, setTododata }) {
    let [status, setStatus] = useState(false)
    let deletetodo = () => {
        let finalresult = tododata.filter((value, i) => i != uniqueindex);
    
        setTododata(finalresult);
       
    }
    let checkstatus = () => {
      
        setStatus(!status);
     
    }
    return (
  <>     
  <div className="w-100">
   <li  onClick={checkstatus} className={(status) ? 'completetodo' : ""}>{uniqueindex + 1} {value}<span class="btn btn-success btn-sm" onClick={deletetodo} >&times;</span></li>
   </div>
    </>
    )

}