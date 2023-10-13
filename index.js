const App = () => {
    return true;
}


let comp = (
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
</ul>
)

const myComponent = function() {
    return(<div>String of Text</div>);
}

ReactDOM.render(
<div>
    {comp}
    {myComponent()}
    <h1>Testing</h1>
</div>, document.getElementById('root'));

ReactDOM.render(
<div>Second element</div>, document.getElementById('test'));

