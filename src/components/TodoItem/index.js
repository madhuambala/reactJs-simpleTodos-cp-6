// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachParaItem, onDeletePara} = props
  const {title, id} = eachParaItem

  const onDeleteFunction = () => {
    onDeletePara(id)
  }

  return (
    <li className="title">
      <p className="description">{title}</p>
      <button className="button" type="button" onClick={onDeleteFunction}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
