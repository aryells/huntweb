import React, {Component} from "react";
import Badge from 'react-bootstrap/Badge'
import api from "../../services/api";
import './styles.css';
import {Link} from "react-router-dom";

export default class CaseView extends Component {
    state = {savedCase: {}};

    async componentDidMount() {
        const { caseId } = this.props.match.params;
        const response = await api.get(`/cases/${caseId}`);
        this.setState({savedCase: response.data});
    };

    renderTags(tags) {
        if(tags && tags.length > 0) return tags.map(tag => (<Badge variant="danger">{tag.name}</Badge> ))
    };

    render() {
        const {savedCase} = this.state;

        console.log("savedCase.tags:");
        console.log(savedCase);
        return (
            <div className="case-info">
                <h1>{savedCase.title}</h1>
                {this.renderTags(savedCase.tags)}
                <p>{savedCase.folder}</p>
                <p>{savedCase.customer}</p>
                <p>{savedCase.description}</p>
                <p>{savedCase.notes}</p>
                <p>{savedCase.owner}</p>
                <p>{savedCase.access}</p>
                <p>{savedCase.createdDate}</p>
                <div className="actions">
                    <Link to={`/edit/case/${savedCase.caseId}`}>Editar</Link>
                </div>
            </div>
        )
    }
}