import { useState, useReducer } from 'react';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'changed_draft': {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    }
    case 'added_todo': {
      return {
        draft: '',
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
            completed: false, 
          },
          ...state.todos,
        ],
      };
    }
    case 'delete_todo': {
      return {
        ...state,
        todos: state.todos.filter((item: any) => item.id !== action.todoId),
      };
    }
    case 'check_todo': {
      return {
        ...state,
        todos: state.todos.map((item: any) =>
          item.id === action.todoId
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    }
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function TodoList() {
  const [form, setForm] = useState({
    draft: '',
    todos: [],
  });

  const [state, dispatch] = useReducer(reducer, form);

  return (
    <>
      <input
        value={state.draft}
        onChange={(e) => {
          setForm((prev) => ({
            ...prev,
            draft: e.target.value,
          }));
          dispatch({
            type: 'changed_draft',
            nextDraft: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: 'added_todo' });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((item: any) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() => {
                dispatch({
                  type: 'delete_todo',
                  todoId: item.id,
                });
              }}
            >
              Delete
            </button>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => {
                dispatch({
                  type: 'check_todo',
                  todoId: item.id,
                });
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;



