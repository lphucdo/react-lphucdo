class Employee extends React.Component{
    render(){
        return(
            <li className="employee">
                <div>
                    <b>Fullname: </b> {this.props.fullName}
                </div>
                <div>
                    <b>Gender: </b> {this.props.gender}
                </div>
            </li>
        )
    }
}

class EmployeeList extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            employees: [
                {empID: 1, fullname: "Trump Do Lam", gender: "male"},
                {empID: 2, fullname: "Putin", gender: "male"},
                {empID: 3, fullname: "Obama", gender: "male"},
                {empID: 4, fullname: "Casear", gender: "female"},
            ]
        }
    }

    render(){
        var listItem = this.state.employees.map(e => (<Employee fullName={e.fullname} gender={e.gender} />))
        return(
            <ul className="employee-list">
                {listItem}
            </ul>
        )
    }
}

ReactDOM.render(<EmployeeList />, document.getElementById("employeelist1"));