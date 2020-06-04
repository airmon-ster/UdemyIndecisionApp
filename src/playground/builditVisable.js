class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisability = this.handleToggleVisability.bind(this)
        this.state = {
            isClicked: false
        }
    }
    handleToggleVisability() {
        this.setState((prevState) => {
                return {
                    isClicked: !prevState.isClicked
                }
            })
        }
    
    render() {
        return (
        <div>
            <h1>Toggle Visibility</h1>
            <button onClick={this.handleToggleVisability}>{!this.state.isClicked  ? 'Show details' : 'Hide Details'}</button>
            <p>{this.state.isClicked ? 'Here are the details' : ''}</p>
        </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: 'Visibility Toggle',
//     isClicked: false
// }

// const clickButton = () => {
//     if (app.isClicked) {
//         app.isClicked = false;
//         renderApp();
//     } else if (app.isClicked === false) {
//             app.isClicked = true;
//             renderApp();
//         }
//     }


// const renderApp = () => {
//     const template = (
//         <div>
//            <h1>{app.title}</h1>
//            <button onClick={clickButton}>{app.isClicked === false ? 'Show details' : 'Hide Details'}</button>
//            <p>{app.isClicked ? 'Here are the details' : ''}</p>

           
//         </div>
//         );
//     ReactDOM.render(template, appRoot);
// }


// const appRoot = document.getElementById('app');


// renderApp();