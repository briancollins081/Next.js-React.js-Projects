import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="">
      <h1>My Todos</h1>
      <Todo text="Learn React.ls"/><br/>
      <Todo text="Kill a ninja"/><br/>
      <Todo text="Catch a live mosquito" />
      
    </div>
  );
};

export default App;
