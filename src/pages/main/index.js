import React, { Component} from "react";
import api from '../../services/api';

import './styles.css'
import {Link} from "react-router-dom";

export default class Main extends Component {
    state = {
        cases: [],
        caseInfo: {},
        page: 0
    };

    componentDidMount() {
        this.loadCases();
    }

    loadCases = async () => {
        //const {content, caseInfo} = response.data;
        const response = await api.get('/cases');
        this.setState({cases: response.data});
    };

    prevPage = () => {
        // const {page, caseInfo} = this.state;
        // if(page === 1) return;
        // const pageNumber = page - 1;
        // this.loadCases(pageNumber);
    };
    nextPage = () => {
        // const {page, caseInfo} = this.state;
        // if(page === caseInfo.pages) return;
        // const pageNumber = page + 1;
        // this.loadCases(pageNumber);
    };

    render() {
        return (
            <div className="cases-list">
                {
                    this.state.cases.map(savedCase => (
                        <article key={savedCase.caseId}>
                            <strong>{savedCase.title}</strong>
                            <p>{savedCase.customer}</p>
                            <Link to={`/case/${savedCase.caseId}`}>Ver caso</Link>
                        </article>
                    )
                )}
                <div className="actions">
                    {/*<button disabled={page === 1} onClick={this.prevPage}>Anterior</button>*/}
                    {/*<button disabled={page === caseInfo.pages} onClick={this.nextPage}>Próxima</button>*/}
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }

}