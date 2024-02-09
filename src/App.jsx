import "./App.css";
import Card from "./components/Card";

const data = [
  {
    title: "FREE",
    price: "$0",
    user: "Single User",
    storage: "50GB Storage",
    domain: "Free Domain",
    project: "text-muted",
    projectIcon: "fas fa-times",
    phone: "text-muted",
    phoneIcon: "fas fa-times",
    subDomain: "text-muted",
    subDomainIcon: "fas fa-times",
    monthly: "text-muted",
    monthlyIcon: "fa fa-times",
  },
  {
    title: "PLUS",
    price: "$9",
    user: "5 Users",
    storage: "50GB Storage",
    domain: "Free Domain",
    project: "",
    projectIcon: "fas fa-check",
    phone: "",
    phoneIcon: "fas fa-check",
    subDomain: "",
    subDomainIcon: "fas fa-check",
    monthly: "text-muted",
    monthlyIcon: "fa fa-times",
  },
  {
    title: "PRO",
    price: "$49",
    user: "Unlimited Users",
    storage: "50GB Storage",
    domain: "Un",
    project: "",
    projectIcon: "fas fa-check",
    phone: "",
    phoneIcon: "fas fa-check",
    subDomain: "",
    subDomainIcon: "fas fa-check",
    monthly: "",
    monthlyIcon: "fa fa-check",
  },
];

function App() {
  return (
    <div className="app">
      <div className="container bg-primary h-100 my-5 p-4">
        <div className="row">
          {data.map((item, index) => {
            return (
              <>
                <Card key={index} cardData={item} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
