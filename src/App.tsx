import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { ListCount } from "./components/ListCount";
import { NoTasks } from "./components/NoTasks";
import { Item } from "./components/Item";

export interface Task {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />
      <div className={styles.content}>
        <div className={styles.addItems}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />

          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className={styles.tasksList}>
          <ListCount
            concludedCount={tasks.filter((task) => task.isChecked).length}
            totalCount={tasks.length}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  data={task}
                  key={task.id}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <NoTasks />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
