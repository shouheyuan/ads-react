import './TodoItem.css'

function TodoItem({ item, data, mode, type }) {
    function getCount(data) {
        let count = data.filter(e => e.status !== 'done').length
        if (count > 0) {
            return count.toString().padStart(2, '0')
        }
        return count
    }

    const TodoItems = item.data.map((e, i) => {
        return (
            <li key={i}>
                <span>{e.title}</span>
            </li>
        )
    })

    return (
        <div className="todo-item-wrap">
            <div className="todo-item-count"><span>{getCount(item.data)}</span></div>
            <div className="todo-item-name"><span>{item.name}</span></div>

            <ul className="todo-item-list">{TodoItems}</ul>
        </div>
    );
}

export default TodoItem;