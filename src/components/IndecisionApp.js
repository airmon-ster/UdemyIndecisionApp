import React from 'react';
import AddOptions from './AddOption.js'
import Header from './Header.js'
import Action from './Action.js'
import Options from './Options.js'
import OptionModal from './OptionModal.js'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => {
            return optionToRemove !== option;
        }) }))
    }

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randNum]
        this.setState(() => ({selectedOption: option}))
    }
            
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid Value to Add Item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleClearSelection = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }



    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
            this.setState(() => ({ options }))
            }
        } catch (e) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saving daa')
        }
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}/>
                        <AddOptions handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelection={this.handleClearSelection}/>
            </div>
        );
    }
}