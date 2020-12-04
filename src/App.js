import React, { Component } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import { fetchData } from './api/index'
import covid from './images/image.png'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
            country: ''
        }
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({
            data: fetchedData
        })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)

        this.setState({
            data: fetchedData,
            country: country
        })
    }


    // 
    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covid} alt="Covid-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
