import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    useParams,
} from "react-router-dom";
import "./App.css";

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <p>Contact...</p>
        </div>
    );
}

let contents = [
    { id: 1, title: "HTML", desc: "HTML is..." },
    { id: 2, title: "css", desc: "css is..." },
    { id: 3, title: "react", desc: "react is..." },
];

function Topic() {
    let params = useParams();
    let topic_id = params.topic_id;
    console.log(params);

    let selected_topic = {
        title: "Sorry",
        desc: "Not Found",
    };
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].id === Number(topic_id)) {
            selected_topic = contents[i];
            break;
        }
    }

    return (
        <div>
            <h3>{selected_topic.title}</h3>
            <p>{selected_topic.desc}</p>
        </div>
    );
}

function Topics() {
    let list = contents.map((ct) => {
        return (
            <li key={ct.id}>
                <NavLink to={"/topics/" + ct.id}>{ct.title}</NavLink>
            </li>
        );
    });

    // for (let i = 0; i < contents.length; i++) {
    //     list.push(
    //         <li key={contents[i].id}>
    //             <NavLink to={"/topics/" + contents[i].id}>
    //                 {contents[i].title}
    //             </NavLink>
    //         </li>
    //     );
    // }
    return (
        <div>
            <h2>Topics</h2>
            <nav>
                <ul>{list}</ul>
            </nav>
            <Routes>
                <Route path=":topic_id" element={<Topic />} />
            </Routes>
        </div>
    );
}
function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>Home...</p>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <h1>Hello React Router Dom</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topics">topics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topics/*" element={<Topics />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
