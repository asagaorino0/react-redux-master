// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

// const TodoList = ({ todos }) => (
const TodoList = () => {
    const todos = useSelector(state => {
        const visibilityFilter = state.visibilityFilter;
        const todos = getTodosByVisibilityFilter(state, visibilityFilter);
        return todos;
    });

}

/* const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};
export default connect(mapStateToProps)(TodoList); */
export default TodoList;
