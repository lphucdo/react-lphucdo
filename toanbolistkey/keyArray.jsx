class Employee extends React.Component{
    render() {
        return (
            <li>
                <div>
                    <b>Fullname: </b> {this.props.fullname}
                </div>
                <div>
                    <b>Gender: </b> {this.props.gender}
                </div>
            </li>
        );
    }
}

class EmployeeList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            employees : [
                {empID: 1, fullname: "STEVE LAM", gender: "male"},
                {empID: 2, fullname: "John Nathan", gender: "female"},
                {empID: 3, fullname: "LamDO", gender: "male"},
                {empID: 4, fullname: "hezenry", gender: "female"},
            ]
        }
    }

    render(){
        var listItem = this.state.employees.map(e=>(
            <Employee key={e.empID} fullname={e.fullname} gender={e.gender}/>
        ))
        return (
            <ul className="employee-list">
               {listItem}
            </ul>
        );
    }
}
ReactDOM.render(<EmployeeList />, document.getElementById("employeelist1"));