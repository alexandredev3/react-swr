import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
}

const UserDetail: React.FC = () => {
  const { id } = useParams();
  const { data } = useFetch<User>(`/users/${id}`);

  if (!data) {
    return <p>Carregando...</p>
  };

  return (
    <ul>
      <li><strong>Id:</strong> {data.id}</li>
      <li><strong>Name:</strong> {data.name}</li>
    </ul>
  );
}

export default UserDetail;