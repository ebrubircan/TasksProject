function TaskCreate() {
    return ( 
    <div className="taskCreate">
        <h3>Lütfen Task Ekleyiniz</h3>
        <form className="taskForm">

        <label className="textLabel">Başlık Giriniz</label>
        <input className="taskInput"/>

        <label className="textLabel">Task Giriniz</label>
        <textarea className="taskInput" rows={5}/>

        <button className="taskButton">Oluştur</button>

        </form>
        
    </div> 
    );
}

export default TaskCreate;