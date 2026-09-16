
import "./App.css"
import Button from "./Button.jsx"
import Layout from "./Layout"
import List from "./List"

function MissedGoal() {
  return <h1 className="bg-red-400">Goal Missed</h1>
}

function ScoreGoal() {
  return <h1 className="my-5 bg-green-200">Goal Scored</h1>
}

function Goal({ isGoal }) {
  return <div>{isGoal ? <ScoreGoal/> : <MissedGoal/>}</div>
}

function App() {
  return (
    <>
        <div>
          <Button
            title="Sign In"
            color="bg-blue-400 text-white"
            borderRadius="rounded-full"
          />
          <Button title="Login" color="bg-green-400 text-white"/>
        </div>

        <Layout>
          <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi,
              veniam culpa tempora temporibus molestias soluta earum id ut distinctio quasi
              debitis ad officiis fuga est dolorum nesciunt! Culpa, et.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, impedit mollitia 
              recusandae ut excepturi, ipsum nemo a eius voluptatibus unde ab, quas expedita quaerat
              similique odit! Dicta tempora quaerat voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut nemo dignissimos
              architecto tempora, facere porro necessitatibus consequatur eligendi iste laboriosam 
              neque harum ad assumenda. Accusantium explicabo beatae hic nisi.
          </div>
        </Layout>
        <List/>

    </>
  );
}

export default App;




