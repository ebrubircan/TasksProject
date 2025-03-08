function TaskShow({task, onDelete}) {
    const handleDeleteClick = () => {
        onDelete(task.id);
    }
    console.log(task);
    return( 
    <div className="taskShow">
        <h3 className="taskTitle">Göreviniz</h3>
        <p>{task.titles.title}</p>
        <h3 className="taskTitle">Yapılacaklar</h3>
        <p>{task.titles.taskDesc}</p>
        <div>
            <button className="taskDelete" onClick={handleDeleteClick}>Sil</button>
            <button className="taskEdit">Güncelle</button>
        </div>
    </div> 
    )
}

export default TaskShow;