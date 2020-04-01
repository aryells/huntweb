import React, {Component} from "react";
import api from '../../services/api';

import './styles.css'
import {Link} from "react-router-dom";
import FilterForm from "../../components/FilterForm";
import {Form,Input} from "@rocketseat/unform";

export default class Main extends Component {
    state = {
        cases: [],
        caseInfo: {},
        pageable: {},
        page: 0
    };

    componentDidMount() {
        this.loadCases(this.state.page);
    }

    loadCases = async (page) => {
        const response = await api.get(`/cases?page=${page}&size=2`);
        const {content, pageable, ...caseInfo} = response.data;
        this.setState({cases: content, pageable, caseInfo});
    };

    prevPage = () => {
        const {caseInfo, pageable} = this.state;
        if (caseInfo.first === true) return;
        const page = pageable.pageNumber - 1;
        this.loadCases(page);
    };
    nextPage = () => {
        const {caseInfo, pageable} = this.state;
        if (caseInfo.numberOfElements !== caseInfo.size) return;
        const page = pageable.pageNumber + 1;
        this.loadCases(page);
    };

    render() {
        const {cases, caseInfo} = this.state;
        const loadData = localStorage.getItem('@aurumTest/filter');
        console.log(loadData);
        return (
            <div className="cases-list">
                <FilterForm loadData={loadData}/>
                <div className="actions">
                    <Link to={`/new/case`}>Novo caso</Link>
                    <Form onSubmit={this.handleSubmit}>
                        <Input type="radio" id="folder" name="search" value="folder" />
                        <label htmlFor="folder">Pasta</label>
                        <Input type="radio" id="title" name="search" value="title" />
                        <label htmlFor="title">Título</label>
                        <Input type="radio" id="description" name="search" value="description" />
                        <label htmlFor="description">Descrição</label>
                        <br />
                        <Input name="searchCase" />
                        <button type="submit">Buscar</button>
                    </Form>
                </div>
                {
                    cases.map(savedCase => (
                            <article key={savedCase.caseId}>
                                <strong>{savedCase.title}</strong>
                                <p>{savedCase.customer}</p>
                                <Link to={`/case/${savedCase.caseId}`}>Ver caso</Link>
                            </article>
                        )
                    )}
                <div className="actions">
                    <button disabled={caseInfo.first === true} onClick={this.prevPage}>Anterior</button>
                    <button disabled={caseInfo.numberOfElements !== caseInfo.size} onClick={this.nextPage}>Próxima
                    </button>
                </div>
            </div>
        )
    }

}