import React, { useEffect, useState } from 'react';
import axios from './component/axios';
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Fees() {
  const [list,setList]=useState([]);// this page main data
  const [member,setMember]=useState([]);// relational category data. It's used in select box of category
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            member_id:'',
            fees_month:'',
            fees_year:'',
            pay_date:'',
            amount:'',
            pay_status:''
        });
        
    setShow(true);
    getMember();
  }

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`fees/list.php`)
    setList(res.data);
  }

  const getMember = async (e) => {
      let res = await axios.get(`member/list.php`)
      setMember(res.data);
  }

  const getFees=async (e) => {
    let fees=e.target[e.target.selectedIndex].getAttribute('data-fees');
    setInputs(values => ({...values, amount: fees}));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
        member_id:e.target.member_id.value,
        fees_month:e.target.fees_month.value,
        fees_year:e.target.fees_year.value,
        pay_date:e.target.pay_date.value,
        amount:e.target.amount.value,
        pay_status:e.target.pay_status.value
    }
    datas ={...inputs, ...datas} // marge two object
   
    const formData = new FormData();
    
    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url='';
      if(datas.id!=''){
        url=`fees/update.php`;
      }else{
        url=`fees/add.php`;
      }
     
      let response= await axios.post(url,formData);
     
      if(response.data.error == 1){
        alert(response.data.message)
      }else{
        getDatas();
        handleClose()
      }
    } 
    catch(e){
      console.log(e);
    }
  }
  /* function for edit */
  const showEdit=(e) => {
    getMember();// this is call category to add option in category select box
    setInputs(e);
    setShow(true);
  }

  const deleteUser = async(id) => {
    let res = await axios.get(`fees/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Fees</h1>
        
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        <table className='mt-5 table table-bordered'>
          <thead>
            <tr>
              <th>#SL</th>
              <th>Member</th>
              <th>Fees Date</th>
              <th>Pay Date</th>
              <th>Pay Status</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.name}</td>
              <td>{d.fees_month}-{d.fees_year}</td>
              <td>{d.pay_date}</td>
              <td>{d.pay_status?'Paid':'UnPaid'}</td>
              <td>{d.amount}</td>
              <td>
                  <Button variant="primary" onClick={()=>{showEdit(d)}}>Edit</Button>
                  <Button variant="danger" onClick={()=>{deleteUser(d.id)}}>Delete</Button>
              </td>
            </tr>
          )}
          </tbody>
        </table>


      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='form-group'>
              <label htmlFor='member_id'>Member </label>
              {member.length > 0 && (
              <select onChange={getFees} defaultValue={inputs.member_id} className='form-control' name="member_id" id='member_id'>
                <option value="">Select Member</option>
                  {member.map((d, key) =>
                    <option data-fees={d.fees} key={d.id} value={d.id}>{d.name}</option>
                  )}
              </select>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='fees_month'>Fees Month</label>
              <select defaultValue={inputs.fees_month} className='form-control' name="fees_month" id='fees_month'>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='fees_year'>Fees Year</label>
              <input type='text' defaultValue={inputs.fees_year} className='form-control' name="fees_year" id='fees_year' placeholder='YYYY'/>
            </div>
            <div className='form-group'>
              <label htmlFor='pay_date'>Pay Date</label>
              <input type='date' defaultValue={inputs.pay_date} className='form-control' name="pay_date" id='pay_date'/>
            </div>
            <div className='form-group'>
              <label htmlFor='pay_status'>Pay Status</label>
              <select defaultValue={inputs.pay_status} className='form-control' name="pay_status" id='pay_status'>
                <option value="1">Paid</option>
                <option value="0">Unpaid</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='amount'>Amount</label>
              <input type='text' defaultValue={inputs.amount} className='form-control' name='amount' id='amount'/>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type='submit'>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      </div>
    </Adminlayout>
    
  );
}


export default Fees;
