import React, {Component} from "react";
import api from "../../services/api";
import './styles.css';

export default class CaseView extends Component {
    state = {savedCase: {}};

    async componentDidMount() {
        const { caseId } = this.props.match.params;
        const response = await api.get(`/cases/${caseId}`);
        console.log(response.data);
        this.setState({savedCase: response.data});
    };

    render() {
        const {savedCase} = this.state;
        return (
            <div className="case-info">
                <h1>{savedCase.title}</h1>
                <p>{savedCase.folder}</p>
                <p>{savedCase.customer}</p>
                <p>{savedCase.tags}</p>
                <p>{savedCase.description}</p>
                <p>{savedCase.notes}</p>
                <p>{savedCase.owner}</p>
                <p>{savedCase.access}</p>
                <p>{savedCase.createdDate}</p>
            </div>
        )
    }
}