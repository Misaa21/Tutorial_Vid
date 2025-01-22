import Student from "./Student";


function App() {
  return(
      <>
        <Student name="Jiann" age = {21} isStudent={true}/>
        <Student name="Yuri" age = {21} isStudent={false}/>
        <Student name="Ethan" age = {22} isStudent={true}/>
        <Student name="Croi" age = {16} isStudent={false}/>
        <Student/>

      </>
  );
}

export default App
