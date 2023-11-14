import { Client, ListClients } from "./components/ListClients";
import { UserCard } from "./components/UserCard";

const clients: Client[] = [
  {
    name: "Icaro",
    age: 23,
  },
  {
    name: "Icaro",
    age: 23,
  },
  {
    name: "Icaro",
    age: 23,
  },
];


export default function App() {
  return (
    <>
      <UserCard name="Icaro" age={23} />
      <ListClients clients={clients} />
    </>)
}

