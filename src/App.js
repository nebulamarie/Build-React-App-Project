import Card from "./components/Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Marie's Guide to Fruits & Veggies </h1>
      <div className="card-container">
        <Card
          color="blue"
          title="blueberries"
          image="https://media.istockphoto.com/id/505641702/photo/blueberries.jpg?b=1&s=170667a&w=0&k=20&c=DQtSkIvHJxOSpbO4Hz8EGbH5_p6TgBXAhZpEs9selZs="
        />
        <Card
          color="orange"
          title="citrus"
          image="https://media.istockphoto.com/id/1227301369/photo/whole-cross-section-and-quarter-of-fresh-organic-navel-orange-with-leaves-in-perfect-shape-on.jpg?b=1&s=170667a&w=0&k=20&c=uimgulwrNTf72rAbIOdLvObEgsJSZoCqWm9Qxojjl7Q="
        />
        <Card
          color="purple"
          title="eggplant"
          image="https://images.pexels.com/photos/5529596/pexels-photo-5529596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}
