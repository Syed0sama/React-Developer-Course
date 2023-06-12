
//JSX - Javascript XML
// const userName = 'Syed Muhammad Osama';
// const userAge = 32;
// const userLocation = 'Islamabad'


const app = {
    title: 'Indecision App',
    subtitle: 'Write decision to do',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1> {app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)

                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();