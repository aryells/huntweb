import React, {Component} from "react";
import { Form, Input, Scope } from "@rocketseat/unform";
import Badge from 'react-bootstrap/Badge';
import api from "../../services/api";
import './styles.css';

export default class CaseEdit extends Component {

    state = {savedCase: {}};

    async componentDidMount() {
        const { caseId } = this.props.match.params;
        const response = await api.get(`/cases/${caseId}`);
        console.log(response.data);
        this.setState({savedCase: response.data});
    };

    handleSubmit(data) {
        console.log(data);
        api.put(`/cases/${data.caseId}`, data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const {savedCase} = this.state;
        console.log(savedCase);
        return (
            <div className="form">
                <Form onSubmit={this.handleSubmit} initialData={savedCase}>
                    <Input type="hidden" name="caseId" />
                    <label>
                        Pasta:
                    </label>
                    <Input name="folder" />
                    <label>
                        Cliente:
                    </label>
                    <Input name="customer" />
                    <label>
                        Título:
                    </label>
                    <Input name="title" />
                    <label>
                        Etiqueta:
                    </label>
                    {/*<Input name="tags" />*/}
                    <label>
                        Descrição:
                    </label>
                    <Input name="description" />
                    <label>
                        Observações:
                    </label>
                    <Input name="notes" />
                    <label>
                        Responsável:
                    </label>
                    <Input name="owner" />
                    <label>
                        Acesso:
                    </label>
                    <Input name="access" />
                    <label>
                        Data de criação:
                    </label>
                    <Input name="createdDate" />
                    <button type="submit">Enviar</button>
                </Form>
            </div>
        );
    }
}