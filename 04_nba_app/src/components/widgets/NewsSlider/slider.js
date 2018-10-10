import React, { Component } from 'react';

import SliderTemplates from './slider_templates'

import { firebase, firebaseArticles, firebaseLooper } from '../../../firebase'

class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {
        firebaseArticles.limitToFirst(3).once('value')
        .then((snapshot) => {
            const news = firebaseLooper(snapshot)

            const asyncFunction = (item, i, callback) => {
                firebase.storage().ref('images')
                .child(item.image).getDownloadURL()
                .then(url => {
                    news[i].image = url
                    callback()
                })
            }

           let requests = news.map( (item, i) => {
               return new Promise( (resolve) => {
                   asyncFunction(item, i, resolve)
               })
           })

           Promise.all(requests)
           .then( () => {
               this.setState({
                   news
               })
           })
        })
        
        // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        // .then( res => {
        //     this.setState({
        //         news: res.data
        //     })
        // })
    }

    render() {
        return (
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        );
    }
}

export default NewsSlider;