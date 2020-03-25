import React, {Component} from "react";
import { Form, Input, Scope } from "@rocketseat/unform";
import Badge from 'react-bootstrap/Badge';
import api from "../../services/api";
import './styles.css';

export default class CaseNew extends Component {

    handleSubmit(data) {
        console.log(data);
        api.post('/cases', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="form">
                <Form onSubmit={this.handleSubmit}>
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