import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

export function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "users/MarceloCLopes/repos"
  );

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}