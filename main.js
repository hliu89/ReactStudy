class PageComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {employees: []};
    this.updateData = this.updateData.bind(this);
  }

  render(){
    const employees = this.state.employees.map((employee, i) => {
      return <EmployeesTableRow employee={employee} key={i}/>
    });

    return (
      
      <div>
      <h1>ITMD 565 - Project2</h1>
      <h2>HongqiaoLiu - hliu89@hawk.iit.edu</h2>
        <Button clickHandler={this.updateData} />
        <EmployeesTable>
          {employees}
        </EmployeesTable>
      </div>
    );
  }

  componentDidMount(){ 
	  fetch('http://libertyville.rice.iit.edu/scripts/4565_lab3.php')
	    .then((res) => res.json())
	    .then((data) => {
	      console.log(data);
	      this.setState({employees: data});
	    });
  }

  updateData(){
	  fetch('http://libertyville.rice.iit.edu/scripts/4565_lab3.php')
	    .then((res) => res.json())
	    .then((data) => {
	      console.log(data);
	      this.setState({employees: data});
	    });
  }
}
class EmployeesTable extends React.Component {
	  render(){
	    return (
	      <table>
	      <tbody>
	      <tr>
	       <th>ID</th>
	       <th>first_name</th>
	       <th>last_name</th>
	       <th>title</th>
	       <th>email</th>
	       <th>gender</th>
	       <th>active</th>
	      </tr>
	       {this.props.children}
	       </tbody>
	      </table>
	    );
	  }
	}
class EmployeesTableRow extends React.Component {
	  render(){
	    return (
	    		
	      <tr>
	        <td>{this.props.employee.id}</td>
	        <td>{this.props.employee.first_name}</td>
	        <td>{this.props.employee.last_name}</td>
	        <td>{this.props.employee.title}</td>
	        <td>{this.props.employee.email}</td>
	        <td>{this.props.employee.gender}</td>
	        <td id={this.props.employee.active== true ? "true":"false"}>{this.props.employee.active== true ? "true":"false"}</td>
	      </tr>
	    );
	  }
	}
class Button extends React.Component {
  render(){
    return(
      <button onClick={this.props.clickHandler}>Load Data</button>
    );
  }
}
ReactDOM.render(<PageComponent />, document.getElementById('root'));
