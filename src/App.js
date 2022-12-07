import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div classNameNameName="App">
      <header className="header-id">
        <h1>
          <b>To do list</b>
        </h1>
      </header>
      <main>
        <div>
          <form>
            <p>
              <b>Fill In New Task:</b>
            </p>
            <input type="text" />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
        <div className="tasks-area">
          <fieldset>
            <form>
              <ol>
                <li className="list-item">
                  <div className="clear-element">
                    <input type="checkbox" className="check-btn" />
                    <input
                      type="text"
                      value="My first task"
                      id="task-field"
                      readonly
                    />
                    <div className="float-right">
                      <button type="button" className="edit-button">
                        Edit
                      </button>
                      <button type="button" className="delete-button">
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="clear-element">
                    <input type="checkbox" className="check-btn" />
                    <input
                      type="text"
                      value="My second task"
                      id="task-field"
                      readonly
                    />
                    <div className="float-right">
                      <button type="button" className="edit-button">
                        Edit
                      </button>
                      <button type="button" className="delete-button">
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="clear-element">
                    <input type="checkbox" className="check-btn" />
                    <input
                      type="text"
                      value="My third task"
                      id="task-field"
                      readonly
                    />
                    <div className="float-right">
                      <button type="button" className="edit-button">
                        Edit
                      </button>
                      <button type="button" className="delete-button">
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </ol>
            </form>
          </fieldset>
        </div>
      </main>
    </div>
  );
}

export default App;
