export const Todo = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p className="">未完了のToDo</p>
        <ul>
          <li>
            <div>
              <p>ToDo</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div>
              <p>ToDo</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のToDo</p>{" "}
        <ul>
          <li>
            <div>
              <p>ToDoでした</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div>
              <p>ToDoでした</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
