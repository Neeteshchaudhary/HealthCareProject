package com.healthCare.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Reg {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int uid;
	private String uname;
	private String uemail;
	private String uphone;
	private String upwd;
	private String udob;
	private String gender;
	private String ucountry;
	
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUemail() {
		return uemail;
	}
	public void setUemail(String uemail) {
		this.uemail = uemail;
	}
	public String getUphone() {
		return uphone;
	}
	public void setUphone(String uphone) {
		this.uphone = uphone;
	}
	public String getUpwd() {
		return upwd;
	}
	public void setUpwd(String upwd) {
		this.upwd = upwd;
	}
	public String getUdob() {
		return udob;
	}
	public void setUdob(String udob) {
		this.udob = udob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getUcountry() {
		return ucountry;
	}
	public void setUcountry(String ucountry) {
		this.ucountry = ucountry;
	}
	@Override
	public String toString() {
		return "Reg [uid=" + uid + ", uname=" + uname + ", uemail=" + uemail + ", uphone=" + uphone + ", upwd=" + upwd
				+ ", udob=" + udob + ", gender=" + gender + ", ucountry=" + ucountry + "]";
	}
	
}
