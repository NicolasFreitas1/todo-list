import styles from "./ListCount.module.css";

interface ListCountProps {
  totalCount: number;
  concludedCount: number;
}

export function ListCount({ concludedCount, totalCount }: ListCountProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{totalCount}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {totalCount === 0 ? totalCount : `${concludedCount} de ${totalCount}`}
        </span>
      </aside>
    </header>
  );
}
