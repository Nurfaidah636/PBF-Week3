import React, { Component } from 'react';
import './component/HelloComponent.css';
import './Login.css'

export default class login extends Component{
    render(){
        return(
            <div>
                <center>
                    <h2>Form Login</h2>
                </center>
                <center>
                    <form>
                        <h1>
                            Tugas Pertemuan <br></br>Ketiga
                        </h1>
                        <div className="container">
                            <label><b>Username</b></label>
                            <input type="text" placeholder="Masukkan Username" name="username" required/>
                            <label><b>Password</b></label>
                            <input type="password" placeholder="Masukkan Password Anda" name="password" required/>
                            <button type="submit">Login</button>
                            <input type="checkbox" defaultChecked/> Remember Me
                        </div>
                        <button type="button" className="btncancle">Cancle</button>
                        <br></br><br></br>
                    </form>
                </center>
            </div>
        )
    }
}