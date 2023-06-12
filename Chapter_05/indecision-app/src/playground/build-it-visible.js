class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility

            }
            
        })
    }

    render(){
        return(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
                <div>
                    <p> Hey . There are some details to show</p>
                </div>
            )}
            
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle /> , document.getElementById('app'))



// let Visibility = false

// const showDetails = () => {
//     Visibility = !Visibility
//     render();
// }


// const appRoot = document.getElementById('app');



// const render = () => {
//     const visible = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>
//                 {Visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {Visibility && (
//                 <div>
//                     <p> Hey . There are some details to show</p>
//                 </div>
//             )}
            
//         </div>
//     );
//     ReactDOM.render(visible, appRoot);
// }
// render();