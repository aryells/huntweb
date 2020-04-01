import React, {Component} from "react";
import {Form, Input} from "@rocketseat/unform";
import api from "../../services/api";
import {WithContext as ReactTags} from 'react-tag-input';
import './styles.css';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default class CaseNew extends Component {
    state = {
        tags: [],
        suggestions: []
    };

    handleDelete = (i) => {
        const {tags} = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
    };

    handleAddition = (tag) => {
        this.setState(state => ({tags: [...state.tags, tag]}));
    };

    handleDrag = (tag, currPos, newPos) => {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        this.setState({tags: newTags});
    };

    handleSubmit = (data) => {
        const {tags} = this.state;
        data.tags = tags;
        data.createdDate = new Date().toISOString();
        console.log(data);
        api.post('/cases', data)
            .then(function (response) {
                if (response.headers.location) {
                    const {caseId} = response.headers.location.replace(api.baseURL + '/cases/', '');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const {tags} = this.state;
        return (
            <div className="form">
                <Form onSubmit={this.handleSubmit}>
                    <Input type="hidden" name="caseId"/>
                    <label>
                        Pasta:
                    </label>
                    <Input name="folder"/>
                    <label>
                        Cliente:
                    </label>
                    <Input name="customer"/>
                    <label>
                        Título:
                    </label>
                    <Input name="title"/>
                    <label>
                        Etiqueta:
                    </label>
                    <div>
                        <ReactTags tags={tags}
                                   handleDelete={this.handleDelete}
                                   handleAddition={this.handleAddition}
                                   handleDrag={this.handleDrag}
                                   delimiters={delimiters}/>
                    </div>
                    <label>
                        Descrição:
                    </label>
                    <Input name="description"/>
                    <label>
                        Observações:
                    </label>
                    <Input name="notes"/>
                    <label>
                        Responsável:
                    </label>
                    <Input name="owner"/>
                    <label>
                        Acesso:
                    </label>
                    <Input name="access"/>
                    <button type="submit">Enviar</button>
                </Form>
            </div>
        );
    }
}