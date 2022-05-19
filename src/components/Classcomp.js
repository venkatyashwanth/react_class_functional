import React, { Component } from 'react'

export default class Classcomp extends Component {
    title = "Class Component Demo";
    empData = [
        {"id":1,"name":"A","salary":34567},
        {"id":2,"name":"B","salary":44567},
        {"id":3,"name":"C","salary":54567},
        {"id":4,"name":"D","salary":64567},
        {"id":5,"name":"E","salary":74567},
    ];
    render() {
        return (
            <>
                <h2>{this.title}</h2>
                <p>Displaying the data array using map function</p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>S.No</th><th>Name</th><th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.empData.map((val,index)=>
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.salary}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        )
    }
}
