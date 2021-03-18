import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {

  const [repoList, setRepolist] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(res => res.json())
    .then(data => setRepolist(data))
  },[]);

  console.log(repoList);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
      { repoList.map((repository, index) => (
        <RepositoryItem key={index} repository={repository}/>
      ))}
      </ul>
    </section>
  )
}