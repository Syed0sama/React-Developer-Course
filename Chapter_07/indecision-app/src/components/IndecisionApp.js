import React from "react"
import AddOption from "./AddOptions";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteAll = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteModal = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    handleDeleteOption = (optionToRemove) =>{
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick = () => {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            this.setState(() => ({
                selectedOption: option
            }))

        })
    }

    handleAddOptions = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) !== -1) {
            return 'This option already exists'
        }


        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if(options){
            this.setState(() => ({options}))
            }
        } catch(e){

        }
       
    }

    componentDidUpdate(prevProps , prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options' , json)
        }
    }
    

    render() {
        const subtitle = 'Put your life in the hands of Computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                    handleDeleteAll={this.handleDeleteAll}
                    handleDeleteOption = {this.handleDeleteOption }
                />
                <AddOption handleAddOptions={this.handleAddOptions} />

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleDeleteModal={this.handleDeleteModal}
                />
            </div>
        )
    }
}
