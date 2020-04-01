import React from "react";
import {Form, Input} from "@rocketseat/unform";

const FilterForm = (loadData, handleSubmit, clearFilter) => {
    handleSubmit = (data) => {
        loadData = JSON.stringify(data);
        localStorage.setItem('@aurumTest/filter', loadData);
    };
    clearFilter = () => {
        localStorage.removeItem('@aurumTest/filter');
        window.location.reload();
    };
    return Inputs(loadData, handleSubmit, clearFilter);
};

const Inputs = (loadData, handleSubmit, clearFilter) => {
    console.log(loadData);
    return(
        <div className="filterForm">
            <Form onSubmit={handleSubmit} initialData={loadData}>
                <label>Cliente:</label><br/>
                <Input name="customer"/><br/>
                <label>Etiqueta:</label><br/>
                <Input name="tags"/><br/>
                <label>Acesso:</label><br/>
                <Input type="radio" id="privateAccess" name="access" value="PRIVATE"/>
                <label htmlFor="privateAccess">privado</label>
                <Input type="radio" id="publicAccess" name="access" value="PUBLIC"/>
                <label htmlFor="publicAccess">publico</label><br/>
                <button onClick={clearFilter}>Limpar</button>
                <button type="submit">Salvar</button>
            </Form>
        </div>
    );
};

export default FilterForm;